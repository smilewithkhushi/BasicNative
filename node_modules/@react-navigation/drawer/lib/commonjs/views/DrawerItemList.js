"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = DrawerItemList;
var _native = require("@react-navigation/native");
var React = _interopRequireWildcard(require("react"));
var _DrawerItem = _interopRequireDefault(require("./DrawerItem"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
/**
 * Component that renders the navigation list in the drawer.
 */
function DrawerItemList(_ref) {
  let {
    state,
    navigation,
    descriptors
  } = _ref;
  const buildLink = (0, _native.useLinkBuilder)();
  const focusedRoute = state.routes[state.index];
  const focusedDescriptor = descriptors[focusedRoute.key];
  const focusedOptions = focusedDescriptor.options;
  const {
    drawerActiveTintColor,
    drawerInactiveTintColor,
    drawerActiveBackgroundColor,
    drawerInactiveBackgroundColor
  } = focusedOptions;
  return state.routes.map((route, i) => {
    const focused = i === state.index;
    const onPress = () => {
      const event = navigation.emit({
        type: 'drawerItemPress',
        target: route.key,
        canPreventDefault: true
      });
      if (!event.defaultPrevented) {
        navigation.dispatch({
          ...(focused ? _native.DrawerActions.closeDrawer() : _native.CommonActions.navigate({
            name: route.name,
            merge: true
          })),
          target: state.key
        });
      }
    };
    const {
      title,
      drawerLabel,
      drawerIcon,
      drawerLabelStyle,
      drawerItemStyle,
      drawerAllowFontScaling
    } = descriptors[route.key].options;
    return /*#__PURE__*/React.createElement(_DrawerItem.default, {
      key: route.key,
      label: drawerLabel !== undefined ? drawerLabel : title !== undefined ? title : route.name,
      icon: drawerIcon,
      focused: focused,
      activeTintColor: drawerActiveTintColor,
      inactiveTintColor: drawerInactiveTintColor,
      activeBackgroundColor: drawerActiveBackgroundColor,
      inactiveBackgroundColor: drawerInactiveBackgroundColor,
      allowFontScaling: drawerAllowFontScaling,
      labelStyle: drawerLabelStyle,
      style: drawerItemStyle,
      to: buildLink(route.name, route.params),
      onPress: onPress
    });
  });
}
//# sourceMappingURL=DrawerItemList.js.map