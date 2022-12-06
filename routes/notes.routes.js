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

router.put("/update/:id", (req, res) => {
	const { id: note_id } = req.params
	const { block, header } = req.body

	Note.findByIdAndUpdate(note_id, { block, header }, { new: true })
		.then(response => res.json(response))
		.catch(err => console.log(err))
})

router.delete("/deletemany/:id", (req, res) => {
	const { id: user_id } = req.params

	Note.deleteMany({ owner: user_id })
		.then(response => res.json(response))
		.catch(err => console.log(err))
})

router.delete("/delete/:id", (req, res) => {
	const { id: note_id } = req.params

	Note.findByIdAndDelete(note_id)
		.then(response => res.json(response))
		.catch(err => console.log(err))
})

router.post("/new", (req, res) => {

	const { header, tag, shared, owner } = req.body

	Note.create({ header, tag, shared, owner })
		.then(response => res.json(response))
		.catch(err => console.log(err))
})

module.exports = router
