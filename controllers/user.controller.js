const User = require('./../models/User.model')

const updateUser = (req, res, next) => {
    const { email, username, imageUrl, role } = req.body

    User.findByIdAndUpdate(req.payload._id, { email, username, imageUrl, role }, { new: true })
        .then(response => res.json(response))
        .catch(err => next(err))
}

const getAllUser = (req, res, next) => {
    User.find()
        .then(response => res.json(response))
        .catch(err => next(err))
}

module.exports = {
    updateUser,
    getAllUser,
}