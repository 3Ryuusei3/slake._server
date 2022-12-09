const router = require("express").Router()
const { getKanbanByUserId, getAllKanban, updateKanban, deleteKanban, createKanban } = require('../controllers/kanban.controller')
const { isAuthenticated } = require("../middleware/jwt.middleware")

router.post("/new", isAuthenticated, createKanban)

router.get("/", isAuthenticated, getKanbanByUserId)

router.put("/update/:id", updateKanban)

router.delete("/delete/:id", isAuthenticated, deleteKanban)

router.get("/list", getAllKanban)

module.exports = router
