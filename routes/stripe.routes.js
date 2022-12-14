
// const router = require("express").Router()


// const express = require("express");
// const app = express();
// const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

// app.use(express.static("public"));
// app.use(express.json());

// const calculateOrderAmount = (item) => {
//     const pricePro = item * 10
//     return pricePro
// }

// app.post("/create-payment-intent", async (req, res) => {
//     const { items } = req.body;

//     // Create a PaymentIntent with the order amount and currency
//     const paymentIntent = await stripe.paymentIntents.create({
//         amount: calculateOrderAmount(items),
//         currency: "usd",
//         automatic_payment_methods: {
//             enabled: true,
//         },
//     });

//     res.send({
//         clientSecret: paymentIntent.client_secret,
//     })
// })

// module.exports = router

// // API/PAYMENT/GETPRO

