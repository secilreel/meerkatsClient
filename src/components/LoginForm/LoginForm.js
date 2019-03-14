import React, {Component} from 'react';

export default class LoginForm extends Component{

    state ={error: null};

    render(){
        const { error } =this.state;
        return(
            <div className="login container">
                <h2>Login</h2>
                <form>
                    <div className="username">
                        <label htmlFor="loginUsername">User name</label>
                        <input required name="username"/>
                    </div>
                    <div className="password">
                        <label htmlFor="loginPassword">Password</label>
                        <input required name="password" type="password"/>
                    </div>
                    <button type="submit">Login</button>
                </form>
            </div>
        );
    }
}