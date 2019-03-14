import React from 'react';
import logo from '../../Images/logo.jpg';

export default function Header (){
    return (
        <header role="banner">
          <section id="site">
            <div id="siteLogo" >
              <img src={logo} className="logo" alt="Logo of the site with meerkats huddled up" />
            </div>
            <div id="siteTitle" >
            <h1>Meerkats</h1>
            </div>
          </section>
          <p id="tagline">Huddle up with friends!</p>
        </header>
    );
}