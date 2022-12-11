const router = require("express").Router()

const { createNote, deleteNote, getNote } = require("../controllers/singleNote.controllers")
const { isAuthenticated } = require("../middleware/jwt.middleware")

/* router.put("/update/:id", updateNote) */

router.get("/:id", getNote)

router.delete("/delete/:id", deleteNote)

router.post("/new", isAuthenticated, createNote)

module.exports = router
