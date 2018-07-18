import { createBrowserHistory, createHashHistory } from 'history';
import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { Link, Route, Router, Switch } from 'react-router-dom';

import { router } from './router';

const history = createBrowserHistory();

const App = (
  <Router history={history}>
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
      <Switch>
        {router.routes.map(route => (
          <Route
            key={route.path}
            exact
            path={route.path}
            component={(a, b, c, d, e) => {
              console.log(a, b, c, d, e);
              return <route.component router={router} route={a.match} />;
            }}
          />
        ))}
      </Switch>
      {/* <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/topics" component={() => router.routes[0].component} /> */}
    </div>
  </Router>
);
ReactDOM.render(App, document.getElementById('root'));
