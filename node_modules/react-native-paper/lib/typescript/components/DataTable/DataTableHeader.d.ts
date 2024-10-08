import * as React from 'react';
import { StyleProp, View, ViewStyle } from 'react-native';
import type { ThemeProp } from '../../types';
export declare type Props = React.ComponentPropsWithRef<typeof View> & {
    /**
     * Content of the `DataTableHeader`.
     */
    children: React.ReactNode;
    style?: StyleProp<ViewStyle>;
    /**
     * @optional
     */
    theme?: ThemeProp;
};
/**
 * A component to display title in table header.
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { DataTable } from 'react-native-paper';
 *
 * const MyComponent = () => (
 *       <DataTable>
 *         <DataTable.Header>
 *           <DataTable.Title
 *             sortDirection='descending'
 *           >
 *             Dessert
 *           </DataTable.Title>
 *           <DataTable.Title numeric>Calories</DataTable.Title>
 *           <DataTable.Title numeric>Fat (g)</DataTable.Title>
 *         </DataTable.Header>
 *       </DataTable>
 * );
 *
 * export default MyComponent;
 * ```
 */
declare const DataTableHeader: {
    ({ children, style, theme: themeOverrides, ...rest }: Props): React.JSX.Element;
    displayName: string;
};
export default DataTableHeader;
export { DataTableHeader };
//# sourceMappingURL=DataTableHeader.d.ts.map