function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import { PlatformPressable } from '@react-navigation/elements';
import { DrawerActions, useNavigation } from '@react-navigation/native';
import * as React from 'react';
import { Image, Platform, StyleSheet } from 'react-native';
export default function DrawerToggleButton(_ref) {
  let {
    tintColor,
    ...rest
  } = _ref;
  const navigation = useNavigation();
  return /*#__PURE__*/React.createElement(PlatformPressable, _extends({}, rest, {
    accessible: true,
    accessibilityRole: "button",
    android_ripple: {
      borderless: true
    },
    onPress: () => navigation.dispatch(DrawerActions.toggleDrawer()),
    style: styles.touchable,
    hitSlop: Platform.select({
      ios: undefined,
      default: {
        top: 16,
        right: 16,
        bottom: 16,
        left: 16
      }
    })
  }), /*#__PURE__*/React.createElement(Image, {
    style: [styles.icon, tintColor ? {
      tintColor
    } : null],
    source: require('./assets/toggle-drawer-icon.png'),
    fadeDuration: 0
  }));
}
const styles = StyleSheet.create({
  icon: {
    height: 24,
    width: 24,
    margin: 3,
    resizeMode: 'contain'
  },
  touchable: {
    marginHorizontal: 11
  }
});
//# sourceMappingURL=DrawerToggleButton.js.map