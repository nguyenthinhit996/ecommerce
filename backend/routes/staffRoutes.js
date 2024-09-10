const express = require("express");
const Staff = require("../models/Staff");
const router = express.Router();

/**
 * @swagger
 * /api/staffs:
 *   post:
 *     summary: Create a new staff member
 *     tags: [Staff]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               NAME:
 *                 type: string
 *               MAIL:
 *                 type: string
 *               PHONE:
 *                 type: string
 *               COUNTRY:
 *                 type: string
 *               DESCRIPTION:
 *                 type: string
 *               ADDRESS:
 *                 type: string
 *               DATE_OF_BIRTH:
 *                 type: string
 *                 format: date
 *               COMPANY_NAME:
 *                 type: string
 *               CONTACT_PERSON:
 *                 type: string
 *               URL_WEBSITE:
 *                 type: string
 *               PROVINCE:
 *                 type: string
 *               CITY:
 *                 type: string
 *               POSTAL_COST:
 *                 type: number
 *               ID_DEPARTMENT_INVENTORY:
 *                 type: integer
 *               USER_NAME:
 *                 type: string
 *               PASSWORK:
 *                 type: string
 *               LAST_LOGIN:
 *                 type: string
 *                 format: date-time
 *               LAST_PASSWORK_CHANGE:
 *                 type: string
 *                 format: date-time
 *     responses:
 *       201:
 *         description: Staff created successfully
 *       400:
 *         description: Bad request
 */
router.post("/", async (req, res) => {
  try {
    const staff = await Staff.create(req.body);
    res.status(201).json(staff);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

/**
 * @swagger
 * /api/staffs:
 *   get:
 *     summary: Get all staff members
 *     tags: [Staff]
 *     responses:
 *       200:
 *         description: List of staff members
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Staff'
 *       500:
 *         description: Server error
 */
router.get("/", async (req, res) => {
  try {
    const staffMembers = await Staff.findAll();
    res.json(staffMembers);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

/**
 * @swagger
 * /api/staffs/{id}:
 *   get:
 *     summary: Get a staff member by ID
 *     tags: [Staff]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Staff ID
 *     responses:
 *       200:
 *         description: Staff details
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Staff'
 *       404:
 *         description: Staff not found
 *       500:
 *         description: Server error
 */
router.get("/:id", async (req, res) => {
  try {
    const staff = await Staff.findByPk(req.params.id);
    if (!staff) return res.status(404).json({ message: "Staff not found" });
    res.json(staff);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

/**
 * @swagger
 * /api/staffs/{id}:
 *   put:
 *     summary: Update a staff member by ID
 *     tags: [Staff]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Staff ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               NAME:
 *                 type: string
 *               MAIL:
 *                 type: string
 *               PHONE:
 *                 type: string
 *               COUNTRY:
 *                 type: string
 *               DESCRIPTION:
 *                 type: string
 *               ADDRESS:
 *                 type: string
 *               DATE_OF_BIRTH:
 *                 type: string
 *                 format: date
 *               COMPANY_NAME:
 *                 type: string
 *               CONTACT_PERSON:
 *                 type: string
 *               URL_WEBSITE:
 *                 type: string
 *               PROVINCE:
 *                 type: string
 *               CITY:
 *                 type: string
 *               POSTAL_COST:
 *                 type: number
 *               ID_DEPARTMENT_INVENTORY:
 *                 type: integer
 *               USER_NAME:
 *                 type: string
 *               PASSWORK:
 *                 type: string
 *               LAST_LOGIN:
 *                 type: string
 *                 format: date-time
 *               LAST_PASSWORK_CHANGE:
 *                 type: string
 *                 format: date-time
 *     responses:
 *       200:
 *         description: Staff updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Staff'
 *       404:
 *         description: Staff not found
 *       400:
 *         description: Bad request
 */
router.put("/:id", async (req, res) => {
  try {
    const staff = await Staff.findByPk(req.params.id);
    if (!staff) return res.status(404).json({ message: "Staff not found" });

    await staff.update(req.body);
    res.json(staff);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

/**
 * @swagger
 * /api/staffs/{id}:
 *   delete:
 *     summary: Delete a staff member by ID
 *     tags: [Staff]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Staff ID
 *     responses:
 *       200:
 *         description: Staff deleted successfully
 *       404:
 *         description: Staff not found
 *       500:
 *         description: Server error
 */
router.delete("/:id", async (req, res) => {
  try {
    const staff = await Staff.findByPk(req.params.id);
    if (!staff) return res.status(404).json({ message: "Staff not found" });

    await staff.destroy();
    res.json({ message: "Staff deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
