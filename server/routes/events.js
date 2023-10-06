import express from 'express'

// import controllers for events and locations
import EventsController from '../controllers/events.js'


const router = express.Router()

// define routes to get events and locations
router.get('/events', EventsController.getAllEvents)
router.get('/events/:eventId', EventsController.getEventById)
router.get('/events/location/:location', EventsController.getEventsByLocation)

export default router

