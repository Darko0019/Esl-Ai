const express = require("express");
const fs = require("fs");
const path = require("path");

const router = express.Router();
const USERS_FILE = path.join(__dirname, "../users.json");

// Middleware to parse JSON body
router.use(express.json());

// Signup Route
router.post("/signup", (req, res) => {
  const { username, password, firstName, lastName, role } = req.body;

  if (!username || !password || !firstName || !lastName || !role) {
    return res.status(400).json({ message: "All fields are required." });
  }

  // Read existing users
  fs.readFile(USERS_FILE, (err, data) => {
    if (err) return res.status(500).json({ message: "Server error." });

    const users = JSON.parse(data);
    const userExists = users.find((user) => user.username === username);

    if (userExists) {
      return res.status(400).json({ message: "Username already exists." });
    }

    // Add new user
    const newUser = { username, password, firstName, lastName, role };
    users.push(newUser);

    // Write to JSON file
    fs.writeFile(USERS_FILE, JSON.stringify(users, null, 2), (err) => {
      if (err) return res.status(500).json({ message: "Error saving user." });

      res.status(201).json({ message: "User registered successfully." });
    });
  });
});

// Login Route
router.post("/login", (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ message: "Username and password are required." });
  }

  // Read users from JSON file
  fs.readFile(USERS_FILE, (err, data) => {
    if (err) return res.status(500).json({ message: "Server error." });

    const users = JSON.parse(data);
    const user = users.find((u) => u.username === username && u.password === password);

    if (!user) {
      return res.status(401).json({ message: "Invalid credentials." });
    }

    res.status(200).json({ message: "Login successful.", user });
  });
});

module.exports = router;
