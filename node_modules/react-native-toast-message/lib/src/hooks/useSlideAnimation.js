import React from 'react';
import { Animated, Platform } from 'react-native';
import { additiveInverseArray } from '../utils/array';
import { useKeyboard } from './useKeyboard';
export function translateYOutputRangeFor({ position, height, topOffset, bottomOffset, keyboardHeight, keyboardOffset }) {
    const offset = position === 'bottom' ? bottomOffset : topOffset;
    const keyboardAwareOffset = position === 'bottom' ? keyboardHeight + keyboardOffset : 0;
    const range = [-(height * 2), Math.max(offset, keyboardAwareOffset)];
    const outputRange = position === 'bottom' ? additiveInverseArray(range) : range;
    return outputRange;
}
const useNativeDriver = Platform.select({ native: true, default: false });
export function useSlideAnimation({ position, height, topOffset, bottomOffset, keyboardOffset }) {
    const animatedValue = React.useRef(new Animated.Value(0));
    const { keyboardHeight } = useKeyboard();
    const animate = React.useCallback((toValue) => {
        Animated.spring(animatedValue.current, {
            toValue,
            useNativeDriver,
            friction: 8
        }).start();
    }, []);
    const translateY = React.useMemo(() => animatedValue.current.interpolate({
        inputRange: [0, 1],
        outputRange: translateYOutputRangeFor({
            position,
            height,
            topOffset,
            bottomOffset,
            keyboardHeight,
            keyboardOffset
        })
    }), [position, height, topOffset, bottomOffset, keyboardHeight, keyboardOffset]);
    const opacity = animatedValue.current.interpolate({
        inputRange: [0, 0.7, 1],
        outputRange: [0, 1, 1]
    });
    return {
        animatedValue,
        animate,
        animationStyles: {
            opacity,
            transform: [
                {
                    translateY
                }
            ]
        }
    };
}
