import React, {Component} from 'react';

export default class LoginForm extends Component{

    state ={error: null};

    render(){
        return(
            <div className="login container">
                <h2>Login</h2>
                <form>
                    <div className="login-box">
                    <div className="username">
                        <label htmlFor="loginUsername">User name:</label>
                        <input required name="username"/>
                    </div>
                    <div className="password">
                        <label htmlFor="loginPassword">Password:</label>
                        <input required name="password" type="password"/>
                    </div>
                    <div className="button-box">
                    <button type="submit">Login</button>
                    </div>
                    </div>
                </form>
            </div>
        );
    }
}