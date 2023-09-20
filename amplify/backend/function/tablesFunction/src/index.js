

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
exports.handler = async (event) => {
    const corsOptions = {
        origin: [ 'https://2le6qizn3i.execute-api.us-east-1.amazonaws.com/staging', 'https://main.de77es7x7z7z7.amplifyapp.com', 'http://localhost:8080', 'thebozierweddingcluster.cxrocbv1hrpw.us-east-1.rds.amazonaws.com'],
  };
  console.log(event)
  const express = require('express')();
  express.use(require('cors')());
  express.use(cors(corsOptions));

      const pool = await mysql.createPool({
          host: 'https://2le6qizn3i.execute-api.us-east-1.amazonaws.com/staging',
          user: 'JeffBoz',
          password: 'Woodward20!',
          database: "bozierWeddingDB",
          connectionLimit: 10,
      });

    const response = express.get('/tables', async (req, res) => {
        const getTablesQuery = 'SHOW TABLES';
        const [tablesData] = await pool.query(getTablesQuery);
        const tables = tablesData.map((table) => table[`Tables_in_${pool.config.database}`]);
        res.json(tables);
    });

    console.error('Error:', error);
    return {
        statusCode: 500,
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Headers': '*',
        },
        body: JSON.stringify(response),
    };
}
