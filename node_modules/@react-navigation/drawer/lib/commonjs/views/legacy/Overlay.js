"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var React = _interopRequireWildcard(require("react"));
var _reactNative = require("react-native");
var _reactNativeReanimated = _interopRequireDefault(require("react-native-reanimated"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
const {
  // @ts-expect-error: this is to support reanimated 1
  interpolate: interpolateDeprecated,
  interpolateNode,
  cond,
  greaterThan
} = _reactNativeReanimated.default;
const interpolate = interpolateNode ?? interpolateDeprecated;
const PROGRESS_EPSILON = 0.05;
const Overlay = /*#__PURE__*/React.forwardRef(function Overlay(_ref, ref) {
  let {
    progress,
    onPress,
    style,
    accessibilityLabel = 'Close drawer',
    ...props
  } = _ref;
  const animatedStyle = {
    opacity: interpolate(progress, {
      // Default input range is [PROGRESS_EPSILON, 1]
      // On Windows, the output value is 1 when input value is out of range for some reason
      // The default value 0 will be interpolated to 1 in this case, which is not what we want.
      // Therefore changing input range on Windows to [0,1] instead.
      inputRange: _reactNative.Platform.OS === 'windows' || _reactNative.Platform.OS === 'macos' ? [0, 1] : [PROGRESS_EPSILON, 1],
      outputRange: [0, 1]
    }),
    // We don't want the user to be able to press through the overlay when drawer is open
    // One approach is to adjust the pointerEvents based on the progress
    // But we can also send the overlay behind the screen, which works, and is much less code
    zIndex: cond(greaterThan(progress, PROGRESS_EPSILON), 0, -1)
  };
  return /*#__PURE__*/React.createElement(_reactNativeReanimated.default.View, _extends({}, props, {
    ref: ref,
    style: [styles.overlay, overlayStyle, animatedStyle, style]
  }), /*#__PURE__*/React.createElement(_reactNative.Pressable, {
    onPress: onPress,
    style: styles.pressable,
    accessibilityRole: "button",
    accessibilityLabel: accessibilityLabel
  }));
});
const overlayStyle = _reactNative.Platform.select({
  web: {
    // Disable touch highlight on mobile Safari.
    // WebkitTapHighlightColor must be used outside of StyleSheet.create because react-native-web will omit the property.
    WebkitTapHighlightColor: 'transparent'
  },
  default: {}
});
const styles = _reactNative.StyleSheet.create({
  overlay: {
    ..._reactNative.StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.5)'
  },
  pressable: {
    flex: 1
  }
});
var _default = Overlay;
exports.default = _default;
//# sourceMappingURL=Overlay.js.map