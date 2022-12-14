const stripe = require("stripe")('sk_test_CGGvfNiIPwLXiDwaOfZ3oX6Y');





const calculateOrderAmount = (item) => {
    const pricePro = item * 10
    return pricePro
}

const payment = () => async (req, res) => {

    const { pricePro } = req.body;

    const paymentIntent = await stripe.paymentIntents.create({
        amount: calculateOrderAmount(pricePro),
        currency: "usd",
        automatic_payment_methods: {
            enabled: true,
        },
    })

    res.send({
        clientSecret: paymentIntent.client_secret,
    })
}

module.exports = { payment }