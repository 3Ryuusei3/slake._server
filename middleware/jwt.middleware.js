const { expressjwt } = require("express-jwt")

const getTokenFromHeaders = req => {
	if (req.headers.authorization && req.headers.authorization.split(" ")[0] === "Bearer") {
		const token = req.headers.authorization.split(" ")[1]

		console.log("Me pillo el tokenaazo nanoooo --------", token)

		return token
	}
	return null
}

const isAuthenticated = expressjwt({
	secret: process.env.TOKEN_SECRET,
	algorithms: ["HS256"],
	requestProperty: "payload",
	getToken: getTokenFromHeaders,
})

module.exports = { isAuthenticated }
