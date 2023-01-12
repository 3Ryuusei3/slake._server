
const router = require('express').Router()
const { isAuthenticated } = require('../middleware/jwt.middleware')

const { getCalendarByUserId,
    newCalendar,
    deleteCalendar,
    updateCalendarHeader,
    updateEvent } = require('../controllers/calendar.controller')



router.get("/", isAuthenticated, getCalendarByUserId)

router.put("/update/event/:id", updateEvent)

router.post("/new", isAuthenticated, newCalendar)

router.put("/update/header/:id", isAuthenticated, updateCalendarHeader)

router.delete("/delete/:id", isAuthenticated, deleteCalendar)


module.exports = router
