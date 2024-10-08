function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { useInternalTheme } from '../../core/theming';
import { white } from '../../styles/themes/v2/colors';
import getContrastingColor from '../../utils/getContrastingColor';
import Icon from '../Icon';
const defaultSize = 64;
/**
 * Avatars can be used to represent people in a graphical way.
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { Avatar } from 'react-native-paper';
 *
 * const MyComponent = () => (
 *   <Avatar.Icon size={24} icon="folder" />
 * );
 * ```
 */
const Avatar = _ref => {
  var _theme$colors;
  let {
    icon,
    size = defaultSize,
    style,
    theme: themeOverrides,
    ...rest
  } = _ref;
  const theme = useInternalTheme(themeOverrides);
  const {
    backgroundColor = (_theme$colors = theme.colors) === null || _theme$colors === void 0 ? void 0 : _theme$colors.primary,
    ...restStyle
  } = StyleSheet.flatten(style) || {};
  const textColor = rest.color ?? getContrastingColor(backgroundColor, white, 'rgba(0, 0, 0, .54)');
  return /*#__PURE__*/React.createElement(View, _extends({
    style: [{
      width: size,
      height: size,
      borderRadius: size / 2,
      backgroundColor
    }, styles.container, restStyle]
  }, rest), /*#__PURE__*/React.createElement(Icon, {
    source: icon,
    color: textColor,
    size: size * 0.6
  }));
};
Avatar.displayName = 'Avatar.Icon';
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center'
  }
});
export default Avatar;
//# sourceMappingURL=AvatarIcon.js.map