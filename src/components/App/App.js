import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Header from '../Header/Header';
import Info from '../Info/Info';
import NavBar from '../NavBar/NavBar';
import NewEvent from '../Events/NewEvent';
import EventDetails from '../Events/EventDetails';
import ErrorPage from '../ErrorPage/ErrorPage';
import EventList from '../Events/EventList';
import Friends from '../Friends/Friends';
import LoginPage from '../../routes/LoginPage';
import RegistrationPage from '../../routes/RegistrationPage';
import NotFoundPage from '../../routes/NotFoundPage';

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
          <Route exact path={'/events'} component={EventList} />
          <Route path={'/events/:id'} component={EventDetails} />
          <Route path={'/friends'} component={Friends} />
          <Route component={NotFoundPage}/>
        </Switch>
        </ErrorPage>
      </div>
    );
  }
}

export default App;
