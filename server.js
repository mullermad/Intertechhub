const express = require("express");
// Load environment variables from .env file
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;
// Home Route
app.get("/", (req, res) => {
  res.status(200).send("Home Route");
});

// Route: /name
app.get("/name", (req, res) => {
  res.status(200).send("Muluken Demis");
});

// Route: /hobby
app.get("/hobby", (req, res) => {
  res.status(200).json({ hobby: ["Soccer", "Watching Movies"] });
});

// Route: /dream
app.get("/dream", (req, res) => {
  res.status(200).send("Stay focused, keep learning, and achieve greatness!");
});
// 404 Error Handling
app.all("*", (req, res) => {
  res.status(404).send("Sorry, the route does not exist.");
});
// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
