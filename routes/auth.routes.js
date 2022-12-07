const router = require("express").Router()

const bcrypt = require("bcryptjs")
const User = require("./../models/User.model")
const Dashboard = require("./../models/Dashboard.model")
const Kanban = require("./../models/Kanban.model")
const Note = require("./../models/Notes.model")

const saltRounds = 10

const jwt = require("jsonwebtoken")

const { isAuthenticated } = require("./../middleware/jwt.middleware")

router.post("/signup", async (req, res, next) => {
	try {
		const { email, password, username, imageUrl } = req.body

		if (password.length < 5) {

			res.status(400).json({ message: "Password must have at least 6 characters" })
			return
		}

		const foundUser = await User.findOne({ email })

		if (foundUser) {
			res.status(400).json({ message: "This email already exists." })
			return
		}

		const salt = bcrypt.genSaltSync(saltRounds)
		const hashedPassword = bcrypt.hashSync(password, salt)

		const createdUser = await User.create({ email, password: hashedPassword, username, imageUrl })

		const { _id } = createdUser
		const user = { email, username, _id, imageUrl }

		const createDashboard = await Dashboard.create({ owner: createdUser._id })
		const createKanban = await Kanban.create({ owner: createdUser._id })
		const createNote = await Note.create({ owner: createdUser._id })

		res.status(201).json({ user, createDashboard, createKanban, createNote })
	} catch (err) {
		console.log(err)
		res.status(400).json({ message: "Email is required" })
	}
})

router.post("/login", (req, res, next) => {
	const { email, password } = req.body

	if (email === "" || password === "") {
		res.status(400).json({ message: "Provide email or password" })
		return
	}

	User.findOne({ email })
		.then(foundUser => {
			if (!foundUser) {
				res.status(401).json({ message: "Credentials are incorrect." })
				return
			}
			if (bcrypt.compareSync(password, foundUser.password)) {
				const { _id, email, username } = foundUser
				const payload = { _id, email, username }
				const authToken = jwt.sign(payload, process.env.TOKEN_SECRET, { algorithm: "HS256", expiresIn: "12h" })
				res.status(200).json({ authToken })
			} else {
				res.status(401).json({ message: "Unable to authenticate the user" })
			}
		})
		.catch(err => {
			console.log(err)
			res.status(500).json({ message: "Internal Server Error" })
		})
})

router.get("/verify", isAuthenticated, (req, res, next) => {
	//console.log("ESTAMOS EN LA RUTA Y TODO EN ORDEN", req.payload)
	res.status(200).json(req.payload)
})

module.exports = router
