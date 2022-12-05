const router = require("express").Router()

const Note = require("./../models/Notes.model")

router.get("/list", (req, res) => {
	Note.find()
		.then(response => res.json(response))
		.catch(err => console.log(err))
})

router.get("/shared", (req, res) => {
	Note.find({ shared: true })
		.then(response => res.json(response))
		.catch(err => console.log(err))
})

router.get("/list/:id", (req, res) => {
	const { id: user_id } = req.params
	Note.find({ owner: user_id })
		.then(response => res.json(response))
		.catch(err => console.log(err))
})

router.get("/:id", (req, res) => {
	const { id: note_id } = req.params

	Note.findById(note_id)
		.then(response => res.json(response))
		.catch(err => console.log(err))
})

router.post("/update/:id", (req, res) => {
	const { id: note_id } = req.params
	const { block, header } = req.body

	Note.findByIdAndUpdate(note_id, { block, header }, { new: true })
		.then(response => res.json(response))
		.catch(err => console.log(err))
})

router.post("/deletemany/:id", (req, res) => {
	const { id: user_id } = req.params

	Note.deleteMany({ owner: user_id })
		.then(response => res.json(response))
		.catch(err => console.log(err))
})

router.post("/delete/:id", (req, res) => {
	const { id: note_id } = req.params

	Note.findByIdAndDelete(note_id)
		.then(response => res.json(response))
		.catch(err => console.log(err))
})

router.post("/new", (req, res) => {
	Note.create(req.body)
		.then(response => res.json(response))
		.catch(err => console.log(err))
})

module.exports = router
