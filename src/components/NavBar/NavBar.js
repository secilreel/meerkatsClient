import React from 'react';
import account from '../../Images/account.jpg';

export default function NavBar (){
    return (
        <nav role="navigation" className="nav-links">
            <img src={account} className="account logo" alt="image of the accountholder" />
        </nav>
    );
}