const router = require("express").Router()

const { updateNotesHeader, getNotesByUserId, deleteAllNotes, shareNote, createNotes } = require("./../controllers/notes.controller")

const { isAuthenticated } = require("./../middleware/jwt.middleware")

router.get("/", isAuthenticated, getNotesByUserId)

router.get("/shared", isAuthenticated, shareNote)

router.put("/update/header/:id", isAuthenticated, updateNotesHeader)

router.delete("/deletemany/:id", isAuthenticated, deleteAllNotes)

router.post("/new", isAuthenticated, createNotes)

module.exports = router
