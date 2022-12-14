const router = require("express").Router()

const { sharedNotes, createNote, updateBlocks, deleteNote, getNote, updateSingleNoteHeader, getNoteListByUser, updateMetadata } = require("../controllers/singleNote.controllers")

const { isAuthenticated } = require("../middleware/jwt.middleware")

router.put("/update/blocks/:id", updateBlocks)

router.put("/update/metadata/:id", updateMetadata)

router.get("/shared", sharedNotes)

router.get("/:id", getNote)

router.get("/list/:id", isAuthenticated, getNoteListByUser)

router.delete("/delete/:id", deleteNote)

router.put("/update/header/:id", updateSingleNoteHeader)

router.post("/new", isAuthenticated, createNote)

module.exports = router
