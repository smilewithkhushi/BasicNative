"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _native = require("@react-navigation/native");
var React = _interopRequireWildcard(require("react"));
var _warnOnce = _interopRequireDefault(require("warn-once"));
var _DrawerView = _interopRequireDefault(require("../views/DrawerView"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function DrawerNavigator(_ref) {
  let {
    id,
    initialRouteName,
    defaultStatus: customDefaultStatus,
    backBehavior,
    children,
    screenListeners,
    screenOptions,
    ...restWithDeprecated
  } = _ref;
  const {
    // @ts-expect-error: openByDefault is deprecated
    openByDefault,
    // @ts-expect-error: lazy is deprecated
    lazy,
    // @ts-expect-error: drawerContentOptions is deprecated
    drawerContentOptions,
    ...rest
  } = restWithDeprecated;
  let defaultScreenOptions = {};
  if (drawerContentOptions) {
    Object.assign(defaultScreenOptions, {
      drawerPosition: drawerContentOptions.drawerPosition,
      drawerType: drawerContentOptions.drawerType,
      swipeEdgeWidth: drawerContentOptions.edgeWidth,
      drawerHideStatusBarOnOpen: drawerContentOptions.hideStatusBar,
      keyboardDismissMode: drawerContentOptions.keyboardDismissMode,
      swipeMinDistance: drawerContentOptions.minSwipeDistance,
      overlayColor: drawerContentOptions.overlayColor,
      drawerStatusBarAnimation: drawerContentOptions.statusBarAnimation,
      gestureHandlerProps: drawerContentOptions.gestureHandlerProps
    });
    Object.keys(defaultScreenOptions).forEach(key => {
      if (defaultScreenOptions[key] === undefined) {
        // eslint-disable-next-line @typescript-eslint/no-dynamic-delete
        delete defaultScreenOptions[key];
      }
    });
    (0, _warnOnce.default)(drawerContentOptions, `Drawer Navigator: 'drawerContentOptions' is deprecated. Migrate the options to 'screenOptions' instead.\n\nPlace the following in 'screenOptions' in your code to keep current behavior:\n\n${JSON.stringify(defaultScreenOptions, null, 2)}\n\nSee https://reactnavigation.org/docs/drawer-navigator#options for more details.`);
  }
  if (typeof lazy === 'boolean') {
    defaultScreenOptions.lazy = lazy;
    (0, _warnOnce.default)(true, `Drawer Navigator: 'lazy' in props is deprecated. Move it to 'screenOptions' instead.\n\nSee https://reactnavigation.org/docs/drawer-navigator/#lazy for more details.`);
  }
  if (typeof openByDefault === 'boolean') {
    (0, _warnOnce.default)(true, `Drawer Navigator: 'openByDefault' is deprecated. Use 'defaultStatus' and set it to 'open' or 'closed' instead.\n\nSee https://reactnavigation.org/docs/drawer-navigator/#defaultstatus for more details.`);
  }
  const defaultStatus = customDefaultStatus !== undefined ? customDefaultStatus : openByDefault ? 'open' : 'closed';
  const {
    state,
    descriptors,
    navigation,
    NavigationContent
  } = (0, _native.useNavigationBuilder)(_native.DrawerRouter, {
    id,
    initialRouteName,
    defaultStatus,
    backBehavior,
    children,
    screenListeners,
    screenOptions,
    defaultScreenOptions
  });
  return /*#__PURE__*/React.createElement(NavigationContent, null, /*#__PURE__*/React.createElement(_DrawerView.default, _extends({}, rest, {
    defaultStatus: defaultStatus,
    state: state,
    descriptors: descriptors,
    navigation: navigation
  })));
}
var _default = (0, _native.createNavigatorFactory)(DrawerNavigator);
exports.default = _default;
//# sourceMappingURL=createDrawerNavigator.js.map