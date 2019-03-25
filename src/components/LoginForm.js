import React, {Component} from 'react';
import AuthApiService from '../services/auth-api-services';
import TokenService from '../services/token-service'; 
import {Link} from 'react-router-dom'

export default class LoginForm extends Component{
    static defaultProps = {
        onLoginSuccess: () => {}
    }
    state ={error: null};

    handleSubmitJWTAuth = e =>{
        e.preventDefault();
        this.setState({error: null});
        const {user_name, password} = e.target;

        AuthApiService.postLogin({
            user_name: user_name.value,
            password: password.value,
        })
        .then(res => {
            user_name.value = '';
            password.value = '';
            TokenService.saveAuthToken(res.authToken);
            this.props.onLoginSuccess();
        })
        .catch(res => {
            this.setState({error: res.error});
        })
    }

    render(){
        return(
            <div className="login container">
                <h2>Login</h2>
                <form onSubmit={
                    this.handleSubmitJWTAuth}>
                    <div className="login-box">
                    <div className="username">
                        <label htmlFor="loginUsername">User name:</label>
                        <input required name="user_name"/>
                    </div>
                    <div className="password">
                        <label htmlFor="loginPassword">Password:</label>
                        <input required name="password" type="password"/>
                    </div>
                    <div className="button-box">
                    <button type="submit" value="Submit">Login</button>
                    </div>
                    <div className="register">
                    <Link to={'/register'}>
                    <button type="submit" value="Submit">Register Here!</button>
                    </Link>
                    </div>
                    </div>
                </form>
            </div>
        );
    }
}