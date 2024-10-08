"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Appbar = void 0;
var React = _interopRequireWildcard(require("react"));
var _reactNative = require("react-native");
var _color = _interopRequireDefault(require("color"));
var _AppbarContent = _interopRequireDefault(require("./AppbarContent"));
var _utils = require("./utils");
var _theming = require("../../core/theming");
var _Surface = _interopRequireDefault(require("../Surface"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
/**
 * A component to display action items in a bar. It can be placed at the top or bottom.
 * The top bar usually contains the screen title, controls such as navigation buttons, menu button etc.
 * The bottom bar usually provides access to a drawer and up to four actions.
 *
 * By default Appbar uses primary color as a background, in dark theme with `adaptive` mode it will use surface colour instead.
 * See [Dark Theme](https://callstack.github.io/react-native-paper/docs/guides/theming#dark-theme) for more informations
 *
 * ## Usage
 * ### Top bar
 * ```js
 * import * as React from 'react';
 * import { Appbar } from 'react-native-paper';
 *
 * const MyComponent = () => (
 *   <Appbar.Header>
 *     <Appbar.BackAction onPress={() => {}} />
 *     <Appbar.Content title="Title" />
 *     <Appbar.Action icon="calendar" onPress={() => {}} />
 *     <Appbar.Action icon="magnify" onPress={() => {}} />
 *   </Appbar.Header>
 * );
 *
 * export default MyComponent;
 * ```
 *
 * ### Bottom bar
 * ```js
 * import * as React from 'react';
 * import { StyleSheet } from 'react-native';
 * import { Appbar, FAB, useTheme } from 'react-native-paper';
 * import { useSafeAreaInsets } from 'react-native-safe-area-context';
 *
 * const BOTTOM_APPBAR_HEIGHT = 80;
 * const MEDIUM_FAB_HEIGHT = 56;
 *
 * const MyComponent = () => {
 *   const { bottom } = useSafeAreaInsets();
 *   const theme = useTheme();
 *
 *   return (
 *     <Appbar
 *       style={[
 *         styles.bottom,
 *         {
 *           height: BOTTOM_APPBAR_HEIGHT + bottom,
 *           backgroundColor: theme.colors.elevation.level2,
 *         },
 *       ]}
 *       safeAreaInsets={{ bottom }}
 *     >
 *       <Appbar.Action icon="archive" onPress={() => {}} />
 *       <Appbar.Action icon="email" onPress={() => {}} />
 *       <Appbar.Action icon="label" onPress={() => {}} />
 *       <Appbar.Action icon="delete" onPress={() => {}} />
 *       <FAB
 *         mode="flat"
 *         size="medium"
 *         icon="plus"
 *         onPress={() => {}}
 *         style={[
 *           styles.fab,
 *           { top: (BOTTOM_APPBAR_HEIGHT - MEDIUM_FAB_HEIGHT) / 2 },
 *         ]}
 *       />
 *     </Appbar>
 *   );
 * };
 *
 * const styles = StyleSheet.create({
 *   bottom: {
 *     backgroundColor: 'aquamarine',
 *     position: 'absolute',
 *     left: 0,
 *     right: 0,
 *     bottom: 0,
 *   },
 *   fab: {
 *     position: 'absolute',
 *     right: 16,
 *   },
 * });
 *
 * export default MyComponent;
 * ```
 */
const Appbar = _ref => {
  let {
    children,
    dark,
    style,
    mode = 'small',
    elevated,
    safeAreaInsets,
    theme: themeOverrides,
    ...rest
  } = _ref;
  const theme = (0, _theming.useInternalTheme)(themeOverrides);
  const {
    isV3
  } = theme;
  const flattenedStyle = _reactNative.StyleSheet.flatten(style);
  const {
    backgroundColor: customBackground,
    elevation = isV3 ? elevated ? 2 : 0 : 4,
    ...restStyle
  } = flattenedStyle || {};
  const backgroundColor = (0, _utils.getAppbarBackgroundColor)(theme, elevation, customBackground, elevated);
  const isMode = modeToCompare => {
    return isV3 && mode === modeToCompare;
  };
  let isDark = false;
  if (typeof dark === 'boolean') {
    isDark = dark;
  } else if (!isV3) {
    isDark = backgroundColor === 'transparent' ? false : typeof backgroundColor === 'string' ? !(0, _color.default)(backgroundColor).isLight() : true;
  }
  const isV3CenterAlignedMode = isV3 && isMode('center-aligned');
  let shouldCenterContent = false;
  let shouldAddLeftSpacing = false;
  let shouldAddRightSpacing = false;
  if (!isV3 && _reactNative.Platform.OS === 'ios' || isV3CenterAlignedMode) {
    let hasAppbarContent = false;
    let leftItemsCount = 0;
    let rightItemsCount = 0;
    React.Children.forEach(children, child => {
      if ( /*#__PURE__*/React.isValidElement(child)) {
        if (child.type === _AppbarContent.default) {
          hasAppbarContent = true;
        } else if (hasAppbarContent) {
          rightItemsCount++;
        } else {
          leftItemsCount++;
        }
      }
    });
    shouldCenterContent = hasAppbarContent && leftItemsCount < 2 && rightItemsCount < (isV3 ? 3 : 2);
    shouldAddLeftSpacing = shouldCenterContent && leftItemsCount === 0;
    shouldAddRightSpacing = shouldCenterContent && rightItemsCount === 0;
  }
  const filterAppbarActions = React.useCallback(function () {
    let isLeading = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
    return React.Children.toArray(children).filter(child =>
    // @ts-expect-error: TypeScript complains about the type of type but it doesn't matter
    isLeading ? child.props.isLeading : !child.props.isLeading);
  }, [children]);
  const spacingStyle = isV3 ? styles.v3Spacing : styles.spacing;
  const insets = {
    paddingBottom: safeAreaInsets === null || safeAreaInsets === void 0 ? void 0 : safeAreaInsets.bottom,
    paddingTop: safeAreaInsets === null || safeAreaInsets === void 0 ? void 0 : safeAreaInsets.top,
    paddingLeft: safeAreaInsets === null || safeAreaInsets === void 0 ? void 0 : safeAreaInsets.left,
    paddingRight: safeAreaInsets === null || safeAreaInsets === void 0 ? void 0 : safeAreaInsets.right
  };
  return /*#__PURE__*/React.createElement(_Surface.default, _extends({
    style: [{
      backgroundColor
    }, styles.appbar, {
      height: isV3 ? _utils.modeAppbarHeight[mode] : _utils.DEFAULT_APPBAR_HEIGHT
    }, insets, restStyle, !theme.isV3 && {
      elevation
    }],
    elevation: elevation
  }, rest), shouldAddLeftSpacing ? /*#__PURE__*/React.createElement(_reactNative.View, {
    style: spacingStyle
  }) : null, (!isV3 || isMode('small') || isMode('center-aligned')) && (0, _utils.renderAppbarContent)({
    children,
    isDark,
    theme,
    isV3,
    shouldCenterContent: isV3CenterAlignedMode || shouldCenterContent
  }), (isMode('medium') || isMode('large')) && /*#__PURE__*/React.createElement(_reactNative.View, {
    style: [styles.columnContainer, isMode('center-aligned') && styles.centerAlignedContainer]
  }, /*#__PURE__*/React.createElement(_reactNative.View, {
    style: styles.controlsRow
  }, (0, _utils.renderAppbarContent)({
    children,
    isDark,
    isV3,
    renderOnly: ['Appbar.BackAction'],
    mode
  }), (0, _utils.renderAppbarContent)({
    children: filterAppbarActions(true),
    isDark,
    isV3,
    renderOnly: ['Appbar.Action'],
    mode
  }), /*#__PURE__*/React.createElement(_reactNative.View, {
    style: styles.rightActionControls
  }, (0, _utils.renderAppbarContent)({
    children: filterAppbarActions(false),
    isDark,
    isV3,
    renderExcept: ['Appbar', 'Appbar.BackAction', 'Appbar.Content', 'Appbar.Header'],
    mode
  }))), (0, _utils.renderAppbarContent)({
    children,
    isDark,
    isV3,
    renderOnly: ['Appbar.Content'],
    mode
  })), shouldAddRightSpacing ? /*#__PURE__*/React.createElement(_reactNative.View, {
    style: spacingStyle
  }) : null);
};
exports.Appbar = Appbar;
const styles = _reactNative.StyleSheet.create({
  appbar: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 4
  },
  spacing: {
    width: 48
  },
  v3Spacing: {
    width: 52
  },
  controlsRow: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  rightActionControls: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'flex-end'
  },
  columnContainer: {
    flexDirection: 'column',
    flex: 1,
    paddingTop: 8
  },
  centerAlignedContainer: {
    paddingTop: 0
  }
});
var _default = Appbar; // @component-docs ignore-next-line
exports.default = _default;
//# sourceMappingURL=Appbar.js.map