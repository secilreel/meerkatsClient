import React,{Component} from 'react';
import headshot from '../../Images/headshot.png';
import EventContext from '../../contexts/EventContext';
import EventApiService from '../../services/event-api-services'

export default class EventInvitation extends Component {
    static defaultProps = {
        match: { params: {} },
       }
    
      static contextType = EventContext

    componentDidMount() {
        const eventId = parseInt(this.props.match.params.id);
        console.log(eventId)
        EventApiService
            .getEvent(eventId)
            .then(this.context.setParticipants)
            .catch(this.context.setError)
}

    handleClickCloseButton=e=>{
        console.log("close button clicked")
        console.log(this.props)
        this.props.history.push('/events')
    }

    render(){
        console.log(this.props)

    return (
        <section className="event container">
            <h2>{this.event.title}</h2>
            <div className="button-box">
                <button type="button" onClick={this.handleClickCloseButton}>Close</button>
            </div>
            <div className="event-box">
                    <img src={headshot} className="event-owner logo" alt="headshot of the event planner's account" />
                    <div className="event-details">
                        <label htmlFor="eventDescription">Event Description:</label>
                        <p>{this.event.details}</p>
                        <label htmlFor="eventVenue">Venue:</label>
                        <p>{this.event.place}</p>
                        <label htmlFor="eventDay">Day:</label>
                        <p>{this.event.meeting_day}</p>
                        <label htmlFor="eventTime">Time:</label>
                        <p>{this.event.meeting_time}</p>
                        <div className="attending">
                            <label htmlFor="attendees">Can we count you in?</label>
                            <ul>
                                <li>Yes</li>
                                <li>Let me think!</li>
                                <li>No</li>
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