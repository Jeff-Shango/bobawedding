import Pocketbase from "pocketbase";

const pb = new Pocketbase(process.env.React_APP_PB_URL)

export default pb;