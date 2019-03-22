import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Header from '../Header';
import Info from '../Info';
import NavBar from '../NavBar';
import NewEvent from '../Events/NewEvent';
import ErrorPage from '../ErrorPage';
import Friends from '../Friends';
import LoginPage from '../../routes/LoginPage';
import RegistrationPage from '../../routes/RegistrationPage';
import NotFoundPage from '../../routes/NotFoundPage';
import EventListPage from '../../routes/EventListPage';
import ExtendedEventPage from '../../routes/ExtendedEventPage';
import EventInvitation from '../Events/EventInvitation';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Header />
        <ErrorPage>
        <Switch>
          <Route exact path={'/'} component={Info} />
          <Route path={'/login'} component={LoginPage} />
          <Route path={'/register'} component={RegistrationPage} />
          <Route path={'/new_event'} component={NewEvent} />
          <Route exact path={'/events'} component={EventListPage} />
          <Route exaact path={'/events/:id'} component={ExtendedEventPage} />
          <Route path={'events/:id/status'} component={EventInvitation} />
          <Route path={'/friends'} component={Friends} />
          <Route component={NotFoundPage}/>
        </Switch>
        </ErrorPage>
      </div>
    );
  }
}

export default App;
