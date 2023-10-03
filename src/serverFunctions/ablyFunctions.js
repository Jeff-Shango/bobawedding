const Ably = require('ably');
const express = require('express');
const app = express();

const dotenv = require('dotenv');
dotenv.config(); // Load environment variables from .env


const ably = new Ably.Realtime({
  key: process.env.REACT_APP_ABLY_API_KEY, // Use the environment variable
});

// Route to generate Ably tokens
app.post('/generate-token', (req, res) => {
  const tokenRequestData = {
    clientId: req.body.clientId, // You can pass client-specific data here
  };

  ably.auth.createTokenRequest(tokenRequestData, (err, tokenRequest) => {
    if (err) {
      return res.status(500).json({ error: 'Token generation failed' });
    }
    
    res.json({ tokenRequest });
  });
});

// Start your server
const port = process.env.PORT || 3030; // Use the PORT environment variable if available
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
