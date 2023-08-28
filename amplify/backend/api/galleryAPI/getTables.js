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
    const getTablesQuery = "SHOW TABLES";
    const q = getTablesQuery;
    const [rows] = await db.query(q);


    return {
        statusCode: 200,
        body: JSON.stringify(rows),
    };
} catch (error) {
    return {
        statusCode: 500,
        body: JSON.stringify({error: "error showing tables"}),
    };
} finally {
    db.end();
}
}