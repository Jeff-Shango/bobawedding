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
    // Extract imageId from the path parameter
    // const { imageId } = event.pathParameters;
    // const tableName = `photo_comments_${imageId}`;
    const tableName = photo_comments_1

    // Create a connection pool
    const pool = await mysql.createPool(dbConfig);

    // Query to retrieve comments
    const getCommentsQuery = `SELECT comments, commentator FROM ${tableName}`;

    // Execute the query
    const [rows] = await pool.query(getCommentsQuery);

    // Release the connection back to the pool
    pool.end();

    return {
      statusCode: 200,
      body: JSON.stringify(rows),
    };
  } catch (error) {
    console.error('Error:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Error retrieving comments' }),
    };
  }
};
