import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import EventApiService from '../../services/event-api-services';
import calendar from '../../Images/calendar.svg';
import clock from '../../Images/clock.svg';
import map from '../../Images/map.svg';

export default class Event extends Component{
    handleClickDeleteButton=e=>{
        e.preventDefault();
        console.log(this.props.id);
        EventApiService.deleteEvent(this.props.id)
        // .then(this.props.history.push('/events'))
      }

    render(){
    const event = this.props;
    return (
      <Link to={`/events/${event.id}`}>
        <section className="event container">
            <h2>{event.title}</h2>
            <div className="event-box">
                <img src={event.image} className="event-owner logo" alt="headshot of the event planner" />
                <div className="event-summary">
                    <div className="event-icon-box">
                    <img src={calendar} alt="calendar icon" className="event-icons" />
                    <p>{`${event.day}`}</p>
                    </div>
                    <div className="event-icon-box" >
                    <img src={clock} alt="clock icon" className="event-icons"/>
                    <p>{`${event.time}`}</p>
                    </div>
                    <div className="event-icon-box">
                    <img src={map} alt="clock icon" className="event-icons"/>
                    <p>{`${event.place}`}</p>
                    </div>
                </div>
            </div>
            <div className="button-box">
                <button type="button" onClick={this.handleClickDeleteButton}>Remove Event</button>
            </div>        
        </section>
    </Link>
);
    }
}