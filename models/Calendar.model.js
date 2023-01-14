const mongoose = require("mongoose")

const calendarSchema = new mongoose.Schema(
	{
		header: {
			image: {
				type: String,
				default: "https://res.cloudinary.com/dhws4e2ty/image/upload/v1670077002/patrick-tomasso-Oaqk7qqNh_c-unsplash_hczjdw.jpg",
			},
			icon: {
				type: String,
				default: "🗓",
			},
			title: {
				type: String,
				default: "My calendar",
			},
		},
		events: [
			{
				title: {
					type: String,
					required: true,
				},
				description: {
					type: String,
					required: false,
				},
				startDate: {
					type: Number,
					required: false,
				},
				finishDate: {
					type: Number,
					required: false,
				},
				tag: {
					type: String,
					default: "Diary",
				},
				time: {
					type: String,
					required: false,
					default: "00:00",
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

module.exports = mongoose.model("Calendar", calendarSchema)
