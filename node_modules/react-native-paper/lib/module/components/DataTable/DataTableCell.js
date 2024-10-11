function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from 'react';
import { StyleSheet } from 'react-native';
import TouchableRipple from '../TouchableRipple/TouchableRipple';
import Text from '../Typography/Text';
/**
 * A component to show a single cell inside of a table.
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { DataTable } from 'react-native-paper';
 *
 * const MyComponent = () => (
 *      <DataTable.Row>
 *        <DataTable.Cell numeric>1</DataTable.Cell>
 *        <DataTable.Cell numeric>2</DataTable.Cell>
 *        <DataTable.Cell numeric>3</DataTable.Cell>
 *        <DataTable.Cell numeric>4</DataTable.Cell>
 *      </DataTable.Row>
 * );
 *
 * export default MyComponent;
 * ```
 *
 * If you want to support multiline text, please use View instead, as multiline text doesn't comply with
 * MD Guidelines (https://github.com/callstack/react-native-paper/issues/2381).
 *
 * @extends TouchableRipple props https://callstack.github.io/react-native-paper/docs/components/TouchableRipple
 */
const DataTableCell = _ref => {
  let {
    children,
    textStyle,
    style,
    numeric,
    maxFontSizeMultiplier,
    testID,
    ...rest
  } = _ref;
  return /*#__PURE__*/React.createElement(TouchableRipple, _extends({}, rest, {
    testID: testID,
    style: [styles.container, numeric && styles.right, style]
  }), /*#__PURE__*/React.createElement(CellContent, {
    textStyle: textStyle,
    testID: testID,
    maxFontSizeMultiplier: maxFontSizeMultiplier
  }, children));
};
const CellContent = _ref2 => {
  let {
    children,
    textStyle,
    maxFontSizeMultiplier,
    testID
  } = _ref2;
  if ( /*#__PURE__*/React.isValidElement(children)) {
    return children;
  }
  return /*#__PURE__*/React.createElement(Text, {
    style: textStyle,
    numberOfLines: 1,
    maxFontSizeMultiplier: maxFontSizeMultiplier,
    testID: `${testID}-text-container`
  }, children);
};
DataTableCell.displayName = 'DataTable.Cell';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  },
  right: {
    justifyContent: 'flex-end'
  }
});
export default DataTableCell;
//# sourceMappingURL=DataTableCell.js.map