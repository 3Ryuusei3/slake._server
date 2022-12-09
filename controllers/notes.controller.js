const Note = require('./../models/Notes.model')


const createNote = (req, res, next) => {
    const { header, tag, shared } = req.body

    Note.create({ header, tag, shared, owner: req.payload._id })
        .then(response => res.json(response))
        .catch(err => next(err))
}

const getNotesByUserId = (req, res, next) => {
    Note.find({ owner: req.payload._id })
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

const deleteNote = (req, res, next) => {
    const { id: note_id } = req.params

    Note.findByIdAndDelete(note_id)
        .then(response => res.json(response))
        .catch(err => next(err))
}

const deleteAllNotes = (req, res, next) => {

    Note.deleteMany({ owner: req.payload._id })
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
    getNotesByUserId,
    deleteNote,
    deleteAllNotes,
    shareNote
}