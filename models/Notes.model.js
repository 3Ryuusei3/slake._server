const mongoose = require("mongoose")

const noteSchema = new mongoose.Schema(
	{
		header: {
			image: {
				type: String,
				default: "https://res.cloudinary.com/dhws4e2ty/image/upload/v1670077002/patrick-tomasso-Oaqk7qqNh_c-unsplash_hczjdw.jpg",
			},
			icon: {
				type: String,
				default: "📕",
			},
			title: {
				type: String,
				default: "All your notes",
			},
		},
		notes: [
			{
				singleNote: {
					type: mongoose.Schema.Types.ObjectId,
					ref: "SingleNote",
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

module.exports = mongoose.model("Note", noteSchema)
