const mongoose = require("mongoose")

const userSchema = new mongoose.Schema(
	{
		email: {
			type: String,
			required: true,
			unique: true,
			lowercase: true,
		},
		password: {
			type: String,
			required: true,
		},
		username: {
			type: String,
			required: true,
		},
		imageUrl: {
			type: String,
			default: "https://res.cloudinary.com/dhws4e2ty/image/upload/v1670076098/kindpng_786207_intiwh.png",
		},
		role: {
			type: String,
			enum: ["User", "UserPro", "Admin"],
		},
	},
	{
		timestamps: true,
	}
)

module.exports = mongoose.model("User", userSchema)
