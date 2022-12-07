const router = require("express").Router()

const Dashboard = require("./../models/Dashboard.model")

router.get("/list", (req, res, next) => {
	Dashboard.find()
		.then(response => res.json(response))
		.catch(err => next(err))
})

router.get("/:id", (req, res, next) => {
	const { id: user_id } = req.params
	Dashboard.find({ owner: user_id })
		.then(response => res.json(response))
		.catch(err => next(err))
})

router.put("/update/:id", (req, res, next) => {
	const { id: dashboard_id } = req.params
	const { todo, callout, header } = req.body

	Dashboard.findByIdAndUpdate(dashboard_id, { todo, callout, header }, { new: true })
		.then(response => res.json(response))
		.catch(err => next(err))
})

router.delete("/delete/:id", (req, res, next) => {
	const { id: user_id } = req.params

	Dashboard.findOneAndDelete({ owner: user_id })
		.then(response => res.json(response))
		.catch(err => next(err))
})

router.post("/new", (req, res, next) => {
	const { header, callout, todo, owner } = req.body
	Dashboard.create({ header, callout, todo, owner })
		.then(response => res.json(response))
		.catch(err => next(err))
})

module.exports = router
