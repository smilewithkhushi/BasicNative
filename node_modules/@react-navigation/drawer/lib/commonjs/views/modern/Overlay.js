"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var React = _interopRequireWildcard(require("react"));
var _reactNative = require("react-native");
var _reactNativeReanimated = _interopRequireWildcard(require("react-native-reanimated"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
const PROGRESS_EPSILON = 0.05;
const Overlay = /*#__PURE__*/React.forwardRef(function Overlay(_ref, ref) {
  let {
    progress,
    onPress,
    style,
    accessibilityLabel = 'Close drawer',
    ...props
  } = _ref;
  const animatedStyle = (0, _reactNativeReanimated.useAnimatedStyle)(() => {
    return {
      opacity: progress.value,
      // We don't want the user to be able to press through the overlay when drawer is open
      // We can send the overlay behind the screen to avoid it
      zIndex: progress.value > PROGRESS_EPSILON ? 0 : -1
    };
  });
  const animatedProps = (0, _reactNativeReanimated.useAnimatedProps)(() => {
    const active = progress.value > PROGRESS_EPSILON;
    return {
      pointerEvents: active ? 'auto' : 'none',
      accessibilityElementsHidden: !active,
      importantForAccessibility: active ? 'auto' : 'no-hide-descendants'
    };
  });
  return /*#__PURE__*/React.createElement(_reactNativeReanimated.default.View, _extends({}, props, {
    ref: ref,
    style: [styles.overlay, overlayStyle, animatedStyle, style],
    animatedProps: animatedProps
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
    flex: 1,
    pointerEvents: 'auto'
  }
});
var _default = Overlay;
exports.default = _default;
//# sourceMappingURL=Overlay.js.map