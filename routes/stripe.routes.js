const router = require("express").Router()
const { isAuthenticated } = require("../middleware/jwt.middleware")

import { payment } from './../controllers/stripe.controller'



app.use(express.static("public"));
app.use(express.json());



router.post("/create-payment-intent", isAuthenticated, payment)
