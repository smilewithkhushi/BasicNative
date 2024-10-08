import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import color from 'color';
import { useInternalTheme } from '../../core/theming';
import Icon from '../Icon';
import TouchableRipple from '../TouchableRipple/TouchableRipple';
import Text from '../Typography/Text';
/**
 * A component used to show an action item with an icon and a label in a navigation drawer.
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { Drawer } from 'react-native-paper';
 *
 * const MyComponent = () => (
 *    <Drawer.Item
 *      style={{ backgroundColor: '#64ffda' }}
 *      icon="star"
 *      label="First Item"
 *    />
 * );
 *
 * export default MyComponent;
 * ```
 */
const DrawerItem = _ref => {
  let {
    icon,
    label,
    active,
    disabled,
    theme: themeOverrides,
    rippleColor: customRippleColor,
    style,
    onPress,
    background,
    accessibilityLabel,
    right,
    labelMaxFontSizeMultiplier,
    ...rest
  } = _ref;
  const theme = useInternalTheme(themeOverrides);
  const {
    roundness,
    isV3
  } = theme;
  const backgroundColor = active ? isV3 ? theme.colors.secondaryContainer : color(theme.colors.primary).alpha(0.12).rgb().string() : 'transparent';
  const contentColor = active ? isV3 ? theme.colors.onSecondaryContainer : theme.colors.primary : isV3 ? theme.colors.onSurfaceVariant : color(theme.colors.text).alpha(0.68).rgb().string();
  const labelMargin = icon ? isV3 ? 12 : 32 : 0;
  const borderRadius = (isV3 ? 7 : 1) * roundness;
  const rippleColor = isV3 ? color(contentColor).alpha(0.12).rgb().string() : undefined;
  const font = isV3 ? theme.fonts.labelLarge : theme.fonts.medium;
  return /*#__PURE__*/React.createElement(View, rest, /*#__PURE__*/React.createElement(TouchableRipple, {
    borderless: true,
    disabled: disabled,
    background: background,
    onPress: onPress,
    style: [styles.container, {
      backgroundColor,
      borderRadius
    }, isV3 && styles.v3Container, style],
    accessibilityRole: "button",
    accessibilityState: {
      selected: active
    },
    accessibilityLabel: accessibilityLabel,
    rippleColor: customRippleColor || rippleColor,
    theme: theme
  }, /*#__PURE__*/React.createElement(View, {
    style: [styles.wrapper, isV3 && styles.v3Wrapper]
  }, /*#__PURE__*/React.createElement(View, {
    style: styles.content
  }, icon ? /*#__PURE__*/React.createElement(Icon, {
    source: icon,
    size: 24,
    color: contentColor
  }) : null, /*#__PURE__*/React.createElement(Text, {
    variant: "labelLarge",
    selectable: false,
    numberOfLines: 1,
    style: [styles.label, {
      color: contentColor,
      marginLeft: labelMargin,
      ...font
    }],
    maxFontSizeMultiplier: labelMaxFontSizeMultiplier
  }, label)), right === null || right === void 0 ? void 0 : right({
    color: contentColor
  }))));
};
DrawerItem.displayName = 'Drawer.Item';
const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
    marginVertical: 4
  },
  v3Container: {
    justifyContent: 'center',
    height: 56,
    marginLeft: 12,
    marginRight: 12,
    marginVertical: 0
  },
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8
  },
  v3Wrapper: {
    marginLeft: 16,
    marginRight: 24,
    padding: 0
  },
  content: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  },
  label: {
    marginRight: 32
  }
});
export default DrawerItem;
//# sourceMappingURL=DrawerItem.js.map