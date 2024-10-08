"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var React = _interopRequireWildcard(require("react"));
var _reactNative = require("react-native");
var _reactNativeSafeAreaContext = require("react-native-safe-area-context");
var _DrawerPositionContext = _interopRequireDefault(require("../utils/DrawerPositionContext"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function DrawerContentScrollView(_ref, ref) {
  let {
    contentContainerStyle,
    style,
    children,
    ...rest
  } = _ref;
  const drawerPosition = React.useContext(_DrawerPositionContext.default);
  const insets = (0, _reactNativeSafeAreaContext.useSafeAreaInsets)();
  const isRight = _reactNative.I18nManager.getConstants().isRTL ? drawerPosition === 'left' : drawerPosition === 'right';
  return /*#__PURE__*/React.createElement(_reactNative.ScrollView, _extends({}, rest, {
    ref: ref,
    contentContainerStyle: [{
      paddingTop: insets.top + 4,
      paddingStart: !isRight ? insets.left : 0,
      paddingEnd: isRight ? insets.right : 0
    }, contentContainerStyle],
    style: [styles.container, style]
  }), children);
}
var _default = /*#__PURE__*/React.forwardRef(DrawerContentScrollView);
exports.default = _default;
const styles = _reactNative.StyleSheet.create({
  container: {
    flex: 1
  }
});
//# sourceMappingURL=DrawerContentScrollView.js.map