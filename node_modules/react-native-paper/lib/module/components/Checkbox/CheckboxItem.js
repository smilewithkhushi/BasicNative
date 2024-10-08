import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import Checkbox from './Checkbox';
import CheckboxAndroid from './CheckboxAndroid';
import CheckboxIOS from './CheckboxIOS';
import { useInternalTheme } from '../../core/theming';
import TouchableRipple from '../TouchableRipple/TouchableRipple';
import Text from '../Typography/Text';
/**
 * Checkbox.Item allows you to press the whole row (item) instead of only the Checkbox.
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { View } from 'react-native';
 * import { Checkbox } from 'react-native-paper';
 *
 * const MyComponent = () => (
 *   <View>
 *     <Checkbox.Item label="Item" status="checked" />
 *   </View>
 * );
 *
 * export default MyComponent;
 *```
 */

const CheckboxItem = _ref => {
  let {
    style,
    status,
    label,
    onPress,
    onLongPress,
    labelStyle,
    theme: themeOverrides,
    testID,
    mode,
    position = 'trailing',
    accessibilityLabel = label,
    disabled,
    labelVariant = 'bodyLarge',
    labelMaxFontSizeMultiplier = 1.5,
    rippleColor,
    background,
    ...props
  } = _ref;
  const theme = useInternalTheme(themeOverrides);
  const checkboxProps = {
    ...props,
    status,
    theme,
    disabled
  };
  const isLeading = position === 'leading';
  let checkbox;
  if (mode === 'android') {
    checkbox = /*#__PURE__*/React.createElement(CheckboxAndroid, checkboxProps);
  } else if (mode === 'ios') {
    checkbox = /*#__PURE__*/React.createElement(CheckboxIOS, checkboxProps);
  } else {
    checkbox = /*#__PURE__*/React.createElement(Checkbox, checkboxProps);
  }
  const textColor = theme.isV3 ? theme.colors.onSurface : theme.colors.text;
  const disabledTextColor = theme.isV3 ? theme.colors.onSurfaceDisabled : theme.colors.disabled;
  const textAlign = isLeading ? 'right' : 'left';
  const computedStyle = {
    color: disabled ? disabledTextColor : textColor,
    textAlign
  };
  return /*#__PURE__*/React.createElement(TouchableRipple, {
    accessibilityLabel: accessibilityLabel,
    accessibilityRole: "checkbox",
    accessibilityState: {
      checked: status === 'checked',
      disabled
    },
    onPress: onPress,
    onLongPress: onLongPress,
    testID: testID,
    disabled: disabled,
    rippleColor: rippleColor,
    theme: theme,
    background: background
  }, /*#__PURE__*/React.createElement(View, {
    style: [styles.container, style],
    pointerEvents: "none",
    importantForAccessibility: "no-hide-descendants"
  }, isLeading && checkbox, /*#__PURE__*/React.createElement(Text, {
    variant: labelVariant,
    testID: `${testID}-text`,
    maxFontSizeMultiplier: labelMaxFontSizeMultiplier,
    style: [styles.label, !theme.isV3 && styles.font, computedStyle, labelStyle]
  }, label), !isLeading && checkbox));
};
CheckboxItem.displayName = 'Checkbox.Item';
export default CheckboxItem;

// @component-docs ignore-next-line
export { CheckboxItem };
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
//# sourceMappingURL=CheckboxItem.js.map