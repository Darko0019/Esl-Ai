const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();

// CORS setup
const corsOptions = {
  origin: [
    "http://localhost:3000", // Local dev
    "https://darko0019.github.io", // Your GitHub Pages URL
    "https://esl-ai.onrender.com", // Your production URL
  ],
  methods: "GET, POST, PUT, DELETE",
  allowedHeaders: "Content-Type, Authorization",
};

app.use(cors(corsOptions)); // Use CORS middleware to handle CORS

// Proxy endpoint
app.get("/proxy", async (req, res) => {
  try {
    const response = await axios.get("https://www.16personalities.com/fr/test-de-personnalite");
    res.send(response.data); // Send fetched data to the client
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).send("Error occurred while fetching data");
  }
});

// Server setup
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Proxy server running on http://localhost:${port}`);
});