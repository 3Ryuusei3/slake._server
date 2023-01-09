const Calendar = require("./../models/Calendar.model")

const getCalendarByUserId = (req, res, next) => {

    Calendar.find({ owner: req.payload._id })
        .then(response => {
            res.json(response)
        })
        .catch(err => next(err))
}

const newCalendar = (req, res, next) => {

    const { header, callout, todo } = req.body
    const { _id: owner } = req.payload

    Calendar.create({ header, callout, todo, owner })
        .then(response => res.json(response))
        .catch(err => next(err))

}

const deleteCalendar = (req, res, next) => {

    const { _id: owner } = req.payload

    Dashboard.findOneAndDelete({ owner })
        .then(response => res.json(response))
        .catch(err => next(err))
}

module.exports = {
    getCalendarByUserId,
    newCalendar,
    deleteCalendar
}


