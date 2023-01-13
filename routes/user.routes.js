const router = require("express").Router()

const { isAuthenticated } = require("../middleware/jwt.middleware")
const { updateUser, getAllUser, getUserName } = require('./../controllers/user.controller')

router.get("/list", getAllUser)

router.put("/update", isAuthenticated, updateUser)

module.exports = router
