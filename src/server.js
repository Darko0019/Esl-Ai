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
