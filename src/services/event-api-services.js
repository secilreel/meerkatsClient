import config from '../config'
import TokenService from '../services/token-service'

const EventApiService = {

  getEvents() {
    return fetch(`${config.API_ENDPOINT}/events`, {
      headers: {
        'authorization': `bearer ${TokenService.getAuthToken()}`
      },
    })
      .then(res =>
         (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
      // .then(resjson => resjson)
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
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
    )
    // .then(resjson =>{
    //   console.log("second async", resjson)
    //   return resjson
    // })
  },

  addEvent(newEvent){
    return fetch(`${config.API_ENDPOINT}/events`, {
      method: 'POST',
      headers: {
        'authorization': `bearer ${TokenService.getAuthToken()}`
      },
      body: JSON.stringify(newEvent)
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
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
      .then(resjson =>console.log(resjson))
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
      .then(resjson =>console.log(resjson))
  }
}

export default EventApiService;
