const express = require("express");
const axios = require("axios");
const app = express();

// Middleware to allow cross-origin requests
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*"); // Allow all domains to make requests
    next();
});

// Route to proxy requests to the external URL
app.get("/proxy", async (req, res) => {
    try {
        // Fetch the content from the external page
        const response = await axios.get("https://www.16personalities.com/fr/test-de-personnalite");
        res.send(response.data); // Send back the fetched data
    } catch (error) {
        // Send an error message if something goes wrong
        res.status(500).send("Error occurred while fetching data");
    }
});

// Use the dynamic port provided by Render (or fallback to port 5000 for local testing)
const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Proxy server running on http://localhost:${port}`);
});
