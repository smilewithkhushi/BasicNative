import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { useInternalTheme } from '../../core/theming';
import Text from '../Typography/Text';
import Caption from '../Typography/v2/Caption';
import Title from '../Typography/v2/Title';
const LEFT_SIZE = 40;

/**
 * A component to show a title, subtitle and an avatar inside a Card.
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { Avatar, Card, IconButton } from 'react-native-paper';
 *
 * const MyComponent = () => (
 *   <Card.Title
 *     title="Card Title"
 *     subtitle="Card Subtitle"
 *     left={(props) => <Avatar.Icon {...props} icon="folder" />}
 *     right={(props) => <IconButton {...props} icon="dots-vertical" onPress={() => {}} />}
 *   />
 * );
 *
 * export default MyComponent;
 * ```
 */
const CardTitle = _ref => {
  let {
    title,
    titleStyle,
    titleNumberOfLines = 1,
    titleVariant = 'bodyLarge',
    titleMaxFontSizeMultiplier,
    subtitle,
    subtitleStyle,
    subtitleNumberOfLines = 1,
    subtitleVariant = 'bodyMedium',
    subtitleMaxFontSizeMultiplier,
    left,
    leftStyle,
    right,
    rightStyle,
    style,
    theme: themeOverrides
  } = _ref;
  const theme = useInternalTheme(themeOverrides);
  const TitleComponent = theme.isV3 ? Text : Title;
  const SubtitleComponent = theme.isV3 ? Text : Caption;
  const minHeight = subtitle || left || right ? 72 : 50;
  const marginBottom = subtitle ? 0 : 2;
  return /*#__PURE__*/React.createElement(View, {
    style: [styles.container, {
      minHeight
    }, style]
  }, left ? /*#__PURE__*/React.createElement(View, {
    style: [styles.left, leftStyle]
  }, left({
    size: LEFT_SIZE
  })) : null, /*#__PURE__*/React.createElement(View, {
    style: [styles.titles]
  }, title && /*#__PURE__*/React.createElement(TitleComponent, {
    style: [styles.title, {
      marginBottom
    }, titleStyle],
    numberOfLines: titleNumberOfLines,
    variant: titleVariant,
    maxFontSizeMultiplier: titleMaxFontSizeMultiplier
  }, title), subtitle && /*#__PURE__*/React.createElement(SubtitleComponent, {
    style: [styles.subtitle, subtitleStyle],
    numberOfLines: subtitleNumberOfLines,
    variant: subtitleVariant,
    maxFontSizeMultiplier: subtitleMaxFontSizeMultiplier
  }, subtitle)), /*#__PURE__*/React.createElement(View, {
    style: rightStyle
  }, right ? right({
    size: 24
  }) : null));
};
CardTitle.displayName = 'Card.Title';
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 16
  },
  left: {
    justifyContent: 'center',
    marginRight: 16,
    height: LEFT_SIZE,
    width: LEFT_SIZE
  },
  titles: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center'
  },
  title: {
    minHeight: 30,
    paddingRight: 16
  },
  subtitle: {
    minHeight: 20,
    marginVertical: 0,
    paddingRight: 16
  }
});
export default CardTitle;

// @component-docs ignore-next-line
export { CardTitle };
//# sourceMappingURL=CardTitle.js.map