"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var React = _interopRequireWildcard(require("react"));
var _reactNative = require("react-native");
var _color = _interopRequireDefault(require("color"));
var _utils = require("./utils");
var _theming = require("../../core/theming");
var _forwardRef = require("../../utils/forwardRef");
var _hasTouchHandler = _interopRequireDefault(require("../../utils/hasTouchHandler"));
var _splitStyles = require("../../utils/splitStyles");
var _ActivityIndicator = _interopRequireDefault(require("../ActivityIndicator"));
var _Icon = _interopRequireDefault(require("../Icon"));
var _Surface = _interopRequireDefault(require("../Surface"));
var _TouchableRipple = _interopRequireDefault(require("../TouchableRipple/TouchableRipple"));
var _Text = _interopRequireDefault(require("../Typography/Text"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
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
  const theme = (0, _theming.useInternalTheme)(themeOverrides);
  const isMode = React.useCallback(modeToCompare => {
    return mode === modeToCompare;
  }, [mode]);
  const {
    roundness,
    isV3,
    animation
  } = theme;
  const uppercase = uppercaseProp ?? !theme.isV3;
  const hasPassedTouchHandler = (0, _hasTouchHandler.default)({
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
  } = React.useRef(new _reactNative.Animated.Value(isElevationEntitled ? initialElevation : 0));
  React.useEffect(() => {
    elevation.setValue(isElevationEntitled ? initialElevation : 0);
  }, [isElevationEntitled, elevation, initialElevation]);
  const handlePressIn = e => {
    onPressIn === null || onPressIn === void 0 ? void 0 : onPressIn(e);
    if (isV3 ? isMode('elevated') : isMode('contained')) {
      const {
        scale
      } = animation;
      _reactNative.Animated.timing(elevation, {
        toValue: activeElevation,
        duration: 200 * scale,
        useNativeDriver: _reactNative.Platform.OS === 'web' || _reactNative.Platform.constants.reactNativeVersion.minor <= 72
      }).start();
    }
  };
  const handlePressOut = e => {
    onPressOut === null || onPressOut === void 0 ? void 0 : onPressOut(e);
    if (isV3 ? isMode('elevated') : isMode('contained')) {
      const {
        scale
      } = animation;
      _reactNative.Animated.timing(elevation, {
        toValue: initialElevation,
        duration: 150 * scale,
        useNativeDriver: _reactNative.Platform.OS === 'web' || _reactNative.Platform.constants.reactNativeVersion.minor <= 72
      }).start();
    }
  };
  const flattenedStyles = _reactNative.StyleSheet.flatten(style) || {};
  const [, borderRadiusStyles] = (0, _splitStyles.splitStyles)(flattenedStyles, style => style.startsWith('border') && style.endsWith('Radius'));
  const borderRadius = (isV3 ? 5 : 1) * roundness;
  const iconSize = isV3 ? 18 : 16;
  const {
    backgroundColor,
    borderColor,
    textColor,
    borderWidth
  } = (0, _utils.getButtonColors)({
    customButtonColor,
    customTextColor,
    theme,
    mode,
    disabled,
    dark
  });
  const rippleColor = customRippleColor || (0, _color.default)(textColor).alpha(0.12).rgb().string();
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
  } = _reactNative.StyleSheet.flatten(labelStyle) || {};
  const font = isV3 ? theme.fonts.labelLarge : theme.fonts.medium;
  const textStyle = {
    color: textColor,
    ...font
  };
  const iconStyle = ((_StyleSheet$flatten = _reactNative.StyleSheet.flatten(contentStyle)) === null || _StyleSheet$flatten === void 0 ? void 0 : _StyleSheet$flatten.flexDirection) === 'row-reverse' ? [styles.iconReverse, isV3 && styles[`md3IconReverse${compact ? 'Compact' : ''}`], isV3 && isMode('text') && styles[`md3IconReverseTextMode${compact ? 'Compact' : ''}`]] : [styles.icon, isV3 && styles[`md3Icon${compact ? 'Compact' : ''}`], isV3 && isMode('text') && styles[`md3IconTextMode${compact ? 'Compact' : ''}`]];
  return /*#__PURE__*/React.createElement(_Surface.default, _extends({}, rest, {
    ref: ref,
    testID: `${testID}-container`,
    style: [styles.button, compact && styles.compact, buttonStyle, style, !isV3 && !disabled && {
      elevation
    }]
  }, isV3 && {
    elevation: elevation
  }), /*#__PURE__*/React.createElement(_TouchableRipple.default, {
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
  }, /*#__PURE__*/React.createElement(_reactNative.View, {
    style: [styles.content, contentStyle]
  }, icon && loading !== true ? /*#__PURE__*/React.createElement(_reactNative.View, {
    style: iconStyle,
    testID: `${testID}-icon-container`
  }, /*#__PURE__*/React.createElement(_Icon.default, {
    source: icon,
    size: customLabelSize ?? iconSize,
    color: typeof customLabelColor === 'string' ? customLabelColor : textColor
  })) : null, loading ? /*#__PURE__*/React.createElement(_ActivityIndicator.default, {
    size: customLabelSize ?? iconSize,
    color: typeof customLabelColor === 'string' ? customLabelColor : textColor,
    style: iconStyle
  }) : null, /*#__PURE__*/React.createElement(_Text.default, {
    variant: "labelLarge",
    selectable: false,
    numberOfLines: 1,
    testID: `${testID}-text`,
    style: [styles.label, !isV3 && styles.md2Label, isV3 && (isMode('text') ? icon || loading ? styles.md3LabelTextAddons : styles.md3LabelText : styles.md3Label), compact && styles.compactLabel, uppercase && styles.uppercaseLabel, textStyle, labelStyle],
    maxFontSizeMultiplier: maxFontSizeMultiplier
  }, children))));
};
const styles = _reactNative.StyleSheet.create({
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
var _default = (0, _forwardRef.forwardRef)(Button);
exports.default = _default;
//# sourceMappingURL=Button.js.map