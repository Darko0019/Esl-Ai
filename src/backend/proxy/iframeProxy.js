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

// Rewrite URLs in HTML/CSS/JS
const rewriteUrls = (html, baseUrl) => {
  return html.replace(/(src|href)="(.*?)"/g, (match, attr, link) => {
    const absoluteUrl = new URL(link, baseUrl).toString();
    return `${attr}="/proxy?url=${encodeURIComponent(absoluteUrl)}"`;
  });
};

// Proxy endpoint
app.get("/proxy", async (req, res) => {
  const targetUrl = req.query.url || "https://www.16personalities.com/fr/test-de-personnalite";

  try {
    // Make the request to the target website
    const response = await axios.get(targetUrl, {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
        Referer: "https://www.16personalities.com/",
        Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8",
      },
      responseType: "arraybuffer", // Ensures we can handle binary responses (like CSS, fonts, etc.)
      withCredentials: true, // Include cookies in the request
      maxRedirects: 5, // Handle redirects
    });

    // Forward cookies from the target response to the client
    if (response.headers["set-cookie"]) {
      res.setHeader("Set-Cookie", response.headers["set-cookie"]);
    }

    // Get content type to detect if it's HTML
    const contentType = response.headers["content-type"];
    if (contentType && contentType.includes("text/html")) {
      // Rewrite URLs if it's HTML
      const html = response.data.toString("utf-8");
      const rewrittenHtml = rewriteUrls(html, targetUrl);
      res.send(rewrittenHtml);
    } else {
      // For other content types (CSS, JS, images, etc.), forward directly
      res.set(response.headers);
      res.send(response.data);
    }
  } catch (error) {
    console.error("Error fetching data:", error.message);
    res.status(500).send("Error occurred while fetching data");
  }
});

// Modify headers to avoid iframe restrictions
app.use((req, res, next) => {
  res.setHeader("X-Frame-Options", "ALLOWALL"); // Remove iframe restrictions
  res.setHeader("Content-Security-Policy", ""); // Disable CSP
  res.setHeader("X-Content-Type-Options", "nosniff"); // Prevent MIME-type sniffing
  res.setHeader("X-XSS-Protection", "1; mode=block"); // Prevent XSS attacks
  next();
});

// Server setup
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Proxy server running on http://localhost:${port}`);
});
