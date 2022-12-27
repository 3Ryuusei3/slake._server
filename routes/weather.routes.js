const router = require("express").Router()
const { weatherApiKey } = require('./../controllers/weather.controller')

const { isAuthenticated } = require("../middleware/jwt.middleware")

router.get("/key", weatherApiKey)


module.exports = router