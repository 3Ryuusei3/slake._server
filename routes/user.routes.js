const router = require("express").Router()
const User = require("./../models/User.model")

router.get("/list", (req, res) => {
	User.find()
		.then(response => res.json(response))
		.catch(err => res.status(500).json(err))
})

router.put("/update/:id", (req, res) => {
	const { id: user_id } = req.params
	const { email, username, imageUrl, role } = req.body

	User.findByIdAndUpdate(user_id, { email, username, imageUrl, role }, { new: true })
		.then(response => res.json(response))
		.catch(err => res.status(500).json(err))
})

router.delete("/delete/:id", (req, res) => {
	const { id: user_id } = req.params

	User.findByIdAndDelete(user_id)
		.then(response => res.json(response))
		.catch(err => res.status(500).json(err))
})

module.exports = router
