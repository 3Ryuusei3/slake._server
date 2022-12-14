





// const Payment = () => async (req, res) => {

//     const { pricePro } = req.body;

//     const paymentIntent = await stripe.paymentIntents.create({
//         amount: calculateOrderAmount(pricePro),
//         currency: "usd",
//         automatic_payment_methods: {
//             enabled: true,
//         },
//     })

//     res.send({
//         clientSecret: paymentIntent.client_secret,
//     })
// }

// module.exports = { Payment }