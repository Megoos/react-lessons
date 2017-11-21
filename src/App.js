import React, { Component } from 'react';
import { Link, Route, Redirect, Switch } from 'react-router-dom';
import './App.css';
import { addListener, removeListener, isAuthorized } from './AuthorizeApi';

import Auth from './Auth';
import Private from './Private';
import Public from './Public';
import Home from './Home';

class App extends Component {
  state = {
    isAuthorized
  };

  componentDidMount() {
    addListener(this.handleAuthorize);
  }

  componentWillUnmount() {
    removeListener(this.handleAuthorize);
  }

  handleAuthorize = isAuthorized => {
    this.setState({ isAuthorized });
  };

  render() {
    const { isAuthorized } = this.state;

    return (
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/auth">Войти</Link>
            </li>
            <li>
              <Link to="/private">Секретная страница</Link>
            </li>
            <li>
              <Link to="/public">Публичная страница</Link>
            </li>
            <li>
              <Link to="/">Главная</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route exact path="/" component={Home} />
          {!isAuthorized ? (
            <Redirect from="/private" to="/auth" />
          ) : (
            <Route path="/private" component={Private} />
          )}
          <Route
            path="/auth"
            render={props => <Auth isAuthorized={isAuthorized} {...props} />}
          />
          <Route path="/public" component={Public} />
          <Redirect from="*" to="/" />
        </Switch>
      </div>
    );
  }
}

export default App;
