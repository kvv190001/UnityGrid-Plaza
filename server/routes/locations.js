import express from 'express'

// import controllers for events and locations
import LocationsController from '../controllers/locations.js'


const router = express.Router()

// define routes to get events and locations
router.get('/locations', LocationsController.getAllLocations)
router.get('/locations/:locationId', LocationsController.getLocationById)

export default router