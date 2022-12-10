const Note = require("./../models/Notes.model")

const createNote = (req, res, next) => {
	const { header, tag, shared } = req.body
	const { _id: owner } = req.payload

	Note.create({ header, tag, shared, owner })
		.then(response => res.json(response))
		.catch(err => next(err))
}

const getNotesByUserId = (req, res, next) => {
	const { _id: owner } = req.payload

	Note.find({ owner })
		.then(response => res.json(response))
		.catch(err => next(err))
}

const getNote = (req, res, next) => {
	const { id: note_id } = req.params

	Note.findById(note_id)
		.then(response => res.json(response))
		.catch(err => next(err))
}

const updateNote = (req, res, next) => {
	const { id: note_id } = req.params
	const { block, header } = req.body

	Note.findByIdAndUpdate(note_id, { block, header }, { new: true })
		.then(response => res.json(response))
		.catch(err => next(err))
}

const updateNotesHeader = (req, res, next) => {
	const { id: notes_id } = req.params
	const newData = req.body

	Note.findById(notes_id)
		.then(data => {
			return Note.findByIdAndUpdate(notes_id, { header: { ...data.header, ...newData } }, { new: true })
		})
		.then(response => res.json(response))
		.catch(err => next(err))
}

const deleteNote = (req, res, next) => {
	const { id: note_id } = req.params

	Note.findByIdAndDelete(note_id)
		.then(response => res.json(response))
		.catch(err => next(err))
}

const deleteAllNotes = (req, res, next) => {
	const { _id: owner } = req.payload

	Note.deleteMany({ owner })
		.then(response => res.json(response))
		.catch(err => next(err))
}

const shareNote = (req, res, next) => {
	Note.find({ shared: true })
		.then(response => res.json(response))
		.catch(err => next(err))
}

module.exports = {
	createNote,
	getNote,
	updateNote,
	updateNotesHeader,
	getNotesByUserId,
	deleteNote,
	deleteAllNotes,
	shareNote,
}
