const Notes = require("./../models/Notes.model")

const createNotes = (req, res, next) => {
	const { header } = req.body
	const { _id: owner } = req.payload

	Notes.create({ header, owner })
		.then(response => res.json(response))
		.catch(err => next(err))
}

const getNotesByUserId = (req, res, next) => {
	const { _id: owner } = req.payload

	Notes.find({ owner })
		.then(response => res.json(response))
		.catch(err => next(err))
}

const updateNotesHeader = (req, res, next) => {
	const { id: notes_id } = req.params
	const newData = req.body

	Notes.findById(notes_id)
		.then(data => {
			return Notes.findByIdAndUpdate(notes_id, { header: { ...data.header, ...newData } }, { new: true })
		})
		.then(response => res.json(response))
		.catch(err => next(err))
}

const deleteAllNotes = (req, res, next) => {
	const { _id: owner } = req.payload

	Notes.deleteMany({ owner })
		.then(response => res.json(response))
		.catch(err => next(err))
}

const shareNote = (req, res, next) => {
	Notes.find({ shared: true })
		.then(response => res.json(response))
		.catch(err => next(err))
}

module.exports = {
	createNotes,
	updateNotesHeader,
	getNotesByUserId,
	deleteAllNotes,
	shareNote,
}
