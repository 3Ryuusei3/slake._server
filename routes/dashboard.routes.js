const router = require("express").Router()

const Dashboard = require("./../models/Dashboard.model")

router.get("/list", (req, res) => {
	Dashboard.find()
		.then(response => res.json(response))
		.catch(err => res.status(500).json(err))
})

router.get("/:id", (req, res) => {
	const { id: user_id } = req.params
	Dashboard.find({ owner: user_id })
		.then(response => res.json(response))
		.catch(err => res.status(500).json(err))
})

router.post("/update/:id", (req, res) => {
	const { id: dashboard_id } = req.params
	const { todo, callout, header } = req.body

	Dashboard.findByIdAndUpdate(dashboard_id, { todo, callout, header }, { new: true })
		.then(response => res.json(response))
		.catch(err => res.status(500).json(err))
})

router.post("/delete/:id", (req, res) => {
	const { id: user_id } = req.params

	Dashboard.findOneAndDelete({ owner: user_id })
		.then(response => res.json(response))
		.catch(err => res.status(500).json(err))
})

router.post("/new", (req, res) => {
	Dashboard.create(req.body)
		.then(response => res.json(response))
		.catch(err => res.status(500).json(err))
})

module.exports = router
