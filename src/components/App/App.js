import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Header from '../Header/Header';
import Info from '../Info/Info';
import LoginForm from '../LoginForm/LoginForm';
import NavBar from '../NavBar/NavBar';
import NewEvent from '../Events/NewEvent';
import EventDetails from '../Events/EventDetails';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Header />
        <div className="error container" hidden>
        </div>
        <Switch>
          <Route exact path={'/'} component={Info} />
          <Route path={'/login'} component={LoginForm} />
          <Route path={'/new_event'} component={NewEvent} />
          <Route path={'/event/:id'} component={EventDetails} />
        </Switch>
      </div>
    );
  }
}

export default App;
