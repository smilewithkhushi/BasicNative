import * as React from 'react';
import { GestureResponderEvent, StyleProp, ViewStyle, View, Animated, ColorValue } from 'react-native';
import type { ThemeProp } from '../../types';
import type { IconSource } from '../Icon';
export declare type Props = {
    /**
     * Icon to display for the `ToggleButton`.
     */
    icon: IconSource;
    /**
     * Size of the icon.
     */
    size?: number;
    /**
     * Custom text color for button.
     */
    iconColor?: string;
    /**
     * Color of the ripple effect.
     */
    rippleColor?: ColorValue;
    /**
     * Whether the button is disabled.
     */
    disabled?: boolean;
    /**
     * Accessibility label for the `ToggleButton`. This is read by the screen reader when the user taps the button.
     */
    accessibilityLabel?: string;
    /**
     * Function to execute on press.
     */
    onPress?: (value?: GestureResponderEvent | string) => void;
    /**
     * Value of button.
     */
    value?: string;
    /**
     * Status of button.
     */
    status?: 'checked' | 'unchecked';
    style?: Animated.WithAnimatedValue<StyleProp<ViewStyle>>;
    /**
     * @optional
     */
    theme?: ThemeProp;
    ref?: React.RefObject<View>;
    /**
     * testID to be used on tests.
     */
    testID?: string;
};
/**
 * Toggle buttons can be used to group related options. To emphasize groups of related toggle buttons,
 * a group should share a common container.
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { ToggleButton } from 'react-native-paper';
 *
 * const ToggleButtonExample = () => {
 *   const [status, setStatus] = React.useState('checked');
 *
 *   const onButtonToggle = value => {
 *     setStatus(status === 'checked' ? 'unchecked' : 'checked');
 *   };
 *
 *   return (
 *     <ToggleButton
 *       icon="bluetooth"
 *       value="bluetooth"
 *       status={status}
 *       onPress={onButtonToggle}
 *     />
 *   );
 * };
 *
 * export default ToggleButtonExample;
 *
 * ```
 */
declare const ToggleButton: import("../../utils/forwardRef").ForwardRefComponent<View, Props>;
export default ToggleButton;
export { ToggleButton };
//# sourceMappingURL=ToggleButton.d.ts.map