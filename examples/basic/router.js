import React, { Component } from 'react';

import { EasyRouter } from './lib';

class Page3 extends Component {
  render() {
    console.log(this.props);
    return <h1>Page 3</h1>;
  }
}

const routes = [
  { path: '/page2', component: () => <h1>Page 2</h1> },
  { path: '/page3', component: Page3 },
  { path: '/:id', component: () => <h1>Page 4</h1> },
  { path: '/', component: () => <h1>Page Home</h1> }
];

const router = new EasyRouter({
  mode: 'hash',
  routes
});

// router.beforeEach((to, from, next) => {});

export default router;
