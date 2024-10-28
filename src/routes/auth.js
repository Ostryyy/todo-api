const express = require("express");
const router = express.Router();
const {
  register,
  login,
  connTest,
  deleteUser,
} = require("../controllers/authController");
const authMiddleware = require("../authMiddleware");

router.post("/register", register);
router.post("/login", login);
router.delete("/user", authMiddleware, deleteUser);
router.get("/conn-test", authMiddleware, connTest);

module.exports = router;
