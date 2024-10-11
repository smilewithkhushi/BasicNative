import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import RadioButton from './RadioButton';
import RadioButtonAndroid from './RadioButtonAndroid';
import { RadioButtonContext } from './RadioButtonGroup';
import RadioButtonIOS from './RadioButtonIOS';
import { handlePress, isChecked } from './utils';
import { useInternalTheme } from '../../core/theming';
import TouchableRipple from '../TouchableRipple/TouchableRipple';
import Text from '../Typography/Text';
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
  const theme = useInternalTheme(themeOverrides);
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
    radioButton = /*#__PURE__*/React.createElement(RadioButtonAndroid, radioButtonProps);
  } else if (mode === 'ios') {
    radioButton = /*#__PURE__*/React.createElement(RadioButtonIOS, radioButtonProps);
  } else {
    radioButton = /*#__PURE__*/React.createElement(RadioButton, radioButtonProps);
  }
  const textColor = theme.isV3 ? theme.colors.onSurface : theme.colors.text;
  const disabledTextColor = theme.isV3 ? theme.colors.onSurfaceDisabled : theme.colors.disabled;
  const textAlign = isLeading ? 'right' : 'left';
  const computedStyle = {
    color: disabled ? disabledTextColor : textColor,
    textAlign
  };
  return /*#__PURE__*/React.createElement(RadioButtonContext.Consumer, null, context => {
    const checked = isChecked({
      contextValue: context === null || context === void 0 ? void 0 : context.value,
      status,
      value
    }) === 'checked';
    return /*#__PURE__*/React.createElement(TouchableRipple, {
      onPress: event => handlePress({
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
    }, /*#__PURE__*/React.createElement(View, {
      style: [styles.container, style],
      pointerEvents: "none"
    }, isLeading && radioButton, /*#__PURE__*/React.createElement(Text, {
      variant: labelVariant,
      style: [styles.label, !theme.isV3 && styles.font, computedStyle, labelStyle],
      maxFontSizeMultiplier: labelMaxFontSizeMultiplier
    }, label), !isLeading && radioButton));
  });
};
RadioButtonItem.displayName = 'RadioButton.Item';
export default RadioButtonItem;

// @component-docs ignore-next-line
export { RadioButtonItem };
const styles = StyleSheet.create({
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