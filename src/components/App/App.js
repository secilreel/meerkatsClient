import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Header from '../Header/Header';
import Info from '../Info/Info';
import LoginForm from '../LoginForm/LoginForm';
import NavBar from '../NavBar/NavBar';
import NewEvent from '../Events/NewEvent';
import EventDetails from '../Events/EventDetails';
import ErrorPage from '../ErrorPage/ErrorPage';
import EventList from '../Events/EventList';
import Friends from '../Friends/Friends';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Header />
        <ErrorPage>
        <Switch>
          <Route exact path={'/'} component={Info} />
          <Route path={'/login'} component={LoginForm} />
          <Route path={'/new_event'} component={NewEvent} />
          <Route exact path={'/event'} component={EventList} />
          <Route path={'/event/:id'} component={EventDetails} />
          <Route path={'/friends'} component={Friends} />
        </Switch>
        </ErrorPage>
      </div>
    );
  }
}

export default App;
