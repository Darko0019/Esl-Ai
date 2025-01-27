// backend/users.js
const express = require('express');
const router = express.Router();

let users = [];

// Endpoint to add a new user
router.post('/addUser', (req, res) => {
  const { username, password, firstName, lastName, role } = req.body;
  users.push({ username, password, firstName, lastName, role });
  res.status(200).send('User added successfully');
});

// Endpoint to get all users
router.get('/getUsers', (req, res) => {
  res.status(200).json(users);
});

module.exports = router;
