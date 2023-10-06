import React, { useState, useEffect } from 'react'
import Event from '../components/Event'
import EventsAPI from '../services/EventsAPI'
import '../css/LocationEvents.css'

const Events = () => {
    const [events, setEvents] = useState([])

    useEffect(() => {
        (async () => {
            try {
                let eventsData = await EventsAPI.getAllEvents()
                eventsData = eventsData.data
                //console.log(eventsData)
                setEvents(eventsData)
            } catch (error) {
                throw error
            }
        })()
    }, [])

    return (
        <div className='location-events'>
            <main>
                {
                    events && events.length > 0 ? events.map((event, index) =>
                        <Event
                            key={event.id}
                            id={event.id}
                            title={event.title}
                            date={event.date}
                            time={event.time}
                            image={event.image}
                        />
                    ) : <h3>{'No events found 😔'}</h3>
                }
            </main>
        </div>
    )
}

export default Events
