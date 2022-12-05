const mongoose = require("mongoose")

const kanbanSchema = new mongoose.Schema(
	{
		header: {
			image: {
				type: String,
				default: "https://res.cloudinary.com/dhws4e2ty/image/upload/v1670077714/kindpng_786207_kvzqol.png",
			},
			icon: {
				type: String,
				default: "📊",
			},
			title: {
				type: String,
				default: "Kanban",
			},
		},
		column: [
			{
				number: {
					type: Number,
				},
				title: {
					type: String,
					enum: ["To do", "Doing", "Done", "Delete"],
				},
				cards: [
					{
						text: {
							type: String,
						},
					},
				],
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

module.exports = mongoose.model("Kanban", kanbanSchema)
