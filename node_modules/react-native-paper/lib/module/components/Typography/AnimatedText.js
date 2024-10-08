function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from 'react';
import { Animated, I18nManager, StyleSheet } from 'react-native';
import { useInternalTheme } from '../../core/theming';
/**
 * Animated text component which follows styles from the theme.
 *
 * @extends Text props https://reactnative.dev/docs/text#props
 */
function AnimatedText(_ref) {
  let {
    style,
    theme: themeOverrides,
    variant,
    ...rest
  } = _ref;
  const theme = useInternalTheme(themeOverrides);
  const writingDirection = I18nManager.getConstants().isRTL ? 'rtl' : 'ltr';
  if (theme.isV3 && variant) {
    const font = theme.fonts[variant];
    if (typeof font !== 'object') {
      throw new Error(`Variant ${variant} was not provided properly. Valid variants are ${Object.keys(theme.fonts).join(', ')}.`);
    }
    return /*#__PURE__*/React.createElement(Animated.Text, _extends({}, rest, {
      style: [font, styles.text, {
        writingDirection,
        color: theme.colors.onSurface
      }, style]
    }));
  } else {
    const font = !theme.isV3 ? theme.fonts.regular : theme.fonts.bodyMedium;
    const textStyle = {
      ...font,
      color: theme.isV3 ? theme.colors.onSurface : theme.colors.text
    };
    return /*#__PURE__*/React.createElement(Animated.Text, _extends({}, rest, {
      style: [styles.text, textStyle, {
        writingDirection
      }, style]
    }));
  }
}
const styles = StyleSheet.create({
  text: {
    textAlign: 'left'
  }
});
export const customAnimatedText = () => AnimatedText;
export default AnimatedText;
//# sourceMappingURL=AnimatedText.js.map