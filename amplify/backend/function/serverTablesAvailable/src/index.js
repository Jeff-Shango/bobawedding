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
    const getTablesQuery = "SHOW TABLES";
    
    
    db.query(getTablesQuery, (err, data) => {
        if (err) { 
            console.error("Error retrieving table: ", err);
            return {
                statusCode: 500,
                body: JSON.stringify(err),
            };
        }
        
        const tables = data.map((table) => table [`Tables_in_${db.config.database}`]);
        
        const response = {
            statusCode: 200,
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Headers": "*"
            },
                body: JSON.stringify(tables),
        };
        return response

    })
};
