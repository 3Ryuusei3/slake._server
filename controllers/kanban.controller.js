const Kanban = require('../models/Kanban.model')

const createKanban = (req, res, next) => {
    const { header, column } = req.body
    Kanban.create({ header, column, owner: req.payload._id })
        .then(response => res.json(response))
}
const getKanbanByUserId = (req, res, next) => {
    Kanban.find({ owner: req.payload._id })
        .then(response => res.json(response))
        .catch(err => next(err))
}
const updateKanban = (req, res, next) => {
    const { id: kanban_id } = req.params
    const { header, column } = req.body

    Kanban.findByIdAndUpdate(kanban_id, { header, column }, { new: true })
        .then(response => res.json(response))
        .catch(err => next(err))
}

const deleteKanban = (req, res, next) => {

    Kanban.findOneAndDelete({ owner: req.payload._id })
        .then(response => res.json(response))
        .catch(err => next(err))
}

const getAllKanban = (req, res, next) => {
    Kanban.find()
        .then(response => res.json(response))
        .catch(err => next(err))
}


module.exports = {
    getKanbanByUserId,
    getAllKanban,
    updateKanban,
    deleteKanban,
    createKanban
}