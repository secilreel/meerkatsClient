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
  },

  addEvent(newEvent){
    return fetch(`${config.API_ENDPOINT}/events`, {
      method: 'POST',
      headers: {
        'authorization': `bearer ${TokenService.getAuthToken()}`,
        'content-type': 'application/json'
      },
      body: JSON.stringify(newEvent)
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },

  deleteEvent(id){
    return fetch(`${config.API_ENDPOINT}/events/${id}`, {
      method: 'DELETE',
      headers: {
        'authorization': `bearer ${TokenService.getAuthToken()}`,
      },
    })
      .then(res =>{
        if(!res.ok)
        throw new Error(res.status);
      })
      .catch(error => console.error({error}))
  },



  addEventParticipant(eventId, newParticipant){
    return fetch(`${config.API_ENDPOINT}/events/${eventId}/participants`, {
      method: 'POST',
      headers: {
        'authorization': `bearer ${TokenService.getAuthToken()}`,
        'content-type': 'application/json'
      },
      body: JSON.stringify(newParticipant)
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },

  updateEventParticipant(eventId, attending, parId) {
    return fetch(`${config.API_ENDPOINT}/events/${eventId}/participants/${parId}`, {
      method: 'PATCH',
      headers: {
        'content-type': 'application/json',
        'authorization': `bearer ${TokenService.getAuthToken()}`
      },
      body: JSON.stringify({
        attending,
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
