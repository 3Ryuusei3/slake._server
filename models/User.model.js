const mongoose = require("mongoose")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

const userSchema = new mongoose.Schema(
	{
		email: {
			type: String,
			required: [true, 'Email is required'],
			unique: true,
			lowercase: [true, 'Email must be in lowercase'],
		},
		password: {
			type: String,
			required: [true, 'Password is required'],
			minlength: [5, 'Password must have at least 6 characters']
		},
		username: {
			type: String,
			required: [true, 'Username is required'],
		},
		imageUrl: {
			type: String,
			default: "https://res.cloudinary.com/dhws4e2ty/image/upload/v1670076098/kindpng_786207_intiwh.png",
		},
		role: {
			type: String,
			enum: ["USER", "USERPRO", "ADMIN"],
			default: "USER",
		},
	},
	{
		timestamps: true,
	}
)

userSchema.pre('save', function (next) {

	const saltRounds = 10
	const salt = bcrypt.genSaltSync(saltRounds)
	const hashedPassword = bcrypt.hashSync(this.password, salt)
	this.password = hashedPassword
	next()
})

userSchema.methods.validatePassword = function (candidatePassword) {

	return bcrypt.compareSync(candidatePassword, this.password)
}

userSchema.methods.signToken = function () {

	const { _id, username, email, imageUrl, role } = this
	const payload = { _id, username, email, imageUrl, role }

	const authToken = jwt.sign(
		payload,
		process.env.TOKEN_SECRET,
		{ algorithm: 'HS256', expiresIn: "12h" }
	)
	return authToken
}

module.exports = mongoose.model("User", userSchema)
