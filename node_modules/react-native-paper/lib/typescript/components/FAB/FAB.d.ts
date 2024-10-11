import * as React from 'react';
import { AccessibilityState, Animated, ColorValue, GestureResponderEvent, PressableAndroidRippleConfig, StyleProp, View, ViewStyle } from 'react-native';
import type { $Omit, $RemoveChildren, ThemeProp } from '../../types';
import { IconSource } from '../Icon';
import Surface from '../Surface';
declare type FABSize = 'small' | 'medium' | 'large';
declare type FABMode = 'flat' | 'elevated';
declare type IconOrLabel = {
    icon: IconSource;
    label?: string;
} | {
    icon?: IconSource;
    label: string;
};
export declare type Props = $Omit<$RemoveChildren<typeof Surface>, 'mode'> & {
    /**
     * Icon to display for the `FAB`. It's optional only if `label` is defined.
     */
    icon?: IconSource;
    /**
     * Optional label for extended `FAB`. It's optional only if `icon` is defined.
     */
    label?: string;
    /**
     * Make the label text uppercased.
     */
    uppercase?: boolean;
    /**
     * Type of background drawabale to display the feedback (Android).
     * https://reactnative.dev/docs/pressable#rippleconfig
     */
    background?: PressableAndroidRippleConfig;
    /**
     * Accessibility label for the FAB. This is read by the screen reader when the user taps the FAB.
     * Uses `label` by default if specified.
     */
    accessibilityLabel?: string;
    /**
     * Accessibility state for the FAB. This is read by the screen reader when the user taps the FAB.
     */
    accessibilityState?: AccessibilityState;
    /**
     * Whether an icon change is animated.
     */
    animated?: boolean;
    /**
     *  @deprecated Deprecated in v.5x - use prop size="small".
     *
     *  Whether FAB is mini-sized, used to create visual continuity with other elements. This has no effect if `label` is specified.
     */
    small?: boolean;
    /**
     * Custom color for the icon and label of the `FAB`.
     */
    color?: string;
    /**
     * Color of the ripple effect.
     */
    rippleColor?: ColorValue;
    /**
     * Whether `FAB` is disabled. A disabled button is greyed out and `onPress` is not called on touch.
     */
    disabled?: boolean;
    /**
     * Whether `FAB` is currently visible.
     */
    visible?: boolean;
    /**
     * Whether to show a loading indicator.
     */
    loading?: boolean;
    /**
     * Function to execute on press.
     */
    onPress?: (e: GestureResponderEvent) => void;
    /**
     * Function to execute on long press.
     */
    onLongPress?: (e: GestureResponderEvent) => void;
    /**
     * The number of milliseconds a user must touch the element before executing `onLongPress`.
     */
    delayLongPress?: number;
    /**
     * @supported Available in v5.x with theme version 3
     *
     * Size of the `FAB`.
     * - `small` - FAB with small height (40).
     * - `medium` - FAB with default medium height (56).
     * - `large` - FAB with large height (96).
     */
    size?: FABSize;
    /**
     * Custom size for the `FAB`. This prop takes precedence over size prop
     */
    customSize?: number;
    /**
     * @supported Available in v5.x with theme version 3
     *
     * Mode of the `FAB`. You can change the mode to adjust the the shadow:
     * - `flat` - button without a shadow.
     * - `elevated` - button with a shadow.
     */
    mode?: FABMode;
    /**
     * @supported Available in v5.x with theme version 3
     *
     * Color mappings variant for combinations of container and icon colors.
     */
    variant?: 'primary' | 'secondary' | 'tertiary' | 'surface';
    /**
     * Specifies the largest possible scale a label font can reach.
     */
    labelMaxFontSizeMultiplier?: number;
    style?: Animated.WithAnimatedValue<StyleProp<ViewStyle>>;
    /**
     * @optional
     */
    theme?: ThemeProp;
    /**
     * TestID used for testing purposes
     */
    testID?: string;
    ref?: React.RefObject<View>;
} & IconOrLabel;
/**
 * A floating action button represents the primary action on a screen. It appears in front of all screen content.
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { StyleSheet } from 'react-native';
 * import { FAB } from 'react-native-paper';
 *
 * const MyComponent = () => (
 *   <FAB
 *     icon="plus"
 *     style={styles.fab}
 *     onPress={() => console.log('Pressed')}
 *   />
 * );
 *
 * const styles = StyleSheet.create({
 *   fab: {
 *     position: 'absolute',
 *     margin: 16,
 *     right: 0,
 *     bottom: 0,
 *   },
 * })
 *
 * export default MyComponent;
 * ```
 */
declare const FAB: import("../../utils/forwardRef").ForwardRefComponent<View, Props>;
export default FAB;
export { FAB };
//# sourceMappingURL=FAB.d.ts.map