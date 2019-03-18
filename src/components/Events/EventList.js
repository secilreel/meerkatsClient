import React from 'react';
import headshot from '../../Images/headshot.png';
import account from '../../Images/account.jpg';

export default function EventList (){
    return (
    <div className="events">
    <section className="add-event">
        <button type="button" className="js-add-event-button">Add Event</button>
    </section>
    <div className="events-list">
        <section className="event container">
            <h2>Event 1</h2>
            <div className="event-box">
                <img src={account} className="event-owner logo" alt="headshot of the event planner" />
                <div className="event-summary">
                    <p>Summary</p>
                    <p>Time, place, and # of participants</p>
                </div>
            </div>
            <div className="button-box">
                <button type="button">Remove Event</button>
            </div>        
        </section>
        <section className="event container">
            <h2>Event 2</h2>
            <div className="event-box">
                <img src={headshot} className="event-owner logo" alt="headshot of event planner"/>
                <div className="event-summary">
                    <p>Summary</p>
                    <p>Time, place, and # of participants</p>
                </div>
            </div>
            <div className="button-box">
                <button type="button">Remove Event</button>
            </div>        
        </section>
    </div>
</div>
);
    }