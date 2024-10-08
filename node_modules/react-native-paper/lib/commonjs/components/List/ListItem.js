"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var React = _interopRequireWildcard(require("react"));
var _reactNative = require("react-native");
var _color = _interopRequireDefault(require("color"));
var _utils = require("./utils");
var _theming = require("../../core/theming");
var _forwardRef = require("../../utils/forwardRef");
var _TouchableRipple = _interopRequireDefault(require("../TouchableRipple/TouchableRipple"));
var _Text = _interopRequireDefault(require("../Typography/Text"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
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
  const theme = (0, _theming.useInternalTheme)(themeOverrides);
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
    }) : /*#__PURE__*/React.createElement(_Text.default, {
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
    const titleColor = theme.isV3 ? theme.colors.onSurface : (0, _color.default)(theme.colors.text).alpha(0.87).rgb().string();
    return typeof title === 'function' ? title({
      selectable: false,
      ellipsizeMode: titleEllipsizeMode,
      color: titleColor,
      fontSize: styles.title.fontSize
    }) : /*#__PURE__*/React.createElement(_Text.default, {
      selectable: false,
      ellipsizeMode: titleEllipsizeMode,
      numberOfLines: titleNumberOfLines,
      style: [styles.title, {
        color: titleColor
      }, titleStyle],
      maxFontSizeMultiplier: titleMaxFontSizeMultiplier
    }, title);
  };
  const descriptionColor = theme.isV3 ? theme.colors.onSurfaceVariant : (0, _color.default)(theme.colors.text).alpha(0.54).rgb().string();
  return /*#__PURE__*/React.createElement(_TouchableRipple.default, _extends({}, rest, {
    ref: ref,
    style: [theme.isV3 ? styles.containerV3 : styles.container, style],
    onPress: onPress,
    theme: theme,
    testID: testID
  }), /*#__PURE__*/React.createElement(_reactNative.View, {
    style: theme.isV3 ? styles.rowV3 : styles.row
  }, left ? left({
    color: descriptionColor,
    style: (0, _utils.getLeftStyles)(alignToTop, description, theme.isV3)
  }) : null, /*#__PURE__*/React.createElement(_reactNative.View, {
    style: [theme.isV3 ? styles.itemV3 : styles.item, styles.content, contentStyle],
    testID: `${testID}-content`
  }, renderTitle(), description ? renderDescription(descriptionColor, description) : null), right ? right({
    color: descriptionColor,
    style: (0, _utils.getRightStyles)(alignToTop, description, theme.isV3)
  }) : null));
};
const Component = (0, _forwardRef.forwardRef)(ListItem);
Component.displayName = 'List.Item';
const styles = _reactNative.StyleSheet.create({
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
var _default = Component;
exports.default = _default;
//# sourceMappingURL=ListItem.js.map