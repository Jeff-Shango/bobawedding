import express from "express"
import mysql from "mysql2";
import cors from "cors";
const app = express();

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Woodward20!",
    database: "boba_wedding"
})

app.use(express.json())
app.use(cors())

app.get("/gallery", (req, res) => {
    const q = "SELECT * FROM boba_wedding.photo_comments";
    db.query(q, (err, data) => {
        if(err) return res.json(err);
        return res.json(data)
    })
});

app.post("/gallery", (req, res) => {
    const q = "INSERT INTO boba_wedding.photo_comments (`photo_comments`, `commentator`) VALUES (?, ?)"
    const values = [
        req.body.photo_comments,
        req.body.commentator
    ]

    db.query(q, [values], (err, data) => {
        if(err) return res.json(err)
        return res.json("Comment has been added")
    })
});

const photoComments = 8000;

app.listen(
    photoComments,
    () => console.log(`Running on ${photoComments}`)
);