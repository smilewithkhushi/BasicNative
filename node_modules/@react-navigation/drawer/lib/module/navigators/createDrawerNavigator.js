function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import { createNavigatorFactory, DrawerRouter, useNavigationBuilder } from '@react-navigation/native';
import * as React from 'react';
import warnOnce from 'warn-once';
import DrawerView from '../views/DrawerView';
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
    warnOnce(drawerContentOptions, `Drawer Navigator: 'drawerContentOptions' is deprecated. Migrate the options to 'screenOptions' instead.\n\nPlace the following in 'screenOptions' in your code to keep current behavior:\n\n${JSON.stringify(defaultScreenOptions, null, 2)}\n\nSee https://reactnavigation.org/docs/drawer-navigator#options for more details.`);
  }
  if (typeof lazy === 'boolean') {
    defaultScreenOptions.lazy = lazy;
    warnOnce(true, `Drawer Navigator: 'lazy' in props is deprecated. Move it to 'screenOptions' instead.\n\nSee https://reactnavigation.org/docs/drawer-navigator/#lazy for more details.`);
  }
  if (typeof openByDefault === 'boolean') {
    warnOnce(true, `Drawer Navigator: 'openByDefault' is deprecated. Use 'defaultStatus' and set it to 'open' or 'closed' instead.\n\nSee https://reactnavigation.org/docs/drawer-navigator/#defaultstatus for more details.`);
  }
  const defaultStatus = customDefaultStatus !== undefined ? customDefaultStatus : openByDefault ? 'open' : 'closed';
  const {
    state,
    descriptors,
    navigation,
    NavigationContent
  } = useNavigationBuilder(DrawerRouter, {
    id,
    initialRouteName,
    defaultStatus,
    backBehavior,
    children,
    screenListeners,
    screenOptions,
    defaultScreenOptions
  });
  return /*#__PURE__*/React.createElement(NavigationContent, null, /*#__PURE__*/React.createElement(DrawerView, _extends({}, rest, {
    defaultStatus: defaultStatus,
    state: state,
    descriptors: descriptors,
    navigation: navigation
  })));
}
export default createNavigatorFactory(DrawerNavigator);
//# sourceMappingURL=createDrawerNavigator.js.map