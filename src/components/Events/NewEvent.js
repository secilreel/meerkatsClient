import React from 'react';

export default function NewEvent (){
    return (
        <section className="event container">
            <h2>New Event</h2>
            <div className="button-box">
                <button type="button">Close</button>
            </div>  
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
                        <option value="friend1">Friend 1</option>
                        <option value="friend2">Friend 2</option>
                        <option value="friend3">Friend 3</option>
                        <option value="friend4">Friend 4</option>
                    </select>
                </div>
                <div className="button-box">
                <button type="submit">Create</button>
                </div>
            </form>      
        </section>
    );
}