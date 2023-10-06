// ablyFunctions.js

import Ably from 'ably';
import express from 'express';

const app = express();

import dotenv from 'dotenv';
dotenv.config(); // Load environment variables from .env

const ably = new Ably.Realtime({
  key: process.env.REACT_APP_ABLY_API_KEY, // Use the environment variable
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

export { generateAblyToken };
