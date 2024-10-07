import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { getContentMaxWidth, getMenuItemColor, MAX_WIDTH, MIN_WIDTH } from './utils';
import { useInternalTheme } from '../../core/theming';
import Icon from '../Icon';
import TouchableRipple from '../TouchableRipple/TouchableRipple';
import Text from '../Typography/Text';
/**
 * A component to show a single list item inside a Menu.
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { View } from 'react-native';
 * import { Menu } from 'react-native-paper';
 *
 * const MyComponent = () => (
 *   <View style={{ flex: 1 }}>
 *     <Menu.Item leadingIcon="redo" onPress={() => {}} title="Redo" />
 *     <Menu.Item leadingIcon="undo" onPress={() => {}} title="Undo" />
 *     <Menu.Item leadingIcon="content-cut" onPress={() => {}} title="Cut" disabled />
 *     <Menu.Item leadingIcon="content-copy" onPress={() => {}} title="Copy" disabled />
 *     <Menu.Item leadingIcon="content-paste" onPress={() => {}} title="Paste" />
 *   </View>
 * );
 *
 * export default MyComponent;
 * ```
 */
const MenuItem = _ref => {
  let {
    leadingIcon,
    trailingIcon,
    dense,
    title,
    disabled,
    background,
    onPress,
    style,
    contentStyle,
    titleStyle,
    rippleColor: customRippleColor,
    testID = 'menu-item',
    accessibilityLabel,
    accessibilityState,
    theme: themeOverrides,
    titleMaxFontSizeMultiplier = 1.5
  } = _ref;
  const theme = useInternalTheme(themeOverrides);
  const {
    titleColor,
    iconColor,
    rippleColor
  } = getMenuItemColor({
    theme,
    disabled,
    customRippleColor
  });
  const {
    isV3
  } = theme;
  const containerPadding = isV3 ? 12 : 8;
  const iconWidth = isV3 ? 24 : 40;
  const minWidth = MIN_WIDTH - (isV3 ? 12 : 16);
  const maxWidth = getContentMaxWidth({
    isV3,
    iconWidth,
    leadingIcon,
    trailingIcon
  });
  const titleTextStyle = {
    color: titleColor,
    ...(isV3 ? theme.fonts.bodyLarge : {})
  };
  const newAccessibilityState = {
    ...accessibilityState,
    disabled
  };
  return /*#__PURE__*/React.createElement(TouchableRipple, {
    style: [styles.container, {
      paddingHorizontal: containerPadding
    }, dense && styles.md3DenseContainer, style],
    onPress: onPress,
    disabled: disabled,
    testID: testID,
    background: background,
    accessibilityLabel: accessibilityLabel,
    accessibilityRole: "menuitem",
    accessibilityState: newAccessibilityState,
    rippleColor: rippleColor
  }, /*#__PURE__*/React.createElement(View, {
    style: styles.row
  }, leadingIcon ? /*#__PURE__*/React.createElement(View, {
    style: [!isV3 && styles.item, {
      width: iconWidth
    }],
    pointerEvents: "box-none"
  }, /*#__PURE__*/React.createElement(Icon, {
    source: leadingIcon,
    size: 24,
    color: iconColor
  })) : null, /*#__PURE__*/React.createElement(View, {
    style: [!isV3 && styles.item, styles.content, {
      minWidth,
      maxWidth
    }, isV3 && (leadingIcon ? styles.md3LeadingIcon : styles.md3WithoutLeadingIcon), contentStyle],
    pointerEvents: "none"
  }, /*#__PURE__*/React.createElement(Text, {
    variant: "bodyLarge",
    selectable: false,
    numberOfLines: 1,
    testID: `${testID}-title`,
    style: [!isV3 && styles.title, titleTextStyle, titleStyle],
    maxFontSizeMultiplier: titleMaxFontSizeMultiplier
  }, title)), isV3 && trailingIcon ? /*#__PURE__*/React.createElement(View, {
    style: [!isV3 && styles.item, {
      width: iconWidth
    }],
    pointerEvents: "box-none"
  }, /*#__PURE__*/React.createElement(Icon, {
    source: trailingIcon,
    size: 24,
    color: iconColor
  })) : null));
};
MenuItem.displayName = 'Menu.Item';
const styles = StyleSheet.create({
  container: {
    minWidth: MIN_WIDTH,
    maxWidth: MAX_WIDTH,
    height: 48,
    justifyContent: 'center'
  },
  md3DenseContainer: {
    height: 32
  },
  row: {
    flexDirection: 'row'
  },
  title: {
    fontSize: 16
  },
  item: {
    marginHorizontal: 8
  },
  content: {
    justifyContent: 'center'
  },
  md3LeadingIcon: {
    marginLeft: 12
  },
  md3WithoutLeadingIcon: {
    marginLeft: 4
  }
});
export default MenuItem;
//# sourceMappingURL=MenuItem.js.map