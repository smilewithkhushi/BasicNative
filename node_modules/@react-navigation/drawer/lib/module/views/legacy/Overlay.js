function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from 'react';
import { Platform, Pressable, StyleSheet } from 'react-native';
import Animated from 'react-native-reanimated';
const {
  // @ts-expect-error: this is to support reanimated 1
  interpolate: interpolateDeprecated,
  interpolateNode,
  cond,
  greaterThan
} = Animated;
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
      inputRange: Platform.OS === 'windows' || Platform.OS === 'macos' ? [0, 1] : [PROGRESS_EPSILON, 1],
      outputRange: [0, 1]
    }),
    // We don't want the user to be able to press through the overlay when drawer is open
    // One approach is to adjust the pointerEvents based on the progress
    // But we can also send the overlay behind the screen, which works, and is much less code
    zIndex: cond(greaterThan(progress, PROGRESS_EPSILON), 0, -1)
  };
  return /*#__PURE__*/React.createElement(Animated.View, _extends({}, props, {
    ref: ref,
    style: [styles.overlay, overlayStyle, animatedStyle, style]
  }), /*#__PURE__*/React.createElement(Pressable, {
    onPress: onPress,
    style: styles.pressable,
    accessibilityRole: "button",
    accessibilityLabel: accessibilityLabel
  }));
});
const overlayStyle = Platform.select({
  web: {
    // Disable touch highlight on mobile Safari.
    // WebkitTapHighlightColor must be used outside of StyleSheet.create because react-native-web will omit the property.
    WebkitTapHighlightColor: 'transparent'
  },
  default: {}
});
const styles = StyleSheet.create({
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.5)'
  },
  pressable: {
    flex: 1
  }
});
export default Overlay;
//# sourceMappingURL=Overlay.js.map