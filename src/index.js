import { EasyRouter } from './EasyRouter';
import { EasyRouterProvider } from './EasyRouterProvider';
import { EasyRouterView } from './EasyRouterView';

export { EasyRouter, EasyRouterProvider, EasyRouterView };

// declare type RouteConfig = {
//   path: string,
//   component?: Component,
//   name?: string, // 命名路由
//   components?: { [name: string]: Component }, // 命名视图组件
//   redirect?: string | Location | Function,
//   props?: boolean | string | Function,
//   alias?: string | Array<string>,
//   children?: Array<RouteConfig>, // 嵌套路由
//   beforeEnter?: (to: Route, from: Route, next: Function) => void,
//   meta?: any,

//   // 2.6.0+
//   caseSensitive?: boolean, // 匹配规则是否大小写敏感？(默认值：false)
//   pathToRegexpOptions?: Object // 编译正则的选项
// };
