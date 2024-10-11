function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { useInternalTheme } from '../../core/theming';
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
 *   <Avatar.Image size={24} source={require('../assets/avatar.png')} />
 * );
 * export default MyComponent
 * ```
 */
const AvatarImage = _ref => {
  let {
    size = defaultSize,
    source,
    style,
    onError,
    onLayout,
    onLoad,
    onLoadEnd,
    onLoadStart,
    onProgress,
    theme: themeOverrides,
    testID,
    ...rest
  } = _ref;
  const {
    colors
  } = useInternalTheme(themeOverrides);
  const {
    backgroundColor = colors === null || colors === void 0 ? void 0 : colors.primary
  } = StyleSheet.flatten(style) || {};
  return /*#__PURE__*/React.createElement(View, _extends({
    style: [{
      width: size,
      height: size,
      borderRadius: size / 2,
      backgroundColor
    }, style]
  }, rest), typeof source === 'function' && source({
    size
  }), typeof source !== 'function' && /*#__PURE__*/React.createElement(Image, {
    testID: testID,
    source: source,
    style: {
      width: size,
      height: size,
      borderRadius: size / 2
    },
    onError: onError,
    onLayout: onLayout,
    onLoad: onLoad,
    onLoadEnd: onLoadEnd,
    onLoadStart: onLoadStart,
    onProgress: onProgress,
    accessibilityIgnoresInvertColors: true
  }));
};
AvatarImage.displayName = 'Avatar.Image';
export default AvatarImage;
//# sourceMappingURL=AvatarImage.js.map