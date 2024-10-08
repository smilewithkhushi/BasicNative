/// <reference types="react" />
import { PanResponderGestureState } from 'react-native';
import { ReactChildren, ToastPosition } from '../types';
export declare type AnimatedContainerProps = {
    children: ReactChildren;
    isVisible: boolean;
    position: ToastPosition;
    topOffset: number;
    swipeable: boolean;
    bottomOffset: number;
    keyboardOffset: number;
    onHide: () => void;
    onRestorePosition?: () => void;
};
/**
 * Produces a positive damping value.
 *
 * To note: `moveY` becomes negative when going off-screen. By making sure the value
 * produced is always positive, we avoid issues like: https://github.com/calintamas/react-native-toast-message/issues/280
 */
export declare function dampingFor(gesture: PanResponderGestureState, position: ToastPosition): number;
export declare function animatedValueFor(gesture: PanResponderGestureState, position: ToastPosition, damping: number): number;
export declare function AnimatedContainer({ children, isVisible, position, topOffset, bottomOffset, keyboardOffset, onHide, onRestorePosition, swipeable }: AnimatedContainerProps): JSX.Element;
