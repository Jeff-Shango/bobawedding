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
});


app.use(express.json())
app.use(cors())
// work on the code below 
app.get("/gallery", (req, res) => {
    const { imageId } = req.query;
    const tableName = `photo_comments_${imageId}`;
    const q = `SELECT * FROM boba_wedding.${tableName}`;
    db.query(q, (err, data) => {
        if(err) return res.json(err);
        return res.json(data);
    })
});
// work on the code above

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

    const getCommentsQuery = `SELECT comment, commentator FROM boba_wedding.${tableName}`;

    db.query(getCommentsQuery, (err, data) => {
        if (err) {
            console.error("There was a damn error:". err);
            return res.status(500).json({ error: "There was a got damn error retrieving the comments"});
        }

        return res.json(data);
    });
});

app.get("/get_all_comments", (req, res) => {
    const { imageId } = req.query
    const tableName = `photo_comments_${imageId}`;
    const getAllCommentsQuery = `SELECT * FROM boba_wedding.${tableName}.comments`;
    
    db.query(getAllCommentsQuery, (err, data) => {
        if (err) {
            console.error("There was a damn error:", err);
            return res.status(500).json({ error: "There was an error retrieving all of the comments"})
        }

        return res.json(data);
    })
})

app.post("/add_comment/:imageId", (req, res) => {
    const { imageUrl, comments, commentator } = req.body;
    const imageIndex = imageUrl.match(/img(\d+)\.jpg/i)[1];
    const tableName = `photo_comments_${imageIndex}`;
    const addCommentQuery = `INSERT INTO boba_wedding.${tableName} (comments, commentator) VALUES (?, ?)`
    const values = [
        req.body.comments,
        req.body.commentator,
    ]

    db.query(addCommentQuery, [values], (err, result) => {
        if(err) {
            console.error("ERRic adding comment:", err);
            return res.status(500).json({ error: "there was eric adding the comment"});
        }

        return res.json({ message: "Comment was successfully added, mane!"})
    })
})

// app.post("/add_comment/:imageId", (req, res) => {
//     const { imageUrl, comments, commentator } = req.body;
//     if (!imageUrl || !comments || !commentator) {
//         return res.status(400).json({ error: "Invalid ass request"});
//     }
//     const imageIndex = imageUrl.match(/img(\d+)\.jpg/i)[1];
//     const tableName = `photo_comments_${imageIndex}`;
//     const addCommentQuery = `INSERT INTO boba_wedding.${tableName} (comments, commentator) VALUES (?, ?)`;
//     const values = [comments, commentator];

//     db.query(addCommentQuery, values, (err, result) => {
//         if (err) {
//             console.error("Error adding comment:", err);
//             return res.status bgffx  qssq1a1`    Asage: "That comment was added"})
//     })
// })


const photoComments = 8000;

app.listen(
    photoComments,
    () => console.log(`Running on ${photoComments}`)
);