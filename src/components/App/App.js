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
import PrivateRoute from '../Utils/PrivateRoute';
import PublicOnlyRoute from '../Utils/PublicOnlyRoute';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Header />
        <ErrorPage>
        <Switch>
          <PublicOnlyRoute exact path={'/'} component={Info} />
          <PublicOnlyRoute path={'/login'} component={LoginPage} />
          <PublicOnlyRoute path={'/register'} component={RegistrationPage} />
          <PrivateRoute path={'/new_event'} component={NewEvent} />
          <PrivateRoute exact path={'/events'} component={EventListPage} />
          <PrivateRoute exaact path={'/events/:id'} component={ExtendedEventPage} />
          <PrivateRoute path={'/status/:id'} component={EventInvitation} />
          <PrivateRoute path={'/friends'} component={Friends} />
          <Route component={NotFoundPage}/>
        </Switch>
        </ErrorPage>
      </div>
    );
  }
}

export default App;
