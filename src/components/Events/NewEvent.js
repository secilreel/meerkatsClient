import React from 'react';

export default function NewEvent (){
    return (
        <section className="event container">
            <div className="button-box">
                <button type="button">Close</button>
            </div>  
            <h2>New Event</h2>
            <form>
                <div className="eventName">
                    <label htmlFor="eventName">Name:</label>
                    <input required />
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
                <div className="button-box">
                <button type="submit">Create</button>
                </div>
            </form>      
        </section>
    );
}