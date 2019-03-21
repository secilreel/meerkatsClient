import React, { Component } from 'react';
import RegistrationForm from '../components/RegistrationForm/RegistrationForm.js';

export default class RegistrationPage extends Component{
    static defaultProps ={
        history:{
            push:() => {},
        },
    }

    handleRegistrationSuccess = user => {
        this.props.history.push('/login')
    }

    render(){
        return(
            <div className='RegistrationPage'>
                <RegistrationForm
                onRegistrationSuccess={this.handleRegistrationSuccess}
                />
            </div>
        );
    }
}