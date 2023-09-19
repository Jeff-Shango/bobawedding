

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
exports.handler = async (event) => {
    const corsOptions = {
        origin: [ 'https://2le6qizn3i.execute-api.us-east-1.amazonaws.com/staging', 'https://main.de77es7x7z7z7.amplifyapp.com', 'http://localhost:8080', 'thebozierweddingcluster.cxrocbv1hrpw.us-east-1.rds.amazonaws.com'],
  };

  const express = require('express')();
  express.use(require('cors')());
  express.use(cors(corsOptions));

  try {
      const pool = await mysql.createPool({
          host: 'thebozierweddingcluster.cxrocbv1hrpw.us-east-1.rds.amazonaws.com',
          user: 'JeffBoz',
          password: 'Woodward20!',
          database: "bozier_wedding",
          connectionLimit: 10,
      });

    express.get('/tables', async (req, res) => {
        const getTablesQuery = 'SHOW TABLES';
        const [tablesData] = await pool.query(getTablesQuery);
        const tables = tablesData.map((table) => table[`Tables_in_${pool.config.database}`]);
        res.json(tables);
    });

} catch (error) {
    console.error('Error:', error);
    return {
        statusCode: 500,
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Headers': '*',
        },
        body: JSON.stringify('Error occurred while accessing the database.'),
    };
}
};
