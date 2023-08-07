// sk_test_51MtGJLBsGKDDlKM9E7BpOPMQDqSBao99cu7apMzgaJH1Vpbgu6nnbESr4tlLbX1pIvOe58WwhKCdR3zP3gmU7QSx00dfTdavxu

// low: price_1NcWAtBsGKDDlKM9Gfb4zy6k
// medium: price_1NcWDkBsGKDDlKM9v1a92ZxQ
// high: price_1NcWFLBsGKDDlKM93yVykU3k
import express from "express";
// const express = require("express");
import cors from "cors";
import stripe from "stripe"
// var cors = require('cors');
// const stripe = require('stripe')('sk_test_51MtGJLBsGKDDlKM9E7BpOPMQDqSBao99cu7apMzgaJH1Vpbgu6nnbESr4tlLbX1pIvOe58WwhKCdR3zP3gmU7QSx00dfTdavxu')


const app = express();
app.use(cors());
app.use(express.static("public"));
app.use(express.json());

app.post("/checkout", async (req, res) => {
    // req.body.items
    // [
    //    {
    //     id: 1,
    //     quantity: 3
    //    } 
    // ]

    // stripe wants 
    // [
    //     {
    //         price: 1,
    //         quantity: 3
    //     }
    // ]
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

    const sessions = await stripe.checkout.sessions.create({
        line_items: lineItems,
        mode: 'payment',
        success_url: "http://localhost:3000/success",
        cancel_url: "http:localhost:3000/cancel"
    });

    res.send(JSON.stringify({
        url: sessions.url
    }));
});

app.listen(5000, () => console.log("listening on port 5000"))