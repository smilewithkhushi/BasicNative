import * as React from 'react';
import { StyleProp, View, ViewStyle } from 'react-native';
import type { ThemeProp } from '../types';
export declare type Props = React.ComponentPropsWithRef<typeof View> & {
    /**
     * Whether to show the indicator or hide it.
     */
    animating?: boolean;
    /**
     * The color of the spinner.
     */
    color?: string;
    /**
     * Size of the indicator.
     */
    size?: 'small' | 'large' | number;
    /**
     * Whether the indicator should hide when not animating.
     */
    hidesWhenStopped?: boolean;
    style?: StyleProp<ViewStyle>;
    /**
     * @optional
     */
    theme?: ThemeProp;
};
/**
 * Activity indicator is used to present progress of some activity in the app.
 * It can be used as a drop-in for the ActivityIndicator shipped with React Native.
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { ActivityIndicator, MD2Colors } from 'react-native-paper';
 *
 * const MyComponent = () => (
 *   <ActivityIndicator animating={true} color={MD2Colors.red800} />
 * );
 *
 * export default MyComponent;
 * ```
 */
declare const ActivityIndicator: ({ animating, color: indicatorColor, hidesWhenStopped, size: indicatorSize, style, theme: themeOverrides, ...rest }: Props) => React.JSX.Element;
export default ActivityIndicator;
//# sourceMappingURL=ActivityIndicator.d.ts.map