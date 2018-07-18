import React, { Component } from 'react';

import { ReactEasyRouter } from '../../src';

class Page3 extends Component {
  render() {
    console.log(this.props);
    return <h1>Page 3</h1>;
  }
}

const routes = [
  { path: '/', component: () => <h1>Page Home</h1> },
  { path: '/page2', component: () => <h1>Page 2</h1> },
  { path: '/page3', component: Page3 },
  { path: '/:id', component: () => <h1>Page 4</h1> }
];

const router = new ReactEasyRouter({
  mode: 'history',
  routes
});

router.beforeEach((to, from, next) => {});

export { router };
