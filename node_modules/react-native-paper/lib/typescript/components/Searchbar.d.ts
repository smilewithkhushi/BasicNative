import * as React from 'react';
import { Animated, ColorValue, GestureResponderEvent, StyleProp, TextInput, TextStyle, ViewStyle } from 'react-native';
import type { IconSource } from './Icon';
import type { ThemeProp } from '../types';
interface Style {
    marginRight: number;
}
export declare type Props = React.ComponentPropsWithRef<typeof TextInput> & {
    /**
     * Hint text shown when the input is empty.
     */
    placeholder?: string;
    /**
     * The value of the text input.
     */
    value: string;
    /**
     * Callback that is called when the text input's text changes.
     */
    onChangeText?: (query: string) => void;
    /**
     * @supported Available in v5.x with theme version 3
     * Search layout mode, the default value is "bar".
     */
    mode?: 'bar' | 'view';
    /**
     * Icon name for the left icon button (see `onIconPress`).
     */
    icon?: IconSource;
    /**
     * Custom color for icon, default will be derived from theme
     */
    iconColor?: string;
    /**
     * Color of the ripple effect.
     */
    rippleColor?: ColorValue;
    /**
     * Callback to execute if we want the left icon to act as button.
     */
    onIconPress?: (e: GestureResponderEvent) => void;
    /**
     * Callback to execute if we want to add custom behaviour to close icon button.
     */
    onClearIconPress?: (e: GestureResponderEvent) => void;
    /**
     * Accessibility label for the button. This is read by the screen reader when the user taps the button.
     */
    searchAccessibilityLabel?: string;
    /**
     * Custom icon for clear button, default will be icon close. It's visible when `loading` is set to `false`.
     * In v5.x with theme version 3, `clearIcon` is visible only `right` prop is not defined.
     */
    clearIcon?: IconSource;
    /**
     * Accessibility label for the button. This is read by the screen reader when the user taps the button.
     */
    clearAccessibilityLabel?: string;
    /**
     * @supported Available in v5.x with theme version 3
     * Icon name for the right trailering icon button.
     * Works only when `mode` is set to "bar". It won't be displayed if `loading` is set to `true`.
     */
    traileringIcon?: IconSource;
    /**
     * @supported Available in v5.x with theme version 3
     * Custom color for the right trailering icon, default will be derived from theme
     */
    traileringIconColor?: string;
    /**
     * @supported Available in v5.x with theme version 3
     * Color of the trailering icon ripple effect.
     */
    traileringRippleColor?: ColorValue;
    /**
     * @supported Available in v5.x with theme version 3
     * Callback to execute on the right trailering icon button press.
     */
    onTraileringIconPress?: (e: GestureResponderEvent) => void;
    /**
     * Accessibility label for the right trailering icon button. This is read by the screen reader when the user taps the button.
     */
    traileringIconAccessibilityLabel?: string;
    /**
     * @supported Available in v5.x with theme version 3
     * Callback which returns a React element to display on the right side.
     * Works only when `mode` is set to "bar".
     */
    right?: (props: {
        color: string;
        style: Style;
        testID: string;
    }) => React.ReactNode;
    /**
     * @supported Available in v5.x with theme version 3
     * Whether to show `Divider` at the bottom of the search.
     * Works only when `mode` is set to "view". True by default.
     */
    showDivider?: boolean;
    /**
     * @supported Available in v5.x with theme version 3
     * Changes Searchbar shadow and background on iOS and Android.
     */
    elevation?: 0 | 1 | 2 | 3 | 4 | 5 | Animated.Value;
    /**
     * Set style of the TextInput component inside the searchbar
     */
    inputStyle?: StyleProp<TextStyle>;
    style?: Animated.WithAnimatedValue<StyleProp<ViewStyle>>;
    /**
     * Custom flag for replacing clear button with activity indicator.
     */
    loading?: Boolean;
    /**
     * TestID used for testing purposes
     */
    testID?: string;
    /**
     * @optional
     */
    theme?: ThemeProp;
};
declare type TextInputHandles = Pick<TextInput, 'setNativeProps' | 'isFocused' | 'clear' | 'blur' | 'focus'>;
/**
 * Searchbar is a simple input box where users can type search queries.
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { Searchbar } from 'react-native-paper';
 *
 * const MyComponent = () => {
 *   const [searchQuery, setSearchQuery] = React.useState('');
 *
 *   return (
 *     <Searchbar
 *       placeholder="Search"
 *       onChangeText={setSearchQuery}
 *       value={searchQuery}
 *     />
 *   );
 * };
 *
 * export default MyComponent;

 * ```
 */
declare const Searchbar: import("../utils/forwardRef").ForwardRefComponent<TextInputHandles, Props>;
export default Searchbar;
//# sourceMappingURL=Searchbar.d.ts.map