import React,{Component} from 'react';
import {Link} from 'react-router-dom';

export default class EventDetails extends Component {
    constructor(props) {
        super(props);
    this.state={
        event: this.props.event,
        participants: this.props.participants
        }
    }

    handleClickCloseButton=()=>{
        this.props.history.goBack()
    }

    render(){
        console.log(this.props)

    return (
        <section className="event container">
            <h2>{this.props.event.title}</h2>
            <div className="button-box">
                <button type="button" onClick={this.handleClickCloseButton}>Close</button>
            </div>
            <div className="event-box">
                    <img src={this.props.event.image} className="event-owner logo" alt="headshot of the event planner's account" />
                    <div className="event-details">
                        <label htmlFor="eventDescription">Event Description:</label>
                        <p>{this.props.event.details}</p>
                        <label htmlFor="eventVenue">Venue:</label>
                        <p>{this.props.event.place}</p>
                        <label htmlFor="eventDay">Day:</label>
                        <p>{this.props.event.meeting_day}</p>
                        <label htmlFor="eventTime">Time:</label>
                        <p>{this.props.event.meeting_time}</p>
                        <div className="attendees">
                            <label htmlFor="attendees">Participants:</label>
                            <ul>
                            {this.props.participants.map(participant =>
                            <Link to={`/status/${this.props.eventId}`}>
                            <li className="participant-box"
                            key={participant.id}
                            >
                            <img src={participant.image} className="attandees logo" alt="headshot of the attandee" />
                            {participant.user_name}: {participant.attending}
                            </li>
                            <br />
                            </Link>
                            )
                            }
                    
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="button-box">
                    <button type="button" className="js-remove-event-button">Remove Event</button>
                </div>        
            </section>
    );
}
}