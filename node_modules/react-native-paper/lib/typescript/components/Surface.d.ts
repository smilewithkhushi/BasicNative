import * as React from 'react';
import { Animated, StyleProp, View, ViewStyle } from 'react-native';
import type { ThemeProp } from '../types';
declare type Elevation = 0 | 1 | 2 | 3 | 4 | 5 | Animated.Value;
export declare type Props = React.ComponentPropsWithRef<typeof View> & {
    /**
     * Content of the `Surface`.
     */
    children: React.ReactNode;
    style?: Animated.WithAnimatedValue<StyleProp<ViewStyle>>;
    /**
     * @supported Available in v5.x with theme version 3
     * Changes shadows and background on iOS and Android.
     * Used to create UI hierarchy between components.
     *
     * Note: If `mode` is set to `flat`, Surface doesn't have a shadow.
     *
     * Note: In version 2 the `elevation` prop was accepted via `style` prop i.e. `style={{ elevation: 4 }}`.
     * It's no longer supported with theme version 3 and you should use `elevation` property instead.
     */
    elevation?: Elevation;
    /**
     * @supported Available in v5.x with theme version 3
     * Mode of the Surface.
     * - `elevated` - Surface with a shadow and background color corresponding to set `elevation` value.
     * - `flat` - Surface without a shadow, with the background color corresponding to set `elevation` value.
     */
    mode?: 'flat' | 'elevated';
    /**
     * @optional
     */
    theme?: ThemeProp;
    /**
     * TestID used for testing purposes
     */
    testID?: string;
    ref?: React.RefObject<View>;
};
/**
 * Surface is a basic container that can give depth to an element with elevation shadow.
 * On dark theme with `adaptive` mode, surface is constructed by also placing a semi-transparent white overlay over a component surface.
 * See [Dark Theme](https://callstack.github.io/react-native-paper/docs/guides/theming#dark-theme) for more information.
 * Overlay and shadow can be applied by specifying the `elevation` property both on Android and iOS.
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { Surface, Text } from 'react-native-paper';
 * import { StyleSheet } from 'react-native';
 *
 * const MyComponent = () => (
 *   <Surface style={styles.surface} elevation={4}>
 *      <Text>Surface</Text>
 *   </Surface>
 * );
 *
 * export default MyComponent;
 *
 * const styles = StyleSheet.create({
 *   surface: {
 *     padding: 8,
 *     height: 80,
 *     width: 80,
 *     alignItems: 'center',
 *     justifyContent: 'center',
 *   },
 * });
 * ```
 */
declare const Surface: import("../utils/forwardRef").ForwardRefComponent<View, Props>;
export default Surface;
//# sourceMappingURL=Surface.d.ts.map