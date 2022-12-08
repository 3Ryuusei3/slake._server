const router = require("express").Router()

const Note = require("./../models/Notes.model")

const { isAuthenticated } = require("./../middleware/jwt.middleware")

router.get("/", isAuthenticated, (req, res, next) => {
	Note.find({ owner: req.payload._id })
		.then(response => res.json(response))
		.catch(err => next(err))
})

router.get("/list", (req, res, next) => {
	Note.find()
		.then(response => res.json(response))
		.catch(err => next(err))
})

router.get("/shared", (req, res, next) => {
	Note.find({ shared: true })
		.then(response => res.json(response))
		.catch(err => next(err))
})

router.get("/:id", (req, res, next) => {
	const { id: note_id } = req.params

	Note.findById(note_id)
		.then(response => res.json(response))
		.catch(err => next(err))
})

router.put("/update/:id", (req, res, next) => {
	const { id: note_id } = req.params
	const { block, header } = req.body

	Note.findByIdAndUpdate(note_id, { block, header }, { new: true })
		.then(response => res.json(response))
		.catch(err => next(err))
})

router.delete("/deletemany/:id", isAuthenticated, (req, res, next) => {
	//const { id: user_id } = req.params

	Note.deleteMany({ owner: req.payload._id })
		.then(response => res.json(response))
		.catch(err => next(err))
})

router.delete("/delete/:id", (req, res, next) => {
	const { id: note_id } = req.params

	Note.findByIdAndDelete(note_id)
		.then(response => res.json(response))
		.catch(err => next(err))
})

router.post("/new", isAuthenticated, (req, res, next) => {
	const { header, tag, shared } = req.body

	Note.create({ header, tag, shared, owner: req.payload._id })
		.then(response => res.json(response))
		.catch(err => next(err))
})

module.exports = router
