"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var React = _interopRequireWildcard(require("react"));
var _reactNative = require("react-native");
var _utils = require("./utils");
var _theming = require("../../core/theming");
var _Icon = _interopRequireDefault(require("../Icon"));
var _TouchableRipple = _interopRequireDefault(require("../TouchableRipple/TouchableRipple"));
var _Text = _interopRequireDefault(require("../Typography/Text"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
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
  const theme = (0, _theming.useInternalTheme)(themeOverrides);
  const {
    titleColor,
    iconColor,
    rippleColor
  } = (0, _utils.getMenuItemColor)({
    theme,
    disabled,
    customRippleColor
  });
  const {
    isV3
  } = theme;
  const containerPadding = isV3 ? 12 : 8;
  const iconWidth = isV3 ? 24 : 40;
  const minWidth = _utils.MIN_WIDTH - (isV3 ? 12 : 16);
  const maxWidth = (0, _utils.getContentMaxWidth)({
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
  return /*#__PURE__*/React.createElement(_TouchableRipple.default, {
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
  }, /*#__PURE__*/React.createElement(_reactNative.View, {
    style: styles.row
  }, leadingIcon ? /*#__PURE__*/React.createElement(_reactNative.View, {
    style: [!isV3 && styles.item, {
      width: iconWidth
    }],
    pointerEvents: "box-none"
  }, /*#__PURE__*/React.createElement(_Icon.default, {
    source: leadingIcon,
    size: 24,
    color: iconColor
  })) : null, /*#__PURE__*/React.createElement(_reactNative.View, {
    style: [!isV3 && styles.item, styles.content, {
      minWidth,
      maxWidth
    }, isV3 && (leadingIcon ? styles.md3LeadingIcon : styles.md3WithoutLeadingIcon), contentStyle],
    pointerEvents: "none"
  }, /*#__PURE__*/React.createElement(_Text.default, {
    variant: "bodyLarge",
    selectable: false,
    numberOfLines: 1,
    testID: `${testID}-title`,
    style: [!isV3 && styles.title, titleTextStyle, titleStyle],
    maxFontSizeMultiplier: titleMaxFontSizeMultiplier
  }, title)), isV3 && trailingIcon ? /*#__PURE__*/React.createElement(_reactNative.View, {
    style: [!isV3 && styles.item, {
      width: iconWidth
    }],
    pointerEvents: "box-none"
  }, /*#__PURE__*/React.createElement(_Icon.default, {
    source: trailingIcon,
    size: 24,
    color: iconColor
  })) : null));
};
MenuItem.displayName = 'Menu.Item';
const styles = _reactNative.StyleSheet.create({
  container: {
    minWidth: _utils.MIN_WIDTH,
    maxWidth: _utils.MAX_WIDTH,
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
var _default = MenuItem;
exports.default = _default;
//# sourceMappingURL=MenuItem.js.map