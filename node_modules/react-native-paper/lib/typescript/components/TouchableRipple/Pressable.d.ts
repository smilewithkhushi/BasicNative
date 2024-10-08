import type * as React from 'react';
import type { PressableProps as PressableNativeProps, StyleProp, View, ViewStyle } from 'react-native';
export declare type PressableStateCallbackType = {
    hovered: boolean;
    pressed: boolean;
    focused: boolean;
};
export declare type PressableProps = Omit<PressableNativeProps, 'children' | 'style'> & {
    children: React.ReactNode | ((state: PressableStateCallbackType) => React.ReactNode) | undefined;
    style?: StyleProp<ViewStyle> | ((state: PressableStateCallbackType) => StyleProp<ViewStyle>) | undefined;
};
export declare const Pressable: React.ForwardRefExoticComponent<PressableProps & React.RefAttributes<View>>;
//# sourceMappingURL=Pressable.d.ts.map