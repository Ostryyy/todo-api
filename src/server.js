const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const { PORT, DB_URI } = require("./config");
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB and start the server
mongoose
  .connect(DB_URI)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Database connection error:", err);
  });
