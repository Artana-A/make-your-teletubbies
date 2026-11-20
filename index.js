require("dotenv").config();
const express = require("express");
const connectDB = require("./config/database");
const teletubbyRoutes = require("./routes/teletubby.routes");

const app = express(); // Create Express app
app.use(express.json()); // Middleware

connectDB(); // Connect to MongoDB

app.use("/api/teletubbies", teletubbyRoutes); // Routes

app.get("/", (req, res) => { // Root route
  res.status(200).json({ message: "Teletubbies API is running" });
});

const PORT = process.env.PORT || 3000; // Run server
app.listen(PORT, () => {
  console.log(`Server jalan di http://localhost:${PORT}`);
});