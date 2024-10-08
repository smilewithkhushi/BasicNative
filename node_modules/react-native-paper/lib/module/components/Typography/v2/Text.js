function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from 'react';
import { StyleSheet, Text as NativeText } from 'react-native';
import { useInternalTheme } from '../../../core/theming';
import { forwardRef } from '../../../utils/forwardRef';
// @component-group Typography
/**
 * Text component which follows styles from the theme.
 *
 * @extends Text props https://reactnative.dev/docs/text#props
 */
const Text = (_ref, ref) => {
  var _theme$fonts, _theme$colors;
  let {
    style,
    theme: overrideTheme,
    ...rest
  } = _ref;
  const root = React.useRef(null);
  const theme = useInternalTheme(overrideTheme);
  React.useImperativeHandle(ref, () => ({
    setNativeProps: args => {
      var _root$current;
      return (_root$current = root.current) === null || _root$current === void 0 ? void 0 : _root$current.setNativeProps(args);
    }
  }));
  return /*#__PURE__*/React.createElement(NativeText, _extends({}, rest, {
    ref: root,
    style: [{
      ...(!theme.isV3 && ((_theme$fonts = theme.fonts) === null || _theme$fonts === void 0 ? void 0 : _theme$fonts.regular)),
      color: theme.isV3 ? (_theme$colors = theme.colors) === null || _theme$colors === void 0 ? void 0 : _theme$colors.onSurface : theme.colors.text
    }, styles.text, style]
  }));
};
const styles = StyleSheet.create({
  text: {
    textAlign: 'left'
  }
});
export default forwardRef(Text);
//# sourceMappingURL=Text.js.map