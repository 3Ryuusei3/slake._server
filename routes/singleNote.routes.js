const router = require("express").Router()

const { sharedNotes, createNote, updateBlocks, deleteNote, getNote, updateSingleNoteHeader, getNoteListByUser, updateMetadata } = require("../controllers/singleNote.controllers")

const { isAuthenticated } = require("../middleware/jwt.middleware")

router.put("/update/blocks/:id", isAuthenticated, updateBlocks)

router.put("/update/metadata/:id", isAuthenticated, updateMetadata)

router.get("/shared", isAuthenticated, sharedNotes)

router.get("/:id", isAuthenticated, getNote)

router.get("/list/:id", isAuthenticated, getNoteListByUser)

router.delete("/delete/:id", isAuthenticated, deleteNote)

router.put("/update/header/:id", isAuthenticated, updateSingleNoteHeader)

router.post("/new", isAuthenticated, createNote)

module.exports = router
