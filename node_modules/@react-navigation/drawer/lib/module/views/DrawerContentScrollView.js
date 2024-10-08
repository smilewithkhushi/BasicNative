function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from 'react';
import { I18nManager, ScrollView, StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import DrawerPositionContext from '../utils/DrawerPositionContext';
function DrawerContentScrollView(_ref, ref) {
  let {
    contentContainerStyle,
    style,
    children,
    ...rest
  } = _ref;
  const drawerPosition = React.useContext(DrawerPositionContext);
  const insets = useSafeAreaInsets();
  const isRight = I18nManager.getConstants().isRTL ? drawerPosition === 'left' : drawerPosition === 'right';
  return /*#__PURE__*/React.createElement(ScrollView, _extends({}, rest, {
    ref: ref,
    contentContainerStyle: [{
      paddingTop: insets.top + 4,
      paddingStart: !isRight ? insets.left : 0,
      paddingEnd: isRight ? insets.right : 0
    }, contentContainerStyle],
    style: [styles.container, style]
  }), children);
}
export default /*#__PURE__*/React.forwardRef(DrawerContentScrollView);
const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
//# sourceMappingURL=DrawerContentScrollView.js.map