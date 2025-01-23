const express = require("express");
const axios = require("axios");
const app = express();

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
    next();
});

app.get("/proxy", async (req, res) => {
    try {
        const response = await axios.get("https://www.16personalities.com/fr/test-de-personnalite");
        res.send(response.data);
    } catch (error) {
        console.error("Error fetching data:", error);
        res.status(500).send("Error occurred while fetching data");
    }
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Proxy server running on http://localhost:${port}`);
});
