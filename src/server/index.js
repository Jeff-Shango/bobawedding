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

app.get("/get_comments/:imageId", (req, res) => {
    const { imageId } = req.params;
    const tableName = `photo_comments_${imageId}`;

    const getCommentsQuery = `SELECT comment, commentator FROM ${tableName}`;

    db.query(getCommentsQuery, (err, data) => {
        if (err) {
            console.error("There was a damn error:". err);
            return res.status(500).json({ error: "There was a got damn error retrieving the comments"});
        }

        return res.json(data);
    });
});

app.get("/get_all_comments", (req, res) => {
    const getAllCommentsQuery = "SELECT * FROM boba_wedding.photo_comments";
    db.query(getAllCommentsQuery, (err, data) => {
        if (err) {
            console.error("There was a damn error:", err);
            return res.status(500).json({ error: "There was an error retrieving all of the comments"})
        }

        return res.json(data);
    })
})

app.get("/get_comments/:imageId", (req, res) => {
    const { imageId } = req.params;
    const tableName = `photo_comments_${imageId}`;

    const getCommentsQuery = `SELECT comment, commentator FROM ${tableName}`;

    db.query(getCommentsQuery, (err, data) => {
        if (err) {
            console.error("There was an error:", err);
            return res.status(500).json({ error: "There was an error retrieving that shit"})
        }

        return res.json(data);
    });
});

app.post("/add_comment", (req, res) => {
    const { imageUrl, user_comment, commentator } = req.body;
    if (!imageUrl || !user_comment || !commentator) {
        return res.status(400).json({ error: "Invalid ass request"});
    }
    const imageIndex = imageUrl.match(/img(\d+)\.jpg/i)[1];
    const tableName = `photo_comments_${imageIndex}`;
    const addCommentQuery = `INSERT INTO ${tableName} (comment, commentator) VALUES (?, ?)`;
    const values = [user_comment, commentator];

    db.query(addCommentQuery, values, (err, result) => {
        if (err) {
            console.error("Error adding comment:", err);
            return res.status(500).json({ error: "There was an error, bruh"});
        }

        return res.json({ message: "That comment was added"})
    })
})


const photoComments = 8000;

app.listen(
    photoComments,
    () => console.log(`Running on ${photoComments}`)
);