import queryString from 'query-string';

export const util = {
  /**
   * 是否在浏览器运行
   */
  get inBrowser() {
    return typeof window !== 'undefined';
  },

  /**
   * 是否支持pushstate
   */
  get supportsPushState() {
    return this.inBrowser && this._getSupportPushState();
  },

  /**
   * 通过ua和history判断是否支持pushState方法
   */
  _getSupportPushState() {
    const ua = window.navigator.userAgent;

    if (
      (ua.indexOf('Android 2.') !== -1 || ua.indexOf('Android 4.0') !== -1) &&
      ua.indexOf('Mobile Safari') !== -1 &&
      ua.indexOf('Chrome') === -1 &&
      ua.indexOf('Windows Phone') === -1
    ) {
      return false;
    }
    return window.history && 'pushState' in window.history;
  },
  /**
   * 转换QueryString
   * @param {*} search 
   */
  parseQuery(search) {
    return queryString.parse(search);
  },
  /**
   * 转换Hash
   * @param {*} hash 
   */
  parseHash(hash) {
    return queryString.parse(hash);
  }
};
