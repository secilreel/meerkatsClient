import config from '../config'
import TokenService from './token-service'

const FriendApiService = {

  getFriends(id) {
    return fetch(`${config.API_ENDPOINT}/friends/${id}`, {
      headers: {
        'authorization': `bearer ${TokenService.getAuthToken()}`
      },
    })
      .then(res => 
        (!res.ok)
        ? res.json().then(e => Promise.reject(e))
        : res.json()
      )
      .then(resjson => {
        return resjson})
  },

  searchFriends(query) {
    return fetch(`${config.API_ENDPOINT}/friends?name=${query}`, {
      headers: {
        'authorization': `bearer ${TokenService.getAuthToken()}`
      },
    })
      .then(res =>
         (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
      .then(resjson => resjson)
  },

}

export default FriendApiService;
