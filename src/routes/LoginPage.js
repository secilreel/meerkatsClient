import React, { Component } from 'react'
import LoginForm from '../components/LoginForm/LoginForm'

export default class LoginPage extends Component {
  static defaultProps = {
    location: {},
    history: {
      push: () => {},
    },
  }

  handleLoginSuccess = () => {
    const { history } = this.props
    history.push('/events')
  }

  render() {
    return (
      <div className='LoginPage'>
        <h2>Login</h2>
        <LoginForm
          onLoginSuccess={this.handleLoginSuccess}
        />
      </div>
    )
  }
}