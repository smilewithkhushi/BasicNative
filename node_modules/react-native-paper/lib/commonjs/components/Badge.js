"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var React = _interopRequireWildcard(require("react"));
var _reactNative = require("react-native");
var _theming = require("../core/theming");
var _colors = require("../styles/themes/v2/colors");
var _getContrastingColor = _interopRequireDefault(require("../utils/getContrastingColor"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
const defaultSize = 20;
/**
 * Badges are small status descriptors for UI elements.
 * A badge consists of a small circle, typically containing a number or other short set of characters, that appears in proximity to another object.
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { Badge } from 'react-native-paper';
 *
 * const MyComponent = () => (
 *   <Badge>3</Badge>
 * );
 *
 * export default MyComponent;
 * ```
 */
const Badge = _ref => {
  var _theme$colors;
  let {
    children,
    size = defaultSize,
    style,
    theme: themeOverrides,
    visible = true,
    ...rest
  } = _ref;
  const theme = (0, _theming.useInternalTheme)(themeOverrides);
  const {
    current: opacity
  } = React.useRef(new _reactNative.Animated.Value(visible ? 1 : 0));
  const {
    fontScale
  } = (0, _reactNative.useWindowDimensions)();
  const isFirstRendering = React.useRef(true);
  const {
    animation: {
      scale
    }
  } = theme;
  React.useEffect(() => {
    // Do not run animation on very first rendering
    if (isFirstRendering.current) {
      isFirstRendering.current = false;
      return;
    }
    _reactNative.Animated.timing(opacity, {
      toValue: visible ? 1 : 0,
      duration: 150 * scale,
      useNativeDriver: true
    }).start();
  }, [visible, opacity, scale]);
  const {
    backgroundColor = theme.isV3 ? theme.colors.error : (_theme$colors = theme.colors) === null || _theme$colors === void 0 ? void 0 : _theme$colors.notification,
    ...restStyle
  } = _reactNative.StyleSheet.flatten(style) || {};
  const textColor = theme.isV3 ? theme.colors.onError : (0, _getContrastingColor.default)(backgroundColor, _colors.white, _colors.black);
  const borderRadius = size / 2;
  const paddingHorizontal = theme.isV3 ? 3 : 4;
  return /*#__PURE__*/React.createElement(_reactNative.Animated.Text, _extends({
    numberOfLines: 1,
    style: [{
      opacity,
      backgroundColor,
      color: textColor,
      fontSize: size * 0.5,
      ...(!theme.isV3 && theme.fonts.regular),
      lineHeight: size / fontScale,
      height: size,
      minWidth: size,
      borderRadius,
      paddingHorizontal
    }, styles.container, restStyle]
  }, rest), children);
};
var _default = Badge;
exports.default = _default;
const styles = _reactNative.StyleSheet.create({
  container: {
    alignSelf: 'flex-end',
    textAlign: 'center',
    textAlignVertical: 'center',
    overflow: 'hidden'
  }
});
//# sourceMappingURL=Badge.js.map