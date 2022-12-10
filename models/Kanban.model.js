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
		lanes: [
			{
				title: {
					type: String,
				},
				id: {
					type: String,
				},
				cards: [
					{
						title: {
							type: String,
						},
						description: {
							type: String,
						}
					},
				],
			}
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

kanbanSchema.pre("save", function (next) {
	if (!this.lanes || this.lanes.length === 0) {
		this.lanes.push({
			"title": "To do",
			"id": "TODO"
		})
		this.lanes.push({
			"title": "Doing",
			"id": "DOING"
		})
		this.lanes.push({
			"title": "Done",
			"id": "DONE"
		})
	}
	next()
})

module.exports = mongoose.model("Kanban", kanbanSchema)
