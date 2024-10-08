function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from 'react';
import DrawerContentScrollView from './DrawerContentScrollView';
import DrawerItemList from './DrawerItemList';
export default function DrawerContent(_ref) {
  let {
    descriptors,
    state,
    ...rest
  } = _ref;
  const focusedRoute = state.routes[state.index];
  const focusedDescriptor = descriptors[focusedRoute.key];
  const focusedOptions = focusedDescriptor.options;
  const {
    drawerContentStyle,
    drawerContentContainerStyle
  } = focusedOptions;
  return /*#__PURE__*/React.createElement(DrawerContentScrollView, _extends({}, rest, {
    contentContainerStyle: drawerContentContainerStyle,
    style: drawerContentStyle
  }), /*#__PURE__*/React.createElement(DrawerItemList, _extends({
    descriptors: descriptors,
    state: state
  }, rest)));
}
//# sourceMappingURL=DrawerContent.js.map