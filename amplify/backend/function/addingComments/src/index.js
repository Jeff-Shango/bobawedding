/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
const mysql = require("mysql2");

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Woodward20!",
    database: "boba_wedding"
});

exports.handler = async (event) => {
    console.log(event);

    const { imageId } = req.query;
    const tableName = `photo_comments_${imageId}`;
    const addCommentQuery = `INSERT INTO boba_wedding.${tableName} (comments, commentator) VALUES (?, ?)`;
    const values = [req.body.comments, req.body.commentator];
    
    db.query(addCommentQuery, values, (err, result) => {
        if (err) {
            console.error("Error adding the comment, bruh:", err);
            return res.status(500).json({ error: "There was a damn error with adding the comment"});
        }

        return res.json({ message: "Comment was successfully added, mane :)"});
    });
    return {
        statusCode: 200,
    //  Uncomment below to enable CORS requests
    //  headers: {
    //      "Access-Control-Allow-Origin": "*",
    //      "Access-Control-Allow-Headers": "*"
    //  },
        body: JSON.stringify('Hello from Lambda!'),
    };
};
