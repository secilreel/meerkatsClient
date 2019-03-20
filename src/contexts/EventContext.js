import React, { Component } from 'react'

export const nullEvent = {}

const EventContext = React.createContext({
  event: nullEvent,
  participant: [],
  error: null,
  setError: () => {},
  clearError: () => { },
  setEvent: () => {},
  deleteEvent: () => {},
  setParticipants: () => {},
  updateParticipant: () => {},
})

export default EventContext

export class EventProvider extends Component {
  state = {
    event: nullEvent,
    error: null,
  };

  setError = error => {
    console.error(error)
    this.setState({ error })
  }

  clearError = () => {
    this.setState({ error: null })
  }

  setEvent = event => {
    this.setState({ event })
  }

  deleteEvent = () => {
    this.setEvent(nullEvent)
  }

  setParticipants = participant => {
    this.setState([...this.state.participants], participant)
  }

  render() {
    const value = {
      event: this.state.event,
      participants: this.state.participants,
      error: this.state.error,
      setError: this.setError,
      clearError: this.clearError,
      setEvent: this.setEvent,
      setParticipants: this.setReviews,
      deleteEvent: this.deleteEvent,
    }
    return (
      <EventContext.Provider value={value}>
        {this.props.children}
      </EventContext.Provider>
    )
  }
}
