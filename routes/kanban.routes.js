const router = require("express").Router()

const { getKanbanByUserId,
    getAllKanban,
    updateKanban,
    updateKanbanHeader,
    deleteKanban,
    createKanban } = require("../controllers/kanban.controller")

const { isAuthenticated } = require("../middleware/jwt.middleware")

router.post("/new", createKanban)

router.get("/", isAuthenticated, getKanbanByUserId)

router.put("/update/:id", isAuthenticated, updateKanban)

router.put("/update/header/:id", isAuthenticated, updateKanbanHeader)

router.delete("/delete/:id", isAuthenticated, deleteKanban)

router.get("/list", getAllKanban)

module.exports = router
