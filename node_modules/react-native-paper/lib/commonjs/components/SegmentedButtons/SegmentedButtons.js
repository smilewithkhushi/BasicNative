"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.SegmentedButtons = void 0;
var React = _interopRequireWildcard(require("react"));
var _reactNative = require("react-native");
var _SegmentedButtonItem = _interopRequireDefault(require("./SegmentedButtonItem"));
var _utils = require("./utils");
var _theming = require("../../core/theming");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
/**
 * Segmented buttons can be used to select options, switch views or sort elements.</br>
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { SafeAreaView, StyleSheet } from 'react-native';
 * import { SegmentedButtons } from 'react-native-paper';
 *
 * const MyComponent = () => {
 *   const [value, setValue] = React.useState('');
 *
 *   return (
 *     <SafeAreaView style={styles.container}>
 *       <SegmentedButtons
 *         value={value}
 *         onValueChange={setValue}
 *         buttons={[
 *           {
 *             value: 'walk',
 *             label: 'Walking',
 *           },
 *           {
 *             value: 'train',
 *             label: 'Transit',
 *           },
 *           { value: 'drive', label: 'Driving' },
 *         ]}
 *       />
 *     </SafeAreaView>
 *   );
 * };
 *
 * const styles = StyleSheet.create({
 *   container: {
 *     flex: 1,
 *     alignItems: 'center',
 *   },
 * });
 *
 * export default MyComponent;
 *```
 */
const SegmentedButtons = _ref => {
  let {
    value,
    onValueChange,
    buttons,
    multiSelect,
    density,
    style,
    theme: themeOverrides
  } = _ref;
  const theme = (0, _theming.useInternalTheme)(themeOverrides);
  return /*#__PURE__*/React.createElement(_reactNative.View, {
    style: [styles.row, style]
  }, buttons.map((item, i) => {
    const disabledChildStyle = (0, _utils.getDisabledSegmentedButtonStyle)({
      theme,
      buttons,
      index: i
    });
    const segment = i === 0 ? 'first' : i === buttons.length - 1 ? 'last' : undefined;
    const checked = multiSelect && Array.isArray(value) ? value.includes(item.value) : value === item.value;
    const onPress = e => {
      var _item$onPress;
      (_item$onPress = item.onPress) === null || _item$onPress === void 0 ? void 0 : _item$onPress.call(item, e);
      const nextValue = multiSelect && Array.isArray(value) ? checked ? value.filter(val => item.value !== val) : [...value, item.value] : item.value;

      // @ts-expect-error: TS doesn't preserve types after destructuring, so the type isn't inferred correctly
      onValueChange(nextValue);
    };
    return /*#__PURE__*/React.createElement(_SegmentedButtonItem.default, _extends({}, item, {
      key: i,
      checked: checked,
      segment: segment,
      density: density,
      onPress: onPress,
      style: [item.style, disabledChildStyle],
      labelStyle: item.labelStyle,
      theme: theme
    }));
  }));
};
exports.SegmentedButtons = SegmentedButtons;
const styles = _reactNative.StyleSheet.create({
  row: {
    flexDirection: 'row'
  }
});
var _default = SegmentedButtons; // @component-docs ignore-next-line
exports.default = _default;
//# sourceMappingURL=SegmentedButtons.js.map