// server.js

const express = require('express');
const app = express();
const path = require('path');
const ablyFunctions = require('./ablyFunctions'); // Import your ablyFunctions module

// ... (Other server setup)

// Serve your React app
app.use(express.static(path.join(__dirname, 'client/build')));

// Handle Ably token generation
app.post('/generate-ably-token', async (req, res) => {
  try {
    const clientId = req.body.clientId; // Pass the client ID from the client
    const tokenResponse = await ablyFunctions.generateAblyToken(clientId);
    res.json(tokenResponse);
  } catch (error) {
    res.status(500).json({ error: 'Token generation failed' });
  }
});

// ... (Other server routes)

// Start the server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
