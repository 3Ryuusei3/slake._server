module.exports = app => {
	const authRoutes = require("./auth.routes")
	app.use("/api/auth", authRoutes)

	const dashboardRoutes = require("./dashboard.routes")
	app.use("/api/dashboard", dashboardRoutes)

	const notesRoutes = require("./notes.routes")
	app.use("/api/notes", notesRoutes)

	const kanbanRoutes = require("./kanban.routes")
	app.use("/api/kanban", kanbanRoutes)

	const userRoutes = require("./user.routes")
	app.use("/api/user", userRoutes)
}
