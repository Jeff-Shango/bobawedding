// auth0.js
const { auth } = require('express-openid-connect');

const authConfig = {
  authRequired: false,
  auth0Logout: true,
  secret: process.env.AUTH0_SECRET,
  baseURL: 'https://bozierwedding.netlify.app',
  clientID: 'fB5waUX6UX1FtVzOdzRAzHtJ3NGAF0to', // Replace with your actual client ID
  issuerBaseURL: 'https://dev-ioanwjxizzusob3u.us.auth0.com', // Replace with your Auth0 domain
};

module.exports = auth(authConfig);
