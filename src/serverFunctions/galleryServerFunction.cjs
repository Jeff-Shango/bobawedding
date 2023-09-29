const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
const stripe = require("stripe")(process.env.SECRET_STRIPE);

// const corsOptions = {
//     origin: [ 'http://localhost:3306' ]
// }

const expressApp = express();
const PORT = 3306;
expressApp.use(cors());
// expressApp.use(cors(corsOptions));

const db = mysql.createPool({
    host: "localhost",
    user: "JeffBoz",
    port: PORT,
    password: "Woodward20!",
    database: "bozierWeddingDB"
});

// const db = mysql.createPool({
//     host: "localhost",
//     user: "JeffBoz",
//     port: PORT,
//     database: "boba_wedding"
// })

expressApp.use(express.json());

expressApp.get("/gallery", (req, res) => {
    const { imageId } = req.query;
    const tableName = `photo_comments_${imageId}`;
    const q = `SELECT * FROM bozierWeddingDB.${tableName}`;
    db.query(q, (err, data) => {
        if(err) return res.json(err);
        return res.json(data);
    })
});

expressApp.get("/tables", (req, res) => {
    const getTablesQuery = "SHOW TABLES";

    db.query(getTablesQuery, (err, data) => {
        if (err) {
            console.error("Error retrieving tables:", err);
            return res.status(500).json({ error: "Error retrieving tables"});
        }

        const tables = data.map((table) => table [`Tables_in_${db.config.database}`]);
        return res.json(tables);
    })
})

expressApp.get("/get_comments/:imageId", (req, res) => {
    const { imageId } = req.params;
    const tableName = `photo_comments_${imageId}`;

    const getCommentsQuery = `SELECT comments, commentator FROM bozierWeddingDB.${tableName}`;

    db.query(getCommentsQuery, (err, data) => {
        if (err) {
            console.error("There was a damn error:", err);
            return res.status(500).json({ error: "There was a got damn error retrieving the comments"});
        }

        return res.json(data);
    });
});

expressApp.post("/add_comment?imageId=${imageId}", (req, res) => {
    const { imageId } = req.query;
    const tableName = `photo_comments_${imageId}`;
    const addCommentQuery = `INSERT INTO bozierWeddingDB.${tableName} (comments, commentator) VALUES (?, ?)`;
    const values = [req.body.comments, req.body.commentator];

    db.query(addCommentQuery, values, (err, result) => {
        if (err) {
            console.error("Error adding the comment, bruh:", err);
            return res.status(500).json({ error: "There was a damn error with adding the comment"});
        }

        return res.json({ message: "Comment was successfully added, mane :)"});
    });
});

// stripe server

expressApp.use(express.static("public"));
expressApp.use(express.json());

expressApp.post("/checkout", async (req, res) => {
    console.log(req.body)
    const items = req.body.items;
    let lineItems = [];
    items.forEach((item) => {
        lineItems.push(
            {
                price: item.id,
                quantity: item.quantity
            }
        )
    });

    try {
    const session = await stripe.checkout.sessions.create({
        line_items: lineItems,
        mode: 'payment',
        success_url:  `${process.env.SERVER_URL}/success`,
        cancel_url: `${process.env.SERVER_URL}/cancel`,
    });

    res.send(JSON.stringify({
        url: session.url
    }));
} catch (error) {
        console.error("Error creating checkout session:", error);
        res.status(500).send("An error occured, mane.")
    }
});

expressApp.listen(PORT, () => {
    console.log(`that thang running on port ${PORT}`)
})

