/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
const AWS = require('aws-sdk');
const stripe = require("stripe")(process.env.SECRET_STRIPE);

exports.handler = async (event) => {
    console.log(event);

    try { 
        const requestBody = JSON.parse(event.body);
        const items = requestBody.items;
        let lineItems = [];

        items.forEach((item) => {
            lineItems.push({
                price: item.id,
                quantity: item.quantity
            });
        });
        const session = await stripe.checkout.sessions.create({
            line_items: lineItems,
            mode: 'payment',
            success_url: "/success",
            cancel_url: "/cancel"
        });

        const response = {
            statusCode: 200,
        //  Uncomment below to enable CORS requests
         headers: {
             "Access-Control-Allow-Origin": "*",
             "Access-Control-Allow-Headers": "*"
         },
            body: JSON.stringify({
                url: session.url
            }),
        };
        return response;
    } catch (error) {
        console.error("Error creating checkout sessions:", error);
        const response = {
            statusCode: 500,
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Headers": "*",
            },
            body: JSON.stringify({ error: "An error occured"}),
        };

        return response;
    }
};
