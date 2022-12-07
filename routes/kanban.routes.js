const router = require("express").Router()
const Kanban = require("./../models/Kanban.model")
const { isAuthenticated } = require("../middleware/jwt.middleware")

router.get("/list", (req, res, next) => {
	Kanban.find()
		.then(response => res.json(response))
		.catch(err => next(err))
})

router.get("/:id", isAuthenticated, (req, res, next) => {
	//const { id: user_id } = req.params
	Kanban.find({ owner: req.payload._id })
		.then(response => res.json(response))
		.catch(err => next(err))
})

router.put("/update/:id", (req, res, next) => {
	const { id: kanban_id } = req.params
	const { header, column } = req.body

	Kanban.findByIdAndUpdate(kanban_id, { header, column }, { new: true })
		.then(response => res.json(response))
		.catch(err => next(err))
})

router.delete("/delete/:id", isAuthenticated, (req, res, next) => {
	//const { id: user_id } = req.params

	Kanban.findOneAndDelete({ owner: user_id })
		.then(response => res.json(response))
		.catch(err => next(err))
})

router.post("/new", isAuthenticated, (req, res, next) => {
	const { header, column } = req.body
	Kanban.create({ header, column, owner: req.payload._id })
		.then(response => res.json(response))
		.catch(err => next(err))
})

module.exports = router
