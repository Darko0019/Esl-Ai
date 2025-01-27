const express = require("express");
const axios = require("axios");
const authRoutes = require("../routes/auth");
const cors = require("cors");

const app = express();

// CORS configuration to allow requests from the React app's URL
const corsOptions = {
  origin: 'https://your-react-app-url.onrender.com',  // Replace with your React app's URL on Render
  methods: "GET, POST, PUT, DELETE",
  allowedHeaders: "Content-Type, Authorization",
};

app.use(cors(corsOptions));  // Enable CORS

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

app.use("/auth", authRoutes);

// Route for proxying requests to 16Personalities website
app.get("/proxy", async (req, res) => {
  try {
    const response = await axios.get("https://www.16personalities.com/fr/test-de-personnalite");
    res.send(response.data);
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).send("Error occurred while fetching data");
  }
});

// Use Render's dynamic port
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Proxy server running on http://localhost:${port}`);
});
