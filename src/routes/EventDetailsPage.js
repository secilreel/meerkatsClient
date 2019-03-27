import React, { Component } from 'react'
import EventApiService from '../services/event-api-services'
import EventDetails from '../components/Events/EventDetails'
import EventContext from '../contexts/EventContext'

export default class EventDetailsPage extends Component {
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

  componentWillUnmount() {
    this.context.clearEvent()
  }

  render() {
    const { event } = this.context
    const participants = this.context.participants
    const eventId = parseInt(this.props.match.params.id);
    
    return (
      <div className='ExtendedEventPage'>
        <EventDetails 
        event={event}
        eventId={eventId}
        participants={participants}
        owner={event.event_owner}
        image={event.image}
        {...this.props}
        />
      </div>
    )
  }
}
