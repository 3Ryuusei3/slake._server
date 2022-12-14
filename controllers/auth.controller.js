const User = require("./../models/User.model")
const Dashboard = require("./../models/Dashboard.model")
const Kanban = require("./../models/Kanban.model")
const Note = require("./../models/Notes.model")



const signup = async (req, res, next) => {

    try {
        const { email, password, username, imageUrl } = req.body

        const createdUser = await User.create({ email, password, username, imageUrl })

        const { _id } = createdUser
        const user = { email, username, _id, imageUrl }

        const createDashboard = await Dashboard.create({ owner: createdUser._id })
        const createKanban = await Kanban.create({ owner: createdUser._id })
        const createNote = await Note.create({ owner: createdUser._id })

        res.status(201).json({ user, createDashboard, createKanban, createNote })
    } catch (err) {
        next(err)
    }
}

const login = (req, res, next) => {

    const { email, password } = req.body

    if (email === "" || password === "") {
        res.status(400).json({ message: "Provide email or password" })
        return
    }

    User.findOne({ email })
        .then(foundUser => {
            if (foundUser && foundUser.validatePassword(password)) {
                res.status(200).json({ authToken: foundUser.signToken() })
            }
            else {
                res.status(401).json({ message: "Unable to authenticate the user" })
            }
        })
        .catch(err => next(err))
}


const verify = (req, res, next) => {
    res.status(200).json(req.payload)
}


const refreshToken = (req, res, next) => {

    User.findById(req.payload._id)
        .then((newToken) => {
            res.status(200).json({ refreshedToken: newToken.signToken() })
        })
        .catch(err => console.log(['Failed to sign new token', err]))
}

module.exports = {
    signup,
    login,
    verify,
    refreshToken

}