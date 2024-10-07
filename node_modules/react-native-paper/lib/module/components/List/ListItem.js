function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import color from 'color';
import { getLeftStyles, getRightStyles } from './utils';
import { useInternalTheme } from '../../core/theming';
import { forwardRef } from '../../utils/forwardRef';
import TouchableRipple from '../TouchableRipple/TouchableRipple';
import Text from '../Typography/Text';
/**
 * A component to show tiles inside a List.
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { List } from 'react-native-paper';
 *
 * const MyComponent = () => (
 *   <List.Item
 *     title="First Item"
 *     description="Item description"
 *     left={props => <List.Icon {...props} icon="folder" />}
 *   />
 * );
 *
 * export default MyComponent;
 * ```
 *
 * @extends TouchableRipple props https://callstack.github.io/react-native-paper/docs/components/TouchableRipple
 */
const ListItem = (_ref, ref) => {
  let {
    left,
    right,
    title,
    description,
    onPress,
    theme: themeOverrides,
    style,
    contentStyle,
    titleStyle,
    titleNumberOfLines = 1,
    descriptionNumberOfLines = 2,
    titleEllipsizeMode,
    descriptionEllipsizeMode,
    descriptionStyle,
    descriptionMaxFontSizeMultiplier,
    titleMaxFontSizeMultiplier,
    testID,
    ...rest
  } = _ref;
  const theme = useInternalTheme(themeOverrides);
  const [alignToTop, setAlignToTop] = React.useState(false);
  const onDescriptionTextLayout = event => {
    if (!theme.isV3) {
      return;
    }
    const {
      nativeEvent
    } = event;
    setAlignToTop(nativeEvent.lines.length >= 2);
  };
  const renderDescription = (descriptionColor, description) => {
    return typeof description === 'function' ? description({
      selectable: false,
      ellipsizeMode: descriptionEllipsizeMode,
      color: descriptionColor,
      fontSize: styles.description.fontSize
    }) : /*#__PURE__*/React.createElement(Text, {
      selectable: false,
      numberOfLines: descriptionNumberOfLines,
      ellipsizeMode: descriptionEllipsizeMode,
      style: [styles.description, {
        color: descriptionColor
      }, descriptionStyle],
      onTextLayout: onDescriptionTextLayout,
      maxFontSizeMultiplier: descriptionMaxFontSizeMultiplier
    }, description);
  };
  const renderTitle = () => {
    const titleColor = theme.isV3 ? theme.colors.onSurface : color(theme.colors.text).alpha(0.87).rgb().string();
    return typeof title === 'function' ? title({
      selectable: false,
      ellipsizeMode: titleEllipsizeMode,
      color: titleColor,
      fontSize: styles.title.fontSize
    }) : /*#__PURE__*/React.createElement(Text, {
      selectable: false,
      ellipsizeMode: titleEllipsizeMode,
      numberOfLines: titleNumberOfLines,
      style: [styles.title, {
        color: titleColor
      }, titleStyle],
      maxFontSizeMultiplier: titleMaxFontSizeMultiplier
    }, title);
  };
  const descriptionColor = theme.isV3 ? theme.colors.onSurfaceVariant : color(theme.colors.text).alpha(0.54).rgb().string();
  return /*#__PURE__*/React.createElement(TouchableRipple, _extends({}, rest, {
    ref: ref,
    style: [theme.isV3 ? styles.containerV3 : styles.container, style],
    onPress: onPress,
    theme: theme,
    testID: testID
  }), /*#__PURE__*/React.createElement(View, {
    style: theme.isV3 ? styles.rowV3 : styles.row
  }, left ? left({
    color: descriptionColor,
    style: getLeftStyles(alignToTop, description, theme.isV3)
  }) : null, /*#__PURE__*/React.createElement(View, {
    style: [theme.isV3 ? styles.itemV3 : styles.item, styles.content, contentStyle],
    testID: `${testID}-content`
  }, renderTitle(), description ? renderDescription(descriptionColor, description) : null), right ? right({
    color: descriptionColor,
    style: getRightStyles(alignToTop, description, theme.isV3)
  }) : null));
};
const Component = forwardRef(ListItem);
Component.displayName = 'List.Item';
const styles = StyleSheet.create({
  container: {
    padding: 8
  },
  containerV3: {
    paddingVertical: 8,
    paddingRight: 24
  },
  row: {
    width: '100%',
    flexDirection: 'row'
  },
  rowV3: {
    width: '100%',
    flexDirection: 'row',
    marginVertical: 6
  },
  title: {
    fontSize: 16
  },
  description: {
    fontSize: 14
  },
  item: {
    marginVertical: 6,
    paddingLeft: 8
  },
  itemV3: {
    paddingLeft: 16
  },
  content: {
    flexShrink: 1,
    flexGrow: 1,
    justifyContent: 'center'
  }
});
export default Component;
//# sourceMappingURL=ListItem.js.map