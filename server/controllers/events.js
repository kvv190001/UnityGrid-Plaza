import { pool } from '../config/database.js'

const getAllEvents = async (req, res) => {
    try{
        const results = await pool.query('SELECT * FROM events ORDER BY id')
        res.status(200).json(results.rows)
    } catch(error){
        res.status(400).json({ error: error.message })
    }
}

const getEventById = async(req, res) => {
    try{
        const eventId = req.params.eventId
        const selectQuery = `
            SELECT * FROM events WHERE id=${eventId}
        `
        const results = await pool.query(selectQuery)
        res.status(200).json(results.rows[0])
    } catch(error){
        res.status(400).json({ error: error.message })
    }
}

const getEventsByLocation = async (req, res) => {
    try {
        const location = req.params.location
        const query = `SELECT * FROM events WHERE location = ${location} ORDER BY title ASC`
        const results = await pool.query(query)
        res.status(200).json(results.rows)
    }
    catch (error) {
        res.status(400).json({ error: error.message })
    }
  }

export default {
    getAllEvents,
    getEventById,
    getEventsByLocation
}