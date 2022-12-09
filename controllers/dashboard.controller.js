
const Dashboard = require("./../models/Dashboard.model")

const getDashboardByUserId = (req, res, next) => {

    Dashboard.find({ owner: req.payload._id })
        .then(response => {
            console.log(response)
            res.json(response)
        })
        .catch(err => next(err))
}


const getAllDashboard = (req, res, next) => {

    Dashboard.find()
        .then(response => res.json(response))
        .catch(err => next(err))
}


const newDashboard = (req, res, next) => {

    const { header, callout, todo } = req.body
    const { _id: owner } = req.payload

    Dashboard.create({ header, callout, todo, owner })
        .then(response => res.json(response))
        .catch(err => next(err))
}


const deleteDashboard = (req, res, next) => {

    const { _id: owner } = req.payload

    Dashboard.findOneAndDelete({ owner })
        .then(response => res.json(response))
        .catch(err => next(err))
}


const updateDashboard = (req, res, next) => {

    const { id: dashboard_id } = req.params
    const { todo, callout, header } = req.body

    Dashboard.findByIdAndUpdate(dashboard_id, { todo, callout, header }, { new: true })
        .then(response => res.json(response))
        .catch(err => next(err))
}

module.exports = {
    newDashboard,
    deleteDashboard,
    updateDashboard,
    getAllDashboard,
    getDashboardByUserId
}