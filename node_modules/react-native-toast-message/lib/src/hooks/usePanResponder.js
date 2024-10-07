import React from 'react';
import { PanResponder } from 'react-native';
export function shouldSetPanResponder(_event, gesture) {
    const { dx, dy } = gesture;
    // Fixes onPress handler
    // https://github.com/calintamas/react-native-toast-message/issues/113
    const offset = 2;
    return Math.abs(dx) > offset || Math.abs(dy) > offset;
}
export function shouldDismissView(newAnimatedValue, gesture) {
    const dismissThreshold = 0.65;
    const { vy, dy } = gesture;
    return (newAnimatedValue <= dismissThreshold ||
        (Math.abs(vy) >= dismissThreshold && dy < 0));
}
export function usePanResponder({ animatedValue, computeNewAnimatedValueForGesture, onDismiss, onRestore, disable }) {
    const onMove = React.useCallback((_event, gesture) => {
        if (disable) {
            return;
        }
        const newAnimatedValue = computeNewAnimatedValueForGesture(gesture);
        animatedValue.current?.setValue(newAnimatedValue);
    }, [animatedValue, computeNewAnimatedValueForGesture, disable]);
    const onRelease = React.useCallback((_event, gesture) => {
        if (disable) {
            return;
        }
        const newAnimatedValue = computeNewAnimatedValueForGesture(gesture);
        if (shouldDismissView(newAnimatedValue, gesture)) {
            onDismiss();
        }
        else {
            onRestore();
        }
    }, [computeNewAnimatedValueForGesture, onDismiss, onRestore, disable]);
    const panResponder = React.useMemo(() => PanResponder.create({
        onMoveShouldSetPanResponder: shouldSetPanResponder,
        onMoveShouldSetPanResponderCapture: shouldSetPanResponder,
        onPanResponderMove: onMove,
        onPanResponderRelease: onRelease
    }), [onMove, onRelease]);
    return {
        panResponder,
        onMove,
        onRelease
    };
}
