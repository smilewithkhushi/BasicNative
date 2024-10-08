"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.AppbarContent = void 0;
var React = _interopRequireWildcard(require("react"));
var _reactNative = require("react-native");
var _color = _interopRequireDefault(require("color"));
var _utils = require("./utils");
var _theming = require("../../core/theming");
var _colors = require("../../styles/themes/v2/colors");
var _Text = _interopRequireDefault(require("../Typography/Text"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
/**
 * A component used to display a title and optional subtitle in an appbar.
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { Appbar } from 'react-native-paper';
 *
 * const MyComponent = () => (
 *     <Appbar.Header>
 *        <Appbar.Content title="Title" />
 *     </Appbar.Header>
 * );
 *
 * export default MyComponent;
 * ```
 */
const AppbarContent = _ref => {
  let {
    color: titleColor,
    subtitle,
    subtitleStyle,
    onPress,
    disabled,
    style,
    titleRef,
    titleStyle,
    title,
    titleMaxFontSizeMultiplier,
    mode = 'small',
    theme: themeOverrides,
    testID = 'appbar-content',
    ...rest
  } = _ref;
  const theme = (0, _theming.useInternalTheme)(themeOverrides);
  const {
    isV3,
    colors
  } = theme;
  const titleTextColor = titleColor ? titleColor : isV3 ? colors.onSurface : _colors.white;
  const subtitleColor = (0, _color.default)(titleTextColor).alpha(0.7).rgb().string();
  const modeContainerStyles = {
    small: styles.v3DefaultContainer,
    medium: styles.v3MediumContainer,
    large: styles.v3LargeContainer,
    'center-aligned': styles.v3DefaultContainer
  };
  const variant = _utils.modeTextVariant[mode];
  const contentWrapperProps = {
    pointerEvents: 'box-none',
    style: [styles.container, isV3 && modeContainerStyles[mode], style],
    testID,
    ...rest
  };
  const content = /*#__PURE__*/React.createElement(React.Fragment, null, typeof title === 'string' ? /*#__PURE__*/React.createElement(_Text.default, _extends({}, isV3 && {
    variant
  }, {
    ref: titleRef,
    style: [{
      color: titleTextColor,
      ...(isV3 ? theme.fonts[variant] : _reactNative.Platform.OS === 'ios' ? theme.fonts.regular : theme.fonts.medium)
    }, !isV3 && styles.title, titleStyle],
    numberOfLines: 1,
    accessible: true,
    accessibilityRole: onPress ? 'none' : _reactNative.Platform.OS === 'web' ? 'heading' : 'header'
    // @ts-expect-error We keep old a11y props for backwards compat with old RN versions
    ,
    accessibilityTraits: "header",
    testID: `${testID}-title-text`,
    maxFontSizeMultiplier: titleMaxFontSizeMultiplier
  }), title) : title, !isV3 && subtitle ? /*#__PURE__*/React.createElement(_Text.default, {
    style: [styles.subtitle, {
      color: subtitleColor
    }, subtitleStyle],
    numberOfLines: 1
  }, subtitle) : null);
  if (onPress) {
    return (
      /*#__PURE__*/
      // eslint-disable-next-line react-native-a11y/has-accessibility-props
      React.createElement(_reactNative.Pressable, _extends({
        accessibilityRole: touchableRole
        // @ts-expect-error We keep old a11y props for backwards compat with old RN versions
        ,
        accessibilityTraits: touchableRole,
        accessibilityComponentType: "button",
        onPress: onPress,
        disabled: disabled
      }, contentWrapperProps), content)
    );
  }
  return /*#__PURE__*/React.createElement(_reactNative.View, contentWrapperProps, content);
};
exports.AppbarContent = AppbarContent;
AppbarContent.displayName = 'Appbar.Content';
const styles = _reactNative.StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 12
  },
  v3DefaultContainer: {
    paddingHorizontal: 0
  },
  v3MediumContainer: {
    paddingHorizontal: 0,
    justifyContent: 'flex-end',
    paddingBottom: 24
  },
  v3LargeContainer: {
    paddingHorizontal: 0,
    paddingTop: 36,
    justifyContent: 'flex-end',
    paddingBottom: 28
  },
  title: {
    fontSize: _reactNative.Platform.OS === 'ios' ? 17 : 20
  },
  subtitle: {
    fontSize: _reactNative.Platform.OS === 'ios' ? 11 : 14
  }
});
const iosTouchableRole = ['button', 'header'];
const touchableRole = _reactNative.Platform.select({
  ios: iosTouchableRole,
  default: iosTouchableRole[0]
});
var _default = AppbarContent; // @component-docs ignore-next-line
exports.default = _default;
//# sourceMappingURL=AppbarContent.js.map