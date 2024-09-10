const express = require("express");
const dotenv = require("dotenv");
const sequelize = require("./config/database");
const productRoutes = require("./routes/productRoutes");
const staffRoutes = require("./routes/staffRoutes");
const bcrypt = require("bcryptjs");
const { generateAccessToken, generateRefreshToken } = require("./utils/jwt");
const Staff = require("./models/Staff");
const authenticateToken = require("./middlewares/auth");
const { swaggerUi, swaggerDocs } = require("./utils/swagger");

dotenv.config();

const app = express();

app.use(express.json());
const router = express.Router();

// Swagger UI
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

sequelize
  .sync()
  .then(() => {
    console.log("SQL Server synced");
  })
  .catch((err) => {
    console.error("Error syncing SQL Server:", err);
  });

router.get("/", async (req, res) => {
  res.status(200).json({ message: "Hello word" });
});

// Apply authenticateToken for all routes except '/login' and '/register'
app.use((req, res, next) => {
  if (req.path === "/login" || req.path === "/register" || req.path === "/") {
    return next(); // Skip authentication for login and register routes
  }
  authenticateToken(req, res, next); // Apply authentication middleware to all other routes
});

/**
 * @swagger
 * /register:
 *   post:
 *     summary: Register a new staff member
 *     tags: [Staff]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               USER_NAME:
 *                 type: string
 *               PASSWORK:
 *                 type: string
 *               MAIL:
 *                 type: string
 *               PHONE:
 *                 type: string
 *     responses:
 *       201:
 *         description: Staff registered successfully
 *       400:
 *         description: Invalid request data
 */
router.post("/register", async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.PASSWORK, 10);
    const staff = await Staff.create({ ...req.body, PASSWORK: hashedPassword });
    res.status(201).json(staff);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

/**
 * @swagger
 * /login:
 *   post:
 *     summary: Login a staff member
 *     tags: [Staff]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: Successfully logged in
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 accessToken:
 *                   type: string
 *                 refreshToken:
 *                   type: string
 *                 username:
 *                   type: string
 *                 email:
 *                   type: string
 *                 expiresIn:
 *                   type: integer
 *       400:
 *         description: Invalid credentials
 */
router.post("/login", async (req, res) => {
  try {
    const staff = await Staff.findOne({
      where: { USER_NAME: req.body.username },
    });
    if (!staff) return res.status(404).json({ message: "User not found" });

    const isMatch = await bcrypt.compare(req.body.password, staff.PASSWORD);
    if (!isMatch)
      return res.status(400).json({ message: "Invalid credentials" });

    // Generate access and refresh tokens
    const accessTokenData = generateAccessToken(staff);
    const refreshToken = generateRefreshToken(staff);

    // Return response with token details
    res.json({
      accessToken: accessTokenData.accessToken,
      expiresIn: accessTokenData.expiresIn,
      username: accessTokenData.username,
      email: accessTokenData.email,
      refreshToken, // You can also return refresh token here if necessary
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

app.use(router);

app.use("/api/products", productRoutes);
app.use("/api/staffs", staffRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
