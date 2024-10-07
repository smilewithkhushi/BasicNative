import * as React from 'react';
import { PressableAndroidRippleConfig, StyleProp, ViewStyle, GestureResponderEvent, View, ColorValue } from 'react-native';
import type { PressableProps } from './Pressable';
import type { ThemeProp } from '../../types';
export declare type Props = PressableProps & {
    borderless?: boolean;
    background?: PressableAndroidRippleConfig;
    centered?: boolean;
    disabled?: boolean;
    onPress?: (e: GestureResponderEvent) => void | null;
    onLongPress?: (e: GestureResponderEvent) => void;
    onPressIn?: (e: GestureResponderEvent) => void;
    onPressOut?: (e: GestureResponderEvent) => void;
    rippleColor?: ColorValue;
    underlayColor?: string;
    children: React.ReactNode;
    style?: StyleProp<ViewStyle>;
    theme?: ThemeProp;
};
declare const _default: import("../../utils/forwardRef").ForwardRefComponent<View, Props> & {
    supported: boolean;
};
export default _default;
//# sourceMappingURL=TouchableRipple.native.d.ts.map