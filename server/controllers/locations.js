import { pool } from '../config/database.js'

const getAllLocations = async (req, res) => {
    try{
        const results = await pool.query('SELECT * FROM locations ORDER BY id')
        res.status(200).json(results.rows)
    } catch(error){
        res.status(400).json({error: error.message})
    }
}

const getLocationById = async (req, res) => {
    try{
        const locationId = req.params.locationId 
        const selectQuery = `
            SELECT * FROM locations WHERE id=${locationId}
        `
        const results = await pool.query(selectQuery)
        res.status(200).json(results.rows[0])
    } catch(error){
        res.status(400).json({error: error.message})
    }
}

export default{
    getLocationById,
    getAllLocations
}