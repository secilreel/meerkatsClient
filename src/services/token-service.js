import config from '../config'

const TokenService = {
  saveAuthToken(token) {
    window.sessionStorage.setItem(config.TOKEN_KEY, token)
  },
  getAuthToken() {
    return window.sessionStorage.getItem(config.TOKEN_KEY)
  },
  clearAuthToken() {
    window.sessionStorage.removeItem(config.TOKEN_KEY)
  },
  hasAuthToken() {
    return !!TokenService.getAuthToken()
  },
  makeBasicAuthToken(userName, password) {
    return window.btoa(`${userName}:${password}`)
  },
  parseJwt(){
   let token= window.sessionStorage.getItem(config.TOKEN_KEY);
   console.log(token)
   let parsed = Buffer.from(token, 'base64')
    .toString()
    .split(':');
    console.log(parsed)
  }
}

export default TokenService
