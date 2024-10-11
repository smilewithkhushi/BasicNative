import { Animated } from 'react-native';
export declare const isAnimatedValue: (it: number | string | Animated.AnimatedInterpolation<number | string>) => it is Animated.Value;
export default function overlay<T extends Animated.Value | number>(elevation: T, surfaceColor?: string): T extends number ? string : Animated.AnimatedInterpolation<number | string>;
//# sourceMappingURL=overlay.d.ts.map