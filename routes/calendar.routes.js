
const router = require('express').Router()
const { isAuthenticated } = require('../middleware/jwt.middleware')

const { getCalendarByUserId, newCalendar, deleteCalendar } = require('../controllers/calendar.controller')



router.get("/", isAuthenticated, getCalendarByUserId)

router.post("/new", isAuthenticated, newCalendar)

router.delete("/delete/:id", isAuthenticated, deleteCalendar)







module.exports = router