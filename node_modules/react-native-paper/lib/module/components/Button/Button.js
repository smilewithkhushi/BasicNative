function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from 'react';
import { Animated, Platform, StyleSheet, View } from 'react-native';
import color from 'color';
import { getButtonColors } from './utils';
import { useInternalTheme } from '../../core/theming';
import { forwardRef } from '../../utils/forwardRef';
import hasTouchHandler from '../../utils/hasTouchHandler';
import { splitStyles } from '../../utils/splitStyles';
import ActivityIndicator from '../ActivityIndicator';
import Icon from '../Icon';
import Surface from '../Surface';
import TouchableRipple from '../TouchableRipple/TouchableRipple';
import Text from '../Typography/Text';
/**
 * A button is component that the user can press to trigger an action.
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { Button } from 'react-native-paper';
 *
 * const MyComponent = () => (
 *   <Button icon="camera" mode="contained" onPress={() => console.log('Pressed')}>
 *     Press me
 *   </Button>
 * );
 *
 * export default MyComponent;
 * ```
 */
const Button = (_ref, ref) => {
  var _StyleSheet$flatten;
  let {
    disabled,
    compact,
    mode = 'text',
    dark,
    loading,
    icon,
    buttonColor: customButtonColor,
    textColor: customTextColor,
    rippleColor: customRippleColor,
    children,
    accessibilityLabel,
    accessibilityHint,
    accessibilityRole = 'button',
    onPress,
    onPressIn,
    onPressOut,
    onLongPress,
    delayLongPress,
    style,
    theme: themeOverrides,
    uppercase: uppercaseProp,
    contentStyle,
    labelStyle,
    testID = 'button',
    accessible,
    background,
    maxFontSizeMultiplier,
    ...rest
  } = _ref;
  const theme = useInternalTheme(themeOverrides);
  const isMode = React.useCallback(modeToCompare => {
    return mode === modeToCompare;
  }, [mode]);
  const {
    roundness,
    isV3,
    animation
  } = theme;
  const uppercase = uppercaseProp ?? !theme.isV3;
  const hasPassedTouchHandler = hasTouchHandler({
    onPress,
    onPressIn,
    onPressOut,
    onLongPress
  });
  const isElevationEntitled = !disabled && (isV3 ? isMode('elevated') : isMode('contained'));
  const initialElevation = isV3 ? 1 : 2;
  const activeElevation = isV3 ? 2 : 8;
  const {
    current: elevation
  } = React.useRef(new Animated.Value(isElevationEntitled ? initialElevation : 0));
  React.useEffect(() => {
    elevation.setValue(isElevationEntitled ? initialElevation : 0);
  }, [isElevationEntitled, elevation, initialElevation]);
  const handlePressIn = e => {
    onPressIn === null || onPressIn === void 0 ? void 0 : onPressIn(e);
    if (isV3 ? isMode('elevated') : isMode('contained')) {
      const {
        scale
      } = animation;
      Animated.timing(elevation, {
        toValue: activeElevation,
        duration: 200 * scale,
        useNativeDriver: Platform.OS === 'web' || Platform.constants.reactNativeVersion.minor <= 72
      }).start();
    }
  };
  const handlePressOut = e => {
    onPressOut === null || onPressOut === void 0 ? void 0 : onPressOut(e);
    if (isV3 ? isMode('elevated') : isMode('contained')) {
      const {
        scale
      } = animation;
      Animated.timing(elevation, {
        toValue: initialElevation,
        duration: 150 * scale,
        useNativeDriver: Platform.OS === 'web' || Platform.constants.reactNativeVersion.minor <= 72
      }).start();
    }
  };
  const flattenedStyles = StyleSheet.flatten(style) || {};
  const [, borderRadiusStyles] = splitStyles(flattenedStyles, style => style.startsWith('border') && style.endsWith('Radius'));
  const borderRadius = (isV3 ? 5 : 1) * roundness;
  const iconSize = isV3 ? 18 : 16;
  const {
    backgroundColor,
    borderColor,
    textColor,
    borderWidth
  } = getButtonColors({
    customButtonColor,
    customTextColor,
    theme,
    mode,
    disabled,
    dark
  });
  const rippleColor = customRippleColor || color(textColor).alpha(0.12).rgb().string();
  const touchableStyle = {
    ...borderRadiusStyles,
    borderRadius: borderRadiusStyles.borderRadius ?? borderRadius
  };
  const buttonStyle = {
    backgroundColor,
    borderColor,
    borderWidth,
    ...touchableStyle
  };
  const {
    color: customLabelColor,
    fontSize: customLabelSize
  } = StyleSheet.flatten(labelStyle) || {};
  const font = isV3 ? theme.fonts.labelLarge : theme.fonts.medium;
  const textStyle = {
    color: textColor,
    ...font
  };
  const iconStyle = ((_StyleSheet$flatten = StyleSheet.flatten(contentStyle)) === null || _StyleSheet$flatten === void 0 ? void 0 : _StyleSheet$flatten.flexDirection) === 'row-reverse' ? [styles.iconReverse, isV3 && styles[`md3IconReverse${compact ? 'Compact' : ''}`], isV3 && isMode('text') && styles[`md3IconReverseTextMode${compact ? 'Compact' : ''}`]] : [styles.icon, isV3 && styles[`md3Icon${compact ? 'Compact' : ''}`], isV3 && isMode('text') && styles[`md3IconTextMode${compact ? 'Compact' : ''}`]];
  return /*#__PURE__*/React.createElement(Surface, _extends({}, rest, {
    ref: ref,
    testID: `${testID}-container`,
    style: [styles.button, compact && styles.compact, buttonStyle, style, !isV3 && !disabled && {
      elevation
    }]
  }, isV3 && {
    elevation: elevation
  }), /*#__PURE__*/React.createElement(TouchableRipple, {
    borderless: true,
    background: background,
    onPress: onPress,
    onLongPress: onLongPress,
    onPressIn: hasPassedTouchHandler ? handlePressIn : undefined,
    onPressOut: hasPassedTouchHandler ? handlePressOut : undefined,
    delayLongPress: delayLongPress,
    accessibilityLabel: accessibilityLabel,
    accessibilityHint: accessibilityHint,
    accessibilityRole: accessibilityRole,
    accessibilityState: {
      disabled
    },
    accessible: accessible,
    disabled: disabled,
    rippleColor: rippleColor,
    style: touchableStyle,
    testID: testID,
    theme: theme
  }, /*#__PURE__*/React.createElement(View, {
    style: [styles.content, contentStyle]
  }, icon && loading !== true ? /*#__PURE__*/React.createElement(View, {
    style: iconStyle,
    testID: `${testID}-icon-container`
  }, /*#__PURE__*/React.createElement(Icon, {
    source: icon,
    size: customLabelSize ?? iconSize,
    color: typeof customLabelColor === 'string' ? customLabelColor : textColor
  })) : null, loading ? /*#__PURE__*/React.createElement(ActivityIndicator, {
    size: customLabelSize ?? iconSize,
    color: typeof customLabelColor === 'string' ? customLabelColor : textColor,
    style: iconStyle
  }) : null, /*#__PURE__*/React.createElement(Text, {
    variant: "labelLarge",
    selectable: false,
    numberOfLines: 1,
    testID: `${testID}-text`,
    style: [styles.label, !isV3 && styles.md2Label, isV3 && (isMode('text') ? icon || loading ? styles.md3LabelTextAddons : styles.md3LabelText : styles.md3Label), compact && styles.compactLabel, uppercase && styles.uppercaseLabel, textStyle, labelStyle],
    maxFontSizeMultiplier: maxFontSizeMultiplier
  }, children))));
};
const styles = StyleSheet.create({
  button: {
    minWidth: 64,
    borderStyle: 'solid'
  },
  compact: {
    minWidth: 'auto'
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  icon: {
    marginLeft: 12,
    marginRight: -4
  },
  iconReverse: {
    marginRight: 12,
    marginLeft: -4
  },
  /* eslint-disable react-native/no-unused-styles */
  md3Icon: {
    marginLeft: 16,
    marginRight: -16
  },
  md3IconCompact: {
    marginLeft: 8,
    marginRight: 0
  },
  md3IconReverse: {
    marginLeft: -16,
    marginRight: 16
  },
  md3IconReverseCompact: {
    marginLeft: 0,
    marginRight: 8
  },
  md3IconTextMode: {
    marginLeft: 12,
    marginRight: -8
  },
  md3IconTextModeCompact: {
    marginLeft: 6,
    marginRight: 0
  },
  md3IconReverseTextMode: {
    marginLeft: -8,
    marginRight: 12
  },
  md3IconReverseTextModeCompact: {
    marginLeft: 0,
    marginRight: 6
  },
  /* eslint-enable react-native/no-unused-styles */
  label: {
    textAlign: 'center',
    marginVertical: 9,
    marginHorizontal: 16
  },
  md2Label: {
    letterSpacing: 1
  },
  compactLabel: {
    marginHorizontal: 8
  },
  uppercaseLabel: {
    textTransform: 'uppercase'
  },
  md3Label: {
    marginVertical: 10,
    marginHorizontal: 24
  },
  md3LabelText: {
    marginHorizontal: 12
  },
  md3LabelTextAddons: {
    marginHorizontal: 16
  }
});
export default forwardRef(Button);
//# sourceMappingURL=Button.js.map