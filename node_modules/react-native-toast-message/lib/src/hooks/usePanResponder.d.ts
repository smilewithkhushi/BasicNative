import { RefObject } from 'react';
import { Animated, GestureResponderEvent, PanResponderGestureState } from 'react-native';
export declare function shouldSetPanResponder(_event: GestureResponderEvent, gesture: PanResponderGestureState): boolean;
export declare function shouldDismissView(newAnimatedValue: number, gesture: PanResponderGestureState): boolean;
export declare type UsePanResponderParams = {
    animatedValue: RefObject<Animated.Value>;
    computeNewAnimatedValueForGesture: (gesture: PanResponderGestureState) => number;
    onDismiss: () => void;
    onRestore: () => void;
    disable?: boolean;
};
export declare function usePanResponder({ animatedValue, computeNewAnimatedValueForGesture, onDismiss, onRestore, disable }: UsePanResponderParams): {
    panResponder: import("react-native").PanResponderInstance;
    onMove: (_event: GestureResponderEvent, gesture: PanResponderGestureState) => void;
    onRelease: (_event: GestureResponderEvent, gesture: PanResponderGestureState) => void;
};
