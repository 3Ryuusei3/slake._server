const router = require("express").Router()

const { isAuthenticated } = require("../middleware/jwt.middleware")
const Dashboard = require("./../models/Dashboard.model")

const { deleteDashboard,
    getAllDashboard,
    updateDashboardHeader,
    updateCallOut,
    getDashboardByUserId,
    newDashboard,
    updateDashboard } = require("../controllers/dashboard.controller")

router.get("/", isAuthenticated, getDashboardByUserId)

router.get("/list", getAllDashboard)

router.put("/update/header/:id", isAuthenticated, updateDashboardHeader)

router.put("/update/callout/:id", updateCallOut)

router.put("/update/:id", updateDashboard)

router.delete("/delete/:id", isAuthenticated, deleteDashboard)

router.post("/new", isAuthenticated, newDashboard)

module.exports = router
