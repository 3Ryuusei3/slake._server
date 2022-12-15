const router = require("express").Router()

const { updateNotesHeader,
    getNotesByUserId,
    createNotes } = require("./../controllers/notes.controller")

const { isAuthenticated } = require("./../middleware/jwt.middleware")

router.get("/", isAuthenticated, getNotesByUserId)

router.put("/update/header/:id", isAuthenticated, updateNotesHeader)

router.post("/new", createNotes)

module.exports = router
