const router = require("express").Router()

const { updateNotesHeader,
    getNotesByUserId,
    deleteAllNotes,
    createNotes } = require("./../controllers/notes.controller")

const { isAuthenticated } = require("./../middleware/jwt.middleware")

router.get("/", isAuthenticated, getNotesByUserId)

router.put("/update/header/:id", isAuthenticated, updateNotesHeader)

router.delete("/deletemany/:id", isAuthenticated, deleteAllNotes)

router.post("/new", createNotes)

module.exports = router
