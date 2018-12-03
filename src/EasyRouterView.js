import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { EasyRouterContext } from './EasyRouterContext';

export class EasyRouterView extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <EasyRouterContext.Consumer>
        {value => {
          const routes = value.routes;
          return (
            <Switch>
              {routes.map(route => {
                return (
                  <Route key={route.path} path={route.path} render={props => <route.component $router={value} />} />
                );
              })}
            </Switch>
          );
        }}
      </EasyRouterContext.Consumer>
    );
  }
}
