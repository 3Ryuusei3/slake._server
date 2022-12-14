const router = require("express").Router()
const { signup, login, verify, refreshToken } = require('./../controllers/auth.controller')
const { isAuthenticated } = require("./../middleware/jwt.middleware")

router.post("/signup", signup)

router.post("/login", login)

router.get("/verify", isAuthenticated, verify)

router.get("/refreshtoken", isAuthenticated, refreshToken)

module.exports = router
