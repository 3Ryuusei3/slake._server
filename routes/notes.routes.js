const router = require("express").Router()
const { createNote,
    getNote, updateNote, getNotesByUserId, deleteNote, deleteAllNotes, shareNote } = require('./../controllers/notes.controller')

const { isAuthenticated } = require("./../middleware/jwt.middleware")

router.get("/", isAuthenticated, getNotesByUserId)

router.get("/shared", shareNote)

router.get("/:id", getNote)

router.put("/update/:id", updateNote)

router.delete("/deletemany/:id", isAuthenticated, deleteAllNotes)

router.delete("/delete/:id", deleteNote)

router.post("/new", isAuthenticated, createNote)

module.exports = router
