import React from 'react';
import Event from './Event';
import {Link} from 'react-router-dom';

export default function EventList (props){
    return (
    <div className="events">
    <section className="add-event">
        <Link to={'/new_event'}>
        <button type="button" className="js-add-event-button">Add Event</button>
        </Link>
    </section>
    <div className="events-list">
        {props.eventList.map(event => 
        <Event 
        key={event.id}
        id={event.id}
        title={event.title}
        day={event.meeting_day}
        time={event.meeting_time}
        place={event.place}
        owner={event.event_owner}
        image={event.image}
        />)}
    </div>
</div>
);
    }