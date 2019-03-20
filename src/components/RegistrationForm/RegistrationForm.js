import React, {Component} from 'react';
import AuthApiService from '../../services/auth-api-services';

export default class RegistrationForm extends Component{
    static defaultProps = {
        onRegistrationSuccess: () => {}
    }
}