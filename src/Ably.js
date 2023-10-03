// import { Realtime } from "ably/browser/static/ably-commonjs.js"
import { Realtime } from "ably"

export default new Realtime(process.env.ABLY_API_KEY)