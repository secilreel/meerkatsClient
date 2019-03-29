import React, {Component} from 'react';
import AuthApiService from '../services/auth-api-services';

export default class RegistrationForm extends Component{
    static defaultProps = {
        onRegistrationSuccess: () => {}
    }

    state = { error: null }

    handleSubmit = e => {
        e.preventDefault()
        const { full_name, user_name, password } = e.target
        this.setState({ error: null })
            AuthApiService.postUser({
            user_name: user_name.value,
            password: password.value,
            full_name: full_name.value,
        })
            .then(user => {
                full_name.value = ''
                user_name.value = ''
                password.value = ''
                this.props.onRegistrationSuccess()
                })
        .catch(res => {
        this.setState({ error: res.error })
        }) 
    }

    render(){
        return(
            <div className="registration container">
                <h2>Register</h2>
                <form onSubmit={
                    this.handleSubmit}>
                    <div className="registration-box">
                    <div className="full_name">
                        <label htmlFor="registrationFullName">Full name:</label>
                        <input required name="full_name"/>
                    </div>
                    <div className="username">
                        <label htmlFor="loginUsername">User name:</label>
                        <input required name="user_name"/>
                    </div>
                    <div className="password">
                        <label htmlFor="loginPassword">Password:</label>
                        <input required name="password" type="password"/>
                    </div>
                    <div className="button-box">
                    <button type="submit" value="Submit">Register</button>
                    </div>
                    </div>
                </form>
            </div>
        )
    }
}