import React from 'react';

export default function NewEvent (){
    return (
        <section classNameName="event container">
        <div className="close-new-event">
                <button type="button" className="js-close-new-event-button">Close</button>
        </div>  
        <h2>New Event</h2>
        <form>
            <div className="eventName">
                <label htmlFor="eventName">Event Name:</label>
                <input placeholder="New Event" required />
            </div>
            <div className="eventDescription">
                <label htmlFor="description">Description:</label>
                <input type="text" />
            </div>
            <div className="attendees">
                <select multiple className="invited-friends">
                        <option>Friend 1</option>
                        <option>Friend 2</option>
                        <option>Friend 3</option>
                        <option>Friend 4</option>
                </select>
            </div>
            <button type="submit">Create</button>
        </form>      
    </section>
    );
}