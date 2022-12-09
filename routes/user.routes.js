const router = require("express").Router()

const { isAuthenticated } = require("../middleware/jwt.middleware")
const { updateUser, getAllUser } = require('./../controllers/user.controller')

router.get("/list", getAllUser)

router.put("/update", isAuthenticated, updateUser)

router.delete("/delete", isAuthenticated, (req, res, next) => {

	User.findByIdAndDelete(req.payload._id)
		.then(response => res.json(response))
		.catch(err => next(err))
})

module.exports = router
