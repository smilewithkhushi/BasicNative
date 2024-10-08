"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var React = _interopRequireWildcard(require("react"));
var _reactNative = require("react-native");
var _Pressable = require("./Pressable");
var _utils = require("./utils");
var _settings = require("../../core/settings");
var _theming = require("../../core/theming");
var _forwardRef = require("../../utils/forwardRef");
var _hasTouchHandler = _interopRequireDefault(require("../../utils/hasTouchHandler"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
const ANDROID_VERSION_LOLLIPOP = 21;
const ANDROID_VERSION_PIE = 28;
const TouchableRipple = (_ref, ref) => {
  let {
    style,
    background,
    borderless = false,
    disabled: disabledProp,
    rippleColor,
    underlayColor,
    children,
    theme: themeOverrides,
    ...rest
  } = _ref;
  const theme = (0, _theming.useInternalTheme)(themeOverrides);
  const {
    rippleEffectEnabled
  } = React.useContext(_settings.SettingsContext);
  const {
    onPress,
    onLongPress,
    onPressIn,
    onPressOut
  } = rest;
  const hasPassedTouchHandler = (0, _hasTouchHandler.default)({
    onPress,
    onLongPress,
    onPressIn,
    onPressOut
  });
  const disabled = disabledProp || !hasPassedTouchHandler;
  const {
    calculatedRippleColor,
    calculatedUnderlayColor
  } = (0, _utils.getTouchableRippleColors)({
    theme,
    rippleColor,
    underlayColor
  });

  // A workaround for ripple on Android P is to use useForeground + overflow: 'hidden'
  // https://github.com/facebook/react-native/issues/6480
  const useForeground = _reactNative.Platform.OS === 'android' && _reactNative.Platform.Version >= ANDROID_VERSION_PIE && borderless;
  if (TouchableRipple.supported) {
    const androidRipple = rippleEffectEnabled ? background ?? {
      color: calculatedRippleColor,
      borderless,
      foreground: useForeground
    } : undefined;
    return /*#__PURE__*/React.createElement(_Pressable.Pressable, _extends({}, rest, {
      ref: ref,
      disabled: disabled,
      style: [borderless && styles.overflowHidden, style],
      android_ripple: androidRipple
    }), React.Children.only(children));
  }
  return /*#__PURE__*/React.createElement(_Pressable.Pressable, _extends({}, rest, {
    ref: ref,
    disabled: disabled,
    style: [borderless && styles.overflowHidden, style]
  }), _ref2 => {
    let {
      pressed
    } = _ref2;
    return /*#__PURE__*/React.createElement(React.Fragment, null, pressed && rippleEffectEnabled && /*#__PURE__*/React.createElement(_reactNative.View, {
      testID: "touchable-ripple-underlay",
      style: [styles.underlay, {
        backgroundColor: calculatedUnderlayColor
      }]
    }), React.Children.only(children));
  });
};
TouchableRipple.supported = _reactNative.Platform.OS === 'android' && _reactNative.Platform.Version >= ANDROID_VERSION_LOLLIPOP;
const styles = _reactNative.StyleSheet.create({
  overflowHidden: {
    overflow: 'hidden'
  },
  underlay: {
    ..._reactNative.StyleSheet.absoluteFillObject,
    zIndex: 2
  }
});
const Component = (0, _forwardRef.forwardRef)(TouchableRipple);
var _default = Component;
exports.default = _default;
//# sourceMappingURL=TouchableRipple.native.js.map