function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from 'react';
import { Animated, StyleSheet, View } from 'react-native';
import { getExtendedFabStyle, getFABColors, getFabStyle } from './utils';
import { useInternalTheme } from '../../core/theming';
import { forwardRef } from '../../utils/forwardRef';
import ActivityIndicator from '../ActivityIndicator';
import CrossFadeIcon from '../CrossFadeIcon';
import Icon from '../Icon';
import Surface from '../Surface';
import TouchableRipple from '../TouchableRipple/TouchableRipple';
import Text from '../Typography/Text';
/**
 * A floating action button represents the primary action on a screen. It appears in front of all screen content.
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { StyleSheet } from 'react-native';
 * import { FAB } from 'react-native-paper';
 *
 * const MyComponent = () => (
 *   <FAB
 *     icon="plus"
 *     style={styles.fab}
 *     onPress={() => console.log('Pressed')}
 *   />
 * );
 *
 * const styles = StyleSheet.create({
 *   fab: {
 *     position: 'absolute',
 *     margin: 16,
 *     right: 0,
 *     bottom: 0,
 *   },
 * })
 *
 * export default MyComponent;
 * ```
 */
const FAB = forwardRef((_ref, ref) => {
  let {
    icon,
    label,
    background,
    accessibilityLabel = label,
    accessibilityState,
    animated = true,
    color: customColor,
    rippleColor: customRippleColor,
    disabled,
    onPress,
    onLongPress,
    delayLongPress,
    theme: themeOverrides,
    style,
    visible = true,
    uppercase: uppercaseProp,
    loading,
    testID = 'fab',
    size = 'medium',
    customSize,
    mode = 'elevated',
    variant = 'primary',
    labelMaxFontSizeMultiplier,
    ...rest
  } = _ref;
  const theme = useInternalTheme(themeOverrides);
  const uppercase = uppercaseProp ?? !theme.isV3;
  const {
    current: visibility
  } = React.useRef(new Animated.Value(visible ? 1 : 0));
  const {
    isV3,
    animation
  } = theme;
  const {
    scale
  } = animation;
  React.useEffect(() => {
    if (visible) {
      Animated.timing(visibility, {
        toValue: 1,
        duration: 200 * scale,
        useNativeDriver: true
      }).start();
    } else {
      Animated.timing(visibility, {
        toValue: 0,
        duration: 150 * scale,
        useNativeDriver: true
      }).start();
    }
  }, [visible, scale, visibility]);
  const IconComponent = animated ? CrossFadeIcon : Icon;
  const fabStyle = getFabStyle({
    customSize,
    size,
    theme
  });
  const {
    borderRadius = fabStyle.borderRadius,
    backgroundColor: customBackgroundColor
  } = StyleSheet.flatten(style) || {};
  const {
    backgroundColor,
    foregroundColor,
    rippleColor
  } = getFABColors({
    theme,
    variant,
    disabled,
    customColor,
    customBackgroundColor,
    customRippleColor
  });
  const isLargeSize = size === 'large';
  const isFlatMode = mode === 'flat';
  const iconSize = isLargeSize ? 36 : 24;
  const loadingIndicatorSize = isLargeSize ? 24 : 18;
  const font = isV3 ? theme.fonts.labelLarge : theme.fonts.medium;
  const extendedStyle = getExtendedFabStyle({
    customSize,
    theme
  });
  const textStyle = {
    color: foregroundColor,
    ...font
  };
  const md3Elevation = isFlatMode || disabled ? 0 : 3;
  const newAccessibilityState = {
    ...accessibilityState,
    disabled
  };
  return /*#__PURE__*/React.createElement(Surface, _extends({
    ref: ref
  }, rest, {
    style: [{
      borderRadius,
      backgroundColor,
      opacity: visibility,
      transform: [{
        scale: visibility
      }]
    }, !isV3 && styles.elevated, !isV3 && disabled && styles.disabled, style],
    pointerEvents: visible ? 'auto' : 'none',
    testID: `${testID}-container`
  }, isV3 && {
    elevation: md3Elevation
  }), /*#__PURE__*/React.createElement(TouchableRipple, _extends({
    borderless: true,
    background: background,
    onPress: onPress,
    onLongPress: onLongPress,
    delayLongPress: delayLongPress,
    rippleColor: rippleColor,
    disabled: disabled,
    accessibilityLabel: accessibilityLabel,
    accessibilityRole: "button",
    accessibilityState: newAccessibilityState,
    testID: testID,
    style: {
      borderRadius
    }
  }, rest), /*#__PURE__*/React.createElement(View, {
    style: [styles.content, label ? extendedStyle : fabStyle],
    testID: `${testID}-content`,
    pointerEvents: "none"
  }, icon && loading !== true ? /*#__PURE__*/React.createElement(IconComponent, {
    source: icon,
    size: customSize ? customSize / 2 : iconSize,
    color: foregroundColor
  }) : null, loading ? /*#__PURE__*/React.createElement(ActivityIndicator, {
    size: customSize ? customSize / 2 : loadingIndicatorSize,
    color: foregroundColor
  }) : null, label ? /*#__PURE__*/React.createElement(Text, {
    variant: "labelLarge",
    selectable: false,
    testID: `${testID}-text`,
    style: [styles.label, uppercase && styles.uppercaseLabel, textStyle],
    maxFontSizeMultiplier: labelMaxFontSizeMultiplier
  }, label) : null)));
});
const styles = StyleSheet.create({
  elevated: {
    elevation: 6
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  label: {
    marginHorizontal: 8
  },
  uppercaseLabel: {
    textTransform: 'uppercase'
  },
  disabled: {
    elevation: 0
  }
});
export default FAB;

// @component-docs ignore-next-line
export { FAB };
//# sourceMappingURL=FAB.js.map