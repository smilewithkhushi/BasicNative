import React from 'react';
import { Animated } from 'react-native';
import { ToastPosition } from '../types';
declare type UseSlideAnimationParams = {
    position: ToastPosition;
    height: number;
    topOffset: number;
    bottomOffset: number;
    keyboardOffset: number;
};
export declare function translateYOutputRangeFor({ position, height, topOffset, bottomOffset, keyboardHeight, keyboardOffset }: UseSlideAnimationParams & {
    keyboardHeight: number;
}): number[];
export declare function useSlideAnimation({ position, height, topOffset, bottomOffset, keyboardOffset }: UseSlideAnimationParams): {
    animatedValue: React.MutableRefObject<Animated.Value>;
    animate: (toValue: number) => void;
    animationStyles: {
        opacity: Animated.AnimatedInterpolation;
        transform: {
            translateY: Animated.AnimatedInterpolation;
        }[];
    };
};
export {};
