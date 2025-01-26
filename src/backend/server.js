// const express = require("express");
// const cors = require("cors");
// const iframeProxy = require("./iframeProxy");
// // const authRoutes = require("./routes/auth");
// // const userRoutes = require("./routes/users"); // Import the users.js routes

// const app = express();

// // CORS setup
// const corsOptions = {
//   origin: 'https://your-react-app-url.onrender.com',  // Replace with your React app's Render URL
//   methods: "GET, POST, PUT, DELETE",
//   allowedHeaders: "Content-Type, Authorization",
// };

// app.use(cors(corsOptions));

// // Use proxy routes and authentication routes
// app.use(iframeProxy);
// app.use("/auth", authRoutes);
// app.use("/users", userRoutes); // Add the new user routes here

// // Default route to serve other requests
// app.get("/", (req, res) => {
//   res.send("Server is running!");
// });

// // Use Render's dynamic port
// const port = process.env.PORT || 5000;
// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });

const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
app.use(cors()); // Allow requests from any origin

app.get('/proxy', async (req, res) => {
  try {
    const response = await axios.get('https://www.16personalities.com/fr/test-de-personnalite', {
      headers: {
        'User-Agent': req.headers['user-agent'], // Forward User-Agent
      },
    });
    res.send(response.data); // Forward the fetched content
  } catch (error) {
    res.status(500).send('Error fetching the page: ' + error.message);
  }
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Proxy server running on http://localhost:${PORT}`);
});
