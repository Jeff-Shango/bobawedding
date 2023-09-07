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
    
    const { imageId } = req.params;
    const tableName = `photo_comments_${imageId}`;

    const getCommentsQuery = `SELECT comments, commentator FROM boba_wedding.${tableName}`;

    db.query(getCommentsQuery, (err, data) => {
        if (err) {
            console.error("There was a damn error:". err);
            return res.status(500).json({ error: "There was a got damn error retrieving the comments"});
        }

        return res.json(data);
    });
    return {
        statusCode: 200,
    //  Uncomment below to enable CORS requests
     headers: {
         "Access-Control-Allow-Origin": "*",
         "Access-Control-Allow-Headers": "*"
     },
        body: JSON.stringify('Hello from Lambda!'),
    };
};
