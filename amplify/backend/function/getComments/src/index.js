/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
exports.handler = async (event) => {

  const corsOptions = {
        origin: [ 'https://lck1xcnul8.execute-api.us-east-1.amazonaws.com/staging', 'https://main.de77es7x7z7z7.amplifyapp.com', 'http://localhost:8080', 'thebozierweddingcluster.cxrocbv1hrpw.us-east-1.rds.amazonaws.com'],
  };
  const mysql = require("mysql2")
  console.log(event)
  const express = require('express')();
  express.use(require('cors')());
  express.use(cors(corsOptions));

  const pool = await mysql.createPool({
    host: 'bozierweddinginstance.cxrocbv1hrpw.us-east-1.rds.amazonaws.com',
    user: 'JeffBoz',
    port: '3306',
    password: 'Woodward20!',
    database: "bozierWeddingDB",
  });

    const { imageId } = req.params;
    const tableName = `photo_comments_${imageId}`;
    const getCommentsQuery = `SELECT comments, commentator FROM bozierWeddingDB.${tableName}`;

    const sqlCall = pool.query(getCommentsQuery, (err, data) => {
        if (err) {
            console.error("There was a damn error:", err);
            return res.status(500).json({ error: "There was a got damn error retrieving the comments"});
        }
        const commentsData = data[0];

        if (!commentsData) {
            return res.status(404).json({ error: "No comments found for this image, mane!"});
        }

        return res.json(commentsData);
    });


  const response = {
        statusCode: 200,
    //  Uncomment below to enable CORS requests
     headers: {
         "Access-Control-Allow-Origin": "*",
         "Access-Control-Allow-Headers": "*"
     },
     body: JSON.stringify(sqlCall)
    };
    return response;
  }
