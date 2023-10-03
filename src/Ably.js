// import { Realtime } from "ably/browser/static/ably-commonjs.js"
import { Realtime } from "ably"
const dotenv = require('dotenv');
dotenv.config(); // Load environment variables from .env

export default new Realtime(process.env.REACT_APP_ABLY_API_KEY)