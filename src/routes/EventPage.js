import React, { Component } from 'react'
import EventApiService from '../services/event-api-services'
import Event from '../components/Events/Event'
import EventContext from '../contexts/EventContext'

export default class EventPage extends Component {
  static contextType = EventContext;

  componentDidMount() {
    this.context.clearError()
    EventApiService.getEvent()
      .then(this.context.setEvent)
      .catch(this.context.setError)
    console.log(this.context)
  }

  componentWillUnmount() {
    this.context.clearEvent()
  }

  render() {
    console.log("event context", this.context)
    const event = this.context
    return (
      <div className='EventListPage'>
        <Event event={event} />
      </div>
    )
  }
}
