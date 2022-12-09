const router = require("express").Router()

const Kanban = require("./../models/Kanban.model")

const { getKanbanByUserId, getAllKanban, updateKanban, deleteKanban, createKanban } = require("../controllers/kanban.controller")

const { isAuthenticated } = require("../middleware/jwt.middleware")

router.post("/new", isAuthenticated, createKanban)

router.get("/", isAuthenticated, getKanbanByUserId)

router.put("/update/:id", updateKanban)

router.put("/update/image/:id", (req, res, next) => {
	const { id: kanban_id } = req.params
	const { image } = req.body

	const header = {
		image: image,
	}

	Kanban.findByIdAndUpdate(kanban_id, { header }, { new: true })
		.then(response => res.json(response))
		.catch(err => next(err))
})

router.delete("/delete/:id", isAuthenticated, deleteKanban)

router.get("/list", getAllKanban)

module.exports = router
