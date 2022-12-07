const mongoose = require("mongoose")

const userSchema = new mongoose.Schema(
	{
		email: {
			type: String,
			required: [true, 'This field is required'],
			unique: true,
			lowercase: [true, 'Email must be in lowercase'],
		},
		password: {
			type: String,
			required: true,
		},
		username: {
			type: String,
			required: [true, 'This field is required'],
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

module.exports = mongoose.model("User", userSchema)
