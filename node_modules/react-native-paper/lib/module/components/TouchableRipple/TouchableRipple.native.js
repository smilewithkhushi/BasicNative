function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from 'react';
import { Platform, StyleSheet, View } from 'react-native';
import { Pressable } from './Pressable';
import { getTouchableRippleColors } from './utils';
import { SettingsContext } from '../../core/settings';
import { useInternalTheme } from '../../core/theming';
import { forwardRef } from '../../utils/forwardRef';
import hasTouchHandler from '../../utils/hasTouchHandler';
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
  const theme = useInternalTheme(themeOverrides);
  const {
    rippleEffectEnabled
  } = React.useContext(SettingsContext);
  const {
    onPress,
    onLongPress,
    onPressIn,
    onPressOut
  } = rest;
  const hasPassedTouchHandler = hasTouchHandler({
    onPress,
    onLongPress,
    onPressIn,
    onPressOut
  });
  const disabled = disabledProp || !hasPassedTouchHandler;
  const {
    calculatedRippleColor,
    calculatedUnderlayColor
  } = getTouchableRippleColors({
    theme,
    rippleColor,
    underlayColor
  });

  // A workaround for ripple on Android P is to use useForeground + overflow: 'hidden'
  // https://github.com/facebook/react-native/issues/6480
  const useForeground = Platform.OS === 'android' && Platform.Version >= ANDROID_VERSION_PIE && borderless;
  if (TouchableRipple.supported) {
    const androidRipple = rippleEffectEnabled ? background ?? {
      color: calculatedRippleColor,
      borderless,
      foreground: useForeground
    } : undefined;
    return /*#__PURE__*/React.createElement(Pressable, _extends({}, rest, {
      ref: ref,
      disabled: disabled,
      style: [borderless && styles.overflowHidden, style],
      android_ripple: androidRipple
    }), React.Children.only(children));
  }
  return /*#__PURE__*/React.createElement(Pressable, _extends({}, rest, {
    ref: ref,
    disabled: disabled,
    style: [borderless && styles.overflowHidden, style]
  }), _ref2 => {
    let {
      pressed
    } = _ref2;
    return /*#__PURE__*/React.createElement(React.Fragment, null, pressed && rippleEffectEnabled && /*#__PURE__*/React.createElement(View, {
      testID: "touchable-ripple-underlay",
      style: [styles.underlay, {
        backgroundColor: calculatedUnderlayColor
      }]
    }), React.Children.only(children));
  });
};
TouchableRipple.supported = Platform.OS === 'android' && Platform.Version >= ANDROID_VERSION_LOLLIPOP;
const styles = StyleSheet.create({
  overflowHidden: {
    overflow: 'hidden'
  },
  underlay: {
    ...StyleSheet.absoluteFillObject,
    zIndex: 2
  }
});
const Component = forwardRef(TouchableRipple);
export default Component;
//# sourceMappingURL=TouchableRipple.native.js.map