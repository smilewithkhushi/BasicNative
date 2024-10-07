"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var React = _interopRequireWildcard(require("react"));
var _reactNative = require("react-native");
var _utils = require("./utils");
var _theming = require("../../core/theming");
var _forwardRef = require("../../utils/forwardRef");
var _ActivityIndicator = _interopRequireDefault(require("../ActivityIndicator"));
var _CrossFadeIcon = _interopRequireDefault(require("../CrossFadeIcon"));
var _Icon = _interopRequireDefault(require("../Icon"));
var _Surface = _interopRequireDefault(require("../Surface"));
var _TouchableRipple = _interopRequireDefault(require("../TouchableRipple/TouchableRipple"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
const PADDING = 8;
/**
 * An icon button is a button which displays only an icon without a label.
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { IconButton, MD3Colors } from 'react-native-paper';
 *
 * const MyComponent = () => (
 *   <IconButton
 *     icon="camera"
 *     iconColor={MD3Colors.error50}
 *     size={20}
 *     onPress={() => console.log('Pressed')}
 *   />
 * );
 *
 * export default MyComponent;
 * ```
 *
 * @extends TouchableRipple props https://callstack.github.io/react-native-paper/docs/components/TouchableRipple
 */
const IconButton = (0, _forwardRef.forwardRef)((_ref, ref) => {
  let {
    icon,
    iconColor: customIconColor,
    containerColor: customContainerColor,
    rippleColor: customRippleColor,
    size = 24,
    accessibilityLabel,
    disabled,
    onPress,
    selected = false,
    animated = false,
    mode,
    style,
    theme: themeOverrides,
    testID = 'icon-button',
    loading = false,
    ...rest
  } = _ref;
  const theme = (0, _theming.useInternalTheme)(themeOverrides);
  const {
    isV3
  } = theme;
  const IconComponent = animated ? _CrossFadeIcon.default : _Icon.default;
  const {
    iconColor,
    rippleColor,
    backgroundColor,
    borderColor
  } = (0, _utils.getIconButtonColor)({
    theme,
    disabled,
    selected,
    mode,
    customIconColor,
    customContainerColor,
    customRippleColor
  });
  const buttonSize = isV3 ? size + 2 * PADDING : size * 1.5;
  const {
    borderWidth = isV3 && mode === 'outlined' && !selected ? 1 : 0,
    borderRadius = buttonSize / 2
  } = _reactNative.StyleSheet.flatten(style) || {};
  const borderStyles = {
    borderWidth,
    borderRadius,
    borderColor
  };
  return /*#__PURE__*/React.createElement(_Surface.default, _extends({
    ref: ref,
    testID: `${testID}-container`,
    style: [{
      backgroundColor,
      width: buttonSize,
      height: buttonSize
    }, styles.container, borderStyles, !isV3 && disabled && styles.disabled, style]
  }, isV3 && {
    elevation: 0
  }), /*#__PURE__*/React.createElement(_TouchableRipple.default, _extends({
    borderless: true,
    centered: true,
    onPress: onPress,
    rippleColor: rippleColor,
    accessibilityLabel: accessibilityLabel,
    style: [styles.touchable, {
      borderRadius
    }]
    // @ts-expect-error We keep old a11y props for backwards compat with old RN versions
    ,
    accessibilityTraits: disabled ? ['button', 'disabled'] : 'button',
    accessibilityComponentType: "button",
    accessibilityRole: "button",
    accessibilityState: {
      disabled
    },
    disabled: disabled,
    hitSlop: _TouchableRipple.default.supported ? {
      top: 10,
      left: 10,
      bottom: 10,
      right: 10
    } : {
      top: 6,
      left: 6,
      bottom: 6,
      right: 6
    },
    testID: testID
  }, rest), loading ? /*#__PURE__*/React.createElement(_ActivityIndicator.default, {
    size: size,
    color: iconColor
  }) : /*#__PURE__*/React.createElement(IconComponent, {
    color: iconColor,
    source: icon,
    size: size
  })));
});
const styles = _reactNative.StyleSheet.create({
  container: {
    overflow: 'hidden',
    margin: 6,
    elevation: 0
  },
  touchable: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  disabled: {
    opacity: 0.32
  }
});
var _default = IconButton;
exports.default = _default;
//# sourceMappingURL=IconButton.js.map