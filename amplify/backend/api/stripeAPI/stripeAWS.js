import express from "express";
import cors from "cors";
import stripe from "stripe";

const stripeInstance = stripe('sk_test_51MtGJLBsGKDDlKM9E7BpOPMQDqSBao99cu7apMzgaJH1Vpbgu6nnbESr4tlLbX1pIvOe58WwhKCdR3zP3gmU7QSx00dfTdavxu')

exports.handler = async (event) => {
const app = express();

app.use(cors());
app.use(express.json());

try{
    const requestBody = JSON.parse(event.body);
    const items = requestBody.items;
    let lineItems = [];

    items.forEach((item) => {
        lineItems.push(
            {
                price: item.id,
                quantity: item.quantity
            });
    });

    const session = await stripeInstance.checkout.sessions.create({
        line_items: lineItems,
        mode: 'payment',
        success_url: "http://localhost:3000/success",
        cancel_url: "http://localhost:3000/cancel",
    });

    return {
        statusCode: 200,
        body: JSON.stringify({ url: session.url }),
    };
} catch (error) {
        console.error("Error with creating checkout sessions:", error);
        return {
            statusCode: 500,
            body: JSON.stringify({ error: "An error occured, mane"}),
        };
    }
};