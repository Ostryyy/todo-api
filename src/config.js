require("dotenv").config();

module.exports = {
  PORT: process.env.PORT || 3000,
  DB_URI: process.env.DB_URI || "mongodb://localhost:27017/todoapp",
  JWT_SECRET: process.env.JWT_SECRET || "your_jwt_secret",
};
