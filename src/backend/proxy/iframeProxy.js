const express = require("express");
const axios = require("axios");
const cors = require("cors");
const { URL } = require("url");
const cookie = require("cookie");

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

// Session data you want to simulate (you can modify it based on what you have)
const sessionData = {
  "avatar": {
    "isCustom": false,
    "isDynamic": true,
    "dynamicPath": "https://www.16personalities.com/static/images/personality-types/avatars/faces/main-intj-male.svg",
    "staticFacePath": "https://www.16personalities.com/static/images/personality-types/avatars/faces/intj-architect-s3-v1-male.svg?v=3",
    "staticBodyPath": "https://www.16personalities.com/static/images/personality-types/avatars/intj-architect-male.svg?v=3",
    "classes": "tr--free tp--intj g--m avatar--dynamic tn--3",
    "alt": "Avatar pour INTJ"
  },
  "user": {
    "activated": false,
    "authType": "guest_anonymous",
    "loggedIn": false,
    "name": null,
    "gender": "other",
    "profilePublic": false,
    "upgradeUrl": "https://www.16personalities.com/academy",
  },
  "home": "https://www.16personalities.com/fr",
  "notifications": [],
  "messages": []
};

// Function to rewrite URLs in HTML/CSS/JS to use the proxy
const rewriteUrls = (html, baseUrl) => {
  return html.replace(/(src|href)="(.*?)"/g, (match, attr, link) => {
    const absoluteUrl = new URL(link, baseUrl).toString();
    return `${attr}="/proxy?url=${encodeURIComponent(absoluteUrl)}"`;
  });
};

// Proxy endpoint to fetch the page and maintain session
app.get("/proxy", async (req, res) => {
  const targetUrl = req.query.url || "https://www.16personalities.com/fr/test-de-personnalite";
  
  // Create session cookie with the session data
  const sessionCookie = cookie.serialize("session", JSON.stringify(sessionData), {
    httpOnly: true,  // Make the cookie inaccessible to JavaScript
    secure: process.env.NODE_ENV === "production",  // Use secure cookies in production
    sameSite: "Strict",  // Prevent cross-site request forgery
    maxAge: 60 * 60 * 24 * 7,  // Set cookie expiration to 1 week
  });
  
  res.setHeader("Set-Cookie", sessionCookie);

  // Get cookies from the incoming request, which includes session cookie
  let cookies = req.headers.cookie || '';

  try {
    // Request to the target website with session persistence
    const response = await axios.get(targetUrl, {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
        Referer: "https://www.16personalities.com/",
        Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8",
        Cookie: cookies,  // Send the session cookie with the request
      },
      responseType: "arraybuffer", // Handles binary responses (CSS, fonts, etc.)
      withCredentials: true, // Ensure cookies are included
      maxRedirects: 5, // Follow redirects
    });

    // Forward the cookies received from the target response
    if (response.headers["set-cookie"]) {
      res.setHeader("Set-Cookie", response.headers["set-cookie"]);
    }

    // Get content type to check if it's HTML or other content
    const contentType = response.headers["content-type"];
    if (contentType && contentType.includes("text/html")) {
      // If it's HTML, rewrite the URLs to go through the proxy
      const html = response.data.toString("utf-8");
      const rewrittenHtml = rewriteUrls(html, targetUrl);
      res.send(rewrittenHtml);
    } else {
      // For CSS, JS, images, etc., forward the content directly
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
  res.setHeader("X-Frame-Options", "ALLOWALL"); // Allow embedding in iframe
  res.setHeader("Content-Security-Policy", ""); // Disable CSP
  res.setHeader("X-Content-Type-Options", "nosniff"); // Prevent MIME sniffing
  res.setHeader("X-XSS-Protection", "1; mode=block"); // Prevent XSS attacks
  next();
});

// Server setup
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Proxy server running on http://localhost:${port}`);
});
