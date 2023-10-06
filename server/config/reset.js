import { pool } from './database.js'
import './dotenv.js'
import eventData from '../data/events.js'
import locationData from '../data/locations.js'

const createEventsTable = async () => {
    try {
        const createTableQuery = `
            DROP TABLE IF EXISTS events;

            CREATE TABLE IF NOT EXISTS events (
                id SERIAL PRIMARY KEY,
                title VARCHAR(255) NOT NULL,
                date DATE NOT NULL,
                time TIME NOT NULL,
                location SERIAL NOT NULL,
                image VARCHAR(255) NOT NULL
        )`
        const res = await pool.query(createTableQuery)
    }
    catch (error) {
        console.error(error)
    }
}

const seedEventsTable = async () => {
    await createEventsTable()

    eventData.forEach((event) => {
        const insertQuery = {
            text: 'INSERT INTO events (title, date, time, location, image) VALUES ($1, $2, $3, $4, $5)'
        }
        const values = [
            event.title,
            event.date,
            event.time,
            event.location,
            event.image
        ]
        pool.query(insertQuery, values, (err, res) => {
            if (err) {
                console.error('⚠️ error inserting event', err)
                return
            }

            console.log(`✅ ${event.title} added successfully`)
        })
    })
}

const createLocationsTable = async () => {
    try {
        const createTableQuery = `
            DROP TABLE IF EXISTS locations;

            CREATE TABLE IF NOT EXISTS locations (
                id SERIAL PRIMARY KEY,
                name VARCHAR(255) NOT NULL,
                address VARCHAR(255) NOT NULL,
                city VARCHAR(255) NOT NULL,
                state VARCHAR(255) NOT NULL,
                zip SERIAL NOT NULL,
                image VARCHAR(255) NOT NULL
        )`
        const res = await pool.query(createTableQuery)
    }
    catch (error) {
        console.error(error)
    }
}

const seedLocationsTable = async () => {
    await createLocationsTable()

    locationData.forEach((location) => {
        const insertQuery = {
            text: 'INSERT INTO locations (name, address, city, state, zip, image) VALUES ($1, $2, $3, $4, $5, $6)'
        }
        const values = [
            location.name,
            location.address,
            location.city,
            location.state,
            location.zip,
            location.image
        ]
        pool.query(insertQuery, values, (err, res) => {
            if (err) {
                console.error('⚠️ error inserting location', err)
                return
            }

            console.log(`✅ ${location.name} added successfully`)
        })
    })
}

const reset = async() => {
    await seedEventsTable()
    await seedLocationsTable()
}

export default reset