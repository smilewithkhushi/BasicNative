import * as React from 'react';
import { Animated, StyleSheet } from 'react-native';
import { useInternalTheme } from '../../../core/theming';
export const Underline = _ref => {
  let {
    parentState,
    error,
    colors,
    activeColor,
    underlineColorCustom,
    hasActiveOutline,
    style,
    theme: themeOverrides
  } = _ref;
  const {
    isV3
  } = useInternalTheme(themeOverrides);
  let backgroundColor = parentState.focused ? activeColor : underlineColorCustom;
  if (error) backgroundColor = colors === null || colors === void 0 ? void 0 : colors.error;
  const activeScale = isV3 ? 2 : 1;
  return /*#__PURE__*/React.createElement(Animated.View, {
    testID: "text-input-underline",
    style: [styles.underline, isV3 && styles.md3Underline, {
      backgroundColor,
      // Underlines is thinner when input is not focused
      transform: [{
        scaleY: (isV3 ? hasActiveOutline : parentState.focused) ? activeScale : 0.5
      }]
    }, style]
  });
};
const styles = StyleSheet.create({
  underline: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: 2,
    zIndex: 1
  },
  md3Underline: {
    height: 1
  }
});
//# sourceMappingURL=Underline.js.map