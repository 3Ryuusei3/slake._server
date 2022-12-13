const Dashboard = require("./../models/Dashboard.model")

const getDashboardByUserId = (req, res, next) => {

	Dashboard.find({ owner: req.payload._id })
		.then(response => {
			res.json(response)
		})
		.catch(err => next(err))
}

const getAllDashboard = (req, res, next) => {

	Dashboard.find()
		.then(response => res.json(response))
		.catch(err => next(err))
}

const updateDashboardHeader = (req, res, next) => {

	const { id: dashboard_id } = req.params
	const newData = req.body

	Dashboard.findById(dashboard_id)
		.then(data => {
			return Dashboard.findByIdAndUpdate(dashboard_id, { header: { ...data.header, ...newData } }, { new: true })
		})
		.then(response => res.json(response))
		.catch(err => next(err))
}

const updateCallOut = (req, res, next) => {

	const { id: dashboard_id } = req.params
	const { callout } = req.body

	Dashboard.findByIdAndUpdate(dashboard_id, { callout })
		.then(response => res.json(response))
		.catch(err => next(err))
}

const updateTodo = (req, res, next) => {

	const { id: dashboard_id } = req.params
	const newData = req.body


	Dashboard.findByIdAndUpdate(dashboard_id, { todo: [...newData] }, { new: true })
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
	getDashboardByUserId,
	updateDashboardHeader,
	updateCallOut,
	updateTodo,
}
