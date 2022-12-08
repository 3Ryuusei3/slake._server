const router = require("express").Router()
const User = require("./../models/User.model")
const { isAuthenticated } = require("../middleware/jwt.middleware")


router.get("/list", (req, res, next) => {
	User.find()
		.then(response => res.json(response))
		.catch(err => next(err))
})

router.get("/result", (req, res, next) => {
	const { email } = req.query

	User.find({ email })
		.then(response => res.json(response))
		.catch(err => next(err))
})

router.put("/update", isAuthenticated, (req, res, next) => {
	//const { id: user_id } = req.params
	const { email, username, imageUrl, role } = req.body

	User.findByIdAndUpdate(req.payload._id, { email, username, imageUrl, role }, { new: true })
		.then(response => res.json(response))
		.catch(err => next(err))
})

router.delete("/delete/:id", (req, res, next) => {
	const { id: user_id } = req.params

	User.findByIdAndDelete(user_id)
		.then(response => res.json(response))
		.catch(err => next(err))
})

module.exports = router
