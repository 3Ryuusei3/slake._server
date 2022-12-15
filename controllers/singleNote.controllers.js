const SingleNote = require("../models/SingleNote.model")

const createNote = (req, res, next) => {

	const { _id: owner } = req.payload

	SingleNote.create({ owner })
		.then(response => res.json(response))
		.catch(err => next(err))
}

const getNoteListByUser = (req, res, next) => {

	const { _id: owner } = req.payload

	SingleNote.find({ owner })
		.then(response => res.json(response))
		.catch(err => next(err))
}

const sharedNotes = (req, res, next) => {

	SingleNote.find({ shared: true })
		.populate("owner")
		.then(response => res.json(response))
		.catch(err => next(err))
}

const getNote = (req, res, next) => {

	const { id: note_id } = req.params

	SingleNote.findById(note_id)
		.then(response => res.json(response))
		.catch(err => next(err))
}

//HACE FALTA HACER UN RETORNO DE PROMESAS ??????

const updateSingleNoteHeader = (req, res, next) => {

	const { id: note_id } = req.params
	const newData = req.body

	SingleNote.findById(note_id)
		.then(data => {
			return SingleNote.findByIdAndUpdate(note_id, { header: { ...data.header, ...newData } }, { new: true })
		})
		.then(response => res.json(response))
		.catch(err => next(err))
}

const updateMetadata = (req, res, next) => {

	const { id: note_id } = req.params
	const newData = req.body

	SingleNote.findById(note_id)
		.then(() => {
			return SingleNote.findByIdAndUpdate(note_id, { shared: newData.shared, tag: newData.tag }, { new: true })
		})
		.then(response => res.json(response))
		.catch(err => next(err))
}

const updateBlocks = (req, res, next) => {

	const { id: note_id } = req.params
	const newData = req.body

	SingleNote.findById(note_id)
		.then(() => {
			return SingleNote.findByIdAndUpdate(note_id, { block: [...newData] }, { new: true })
		})
		.then(response => res.json(response))
		.catch(err => next(err))
}

//HACE FALTA HACER UN RETORNO DE PROMESAS ??????


const deleteNote = (req, res, next) => {

	const { id: note_id } = req.params

	SingleNote.findByIdAndDelete(note_id)
		.then(response => res.json(response))
		.catch(err => next(err))
}

const deleteAllNotes = (req, res, next) => {

	const { _id: owner } = req.payload

	Notes.deleteMany({ owner })
		.then(response => res.json(response))
		.catch(err => next(err))
}

module.exports = {
	sharedNotes,
	updateBlocks,
	createNote,
	getNoteListByUser,
	updateSingleNoteHeader,
	getNote,
	deleteNote,
	updateMetadata,
	deleteAllNotes,
}
