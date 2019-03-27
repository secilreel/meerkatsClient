import React, { Component } from 'react'
import EventApiService from '../services/event-api-services'
import Event from '../components/Events/Event'
import EventContext from '../contexts/EventContext'

export default class EventPage extends Component {
   static defaultProps = {
    match: { params: {} },
   }
  static contextType = EventContext;

  componentDidMount() {
    const eventId = parseInt(this.props.match.params.id);
    this.context.clearError()
    EventApiService.getEvent()
      .then(this.context.setEvent)
      .catch(this.context.setError)
    EventApiService.getEventParticipants(eventId)
    .then(this.context.setParticipants)
    .catch(this.context.setError)
  }

  componentWillUnmount() {
    this.context.clearEvent()
  }

  render() {
    const {event} = this.context
    return (
      <div className='EventListPage'>
        <Event event={event}
        {...this.props}/>
      </div>
    )
  }
}
