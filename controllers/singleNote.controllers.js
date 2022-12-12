const SingleNote = require("../models/SingleNote.model")

const createNote = (req, res, next) => {
	const { header } = req.body
	const { _id: owner } = req.payload

	SingleNote.create({ header })
		.then(response => res.json(response))
		.catch(err => next(err))
}

const getNoteListByUser = (req, res, next) => {
	const { id: owner } = req.params

	SingleNote.find({ owner: owner })
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
	getNoteListByUser,
	getNote,
	deleteNote,
}
