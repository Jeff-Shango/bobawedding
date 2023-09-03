import express from "express"
import mysql from "mysql2";
import cors from "cors";
import stripe from "stripe"
<<<<<<<< HEAD:src/galleryServer.js
const app = express();
const stripeInstance = stripe('sk_test_51MtGJLBsGKDDlKM9E7BpOPMQDqSBao99cu7apMzgaJH1Vpbgu6nnbESr4tlLbX1pIvOe58WwhKCdR3zP3gmU7QSx00dfTdavxu')
========



exports.handler = async function (event, context) {
const app = express();
const stripeInstance = stripe('sk_test_51MtGJLBsGKDDlKM9E7BpOPMQDqSBao99cu7apMzgaJH1Vpbgu6nnbESr4tlLbX1pIvOe58WwhKCdR3zP3gmU7QSx00dfTdavxu')

>>>>>>>> shitmane:netlify/functions/backendAPI.js

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Woodward20!",
    database: "boba_wedding"
});

app.use(express.static("public"));
app.use(express.json())
app.use(cors())
app.get("/gallery", (req, res) => {
    const { imageId } = req.query;
    const tableName = `photo_comments_${imageId}`;
    const q = `SELECT * FROM boba_wedding.${tableName}`;
    db.query(q, (err, data) => {
        if(err) return res.json(err);
        return res.json(data);
    })
});

app.get("/tables", (req, res) => {
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

app.get("/get_comments/:imageId", (req, res) => {
    const { imageId } = req.params;
    const tableName = `photo_comments_${imageId}`;

    const getCommentsQuery = `SELECT comments, commentator FROM boba_wedding.${tableName}`;

    db.query(getCommentsQuery, (err, data) => {
        if (err) {
            console.error("There was a damn error:". err);
            return res.status(500).json({ error: "There was a got damn error retrieving the comments"});
        }

        return res.json(data);
    });
});

app.post("/add_comment", (req, res) => {
    const { imageId } = req.query;
    const tableName = `photo_comments_${imageId}`;
    const addCommentQuery = `INSERT INTO boba_wedding.${tableName} (comments, commentator) VALUES (?, ?)`;
    const values = [req.body.comments, req.body.commentator];

    db.query(addCommentQuery, values, (err, result) => {
        if (err) {
            console.error("Error adding the comment, bruh:", err);
            return res.status(500).json({ error: "There was a damn error with adding the comment"});
        }

        return res.json({ message: "Comment was successfully added, mane :)"});
    });
});

app.post("/checkout", async (req, res) => {
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
    const session = await stripeInstance.checkout.sessions.create({
        line_items: lineItems,
        mode: 'payment',
        success_url: "http://localhost:3000/success",
        cancel_url: "http://localhost:3000/cancel",
    });

    res.send(JSON.stringify({
        url: session.url
    }));
} catch (error) {
        console.error("Error creating checkout session:", error);
        res.status(500).send("An error occured, mane.")
    }
});

app.listen(4000, () => console.log("listening on port 4000"))

const photoComments = 8000;

app.listen(
    photoComments,
    () => console.log(`Running on ${photoComments}`)
<<<<<<<< HEAD:src/galleryServer.js
);

// stripe server

app.use(cors());
app.use(express.static("public"));
app.use(express.json());

app.post("/checkout", async (req, res) => {
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
    const session = await stripeInstance.checkout.sessions.create({
        line_items: lineItems,
        mode: 'payment',
        success_url: "http://localhost:3000/success",
        cancel_url: "http://localhost:3000/cancel",
    });

    res.send(JSON.stringify({
        url: session.url
    }));
} catch (error) {
        console.error("Error creating checkout session:", error);
        res.status(500).send("An error occured, mane.")
    }
});

app.listen(4000, () => console.log("listening on port 4000"))
========


);
return {
    statusCode: 200,
    body: JSON.stringify({ message: "wht it do, baby"}),
};
}
>>>>>>>> shitmane:netlify/functions/backendAPI.js
