const router = require("express").Router()

const Notes = require("./../models/Notes.model")

const { createNote, getNote, updateNote, getNotesByUserId, deleteNote, deleteAllNotes, shareNote } = require("./../controllers/notes.controller")

const { isAuthenticated } = require("./../middleware/jwt.middleware")

router.get("/", isAuthenticated, getNotesByUserId)

router.get("/shared", shareNote)

router.get("/:id", getNote)

router.put("/update/:id", updateNote)

router.put("/update/image/:id", (req, res, next) => {
	const { id: notes_id } = req.params
	const { image } = req.body

	const header = {
		image: image,
	}

	Notes.findByIdAndUpdate(notes_id, { header }, { new: true })
		.then(response => res.json(response))
		.catch(err => next(err))
})

router.delete("/deletemany/:id", isAuthenticated, deleteAllNotes)

router.delete("/delete/:id", deleteNote)

router.post("/new", isAuthenticated, createNote)

module.exports = router
