// ablyFunctions.js

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

// Function to generate Ably token
const generateAblyToken = async (clientId) => {
  return new Promise((resolve, reject) => {
    const tokenRequestData = {
      clientId, // Pass the client ID as an argument
    };

    ably.auth.createTokenRequest(tokenRequestData, (err, tokenRequest) => {
      if (err) {
        reject(err);
      } else {
        resolve({ tokenRequest });
      }
    });
  });
};

module.exports = {
  generateAblyToken, // Export the function so you can import it in other files
};
