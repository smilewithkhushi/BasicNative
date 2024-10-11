"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.IconAdornment = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactNative = require("react-native");
var _utils = require("./utils");
var _theming = require("../../../core/theming");
var _IconButton = _interopRequireDefault(require("../../IconButton/IconButton"));
var _constants = require("../constants");
var _helpers = require("../helpers");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
const StyleContext = /*#__PURE__*/_react.default.createContext({
  style: {},
  isTextInputFocused: false,
  forceFocus: () => {},
  testID: ''
});
const IconAdornment = _ref => {
  let {
    icon,
    topPosition,
    side,
    isTextInputFocused,
    forceFocus,
    testID,
    theme: themeOverrides,
    disabled
  } = _ref;
  const {
    isV3
  } = (0, _theming.useInternalTheme)(themeOverrides);
  const {
    ICON_OFFSET
  } = (0, _helpers.getConstants)(isV3);
  const style = {
    top: topPosition,
    [side]: ICON_OFFSET
  };
  const contextState = {
    style,
    isTextInputFocused,
    forceFocus,
    testID,
    disabled
  };
  return /*#__PURE__*/_react.default.createElement(StyleContext.Provider, {
    value: contextState
  }, icon);
};

/**
 * A component to render a leading / trailing icon in the TextInput
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { TextInput } from 'react-native-paper';
 *
 * const MyComponent = () => {
 *   const [text, setText] = React.useState('');
 *
 *   return (
 *     <TextInput
 *       label="Password"
 *       secureTextEntry
 *       right={<TextInput.Icon icon="eye" />}
 *     />
 *   );
 * };
 *
 * export default MyComponent;
 * ```
 */
exports.IconAdornment = IconAdornment;
const TextInputIcon = _ref2 => {
  let {
    icon,
    onPress,
    forceTextInputFocus,
    color: customColor,
    theme: themeOverrides,
    rippleColor,
    ...rest
  } = _ref2;
  const {
    style,
    isTextInputFocused,
    forceFocus,
    testID,
    disabled
  } = _react.default.useContext(StyleContext);
  const onPressWithFocusControl = _react.default.useCallback(e => {
    if (forceTextInputFocus && !isTextInputFocused) {
      forceFocus();
    }
    onPress === null || onPress === void 0 ? void 0 : onPress(e);
  }, [forceTextInputFocus, forceFocus, isTextInputFocused, onPress]);
  const theme = (0, _theming.useInternalTheme)(themeOverrides);
  const iconColor = (0, _utils.getIconColor)({
    theme,
    disabled,
    isTextInputFocused,
    customColor
  });
  return /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: [styles.container, style]
  }, /*#__PURE__*/_react.default.createElement(_IconButton.default, _extends({
    icon: icon,
    style: styles.iconButton,
    size: _constants.ICON_SIZE,
    onPress: onPressWithFocusControl,
    iconColor: iconColor,
    testID: testID,
    theme: themeOverrides,
    rippleColor: rippleColor
  }, rest)));
};
TextInputIcon.displayName = 'TextInput.Icon';
TextInputIcon.defaultProps = {
  forceTextInputFocus: true
};
const styles = _reactNative.StyleSheet.create({
  container: {
    position: 'absolute',
    width: _constants.ICON_SIZE,
    height: _constants.ICON_SIZE,
    justifyContent: 'center',
    alignItems: 'center'
  },
  iconButton: {
    margin: 0
  }
});
var _default = TextInputIcon; // @component-docs ignore-next-line
exports.default = _default;
//# sourceMappingURL=TextInputIcon.js.map