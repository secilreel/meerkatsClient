import React from 'react';
import Event from './Event';

export default function EventList (){
    return (
    <div className="events">
    <section className="add-event">
        <button type="button" className="js-add-event-button">Add Event</button>
    </section>
    <div className="events-list">
        <Event/>
    </div>
</div>
);
    }