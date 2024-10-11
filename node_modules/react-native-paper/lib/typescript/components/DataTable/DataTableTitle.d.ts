import * as React from 'react';
import { GestureResponderEvent, Pressable, StyleProp, TextStyle, ViewStyle } from 'react-native';
import type { ThemeProp } from '../../types';
export declare type Props = React.ComponentPropsWithRef<typeof Pressable> & {
    /**
     * Text content of the `DataTableTitle`.
     */
    children: React.ReactNode;
    /**
     * Align the text to the right. Generally monetary or number fields are aligned to right.
     */
    numeric?: boolean;
    /**
     * Direction of sorting. An arrow indicating the direction is displayed when this is given.
     */
    sortDirection?: 'ascending' | 'descending';
    /**
     * The number of lines to show.
     */
    numberOfLines?: number;
    /**
     * Function to execute on press.
     */
    onPress?: (e: GestureResponderEvent) => void;
    style?: StyleProp<ViewStyle>;
    /**
     * Text content style of the `DataTableTitle`.
     */
    textStyle?: StyleProp<TextStyle>;
    /**
     * Specifies the largest possible scale a text font can reach.
     */
    maxFontSizeMultiplier?: number;
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
declare const DataTableTitle: {
    ({ numeric, children, onPress, sortDirection, textStyle, style, theme: themeOverrides, numberOfLines, maxFontSizeMultiplier, ...rest }: Props): React.JSX.Element;
    displayName: string;
};
export default DataTableTitle;
export { DataTableTitle };
//# sourceMappingURL=DataTableTitle.d.ts.map