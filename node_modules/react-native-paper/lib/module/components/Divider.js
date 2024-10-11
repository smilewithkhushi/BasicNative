function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import color from 'color';
import { useInternalTheme } from '../core/theming';
import { black, white } from '../styles/themes/v2/colors';
/**
 * A divider is a thin, lightweight separator that groups content in lists and page layouts.
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { View } from 'react-native';
 * import { Divider, Text } from 'react-native-paper';
 *
 * const MyComponent = () => (
 *   <View>
 *     <Text>Lemon</Text>
 *     <Divider />
 *     <Text>Mango</Text>
 *     <Divider />
 *   </View>
 * );
 *
 * export default MyComponent;
 * ```
 */
const Divider = _ref => {
  let {
    leftInset,
    horizontalInset = false,
    style,
    theme: themeOverrides,
    bold = false,
    ...rest
  } = _ref;
  const theme = useInternalTheme(themeOverrides);
  const {
    dark: isDarkTheme,
    isV3
  } = theme;
  const dividerColor = isV3 ? theme.colors.outlineVariant : color(isDarkTheme ? white : black).alpha(0.12).rgb().string();
  return /*#__PURE__*/React.createElement(View, _extends({}, rest, {
    style: [{
      height: StyleSheet.hairlineWidth,
      backgroundColor: dividerColor
    }, leftInset && (isV3 ? styles.v3LeftInset : styles.leftInset), isV3 && horizontalInset && styles.horizontalInset, isV3 && bold && styles.bold, style]
  }));
};
const styles = StyleSheet.create({
  leftInset: {
    marginLeft: 72
  },
  v3LeftInset: {
    marginLeft: 16
  },
  horizontalInset: {
    marginLeft: 16,
    marginRight: 16
  },
  bold: {
    height: 1
  }
});
export default Divider;
//# sourceMappingURL=Divider.js.map