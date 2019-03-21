import React from 'react';
import headshot from '../../Images/headshot.png';

export default function EventDetails (props){
    const event= props.event
    const participants = props.participants
    console.log("participants", props.participants)

    return (
        <section className="event container">
            <h2>{event.title}</h2>
            <div className="button-box">
                <button type="button" onClick={props.handleClickButton}>Close</button>
            </div>
            <div className="event-box">
                    <img src={headshot} className="event-owner logo" alt="headshot of the event planner's account" />
                    <div className="event-details">
                        <label htmlFor="eventDescription">Event Description:</label>
                        <p>{event.details}</p>
                        <label htmlFor="eventVenue">Venue:</label>
                        <p>{event.place}</p>
                        <label htmlFor="eventDay">Day:</label>
                        <p>{event.meeting_day}</p>
                        <label htmlFor="eventTime">Time:</label>
                        <p>{event.meeting_time}</p>
                        <div className="attendees">
                            <label htmlFor="attendees">Attending:</label>
                            <ul>
                            {participants.map(participant =>
                            <li 
                            key={participant.id}
                            > 
                            {participant.user_name}, {participant.attending}
                            </li>)
                            }
                    
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