import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../Images/logo.jpg';

export default function Header (){
    return (
        <header role="banner">
          <section id="site">
            <div id="siteLogo" >
              <img src={logo} className="logo" alt="Logo of the site with meerkats huddled up" />
            </div>
            <Link to={'/'}>
            <div id="siteTitle" >
            <h1>Meerkats</h1>
            </div>
            </Link>
          </section>
        </header>
    );
}