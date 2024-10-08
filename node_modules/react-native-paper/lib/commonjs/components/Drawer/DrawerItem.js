"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var React = _interopRequireWildcard(require("react"));
var _reactNative = require("react-native");
var _color = _interopRequireDefault(require("color"));
var _theming = require("../../core/theming");
var _Icon = _interopRequireDefault(require("../Icon"));
var _TouchableRipple = _interopRequireDefault(require("../TouchableRipple/TouchableRipple"));
var _Text = _interopRequireDefault(require("../Typography/Text"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
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
  const theme = (0, _theming.useInternalTheme)(themeOverrides);
  const {
    roundness,
    isV3
  } = theme;
  const backgroundColor = active ? isV3 ? theme.colors.secondaryContainer : (0, _color.default)(theme.colors.primary).alpha(0.12).rgb().string() : 'transparent';
  const contentColor = active ? isV3 ? theme.colors.onSecondaryContainer : theme.colors.primary : isV3 ? theme.colors.onSurfaceVariant : (0, _color.default)(theme.colors.text).alpha(0.68).rgb().string();
  const labelMargin = icon ? isV3 ? 12 : 32 : 0;
  const borderRadius = (isV3 ? 7 : 1) * roundness;
  const rippleColor = isV3 ? (0, _color.default)(contentColor).alpha(0.12).rgb().string() : undefined;
  const font = isV3 ? theme.fonts.labelLarge : theme.fonts.medium;
  return /*#__PURE__*/React.createElement(_reactNative.View, rest, /*#__PURE__*/React.createElement(_TouchableRipple.default, {
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
  }, /*#__PURE__*/React.createElement(_reactNative.View, {
    style: [styles.wrapper, isV3 && styles.v3Wrapper]
  }, /*#__PURE__*/React.createElement(_reactNative.View, {
    style: styles.content
  }, icon ? /*#__PURE__*/React.createElement(_Icon.default, {
    source: icon,
    size: 24,
    color: contentColor
  }) : null, /*#__PURE__*/React.createElement(_Text.default, {
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
const styles = _reactNative.StyleSheet.create({
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
var _default = DrawerItem;
exports.default = _default;
//# sourceMappingURL=DrawerItem.js.map