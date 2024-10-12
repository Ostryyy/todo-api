const express = require("express");
const router = express.Router();
const { register, login, connTest } = require("../controllers/authController");
const authMiddleware = require("../authMiddleware");

router.post("/register", register);
router.post("/login", login);
router.get("/conn-test", authMiddleware, connTest);

module.exports = router;
