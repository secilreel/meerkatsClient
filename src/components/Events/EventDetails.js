import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import calendar from '../../Images/calendar.svg';
import clock from '../../Images/clock.svg';
import map from '../../Images/map.svg';
import EventListContext from '../../contexts/EventListContext';
import EventApiService from '../../services/event-api-services';

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

    static contextType = EventListContext;

    handleClickDeleteButton=e=>{
        e.preventDefault();
        EventApiService.deleteEvent(this.props.eventId)
        .then(()=>{
            this.context.removeEvent(this.props.event)
            this.props.history.goBack()
        })
      }

    render(){
        console.log(this.props.eventId)
        const date= new Date (this.props.event.meeting_day).toDateString();
    return (
        <section className="event container">
            <h2>{this.props.event.title}</h2>
            <div className="button-box">
                <button type="button" onClick={this.handleClickCloseButton}>Close</button>
            </div>
            <div className="event-box">
                    <img src={this.props.event.image} className="event-owner logo" alt="headshot of the event planner's account" />
                    <div className="event-details">
                        <p>{this.props.event.details}</p>
                        <div className="event-icon-box">
                        <img src={map} alt="clock icon" className="event-icons"/>
                        <div>{this.props.event.place}</div>
                        </div>
                        <div className="event-icon-box">
                        <img src={calendar} alt="calendar icon" className="event-icons" />
                        <p>{date}</p>
                        </div>
                        <div className="event-icon-box">
                        <img src={clock} alt="clock icon" className="event-icons"/>
                        <p>{this.props.event.meeting_time}</p>
                        </div>
                        <div className="attendees">
                            <ul>
                            {this.props.participants.map(participant =>
                            <Link to={`/status/${this.props.eventId}`} key={participant.id}>
                            <li className="participant-box"
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
                    <button type="button" onClick={this.handleClickDeleteButton}>Remove Event</button>
                </div>        
            </section>
    );
}
}