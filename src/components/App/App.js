import React, { Component } from 'react';
import './App.css';
import Header from '../Header/Header';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div class="events">
          <div class="error container" hidden>
          </div>
          <div class="description container">
              <p>Meerkat is designed to simplify event planning amongst friends</p>
              <p>Without the clutter as comments, photos, etc, Meerkat helps organizers to keep track of participants and share the event details quickly. Meerkats makes planning fun and social again. So, get together with friends, be it at a restaurant, girls night out, cabin rental, or playdates and let Meerkats help you out in keeping things organized!</p>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
