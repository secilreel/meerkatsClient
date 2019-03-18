import React from 'react';
import {Link} from 'react-router-dom';
import account from '../../Images/account.jpg';
import plus from '../../Images/plus.svg';

export default function NavBar (){
    return (
        <nav role="navigation" className="nav-links">
            <Link to={'/new_event'}>
            <img src={plus} className="account logo" alt="plus sign"/>
            </Link>
            <Link to={'/login'}>
            <img src={account} className="account logo" alt="headshot of the account holder"/>
            </Link>
        </nav>
    );
}