import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';
import { EasyRouterContext } from './EasyRouterContext';
import { EasyRoute } from './EasyRoute';

export class EasyRouterView extends Component {
  constructor(props) {
    super(props);
  }

  static propTypes = {
    isRoot: PropTypes.bool,
    routes: PropTypes.array
  };

  render() {
    return (
      <EasyRouterContext.Consumer>
        {value => {
          const routes = value.routes;
          console.log(value.history.location);
          const $route = new EasyRoute(value);
          return (
            <Switch>
              {routes.map(route => {
                return (
                  <Route
                    key={route.path}
                    path={route.path}
                    render={props => <route.component $router={value} $route={$route} />}
                  />
                );
              })}
            </Switch>
          );
        }}
      </EasyRouterContext.Consumer>
    );
  }
}
