import React, { Component } from 'react';
import { Router } from 'react-router-dom';
import { EasyRouterContext } from './EasyRouterContext';

import PropTypes from 'prop-types';

export class EasyRouterProvider extends Component {
  static propTypes = {
    router: PropTypes.shape({
      mode: PropTypes.oneOf(['hash', 'history', 'hash']),
      history: PropTypes.any
    }).isRequired
  };

  history = null;

  constructor(props) {
    super(props);
  }

  render() {
    const { router } = this.props;
    return (
      <EasyRouterContext.Provider value={router}>
        <Router history={router.history}>{this.props.children}</Router>
      </EasyRouterContext.Provider>
    );
  }
}
