"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var React = _interopRequireWildcard(require("react"));
var _reactNative = require("react-native");
var _theming = require("../../core/theming");
var _Icon = _interopRequireDefault(require("../Icon"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
const ICON_SIZE = 24;

/**
 * A component to show an icon in a list item.
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { List, MD3Colors } from 'react-native-paper';
 *
 * const MyComponent = () => (
 *   <>
 *     <List.Icon color={MD3Colors.tertiary70} icon="folder" />
 *     <List.Icon color={MD3Colors.tertiary70} icon="equal" />
 *     <List.Icon color={MD3Colors.tertiary70} icon="calendar" />
 *   </>
 * );
 *
 * export default MyComponent;
 * ```
 */
const ListIcon = _ref => {
  let {
    icon,
    color: iconColor,
    style,
    theme: themeOverrides
  } = _ref;
  const theme = (0, _theming.useInternalTheme)(themeOverrides);
  return /*#__PURE__*/React.createElement(_reactNative.View, {
    style: [theme.isV3 ? styles.itemV3 : styles.item, style],
    pointerEvents: "box-none"
  }, /*#__PURE__*/React.createElement(_Icon.default, {
    source: icon,
    size: ICON_SIZE,
    color: iconColor,
    theme: theme
  }));
};
const styles = _reactNative.StyleSheet.create({
  item: {
    margin: 8,
    height: 40,
    width: 40,
    alignItems: 'center',
    justifyContent: 'center'
  },
  itemV3: {
    alignItems: 'center',
    justifyContent: 'center'
  }
});
ListIcon.displayName = 'List.Icon';
var _default = ListIcon;
exports.default = _default;
//# sourceMappingURL=ListIcon.js.map