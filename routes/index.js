module.exports = app => {
	const authRoutes = require("./auth.routes")
	app.use("/api/auth", authRoutes)

	const userRoutes = require("./user.routes")
	app.use("/api/user", userRoutes)

	const uploadRoutes = require("./upload.routes")
	app.use("/api/upload", uploadRoutes)

	const dashboardRoutes = require("./dashboard.routes")
	app.use("/api/dashboard", dashboardRoutes)

	const singleNoteRoutes = require("./singleNote.routes")
	app.use("/api/note", singleNoteRoutes)

	const notesRoutes = require("./notes.routes")
	app.use("/api/notes", notesRoutes)

	const kanbanRoutes = require("./kanban.routes")
	app.use("/api/kanban", kanbanRoutes)

	// const stripeRoutes = require("./stripe.routes")
	// app.use("/api/payment", stripeRoutes)
}
