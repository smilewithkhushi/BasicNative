"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var React = _interopRequireWildcard(require("react"));
var _reactNative = require("react-native");
var _DataTableCell = _interopRequireDefault(require("./DataTableCell"));
var _DataTableHeader2 = _interopRequireDefault(require("./DataTableHeader"));
var _DataTablePagination2 = _interopRequireDefault(require("./DataTablePagination"));
var _DataTableRow2 = _interopRequireDefault(require("./DataTableRow"));
var _DataTableTitle2 = _interopRequireDefault(require("./DataTableTitle"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); } // eslint-disable-next-line @typescript-eslint/no-unused-vars
/**
 * Data tables allow displaying sets of data.
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { DataTable } from 'react-native-paper';
 *
 * const MyComponent = () => {
 *   const [page, setPage] = React.useState<number>(0);
 *   const [numberOfItemsPerPageList] = React.useState([2, 3, 4]);
 *   const [itemsPerPage, onItemsPerPageChange] = React.useState(
 *     numberOfItemsPerPageList[0]
 *   );
 *
 *   const [items] = React.useState([
 *    {
 *      key: 1,
 *      name: 'Cupcake',
 *      calories: 356,
 *      fat: 16,
 *    },
 *    {
 *      key: 2,
 *      name: 'Eclair',
 *      calories: 262,
 *      fat: 16,
 *    },
 *    {
 *      key: 3,
 *      name: 'Frozen yogurt',
 *      calories: 159,
 *      fat: 6,
 *    },
 *    {
 *      key: 4,
 *      name: 'Gingerbread',
 *      calories: 305,
 *      fat: 3.7,
 *    },
 *   ]);
 *
 *   const from = page * itemsPerPage;
 *   const to = Math.min((page + 1) * itemsPerPage, items.length);
 *
 *   React.useEffect(() => {
 *     setPage(0);
 *   }, [itemsPerPage]);
 *
 *   return (
 *     <DataTable>
 *       <DataTable.Header>
 *         <DataTable.Title>Dessert</DataTable.Title>
 *         <DataTable.Title numeric>Calories</DataTable.Title>
 *         <DataTable.Title numeric>Fat</DataTable.Title>
 *       </DataTable.Header>
 *
 *       {items.slice(from, to).map((item) => (
 *         <DataTable.Row key={item.key}>
 *           <DataTable.Cell>{item.name}</DataTable.Cell>
 *           <DataTable.Cell numeric>{item.calories}</DataTable.Cell>
 *           <DataTable.Cell numeric>{item.fat}</DataTable.Cell>
 *         </DataTable.Row>
 *       ))}
 *
 *       <DataTable.Pagination
 *         page={page}
 *         numberOfPages={Math.ceil(items.length / itemsPerPage)}
 *         onPageChange={(page) => setPage(page)}
 *         label={`${from + 1}-${to} of ${items.length}`}
 *         numberOfItemsPerPageList={numberOfItemsPerPageList}
 *         numberOfItemsPerPage={itemsPerPage}
 *         onItemsPerPageChange={onItemsPerPageChange}
 *         showFastPaginationControls
 *         selectPageDropdownLabel={'Rows per page'}
 *       />
 *     </DataTable>
 *   );
 * };
 *
 * export default MyComponent;
 * ```
 */
const DataTable = _ref => {
  let {
    children,
    style,
    ...rest
  } = _ref;
  return /*#__PURE__*/React.createElement(_reactNative.View, _extends({}, rest, {
    style: [styles.container, style]
  }), children);
};

// @component ./DataTableHeader.tsx
DataTable.Header = _DataTableHeader2.default;

// @component ./DataTableTitle.tsx
DataTable.Title = _DataTableTitle2.default;

// @component ./DataTableRow.tsx
DataTable.Row = _DataTableRow2.default;

// @component ./DataTableCell.tsx
DataTable.Cell = _DataTableCell.default;

// @component ./DataTablePagination.tsx
DataTable.Pagination = _DataTablePagination2.default;
const styles = _reactNative.StyleSheet.create({
  container: {
    width: '100%'
  }
});
var _default = DataTable;
exports.default = _default;
//# sourceMappingURL=DataTable.js.map