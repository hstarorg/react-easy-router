import React, { Component } from 'react';

import { EasyRouter } from './lib';

class Page3 extends Component {
  constructor(props) {
    super(props);
    debugger;
  }
  render() {
    return <h1>Page 3</h1>;
  }
}

class Page3_1 extends Component {
  render() {
    return <h1>Page 3 - 1</h1>;
  }
}

class Page3_2 extends Component {
  render() {
    return <h1>Page 3 - 2</h1>;
  }
}

const routes = [
  { path: '/page2', component: () => <h1>Page 2</h1> },
  {
    path: '/page3',
    component: Page3,
    children: [{ path: 's1', component: Page3_1 }, { path: 's2', component: Page3_2 }]
  },
  { path: '/:id', component: () => <h1>Page 4</h1> },
  { path: '/', component: () => <h1>Page Home</h1> }
];

const router = new EasyRouter({
  mode: 'history',
  // mode: 'hash',
  routes
});

// router.beforeEach((to, from, next) => {});

export default router;
