const router = require("express").Router()

const { signup, login, verify, refreshToken, deleteUser, getUserName } = require('./../controllers/auth.controller')

const { isAuthenticated } = require("./../middleware/jwt.middleware")

router.post("/signup", signup)

router.post("/login", login)

router.get("/getusername", getUserName)

router.get("/verify", isAuthenticated, verify)

router.get("/refreshtoken", isAuthenticated, refreshToken)

router.delete("/delete/:id", isAuthenticated, deleteUser)

module.exports = router
