import React from 'react';
import headshot from '../../Images/headshot.png';

export default function EventDetails (props){
    const event= props.event
    console.log("participants", props.participants)

    return (
        <section className="event container">
            <h2>{event.title}</h2>
            <div className="event-box">
                    <img src={headshot} className="event-owner logo" alt="headshot of the event planner's account" />
                    <div className="event-details">
                        <label htmlFor="eventDescription">Event Description:</label>
                        <p>{event.details}</p>
                        <label htmlFor="eventVenue">Venue:</label>
                        <p>{event.place}</p>
                        <label htmlFor="eventVenue">Day:</label>
                        <p>{event.meeting_day}</p>
                        <label htmlFor="eventVenue">Time:</label>
                        <p>{event.meeting_time}</p>
                        <div className="attendees">
                            <label htmlFor="attendees">Attending:</label>
                            <ul>
                                <li>Friend 1</li>
                                <li>Friend 2</li>
                                <li>Friend 3</li>
                                <li>Friend 4</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="button-box">
                    <button type="button" className="js-remove-event-button">Remove Event</button>
                </div>        
            </section>
    );
}