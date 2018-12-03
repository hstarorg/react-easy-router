import { createBrowserHistory, createHashHistory } from 'history';
import React, { Component } from 'react';
import { Link, Route, Switch } from 'react-router-dom';

import { EasyRouterProvider, EasyRouterView } from './lib';
import router from './router';

const history = createBrowserHistory();

export class App extends Component {
  render() {
    return (
      <EasyRouterProvider router={router}>
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/page2">Page 2</Link>
            </li>
            <li>
              <Link to="/page3">Page 3</Link>
            </li>
            <li>
              <Link to="/page4">Page /:id</Link>
            </li>
          </ul>
          <hr />
          <EasyRouterView />
        </div>
      </EasyRouterProvider>
    );
  }
}
