function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from 'react';
import { Platform, Pressable, StyleSheet } from 'react-native';
import Animated, { useAnimatedProps, useAnimatedStyle } from 'react-native-reanimated';
const PROGRESS_EPSILON = 0.05;
const Overlay = /*#__PURE__*/React.forwardRef(function Overlay(_ref, ref) {
  let {
    progress,
    onPress,
    style,
    accessibilityLabel = 'Close drawer',
    ...props
  } = _ref;
  const animatedStyle = useAnimatedStyle(() => {
    return {
      opacity: progress.value,
      // We don't want the user to be able to press through the overlay when drawer is open
      // We can send the overlay behind the screen to avoid it
      zIndex: progress.value > PROGRESS_EPSILON ? 0 : -1
    };
  });
  const animatedProps = useAnimatedProps(() => {
    const active = progress.value > PROGRESS_EPSILON;
    return {
      pointerEvents: active ? 'auto' : 'none',
      accessibilityElementsHidden: !active,
      importantForAccessibility: active ? 'auto' : 'no-hide-descendants'
    };
  });
  return /*#__PURE__*/React.createElement(Animated.View, _extends({}, props, {
    ref: ref,
    style: [styles.overlay, overlayStyle, animatedStyle, style],
    animatedProps: animatedProps
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
    flex: 1,
    pointerEvents: 'auto'
  }
});
export default Overlay;
//# sourceMappingURL=Overlay.js.map