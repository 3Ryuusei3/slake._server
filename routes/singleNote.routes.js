const router = require("express").Router()

const { createNote, deleteNote, getNote, getNoteListByUser } = require("../controllers/singleNote.controllers")
/* const { isAuthenticated } = require("../middleware/jwt.middleware") */

/* router.put("/update/:id", updateNote) */

router.get("/:id", getNote)

router.get("/list/:id", getNoteListByUser)

router.delete("/delete/:id", deleteNote)

router.post("/new", createNote)

module.exports = router
