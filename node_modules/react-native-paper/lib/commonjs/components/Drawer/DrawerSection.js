"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var React = _interopRequireWildcard(require("react"));
var _reactNative = require("react-native");
var _color = _interopRequireDefault(require("color"));
var _theming = require("../../core/theming");
var _tokens = require("../../styles/themes/v3/tokens");
var _Divider = _interopRequireDefault(require("../Divider"));
var _Text = _interopRequireDefault(require("../Typography/Text"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
/**
 * A component to group content inside a navigation drawer.
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { Drawer } from 'react-native-paper';
 *
 * const MyComponent = () => {
 *   const [active, setActive] = React.useState('');
 *
 *   return (
 *     <Drawer.Section title="Some title">
 *       <Drawer.Item
 *         label="First Item"
 *         active={active === 'first'}
 *         onPress={() => setActive('first')}
 *       />
 *       <Drawer.Item
 *         label="Second Item"
 *         active={active === 'second'}
 *         onPress={() => setActive('second')}
 *       />
 *     </Drawer.Section>
 *   );
 * };
 *
 * export default MyComponent;
 * ```
 */
const DrawerSection = _ref => {
  let {
    children,
    title,
    theme: themeOverrides,
    style,
    showDivider = true,
    titleMaxFontSizeMultiplier,
    ...rest
  } = _ref;
  const theme = (0, _theming.useInternalTheme)(themeOverrides);
  const {
    isV3
  } = theme;
  const titleColor = isV3 ? theme.colors.onSurfaceVariant : (0, _color.default)(theme.colors.text).alpha(0.54).rgb().string();
  const titleMargin = isV3 ? 28 : 16;
  const font = isV3 ? theme.fonts.titleSmall : theme.fonts.medium;
  return /*#__PURE__*/React.createElement(_reactNative.View, _extends({
    style: [styles.container, style]
  }, rest), title && /*#__PURE__*/React.createElement(_reactNative.View, {
    style: [styles.titleContainer, isV3 && styles.v3TitleContainer]
  }, title && /*#__PURE__*/React.createElement(_Text.default, {
    variant: "titleSmall",
    numberOfLines: 1,
    style: [{
      color: titleColor,
      marginLeft: titleMargin,
      ...font
    }],
    maxFontSizeMultiplier: titleMaxFontSizeMultiplier
  }, title)), children, showDivider && /*#__PURE__*/React.createElement(_Divider.default, _extends({}, isV3 && {
    horizontalInset: true,
    bold: true
  }, {
    style: [styles.divider, isV3 && styles.v3Divider],
    theme: theme
  })));
};
DrawerSection.displayName = 'Drawer.Section';
const styles = _reactNative.StyleSheet.create({
  container: {
    marginBottom: 4
  },
  titleContainer: {
    height: 40,
    justifyContent: 'center'
  },
  v3TitleContainer: {
    height: 56
  },
  divider: {
    marginTop: 4
  },
  v3Divider: {
    backgroundColor: _tokens.MD3Colors.neutralVariant50
  }
});
var _default = DrawerSection;
exports.default = _default;
//# sourceMappingURL=DrawerSection.js.map