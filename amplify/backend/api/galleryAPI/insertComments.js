import mysql from "mysql2";
import express from "express"

exports.handler = async (event) => {
const app = express();
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Woodward20!",
    database: "boba_wedding"
});


app.use(express.json())
app.use(cors())

try {
    const { imageId } = req.query;
    const tableName = `photo_comments_${imageId}`;
    const addCommentQuery = `INSERT INTO boba_wedding.${tableName} (comments, commentator) VALUES (?, ?)`;
    const values = [event.body.comments, event.body.commentator];

    await db.promise().query(addCommentQuery, values);


    return {
        statusCode: 200,
        body: JSON.stringify(rows),
    }
} finally {
    db.end();
}
};