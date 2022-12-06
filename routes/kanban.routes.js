const router = require("express").Router()
const Kanban = require("./../models/Kanban.model")

router.get("/list", (req, res) => {
	Kanban.find()
		.then(response => res.json(response))
		.catch(err => res.status(500).json(err))
})

router.get("/:id", (req, res) => {
	const { id: user_id } = req.params
	Kanban.find({ owner: user_id })
		.then(response => res.json(response))
		.catch(err => res.status(500).json(err))
})

router.put("/update/:id", (req, res) => {
	const { id: kanban_id } = req.params
	const { header, column } = req.body

	Kanban.findByIdAndUpdate(kanban_id, { header, column }, { new: true })
		.then(response => res.json(response))
		.catch(err => res.status(500).json(err))
})

router.delete("/delete/:id", (req, res) => {
	const { id: user_id } = req.params

	Kanban.findOneAndDelete({ owner: user_id })
		.then(response => res.json(response))
		.catch(err => res.status(500).json(err))
})

router.post("/new", (req, res) => {
	const { header, column, owner } = req.body
	Kanban.create({ header, column, owner })
		.then(response => res.json(response))
		.catch(err => res.status(500).json(err))
})

module.exports = router
