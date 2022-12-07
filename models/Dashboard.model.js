const mongoose = require("mongoose")

const dashboardSchema = new mongoose.Schema(
	{
		header: {
			image: {
				type: String,
				default: "https://res.cloudinary.com/dhws4e2ty/image/upload/v1670076521/gradienta-PRgmOiN9jIE-unsplash_nexkln.jpg",
			},
			icon: {
				type: String,
				default: "👀",
			},
			title: {
				type: String,
				default: "Your workspace",
			},
		},
		callout: {
			type: String,
		},
		todo: [
			{
				text: {
					type: String,
				},
				isDone: {
					type: Boolean,
					default: false,
				},
			},
		],
		owner: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "User",
		},
	},
	{
		timestamps: true,
	}
)

module.exports = mongoose.model("Dashboard", dashboardSchema)
