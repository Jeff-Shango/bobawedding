const mysql = require('mysql2/promise'); // Import the 'mysql2' library for promise-based operations
const dbConfig = {
  host: 'bozierweddinginstance.cxrocbv1hrpw.us-east-1.rds.amazonaws.com',
  user: 'JeffBoz',
  port: '3306',
  password: 'Woodward20!',
  database: 'bozierWeddingDB',
};

exports.handler = async (event) => {
  try {
    // Extract imageId from the query parameters
    const { imageId } = event.queryStringParameters;
    const tableName = `photo_comments_${imageId}`;
    
    // Create a connection pool
    const pool = await mysql.createPool(dbConfig);

    // Extract comments and commentator from the request body
    const { comments, commentator } = JSON.parse(event.body);

    // SQL query to insert a comment
    const addCommentQuery = `INSERT INTO ${tableName} (comments, commentator) VALUES (?, ?)`;
    const values = [comments, commentator];

    // Execute the query
    const [result] = await pool.query(addCommentQuery, values);

    // Release the connection back to the pool
    pool.end();

    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Comment was successfully added, mane :)' }),
    };
  } catch (error) {
    console.error('Error:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Error adding the comment' }),
    };
  }
};
