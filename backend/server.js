const express = require("express");
const cors = require("cors");
const iframeProxy = require("./iframeProxy");
const authRoutes = require("./routes/auth");
const userRoutes = require("./routes/users"); // Import the users.js routes
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const mysql = require("mysql2");

const app = express();
const JWT_SECRET = "your_jwt_secret_key"; // Change this to a secure key

// Middleware
app.use(cors({
  origin: 'https://esl-ai.onrender.com',
  methods: "GET, POST, PUT, DELETE",
  allowedHeaders: "Content-Type, Authorization",
}));
app.use(express.json()); // For parsing JSON request bodies

// Database Connection
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "user_management", // Replace with your database name
});

db.connect((err) => {
  if (err) throw err;
  console.log("Connected to MySQL database.");
});

// Add proxy routes for iframe and authentication routes
app.use(iframeProxy);
app.use("/auth", authRoutes);
app.use("/users", userRoutes); // Add the new user routes here

// Signup Route
app.post("/signup", async (req, res) => {
  const { username, password, role } = req.body;

  if (!username || !password || !role) {
    return res.status(400).json({ message: "All fields are required." });
  }

  // Check if the user already exists
  const checkUserQuery = "SELECT * FROM users WHERE username = ?";
  db.query(checkUserQuery, [username], async (err, results) => {
    if (err) throw err;

    if (results.length > 0) {
      return res.status(400).json({ message: "Username already taken." });
    }

    // Hash password and insert user
    const hashedPassword = await bcrypt.hash(password, 10);
    const insertQuery = "INSERT INTO users (username, password_hash, role) VALUES (?, ?, ?)";

    db.query(insertQuery, [username, hashedPassword, role], (err) => {
      if (err) throw err;
      res.status(201).json({ message: "User registered successfully." });
    });
  });
});

// Login Route
app.post("/login", (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ message: "All fields are required." });
  }

  // Check if user exists
  const query = "SELECT * FROM users WHERE username = ?";
  db.query(query, [username], (err, results) => {
    if (err) throw err;

    if (results.length === 0) {
      return res.status(401).json({ message: "Invalid username or password." });
    }

    const user = results[0];

    // Compare passwords
    bcrypt.compare(password, user.password_hash, (err, isMatch) => {
      if (err) throw err;

      if (!isMatch) {
        return res.status(401).json({ message: "Invalid username or password." });
      }

      // Generate JWT
      const token = jwt.sign({ id: user.id, role: user.role }, JWT_SECRET, {
        expiresIn: "1h",
      });

      res.json({
        message: "Login successful!",
        token,
        role: user.role,
        username: user.username,
      });
    });
  });
});

// Default route to serve other requests
app.get("/", (req, res) => {
  res.send("Server is running!");
});

// Use Render's dynamic port
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
