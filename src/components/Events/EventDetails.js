import React from 'react';

export default function EventDetails (){
    return (
        <section className="event container">
            <h2>Event 2</h2>
            <div className="event-box">
                    <img src="resources/account.jpg" className="event-owner logo" alt="headfshot of the event planner's account" />
                    <div className="event-details">
                        <label htmlFor="eventDescription">Event Description:</label>
                        <p>Let's eat pho tonight</p>
                        <label htmlFor="eventVenue">Venue:</label>
                        <p>Pho Basil</p>
                        <div className="attendees">
                            <label htmlFor="attendees">Attending:</label>
                            <option>Friend 1</option>
                            <option>Friend 2</option>
                            <option>Friend 3</option>
                            <option>Friend 4</option>
                        </div>
                    </div>
                </div>
                <div className="remove-event">
                    <button type="button" className="js-remove-event-button">Remove Event</button>
                </div>        
            </section>
    );
}