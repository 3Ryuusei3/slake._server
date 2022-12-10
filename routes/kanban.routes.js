const router = require("express").Router()

const Kanban = require("./../models/Kanban.model")

const { getKanbanByUserId, getAllKanban, updateKanban, updateKanbanHeader, deleteKanban, createKanban } = require("../controllers/kanban.controller")

const { isAuthenticated } = require("../middleware/jwt.middleware")

router.post("/new", isAuthenticated, createKanban)

router.get("/", isAuthenticated, getKanbanByUserId)

router.put("/update/:id", updateKanban)

router.put("/update/header/:id", updateKanbanHeader)

router.delete("/delete/:id", isAuthenticated, deleteKanban)

router.get("/list", getAllKanban)

module.exports = router
