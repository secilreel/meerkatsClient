import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import EventApiService from '../../services/event-api-services';

export default class Event extends Component{
    handleClickRemoveButton=e=>{
        e.preventDefault();
        EventApiService.deleteEvent(this.props.id)
        // .then(this.props.history.push('/events'))
      }

    render(){
    const event = this.props
    return (
      <Link to={`/events/${event.id}`}>
        <section className="event container">
            <h2>{event.title}</h2>
            <div className="event-box">
                <img src={event.image} className="event-owner logo" alt="headshot of the event planner" />
                <div className="event-summary">
                    <p>hosted by: {`${event.owner}`}</p>
                    <p>day: {`${event.day}`}</p>
                    <p>time: {`${event.time}`}</p>
                    <p>venue: {`${event.place}`}</p>
                </div>
            </div>
            <div className="button-box">
                <button type="button">Remove Event</button>
            </div>        
        </section>
    </Link>
);
    }
}