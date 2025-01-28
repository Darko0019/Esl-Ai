const express = require("express");
const axios = require("axios");
const cors = require("cors");
const { URL } = require("url");

const app = express();

// CORS setup
const corsOptions = {
  origin: [
    "http://localhost:3000", // Local dev
    "https://darko0019.github.io", // GitHub Pages URL
    "https://esl-ai.onrender.com", // Production URL
  ],
  methods: "GET, POST, PUT, DELETE",
  allowedHeaders: "Content-Type, Authorization",
};

app.use(cors(corsOptions));

// Rewrite URLs dynamically
const rewriteUrls = (html, baseUrl) => {
  return html.replace(/(src|href)="(.*?)"/g, (match, attr, link) => {
    // If the link is relative, rewrite it to pass through the proxy
    const absoluteUrl = new URL(link, baseUrl).toString();
    return `${attr}="/proxy?url=${encodeURIComponent(absoluteUrl)}"`;
  });
};

// Proxy endpoint
app.get("/proxy", async (req, res) => {
  const targetUrl = req.query.url || "https://www.16personalities.com/fr/test-de-personnalite";

  try {
    // Fetch the requested page
    const response = await axios.get(targetUrl, {
      headers: {
        // Mimic a real browser to bypass bot protection
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
        Referer: "https://www.16personalities.com/",
        Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8",
      },
    });

    // Rewrite URLs in the HTML
    const rewrittenHtml = rewriteUrls(response.data, targetUrl);

    // Send the modified HTML
    res.send(rewrittenHtml);
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
