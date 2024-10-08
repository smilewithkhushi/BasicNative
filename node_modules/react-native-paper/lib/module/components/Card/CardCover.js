function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { getCardCoverStyle } from './utils';
import { useInternalTheme } from '../../core/theming';
import { grey200 } from '../../styles/themes/v2/colors';
import { splitStyles } from '../../utils/splitStyles';
/**
 * A component to show a cover image inside a Card.
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { Card } from 'react-native-paper';
 *
 * const MyComponent = () => (
 *   <Card>
 *     <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
 *   </Card>
 * );
 *
 * export default MyComponent;
 * ```
 *
 * @extends Image props https://reactnative.dev/docs/image#props
 */
const CardCover = _ref => {
  let {
    index,
    total,
    style,
    theme: themeOverrides,
    ...rest
  } = _ref;
  const theme = useInternalTheme(themeOverrides);
  const flattenedStyles = StyleSheet.flatten(style) || {};
  const [, borderRadiusStyles] = splitStyles(flattenedStyles, style => style.startsWith('border') && style.endsWith('Radius'));
  const coverStyle = getCardCoverStyle({
    theme,
    index,
    total,
    borderRadiusStyles
  });
  return /*#__PURE__*/React.createElement(View, {
    style: [styles.container, coverStyle, style]
  }, /*#__PURE__*/React.createElement(Image, _extends({}, rest, {
    style: [styles.image, coverStyle],
    accessibilityIgnoresInvertColors: true
  })));
};
CardCover.displayName = 'Card.Cover';
const styles = StyleSheet.create({
  container: {
    height: 195,
    backgroundColor: grey200,
    overflow: 'hidden'
  },
  image: {
    flex: 1,
    height: undefined,
    width: undefined,
    padding: 16,
    justifyContent: 'flex-end'
  }
});
export default CardCover;

// @component-docs ignore-next-line
export { CardCover };
//# sourceMappingURL=CardCover.js.map