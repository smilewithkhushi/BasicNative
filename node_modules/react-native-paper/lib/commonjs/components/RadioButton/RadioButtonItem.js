"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.RadioButtonItem = void 0;
var React = _interopRequireWildcard(require("react"));
var _reactNative = require("react-native");
var _RadioButton = _interopRequireDefault(require("./RadioButton"));
var _RadioButtonAndroid = _interopRequireDefault(require("./RadioButtonAndroid"));
var _RadioButtonGroup = require("./RadioButtonGroup");
var _RadioButtonIOS = _interopRequireDefault(require("./RadioButtonIOS"));
var _utils = require("./utils");
var _theming = require("../../core/theming");
var _TouchableRipple = _interopRequireDefault(require("../TouchableRipple/TouchableRipple"));
var _Text = _interopRequireDefault(require("../Typography/Text"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
/**
 * RadioButton.Item allows you to press the whole row (item) instead of only the RadioButton.
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { RadioButton } from 'react-native-paper';
 *
 * const MyComponent = () => {
 *   const [value, setValue] = React.useState('first');
 *
 *   return (
 *     <RadioButton.Group onValueChange={value => setValue(value)} value={value}>
 *       <RadioButton.Item label="First item" value="first" />
 *       <RadioButton.Item label="Second item" value="second" />
 *     </RadioButton.Group>
 *   );
 * };
 *
 * export default MyComponent;
 *```
 */
const RadioButtonItem = _ref => {
  let {
    value,
    label,
    style,
    labelStyle,
    onPress,
    onLongPress,
    disabled,
    color,
    uncheckedColor,
    rippleColor,
    status,
    theme: themeOverrides,
    background,
    accessibilityLabel = label,
    testID,
    mode,
    position = 'trailing',
    labelVariant = 'bodyLarge',
    labelMaxFontSizeMultiplier
  } = _ref;
  const theme = (0, _theming.useInternalTheme)(themeOverrides);
  const radioButtonProps = {
    value,
    disabled,
    status,
    color,
    theme,
    uncheckedColor
  };
  const isLeading = position === 'leading';
  let radioButton;
  if (mode === 'android') {
    radioButton = /*#__PURE__*/React.createElement(_RadioButtonAndroid.default, radioButtonProps);
  } else if (mode === 'ios') {
    radioButton = /*#__PURE__*/React.createElement(_RadioButtonIOS.default, radioButtonProps);
  } else {
    radioButton = /*#__PURE__*/React.createElement(_RadioButton.default, radioButtonProps);
  }
  const textColor = theme.isV3 ? theme.colors.onSurface : theme.colors.text;
  const disabledTextColor = theme.isV3 ? theme.colors.onSurfaceDisabled : theme.colors.disabled;
  const textAlign = isLeading ? 'right' : 'left';
  const computedStyle = {
    color: disabled ? disabledTextColor : textColor,
    textAlign
  };
  return /*#__PURE__*/React.createElement(_RadioButtonGroup.RadioButtonContext.Consumer, null, context => {
    const checked = (0, _utils.isChecked)({
      contextValue: context === null || context === void 0 ? void 0 : context.value,
      status,
      value
    }) === 'checked';
    return /*#__PURE__*/React.createElement(_TouchableRipple.default, {
      onPress: event => (0, _utils.handlePress)({
        onPress: onPress,
        onValueChange: context === null || context === void 0 ? void 0 : context.onValueChange,
        value,
        event
      }),
      onLongPress: onLongPress,
      accessibilityLabel: accessibilityLabel,
      accessibilityRole: "radio",
      accessibilityState: {
        checked,
        disabled
      },
      testID: testID,
      disabled: disabled,
      background: background,
      theme: theme,
      rippleColor: rippleColor
    }, /*#__PURE__*/React.createElement(_reactNative.View, {
      style: [styles.container, style],
      pointerEvents: "none"
    }, isLeading && radioButton, /*#__PURE__*/React.createElement(_Text.default, {
      variant: labelVariant,
      style: [styles.label, !theme.isV3 && styles.font, computedStyle, labelStyle],
      maxFontSizeMultiplier: labelMaxFontSizeMultiplier
    }, label), !isLeading && radioButton));
  });
};
exports.RadioButtonItem = RadioButtonItem;
RadioButtonItem.displayName = 'RadioButton.Item';
var _default = RadioButtonItem; // @component-docs ignore-next-line
exports.default = _default;
const styles = _reactNative.StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 8,
    paddingHorizontal: 16
  },
  label: {
    flexShrink: 1,
    flexGrow: 1
  },
  font: {
    fontSize: 16
  }
});
//# sourceMappingURL=RadioButtonItem.js.map