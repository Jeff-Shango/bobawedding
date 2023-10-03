const Ably = require('ably');
const express = require('express');
const app = express();

const ably = new Ably.Realtime({
  key: 'YOUR_API_KEY',
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
app.listen(3030, () => {
  console.log('Server is running on port 3000');
});
