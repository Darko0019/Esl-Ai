const express = require("express");
const axios = require("axios");
const app = express();

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*"); // Allow cross-origin requests
    next();
});

app.get("/proxy", async (req, res) => {
    try {
        const response = await axios.get("https://www.16personalities.com/fr/test-de-personnalite");
        res.send(response.data);
    } catch (error) {
        res.status(500).send("Error occurred while fetching data");
    }
});

app.listen(5000, () => {
    console.log("Proxy server running on http://localhost:5000");
});
