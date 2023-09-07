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

    const { imageId } = event.queryStringParameters;
    const tableName = `photo_comments_${imageId}`;
    const q = `SELECT * FROM boba_wedding.${tableName}`;
    
    db.query(q, (err, data) => {
        if(err) return { statusCode: 500, body: JSON.stringify(err) };
        const response = {
            statusCode: 200,
        //  Uncomment below to enable CORS requests
         headers: {
             "Access-Control-Allow-Origin": "*",
             "Access-Control-Allow-Headers": "*"
         },
            body: JSON.stringify(imageId),
        };
        return response;
    });
};
