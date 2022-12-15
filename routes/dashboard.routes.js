const router = require("express").Router()

const { isAuthenticated } = require("../middleware/jwt.middleware")


const { deleteDashboard,
    getAllDashboard,
    updateDashboardHeader,
    updateCallOut,
    getDashboardByUserId,
    newDashboard,
    updateDashboard,
    updateTodo } = require("../controllers/dashboard.controller")

router.get("/", isAuthenticated, getDashboardByUserId)

router.get("/list", getAllDashboard)

router.put("/update/header/:id", isAuthenticated, updateDashboardHeader)

router.put("/update/callout/:id", isAuthenticated, updateCallOut)

router.put("/update/todo/:id", isAuthenticated, updateTodo)

router.put("/update/:id", isAuthenticated, updateDashboard)

router.delete("/delete/:id", isAuthenticated, deleteDashboard)

router.post("/new", newDashboard)

module.exports = router
