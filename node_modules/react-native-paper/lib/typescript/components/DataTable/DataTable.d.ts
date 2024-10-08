import * as React from 'react';
import { StyleProp, View, ViewStyle } from 'react-native';
export declare type Props = React.ComponentPropsWithRef<typeof View> & {
    /**
     * Content of the `DataTable`.
     */
    children: React.ReactNode;
    style?: StyleProp<ViewStyle>;
};
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
declare const DataTable: {
    ({ children, style, ...rest }: Props): React.JSX.Element;
    Header: {
        ({ children, style, theme: themeOverrides, ...rest }: import("./DataTableHeader").Props): React.JSX.Element;
        displayName: string;
    };
    Title: {
        ({ numeric, children, onPress, sortDirection, textStyle, style, theme: themeOverrides, numberOfLines, maxFontSizeMultiplier, ...rest }: import("./DataTableTitle").Props): React.JSX.Element;
        displayName: string;
    };
    Row: {
        ({ onPress, style, children, pointerEvents, theme: themeOverrides, ...rest }: import("./DataTableRow").Props): React.JSX.Element;
        displayName: string;
    };
    Cell: {
        ({ children, textStyle, style, numeric, maxFontSizeMultiplier, testID, ...rest }: import("./DataTableCell").Props): React.JSX.Element;
        displayName: string;
    };
    Pagination: {
        ({ label, accessibilityLabel, page, numberOfPages, onPageChange, style, showFastPaginationControls, numberOfItemsPerPageList, numberOfItemsPerPage, onItemsPerPageChange, selectPageDropdownLabel, selectPageDropdownAccessibilityLabel, selectPageDropdownRippleColor, dropdownItemRippleColor, theme: themeOverrides, ...rest }: import("./DataTablePagination").Props): React.JSX.Element;
        displayName: string;
    };
};
export default DataTable;
//# sourceMappingURL=DataTable.d.ts.map