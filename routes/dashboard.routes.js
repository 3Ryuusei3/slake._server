const router = require("express").Router()

const { isAuthenticated } = require("../middleware/jwt.middleware")
const Dashboard = require("./../models/Dashboard.model")

router.get("/", isAuthenticated, (req, res, next) => {
	Dashboard.find({ owner: req.payload._id })
		.then(response => {
			console.log(response)
			res.json(response)
		})
		.catch(err => next(err))
})

router.get("/list", (req, res, next) => {
	Dashboard.find()
		.then(response => res.json(response))
		.catch(err => next(err))
})



router.put("/update/image/:id", (req, res, next) => {
	const { id: dashboard_id } = req.params
	const { image } = req.body

	const header = {
		image: image
	}

	Dashboard.findByIdAndUpdate(dashboard_id, { header }, { new: true })
		.then(response => res.json(response))
		.catch(err => next(err))
})

router.put("/update/:id", (req, res, next) => {
	const { id: dashboard_id } = req.params
	const { todo, callout, header } = req.body

	Dashboard.findByIdAndUpdate(dashboard_id, { todo, callout, header }, { new: true })
		.then(response => res.json(response))
		.catch(err => next(err))
})

router.delete("/delete/:id", isAuthenticated, (req, res, next) => {
	//const { id: user_id } = req.params

	Dashboard.findOneAndDelete({ owner: req.payload._id })
		.then(response => res.json(response))
		.catch(err => next(err))
})

router.post("/new", isAuthenticated, (req, res, next) => {

	const { header, callout, todo } = req.body

	Dashboard.create({ header, callout, todo, owner: req.payload._id })
		.then(response => res.json(response))
		.catch(err => next(err))
})

module.exports = router
