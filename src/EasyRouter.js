import { createBrowserHistory, createMemoryHistory, createHashHistory } from 'history';
import { util } from './util';

export class EasyRouter {
  /**
   *
   * @param {object} options
   * @param {object} options.mode 配置路由模式。可选值: "hash" | "history" | "abstract"
   * @param {object} options.fallback 是否允许自动降级，只有配置为false，才不允许降级
   * @param {object} options.routes 路由列表
   */
  constructor(options) {
    this.options = options;
    let mode = options.mode || 'hash';
    // 判断是否允许降级和是否需要降级
    this.fallback = mode === 'history' && !util.supportsPushState && options.fallback !== false;
    if (this.fallback) {
      mode = 'hash';
    }
    if (!util.inBrowser) {
      mode = 'abstract';
    }
    this.mode = mode;
    this.base = options.base || '/';
    // 创建history对象
    this.history = this._createHistory(this.mode, this.base);
    this.routes = options.routes || [];
    // 初始化callback数组
    this.beforeEachCallbacks = [];
    this.afterEachCallbacks = [];
    this.history.listen((location, action) => {
      console.log(location, action);
      return false;
    });
  }

  _createHistory(mode, basename) {
    switch (mode) {
      case 'history':
        return createBrowserHistory({ basename });
      case 'hash':
        return createHashHistory({ basename });
      case 'abstract':
        return createMemoryHistory();
      default:
        if (process.env.NODE_ENV !== 'production') {
          throw new Error(`invalid mode: ${mode}`);
        }
    }
  }

  /**
   * 在每次变化时执行
   */
  beforeEach(fn) {}

  /**
   * 在每次路由变化完成后执行
   */
  onChanged() {}

  /**
   * Push路由
   * @param {*} path
   * @param {*} state
   */
  push(path, state) {
    this.history.push(path, state);
  }

  /**
   * 替换路由
   * @param {*} path
   * @param {*} state
   */
  replace(path, state) {
    this.history.replace(path, state);
  }

  go(n) {
    this.history.go(n);
  }

  /**
   * 后退
   */
  goBack() {
    this.history.goBack();
  }

  /**
   * 前进
   */
  goForward() {
    this.history.goForward();
  }
}
