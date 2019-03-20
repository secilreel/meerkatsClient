import React, { Component } from 'react'
import EventApiService from '../services/event-api-services'
import EventList from '../components/Events/EventList'

export default class EventListPage extends Component {

  componentDidMount() {
    EventApiService.getEvents()
      .catch(this.context.setError)
  }

  render() {
    const { error } = this.context
    return (
      <section className='EventListPage'>
        <EventList />
      </section>
    )
  }
}
