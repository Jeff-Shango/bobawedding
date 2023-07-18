// creating backend function to create table based off new photo added 
// needs to handle photo comments when posted 
// has to be standalone 
// ability to delete 

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

app.get("/tables", (req, res) => {
    const getTablesQuery = "SHOW TABLES";

    db.query(getTablesQuery, (err, data) => {
        if (err) {
            console.error("Error retrieving tables:", err);
            return res.status(500).json({ error: "Error retrieving tables"});
        }

        const tables = data.map((table) => table [`Tables_in_${db.config.database}`]);
        return res.json(tables);
    })
})

app.post("/gallery/:tableName", (req, res) => {
    const tableName = req.params.tableName;
    const { user_comment, commentator } = req.body;

    const insertCommentQuery = `INSERT INTO boba_wedding.${tableName} (user_comment, commentator) VALUES (?, ?)`;
    const values = [user_comment, commentator]
    // const q = "INSERT INTO boba_wedding.photo_comments ( `caption`,`user_comment`, `commentator`) VALUES (?, ?, ?)"
    // const values = [
    //     req.body.caption,
    //     req.body.user_comment,
    //     req.body.commentator
    // ]

    db.query(insertCommentQuery, values, (err, data) => {
        if(err) {
            console.log(err);
            return res.status(500).json({ error: "Error adding comment"});
        }
        return res.json("Comment has been added")
    })
});



app.post("/createTable", (req, res) => {
    const tableName = req.body.tableName;

    const createTableQuery = `CREATE TABLE ${tableName} (
        id INT PRIMARY KEY AUTO_INCREMENT,
        caption VARCHAR(255),
        user_comment VARCHAR(255),
        commentator VARCHAR(255)
    )`;

    db.query(createTableQuery, (err) => {
        if (err) {
            console.error("There was an error creating table, via error:", err);
            return res.status(500).json({ error: "There was an error creating a table"});
        }

        console.log("Table created successfully!");
        return res.sendStatus(200);
    });
});

const photoComments = 8000;

app.listen(
    photoComments,
    () => console.log(`Running on ${photoComments}`)
);