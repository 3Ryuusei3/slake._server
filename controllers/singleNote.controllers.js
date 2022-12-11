const SingleNote = require("../models/SingleNote.model")

const createNote = (req, res, next) => {
	const { header, tag, shared } = req.body
	const { _id: owner } = req.payload

	SingleNote.create({ header, tag, shared, owner })
		.then(response => res.json(response))
		.catch(err => next(err))
}

const getNote = (req, res, next) => {
	const { id: note_id } = req.params

	SingleNote.findById(note_id)
		.then(response => res.json(response))
		.catch(err => next(err))
}

const deleteNote = (req, res, next) => {
	const { id: note_id } = req.params

	SingleNote.findByIdAndDelete(note_id)
		.then(response => res.json(response))
		.catch(err => next(err))
}

module.exports = {
	createNote,
	getNote,
	deleteNote,
}
