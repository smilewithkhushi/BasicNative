"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = DrawerContent;
var React = _interopRequireWildcard(require("react"));
var _DrawerContentScrollView = _interopRequireDefault(require("./DrawerContentScrollView"));
var _DrawerItemList = _interopRequireDefault(require("./DrawerItemList"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function DrawerContent(_ref) {
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
  return /*#__PURE__*/React.createElement(_DrawerContentScrollView.default, _extends({}, rest, {
    contentContainerStyle: drawerContentContainerStyle,
    style: drawerContentStyle
  }), /*#__PURE__*/React.createElement(_DrawerItemList.default, _extends({
    descriptors: descriptors,
    state: state
  }, rest)));
}
//# sourceMappingURL=DrawerContent.js.map