const router = require("express").Router()

const { isAuthenticated } = require("../middleware/jwt.middleware")
const Dashboard = require("./../models/Dashboard.model")

const { deleteDashboard, getAllDashboard, updateDashboardHeader, getDashboardByUserId, newDashboard, updateDashboard } = require("../controllers/dashboard.controller")

router.get("/", isAuthenticated, getDashboardByUserId)

router.get("/list", getAllDashboard)

router.put("/update/header/:id", updateDashboardHeader)

router.put("/update/:id", updateDashboard)

router.delete("/delete/:id", isAuthenticated, deleteDashboard)

router.post("/new", isAuthenticated, newDashboard)

module.exports = router
