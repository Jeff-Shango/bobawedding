/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */

exports.handler = async (event) => {
    const expressApp = require('express')();
    expressApp.use(require('cors')());

    try {
        const pool = await mysql.createPool({
            host: 'thebozierweddingcluster.cxrocbv1hrpw.us-east-1.rds.amazonaws.com',
            user: 'JeffBoz',
            password: 'Woodward20!',
            database: "bozier_wedding",
            connectionLimit: 10,
        });

        expressApp.get('/gallery', async (req, res) => {
            const { imageId } = event.pathParameters;
            const tableName = `photo_comments_${imageId}`;
            const q = `SELECT * FROM boba_wedding.${tableName}`;
            const [rows] = await pool.query(q);
            res.json(rows);
        });

        expressApp.get('/tables', async (req, res) => {
            const getTablesQuery = 'SHOW TABLES';
            const [tablesData] = await pool.query(getTablesQuery);
            const tables = tablesData.map((table) => table[`Tables_in_${pool.config.database}`]);
            res.json(tables);
        });

        expressApp.get('/get_comments/:imageId', async (req, res) => {
            const { imageId } = req.params;
            const tableName = `photo_comments_${imageId}`;
            const getCommentsQuery = `SELECT comments, commentator FROM boba_wedding.${tableName}`;
            const [commentsData] = await pool.query(getCommentsQuery);
            res.json(commentsData);
        });

        expressApp.post('/add_comment', async (req, res) => {
            const { imageId } = req.query;
            const tableName = `photo_comments_${imageId}`;
            const addCommentQuery = `INSERT INTO boba_wedding.${tableName} (comments, commentator) VALUES (?, ?)`;
            const values = [req.body.comments, req.body.commentator];

            try {
                const [result] = await pool.query(addCommentQuery, values);
                return res.json({ message: 'Comment was successfully added, mane :)', result });
            } catch (err) {
                console.error('Error adding the comment:', err);
                return res.status(500).json({ error: 'There was an error with adding the comment', err });
            }
        });

        expressApp.use(express.static('public'));

        expressApp.post('/checkout', async (req, res) => {
            const items = req.body.items;
            let lineItems = [];
            items.forEach((item) => {
                lineItems.push({
                    price: item.id,
                    quantity: item.quantity,
                });
            });

            try {
                const session = await stripe.checkout.sessions.create({
                    line_items: lineItems,
                    mode: 'payment',
                    success_url: `${process.env.SERVER_URL}/success`,
                    cancel_url: `${process.env.SERVER_URL}/cancel`,
                });

                res.send(JSON.stringify({
                    url: session.url,
                }));
            } catch (error) {
                console.error('Error creating checkout session:', error);
                res.status(500).send('An error occurred, mane.');
            }
        });

        // Set the port
        const PORT = 8080;

        // Start the server
        expressApp.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`);
        });

        // Handle the Lambda event
        const response = await expressApp(event);

        return {
            statusCode: 200,
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': '*',
            },
            body: JSON.stringify(response),
        };
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