const router = require("express").Router()

const { isAuthenticated } = require("../middleware/jwt.middleware")
const Dashboard = require("./../models/Dashboard.model")

const { deleteDashboard,
	getAllDashboard,
	getDashboardByUserId,
	newDashboard,
	updateDashboard } = require('../controllers/dashboard.controller')

router.get("/", isAuthenticated, getDashboardByUserId)

router.get("/list", getAllDashboard)

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

router.put("/update/:id", updateDashboard)

router.delete("/delete/:id", isAuthenticated, deleteDashboard)

router.post("/new", isAuthenticated, newDashboard)

module.exports = router
