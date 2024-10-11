function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from 'react';
import { I18nManager, StyleSheet } from 'react-native';
import color from 'color';
import Text from './Text';
import { useInternalTheme } from '../../../core/theming';
const StyledText = _ref => {
  var _theme$colors, _theme$fonts;
  let {
    alpha = 1,
    family,
    style,
    theme: themeOverrides,
    ...rest
  } = _ref;
  const theme = useInternalTheme(themeOverrides);
  const textColor = color(theme.isV3 ? theme.colors.onSurface : (_theme$colors = theme.colors) === null || _theme$colors === void 0 ? void 0 : _theme$colors.text).alpha(alpha).rgb().string();
  const writingDirection = I18nManager.getConstants().isRTL ? 'rtl' : 'ltr';
  return /*#__PURE__*/React.createElement(Text, _extends({}, rest, {
    style: [styles.text, {
      color: textColor,
      ...(!theme.isV3 && ((_theme$fonts = theme.fonts) === null || _theme$fonts === void 0 ? void 0 : _theme$fonts[family])),
      writingDirection
    }, style]
  }));
};
const styles = StyleSheet.create({
  text: {
    textAlign: 'left'
  }
});
export default StyledText;
//# sourceMappingURL=StyledText.js.map