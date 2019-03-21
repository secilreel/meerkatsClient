import React, { Component } from 'react'

const EventListContext = React.createContext({
  eventList: [],
  error: null,
  setError: () => {},
  clearError: () => {},
  setEventList: () => {},
})
export default EventListContext

export class EventListProvider extends Component {
  state = {
    eventList: [],
    error: null,
  };

  setEventList = eventList => {
    this.setState({ eventList })
  }

  clearEventList = eventList => {
    this.setState({ eventList: [] })
  }


  setError = error => {
    console.error(error)
    this.setState({ error })
  }

  clearError = () => {
    this.setState({ error: null })
  }

  render() {
    const value = {
      eventList: this.state.eventList,
      error: this.state.error,
      setError: this.setError,
      clearError: this.clearError,
      setEventList: this.setEventList,
    }
    return (
      <EventListContext.Provider value={value}>
        {this.props.children}
      </EventListContext.Provider>
    )
  }
}
