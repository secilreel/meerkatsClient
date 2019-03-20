import React, {Component} from 'react';
import account from '../../Images/account.jpg';
import {Link} from 'react-router-dom';

export default class Event extends Component{
    render(){
    const { event } = this.props
    return (
      <Link to={`/events/:${event.id}`}>
        <section className="event container">
            <h2>Event Name</h2>
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
      </Link>
);
    }
}