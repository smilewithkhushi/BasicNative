import * as React from 'react';
import type { StyleProp, ViewStyle, View, Animated, ColorValue } from 'react-native';
import type { ThemeProp } from 'src/types';
import type { IconSource } from '../Icon';
import IconButton from '../IconButton/IconButton';
export declare type Props = React.ComponentPropsWithoutRef<typeof IconButton> & {
    /**
     *  Custom color for action icon.
     */
    color?: string;
    /**
     * Color of the ripple effect.
     */
    rippleColor?: ColorValue;
    /**
     * Name of the icon to show.
     */
    icon: IconSource;
    /**
     * Optional icon size.
     */
    size?: number;
    /**
     * Whether the button is disabled. A disabled button is greyed out and `onPress` is not called on touch.
     */
    disabled?: boolean;
    /**
     * Accessibility label for the button. This is read by the screen reader when the user taps the button.
     */
    accessibilityLabel?: string;
    /**
     * Function to execute on press.
     */
    onPress?: () => void;
    /**
     * @supported Available in v5.x with theme version 3
     *
     * Whether it's the leading button.
     */
    isLeading?: boolean;
    style?: Animated.WithAnimatedValue<StyleProp<ViewStyle>>;
    ref?: React.RefObject<View>;
    /**
     * @optional
     */
    theme?: ThemeProp;
};
/**
 * A component used to display an action item in the appbar.
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { Appbar } from 'react-native-paper';
 * import { Platform } from 'react-native';
 *
 * const MORE_ICON = Platform.OS === 'ios' ? 'dots-horizontal' : 'dots-vertical';
 *
 * const MyComponent = () => (
 *     <Appbar.Header>
 *        <Appbar.Content title="Title" subtitle={'Subtitle'} />
 *         <Appbar.Action icon="magnify" onPress={() => {}} />
 *         <Appbar.Action icon={MORE_ICON} onPress={() => {}} />
 *     </Appbar.Header>
 * );
 *
 * export default MyComponent;
 * ```
 */
declare const AppbarAction: import("../../utils/forwardRef").ForwardRefComponent<View, Props>;
export default AppbarAction;
export { AppbarAction };
//# sourceMappingURL=AppbarAction.d.ts.map