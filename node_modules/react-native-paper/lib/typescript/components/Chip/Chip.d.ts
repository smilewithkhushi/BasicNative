import * as React from 'react';
import { Animated, ColorValue, GestureResponderEvent, PressableAndroidRippleConfig, StyleProp, TextStyle, ViewStyle } from 'react-native';
import type { $Omit, EllipsizeProp, ThemeProp } from '../../types';
import type { IconSource } from '../Icon';
import Surface from '../Surface';
export declare type Props = $Omit<React.ComponentProps<typeof Surface>, 'mode'> & {
    /**
     * Mode of the chip.
     * - `flat` - flat chip without outline.
     * - `outlined` - chip with an outline.
     */
    mode?: 'flat' | 'outlined';
    /**
     * Text content of the `Chip`.
     */
    children: React.ReactNode;
    /**
     * Icon to display for the `Chip`. Both icon and avatar cannot be specified.
     */
    icon?: IconSource;
    /**
     * Avatar to display for the `Chip`. Both icon and avatar cannot be specified.
     */
    avatar?: React.ReactNode;
    /**
     * Icon to display as the close button for the `Chip`. The icon appears only when the onClose prop is specified.
     */
    closeIcon?: IconSource;
    /**
     * Whether chip is selected.
     */
    selected?: boolean;
    /**
     * Whether to style the chip color as selected.
     * Note: With theme version 3 `selectedColor` doesn't apply to the `icon`.
     *       If you want specify custom color for the `icon`, render your own `Icon` component.
     */
    selectedColor?: string;
    /**
     * @supported Available in v5.x with theme version 3
     * Whether to display overlay on selected chip
     */
    showSelectedOverlay?: boolean;
    /**
     * Whether to display default check icon on selected chip.
     * Note: Check will not be shown if `icon` is specified. If specified, `icon` will be shown regardless of `selected`.
     */
    showSelectedCheck?: boolean;
    /**
     * Color of the ripple effect.
     */
    rippleColor?: ColorValue;
    /**
     * Whether the chip is disabled. A disabled chip is greyed out and `onPress` is not called on touch.
     */
    disabled?: boolean;
    /**
     * Type of background drawabale to display the feedback (Android).
     * https://reactnative.dev/docs/pressable#rippleconfig
     */
    background?: PressableAndroidRippleConfig;
    /**
     * Accessibility label for the chip. This is read by the screen reader when the user taps the chip.
     */
    accessibilityLabel?: string;
    /**
     * Accessibility label for the close icon. This is read by the screen reader when the user taps the close icon.
     */
    closeIconAccessibilityLabel?: string;
    /**
     * Function to execute on press.
     */
    onPress?: (e: GestureResponderEvent) => void;
    /**
     * Function to execute on long press.
     */
    onLongPress?: () => void;
    /**
     * Function to execute as soon as the touchable element is pressed and invoked even before onPress.
     */
    onPressIn?: (e: GestureResponderEvent) => void;
    /**
     * Function to execute as soon as the touch is released even before onPress.
     */
    onPressOut?: (e: GestureResponderEvent) => void;
    /**
     * Function to execute on close button press. The close button appears only when this prop is specified.
     */
    onClose?: () => void;
    /**
     * The number of milliseconds a user must touch the element before executing `onLongPress`.
     */
    delayLongPress?: number;
    /**
     * @supported Available in v5.x with theme version 3
     * Sets smaller horizontal paddings `12dp` around label, when there is only label.
     */
    compact?: boolean;
    /**
     * @supported Available in v5.x with theme version 3
     * Whether chip should have the elevation.
     */
    elevated?: boolean;
    /**
     * Style of chip's text
     */
    textStyle?: StyleProp<TextStyle>;
    style?: Animated.WithAnimatedValue<StyleProp<ViewStyle>>;
    /**
     * @optional
     */
    theme?: ThemeProp;
    /**
     * Pass down testID from chip props to touchable for Detox tests.
     */
    testID?: string;
    /**
     * Ellipsize Mode for the children text
     */
    ellipsizeMode?: EllipsizeProp;
    /**
     * Specifies the largest possible scale a text font can reach.
     */
    maxFontSizeMultiplier?: number;
};
/**
 * Chips are compact elements that can represent inputs, attributes, or actions.
 * They can have an icon or avatar on the left, and a close button icon on the right.
 * They are typically used to:
 * <ul>
 *  <li>Present multiple options </li>
 *  <li>Represent attributes active or chosen </li>
 *  <li>Present filter options </li>
 *  <li>Trigger actions related to primary content </li>
 * </ul>
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { Chip } from 'react-native-paper';
 *
 * const MyComponent = () => (
 *   <Chip icon="information" onPress={() => console.log('Pressed')}>Example Chip</Chip>
 * );
 *
 * export default MyComponent;
 * ```
 */
declare const Chip: ({ mode, children, icon, avatar, selected, disabled, background, accessibilityLabel, closeIconAccessibilityLabel, onPress, onLongPress, onPressOut, onPressIn, delayLongPress, onClose, closeIcon, textStyle, style, theme: themeOverrides, testID, selectedColor, rippleColor: customRippleColor, showSelectedOverlay, showSelectedCheck, ellipsizeMode, compact, elevated, maxFontSizeMultiplier, ...rest }: Props) => React.JSX.Element;
export default Chip;
//# sourceMappingURL=Chip.d.ts.map