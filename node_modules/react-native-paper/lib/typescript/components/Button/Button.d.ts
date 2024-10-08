import * as React from 'react';
import { AccessibilityRole, Animated, ColorValue, GestureResponderEvent, PressableAndroidRippleConfig, StyleProp, TextStyle, View, ViewStyle } from 'react-native';
import type { $Omit, ThemeProp } from '../../types';
import { IconSource } from '../Icon';
import Surface from '../Surface';
export declare type Props = $Omit<React.ComponentProps<typeof Surface>, 'mode'> & {
    /**
     * Mode of the button. You can change the mode to adjust the styling to give it desired emphasis.
     * - `text` - flat button without background or outline, used for the lowest priority actions, especially when presenting multiple options.
     * - `outlined` - button with an outline without background, typically used for important, but not primary action – represents medium emphasis.
     * - `contained` - button with a background color, used for important action, have the most visual impact and high emphasis.
     * - `elevated` - button with a background color and elevation, used when absolutely necessary e.g. button requires visual separation from a patterned background. @supported Available in v5.x with theme version 3
     * - `contained-tonal` - button with a secondary background color, an alternative middle ground between contained and outlined buttons. @supported Available in v5.x with theme version 3
     */
    mode?: 'text' | 'outlined' | 'contained' | 'elevated' | 'contained-tonal';
    /**
     * Whether the color is a dark color. A dark button will render light text and vice-versa. Only applicable for:
     *  * `contained` mode for theme version 2
     *  * `contained`, `contained-tonal` and `elevated` modes for theme version 3.
     */
    dark?: boolean;
    /**
     * Use a compact look, useful for `text` buttons in a row.
     */
    compact?: boolean;
    /**
     * @deprecated Deprecated in v5.x - use `buttonColor` or `textColor` instead.
     * Custom text color for flat button, or background color for contained button.
     */
    color?: string;
    /**
     * Custom button's background color.
     */
    buttonColor?: string;
    /**
     * Custom button's text color.
     */
    textColor?: string;
    /**
     * Color of the ripple effect.
     */
    rippleColor?: ColorValue;
    /**
     * Whether to show a loading indicator.
     */
    loading?: boolean;
    /**
     * Icon to display for the `Button`.
     */
    icon?: IconSource;
    /**
     * Whether the button is disabled. A disabled button is greyed out and `onPress` is not called on touch.
     */
    disabled?: boolean;
    /**
     * Label text of the button.
     */
    children: React.ReactNode;
    /**
     * Make the label text uppercased. Note that this won't work if you pass React elements as children.
     */
    uppercase?: boolean;
    /**
     * Type of background drawabale to display the feedback (Android).
     * https://reactnative.dev/docs/pressable#rippleconfig
     */
    background?: PressableAndroidRippleConfig;
    /**
     * Accessibility label for the button. This is read by the screen reader when the user taps the button.
     */
    accessibilityLabel?: string;
    /**
     * Accessibility hint for the button. This is read by the screen reader when the user taps the button.
     */
    accessibilityHint?: string;
    /**
     * Accessibility role for the button. The "button" role is set by default.
     */
    accessibilityRole?: AccessibilityRole;
    /**
     * Function to execute on press.
     */
    onPress?: (e: GestureResponderEvent) => void;
    /**
     * Function to execute as soon as the touchable element is pressed and invoked even before onPress.
     */
    onPressIn?: (e: GestureResponderEvent) => void;
    /**
     * Function to execute as soon as the touch is released even before onPress.
     */
    onPressOut?: (e: GestureResponderEvent) => void;
    /**
     * Function to execute on long press.
     */
    onLongPress?: (e: GestureResponderEvent) => void;
    /**
     * The number of milliseconds a user must touch the element before executing `onLongPress`.
     */
    delayLongPress?: number;
    /**
     * Style of button's inner content.
     * Use this prop to apply custom height and width and to set the icon on the right with `flexDirection: 'row-reverse'`.
     */
    contentStyle?: StyleProp<ViewStyle>;
    /**
     * Specifies the largest possible scale a text font can reach.
     */
    maxFontSizeMultiplier?: number;
    style?: Animated.WithAnimatedValue<StyleProp<ViewStyle>>;
    /**
     * Style for the button text.
     */
    labelStyle?: StyleProp<TextStyle>;
    /**
     * @optional
     */
    theme?: ThemeProp;
    /**
     * testID to be used on tests.
     */
    testID?: string;
};
declare const _default: import("../../utils/forwardRef").ForwardRefComponent<View, Props>;
export default _default;
//# sourceMappingURL=Button.d.ts.map