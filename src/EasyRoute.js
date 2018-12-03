import { util } from './util';

export class EasyRoute {
  constructor(router) {
    this.history = router.history;
  }

  get location() {
    return this.history.location;
  }

  get path() {
    return this.location.pathname;
  }

  get params() {}

  get query() {
    const query = util.parseQuery(this.location.search);
    return query;
  }

  get hash() {
    const hash = util.parseHash(this.location.hash);
    return hash;
  }
  
  get fullPath(){
    return 
  }
}
