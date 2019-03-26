import React, { Component } from 'react'
import EventApiService from '../services/event-api-services'
import EventList from '../components/Events/EventList'
import EventListContext from '../contexts/EventListContext'

export default class EventListPage extends Component {
  static contextType = EventListContext;

  static defaultProps = {
    match: { params: {} },
   }

  componentDidMount() {
    this.context.clearError()
    EventApiService.getEvents()
      .then(this.context.setEventList)
      .catch(this.context.setError)

  }

  render() {
    const { eventList } = this.context
    return (
      <div className='EventListPage'>
        <EventList eventList={eventList}/>
      </div>
    )
  }
}
