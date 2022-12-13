const mongoose = require("mongoose")

const singleNoteSchema = new mongoose.Schema(
	{
		header: {
			image: {
				type: String,
				default: "https://res.cloudinary.com/dhws4e2ty/image/upload/v1670077002/patrick-tomasso-Oaqk7qqNh_c-unsplash_hczjdw.jpg",
			},
			icon: {
				type: String,
				default: "📘",
			},
			title: {
				type: String,
				default: "New Note",
			},
		},
		tag: {
			type: String,
			enum: ["Diary", "Work", "School", "Travel", "Social", "Other"],
			default: "Diary",
		},
		block: [
			{
				htmlTag: {
					type: String,
					required: true,
				},
				content: {
					type: String,
					required: false,
				},
				style: {
					type: String,
					required: false,
					default: "none",
				},
				type: {
					type: String,
					required: false,
					default: "none",
				},
				imageUrl: {
					type: String,
					required: false,
				},
			},
		],
		shared: {
			type: Boolean,
			default: false,
		},
		owner: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "User",
		},
	},
	{
		timestamps: true,
	}
)

singleNoteSchema.pre("save", function (next) {
	if (!this.block || this.block.length === 0) {
		this.block.push({
			htmlTag: "h1",
			content: "Note header",
		})
	}
	next()
})

module.exports = mongoose.model("SingleNote", singleNoteSchema)
