require('dotenv').config()
// const {connect} = require('./db')
const express = require('express')
const commentsController = require('./controllers/comments')
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true}))


app.get("/", (_, res) => {
    res.send("What's good, API");
});

app.get("/comments", commentsController.all)
app.post("/comments", commentsController.create)
app.put("/comments/:id", commentsController.update)
app.delete("/comments/:id", commentsController.delete)

const startServer = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        app.listen(3012, () => {
            console.log('API running, mane');
        });
    } catch (err) {
        console.error(err);
    }
};

startServer();


// const startServer = async () => {
//     await connect(process.env.MONGODB_URI);
    
//     app.listen(3012, () => {
//         console.log('API running, mane')
//     });
// };

// startServer();