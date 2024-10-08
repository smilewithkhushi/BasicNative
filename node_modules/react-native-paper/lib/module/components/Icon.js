function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from 'react';
import { I18nManager, Image, Platform } from 'react-native';
import { accessibilityProps } from './MaterialCommunityIcon';
import { Consumer as SettingsConsumer } from '../core/settings';
import { useInternalTheme } from '../core/theming';
const isImageSource = source =>
// source is an object with uri
typeof source === 'object' && source !== null && Object.prototype.hasOwnProperty.call(source, 'uri') && typeof source.uri === 'string' ||
// source is a module, e.g. - require('image')
typeof source === 'number' ||
// image url on web
Platform.OS === 'web' && typeof source === 'string' && (source.startsWith('data:image') || /\.(bmp|jpg|jpeg|png|gif|svg)$/.test(source));
const getIconId = source => {
  if (typeof source === 'object' && source !== null && Object.prototype.hasOwnProperty.call(source, 'uri') && typeof source.uri === 'string') {
    return source.uri;
  }
  return source;
};
export const isValidIcon = source => typeof source === 'string' || typeof source === 'function' || isImageSource(source);
export const isEqualIcon = (a, b) => a === b || getIconId(a) === getIconId(b);
/**
 * An icon component which renders icon from vector library.
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { Icon, MD3Colors } from 'react-native-paper';
 *
 * const MyComponent = () => (
 *   <Icon
 *     source="camera"
 *     color={MD3Colors.error50}
 *     size={20}
 *   />
 * );
 *
 * export default MyComponent;
 * ```
 */

const Icon = _ref => {
  let {
    source,
    color,
    size,
    theme: themeOverrides,
    testID,
    ...rest
  } = _ref;
  const theme = useInternalTheme(themeOverrides);
  const direction = typeof source === 'object' && source.direction && source.source ? source.direction === 'auto' ? I18nManager.getConstants().isRTL ? 'rtl' : 'ltr' : source.direction : null;
  const s = typeof source === 'object' && source.direction && source.source ? source.source : source;
  const iconColor = color || (theme.isV3 ? theme.colors.onSurface : theme.colors.text);
  if (isImageSource(s)) {
    return /*#__PURE__*/React.createElement(Image, _extends({}, rest, {
      testID: testID,
      source: s,
      style: [{
        transform: [{
          scaleX: direction === 'rtl' ? -1 : 1
        }]
      }, {
        width: size,
        height: size,
        tintColor: color,
        resizeMode: `contain`
      }]
    }, accessibilityProps, {
      accessibilityIgnoresInvertColors: true
    }));
  } else if (typeof s === 'string') {
    return /*#__PURE__*/React.createElement(SettingsConsumer, null, _ref2 => {
      let {
        icon
      } = _ref2;
      return icon === null || icon === void 0 ? void 0 : icon({
        name: s,
        color: iconColor,
        size,
        direction,
        testID
      });
    });
  } else if (typeof s === 'function') {
    return s({
      color: iconColor,
      size,
      direction,
      testID
    });
  }
  return null;
};
export default Icon;
//# sourceMappingURL=Icon.js.map