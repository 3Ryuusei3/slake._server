const Kanban = require("../models/Kanban.model")

const createKanban = (req, res, next) => {
	const { header, column } = req.body
	const { _id: owner } = req.payload

	Kanban.create({ header, column, owner })
		.then(response => res.json(response))
		.catch(err => next(err))
}

const getKanbanByUserId = (req, res, next) => {
	const { _id: owner } = req.payload

	Kanban.find({ owner })
		.then(response => res.json(response))
		.catch(err => next(err))
}

const updateKanban = (req, res, next) => {
	const { id: kanban_id } = req.params
	const { lanes } = req.body

	Kanban.findByIdAndUpdate(kanban_id, { ...lanes }, { new: true })
		.then(response => res.json(response))
		.catch(err => next(err))
}

const updateKanbanHeader = (req, res, next) => {
	const { id: kanban_id } = req.params
	const newData = req.body

	Kanban.findById(kanban_id)
		.then(data => {
			return Kanban.findByIdAndUpdate(kanban_id, { header: { ...data.header, ...newData } }, { new: true, runValidators: true })
		})
		.then(response => res.json(response))
		.catch(err => next(err))
}

const deleteKanban = (req, res, next) => {
	const { _id: owner } = req.payload

	Kanban.findOneAndDelete({ owner })
		.then(response => res.json(response))
		.catch(err => next(err))
}

const getAllKanban = (req, res, next) => {
	Kanban.find()
		.then(response => res.json(response))
		.catch(err => next(err))
}

module.exports = {
	getKanbanByUserId,
	getAllKanban,
	updateKanban,
	updateKanbanHeader,
	deleteKanban,
	createKanban,
}
