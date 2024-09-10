const jwt = require("jsonwebtoken");

const authenticateToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (token == null) return res.status(401).json({ message: "Unauthorized" });

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err && err.name === "TokenExpiredError") {
      return res
        .status(401)
        .json({ message: "TokenExpired", code: "TOKEN_EXPIRED" }); // Send custom error code for token expiration
    }

    if (err) return res.status(403).json({ message: "Forbidden" });

    req.user = user;
    next();
  });
};

module.exports = authenticateToken;
