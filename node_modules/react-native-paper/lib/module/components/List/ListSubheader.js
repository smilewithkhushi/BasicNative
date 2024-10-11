function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from 'react';
import { StyleSheet } from 'react-native';
import color from 'color';
import { useInternalTheme } from '../../core/theming';
import Text from '../Typography/Text';
/**
 * A component used to display a header in lists.
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { List } from 'react-native-paper';
 *
 * const MyComponent = () => <List.Subheader>My List Title</List.Subheader>;
 *
 * export default MyComponent;
 * ```
 */
const ListSubheader = _ref => {
  let {
    style,
    theme: overrideTheme,
    maxFontSizeMultiplier,
    ...rest
  } = _ref;
  const theme = useInternalTheme(overrideTheme);
  const textColor = theme.isV3 ? theme.colors.onSurfaceVariant : color(theme.colors.text).alpha(0.54).rgb().string();
  const font = theme.isV3 ? theme.fonts.bodyMedium : theme.fonts.medium;
  return /*#__PURE__*/React.createElement(Text, _extends({
    variant: "bodyMedium",
    numberOfLines: 1,
    maxFontSizeMultiplier: maxFontSizeMultiplier
  }, rest, {
    style: [styles.container, {
      color: textColor,
      ...font
    }, style]
  }));
};
ListSubheader.displayName = 'List.Subheader';
const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 13
  }
});
export default ListSubheader;
//# sourceMappingURL=ListSubheader.js.map