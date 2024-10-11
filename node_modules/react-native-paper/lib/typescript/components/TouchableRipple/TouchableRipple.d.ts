import * as React from 'react';
import { ColorValue, GestureResponderEvent, StyleProp, View, ViewStyle } from 'react-native';
import type { PressableProps, PressableStateCallbackType } from './Pressable';
import type { ThemeProp } from '../../types';
export declare type Props = PressableProps & {
    /**
     * Whether to render the ripple outside the view bounds.
     */
    borderless?: boolean;
    /**
     * Type of background drawabale to display the feedback (Android).
     * https://reactnative.dev/docs/pressable#rippleconfig
     */
    background?: Object;
    /**
     * Whether to start the ripple at the center (Web).
     */
    centered?: boolean;
    /**
     * Whether to prevent interaction with the touchable.
     */
    disabled?: boolean;
    /**
     * Function to execute on press. If not set, will cause the touchable to be disabled.
     */
    onPress?: (e: GestureResponderEvent) => void;
    /**
     * Function to execute on long press.
     */
    onLongPress?: (e: GestureResponderEvent) => void;
    /**
     * Function to execute immediately when a touch is engaged, before `onPressOut` and `onPress`.
     */
    onPressIn?: (e: GestureResponderEvent) => void;
    /**
     * Function to execute when a touch is released.
     */
    onPressOut?: (e: GestureResponderEvent) => void;
    /**
     * Color of the ripple effect (Android >= 5.0 and Web).
     */
    rippleColor?: ColorValue;
    /**
     * Color of the underlay for the highlight effect (Android < 5.0 and iOS).
     */
    underlayColor?: string;
    /**
     * Content of the `TouchableRipple`.
     */
    children: ((state: PressableStateCallbackType) => React.ReactNode) | React.ReactNode;
    style?: StyleProp<ViewStyle> | ((state: PressableStateCallbackType) => StyleProp<ViewStyle>) | undefined;
    /**
     * @optional
     */
    theme?: ThemeProp;
};
declare const _default: import("../../utils/forwardRef").ForwardRefComponent<View, Props> & {
    supported: boolean;
};
export default _default;
//# sourceMappingURL=TouchableRipple.d.ts.map