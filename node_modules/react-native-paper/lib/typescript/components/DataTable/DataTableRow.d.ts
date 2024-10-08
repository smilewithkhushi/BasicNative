import * as React from 'react';
import { GestureResponderEvent, StyleProp, ViewProps, ViewStyle } from 'react-native';
import type { $RemoveChildren, ThemeProp } from '../../types';
import TouchableRipple from '../TouchableRipple/TouchableRipple';
export declare type Props = $RemoveChildren<typeof TouchableRipple> & {
    /**
     * Content of the `DataTableRow`.
     */
    children: React.ReactNode;
    /**
     * Function to execute on press.
     */
    onPress?: (e: GestureResponderEvent) => void;
    style?: StyleProp<ViewStyle>;
    /**
     * @optional
     */
    theme?: ThemeProp;
    /**
     * `pointerEvents` passed to the `View` container, which is wrapping children within `TouchableRipple`.
     */
    pointerEvents?: ViewProps['pointerEvents'];
};
/**
 * A component to show a single row inside of a table.
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
 * @extends TouchableRipple props https://callstack.github.io/react-native-paper/docs/components/TouchableRipple
 */
declare const DataTableRow: {
    ({ onPress, style, children, pointerEvents, theme: themeOverrides, ...rest }: Props): React.JSX.Element;
    displayName: string;
};
export default DataTableRow;
export { DataTableRow };
//# sourceMappingURL=DataTableRow.d.ts.map