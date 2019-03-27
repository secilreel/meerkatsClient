import React,{Component} from 'react';
import EventContext from '../../contexts/EventContext';
import EventApiService from '../../services/event-api-services'
import TokenService from '../../services/token-service';

export default class EventInvitation extends Component {
    static defaultProps = {
        match: { params: {} },
       }
    
      static contextType = EventContext

    componentDidMount() {
        const eventId = parseInt(this.props.match.params.id);
        EventApiService
            .getEvent(eventId)
            .then(this.context.setEvent)
            .catch(this.context.setError)
        EventApiService
        .getEventParticipants(eventId)
        .then(this.context.setParticipants)
        .catch(this.context.setError)
}

    handleClickCloseButton=e=>{
        this.props.history.push('/events')
    }

    onSubmit(e) {
        e.preventDefault();
        const {status} = e.target;
        const participants =this.context.participants;
        console.log(participants)
        const eventId = parseInt(this.props.match.params.id);
        let userId=parseInt(TokenService.parseJwt());
        console.log('invitation userId', userId)
        for (let i=0; i<participants.length; i++){
        if(participants[i].user_id === userId){
            console.log("user was already invited")
          EventApiService.updateEventParticipant(eventId, status.value)
          .then(console.log("updated", userId))
        //   this.props.history.push('/events')
        }
        else{
            console.log("user was not invited to this event")
            let newParticipant={
                user_id: userId, 
                events_id: eventId, 
                attending: status.value
            }
            console.log(newParticipant)
          EventApiService.addEventParticipant(eventId, newParticipant)
          .then(console.log("added", userId))
        //   this.props.history.push('/events')
        }
      }
    }

    render(){
        const event= this.context.event;
        const date =new Date(event.meeting_day).toDateString();
        console.log(this.context);
        console.log('Event Invitation userId', TokenService.parseJwt());
    return (
        <section className="event container">
            <h2>{event.title}</h2>
            <div className="button-box">
                <button type="button" onClick={this.handleClickCloseButton}>Close</button>
            </div>
            <div className="event-box">
                    <img src={event.image} className="event-owner logo" alt="headshot of the event planner's account" />
                    <div className="event-details">
                        <label htmlFor="eventDescription">Event Description:</label>
                        <p>{event.details}</p>
                        <label htmlFor="eventDay">Day:</label>
                        <p>{date}</p>
                        <label htmlFor="eventTime">Time:</label>
                        <p>{event.meeting_time}</p>
                        <label htmlFor="eventVenue">Venue:</label>
                        <p>{event.place}</p>
                        <div className="status">
                            <label htmlFor="status">Can we count you in?</label>
                            <form onSubmit={e => this.onSubmit(e)}>
                                <select name="status">
                                <option value="coming">Yes</option>
                                <option value="pending">Let me think!</option>
                                <option value="declined">No</option>
                                </select>
                                <div className="button-box">
                                    <button type="submit">Update Attendance</button>
                                </div>   
                            </form>
                        </div>
                    </div>
                    </div>    
            </section>
    );
}
}