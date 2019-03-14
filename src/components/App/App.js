import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Header from '../Header/Header';
import Info from '../Info/Info';
import LoginForm from '../LoginForm/LoginForm';
import NavBar from '../NavBar/NavBar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Header />
        <Switch>
          <Route exact path={'/'} component={Info} />
          <Route exact path={'/login'} component={LoginForm} />
        </Switch>
      </div>
    );
  }
}

export default App;
