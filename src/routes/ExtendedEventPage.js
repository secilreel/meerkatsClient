import React, { Component } from 'react'
import EventApiService from '../services/event-api-services'
import EventDetails from '../components/Events/EventDetails'
import EventContext from '../contexts/EventContext'

export default class ExtendedEventPage extends Component {
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

    return (
      <div className='ExtendedEventPage'>
        <EventDetails 
        event={event}
        participants={participants}
        />
      </div>
    )
  }
}
