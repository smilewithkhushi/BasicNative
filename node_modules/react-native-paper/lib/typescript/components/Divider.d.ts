import * as React from 'react';
import { StyleProp, View, ViewStyle } from 'react-native';
import type { $RemoveChildren, ThemeProp } from '../types';
export declare type Props = $RemoveChildren<typeof View> & {
    /**
     * @renamed Renamed from 'inset' to 'leftInset` in v5.x
     * Whether divider has a left inset.
     */
    leftInset?: boolean;
    /**
     * @supported Available in v5.x with theme version 3
     *  Whether divider has a horizontal inset on both sides.
     */
    horizontalInset?: boolean;
    /**
     * @supported Available in v5.x with theme version 3
     *  Whether divider should be bolded.
     */
    bold?: boolean;
    style?: StyleProp<ViewStyle>;
    /**
     * @optional
     */
    theme?: ThemeProp;
};
/**
 * A divider is a thin, lightweight separator that groups content in lists and page layouts.
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { View } from 'react-native';
 * import { Divider, Text } from 'react-native-paper';
 *
 * const MyComponent = () => (
 *   <View>
 *     <Text>Lemon</Text>
 *     <Divider />
 *     <Text>Mango</Text>
 *     <Divider />
 *   </View>
 * );
 *
 * export default MyComponent;
 * ```
 */
declare const Divider: ({ leftInset, horizontalInset, style, theme: themeOverrides, bold, ...rest }: Props) => React.JSX.Element;
export default Divider;
//# sourceMappingURL=Divider.d.ts.map