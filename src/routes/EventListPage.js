import React, { Component } from 'react'
import EventApiService from '../services/event-api-services'
import EventList from '../components/Events/EventList'
import EventListContext from '../contexts/EventListContext'

export default class EventListPage extends Component {
  static contextType = EventListContext;

  componentDidMount() {
    this.context.clearError()
    EventApiService.getEvents()
      .then(this.context.setEventList)
      .catch(this.context.setError)
    console.log(this.context.state)
  }

  componentWillUnmount() {
    this.context.clearEvent()
  }

  render() {
    console.log(this.context)
    const { eventList } = this.context
    return (
      <section className='EventListPage'>
        <EventList />
      </section>
    )
  }
}
