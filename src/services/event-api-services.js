import config from '../config'
import TokenService from '../services/token-service'

const EventApiService = {

  getEvents() {
    return fetch(`${config.API_ENDPOINT}/events`, {
      headers: {
      },
    })
      .then(res =>{
        console.log(res.json())
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      }
      )
  },

  getEvent(eventId) {
    return fetch(`${config.API_ENDPOINT}/events/${eventId}`, {
      headers: {
        'authorization': `bearer ${TokenService.getAuthToken()}`
      },
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },

  getEventParticipants(eventId) {
    return fetch(`${config.API_ENDPOINT}/events/${eventId}/participants`, {
      headers: {
        'authorization': `bearer ${TokenService.getAuthToken()}`
      },
    })
      .then(res =>{
        console.log(res)
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
    })
  },

  addEventParticipant(eventId){
    return fetch(`${config.API_ENDPOINT}/events/${eventId}/participants`, {
      method: 'POST',
      headers: {
        'authorization': `bearer ${TokenService.getAuthToken()}`
      },
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },

  updateEventParticipant(eventId, parId, attending) {
    return fetch(`${config.API_ENDPOINT}/events/${eventId}/participants/${parId}`, {
      method: 'PATCH',
      headers: {
        'content-type': 'application/json',
        'authorization': `bearer ${TokenService.getAuthToken()}`
      },
      body: JSON.stringify({
        attending: attending,
      }),
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  }
}

export default EventApiService;
