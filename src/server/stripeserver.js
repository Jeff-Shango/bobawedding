import express from "express";
import cors from "cors";
import stripe from "stripe"
const stripeInstance = stripe('sk_test_51MtGJLBsGKDDlKM9E7BpOPMQDqSBao99cu7apMzgaJH1Vpbgu6nnbESr4tlLbX1pIvOe58WwhKCdR3zP3gmU7QSx00dfTdavxu')

const app = express();
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