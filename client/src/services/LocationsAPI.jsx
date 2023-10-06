import axios from "axios"

const locationsURL = 'http://localhost:3000/locations'

const getAllLocations = () => axios.get(locationsURL)
const getLocationById = (id) => axios.get(`${locationsURL}/${id}`)

export default {
    getAllLocations,
    getLocationById,
}