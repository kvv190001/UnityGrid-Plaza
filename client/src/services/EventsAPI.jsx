import axios from "axios"

const eventsURL = 'http://localhost:3000/events'

const getAllEvents = () => axios.get(eventsURL)
const getEventsById = (id) => axios.get(`${eventsURL}/${id}`)
const getEventsByLocation = (locationId) => axios.get(`${eventsURL}/location/${locationId}`)

export default {
    getAllEvents,
    getEventsById,
    getEventsByLocation
}