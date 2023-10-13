const mongoose = require('mongoose');
require('dotenv').config();
const connectionParams = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}

const uri = `mongodb+srv://WeddingUser:${process.env.MONGO_PASS}@wedddingcluster.kzpprvp.mongodb.net/`
const connection = mongoose.connect(uri, connectionParams).then(() => console.log('Connected to the Cloud atlas ')).catch((err) => console.log(err))

module.exports = connection
// const {MongoClient} = require('mongodb')


// const state = {
//     db: null,
// };

// exports.connect = async (url, dbname) => {
//     try{
//         if(state.db) {
//             return;
//         }
//         const client = new MongoClient(url, {
//             useNewUrlParser: true,
//             useUnifiedTopology: true,
//         });

//         await client.connect();

//         state.db = client.db(dbname);
//         console.log("Connected to the Atlas, mane!")
//     } catch (err) {
//         console.error(err);
//     }
// };

// exports.get = () => {
//     return state.db;
// }