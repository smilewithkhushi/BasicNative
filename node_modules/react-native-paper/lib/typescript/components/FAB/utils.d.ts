import { Animated, ColorValue, ViewStyle } from 'react-native';
import type { InternalTheme } from '../../types';
declare type GetCombinedStylesProps = {
    isAnimatedFromRight: boolean;
    isIconStatic: boolean;
    distance: number;
    animFAB: Animated.Value;
};
declare type CombinedStyles = {
    innerWrapper: Animated.WithAnimatedValue<ViewStyle>;
    iconWrapper: Animated.WithAnimatedValue<ViewStyle>;
    absoluteFill: Animated.WithAnimatedValue<ViewStyle>;
};
export declare const getCombinedStyles: ({ isAnimatedFromRight, isIconStatic, distance, animFAB, }: GetCombinedStylesProps) => CombinedStyles;
export declare const getFABColors: ({ theme, variant, disabled, customColor, customBackgroundColor, customRippleColor, }: {
    theme: InternalTheme;
    variant: string;
    disabled?: boolean | undefined;
    customColor?: string | undefined;
    customBackgroundColor?: ColorValue | undefined;
    customRippleColor?: ColorValue | undefined;
}) => {
    backgroundColor: any;
    foregroundColor: string;
    rippleColor: ColorValue;
};
export declare const getFABGroupColors: ({ theme, customBackdropColor, }: {
    theme: InternalTheme;
    customBackdropColor?: string | undefined;
}) => {
    labelColor: string;
    backdropColor: string;
    stackedFABBackgroundColor: string;
};
export declare const getFabStyle: ({ size, theme, customSize, }: {
    customSize?: number | undefined;
    size: 'small' | 'medium' | 'large';
    theme: InternalTheme;
}) => {
    height: number;
    width: number;
    borderRadius: number;
};
export declare const getExtendedFabStyle: ({ customSize, theme, }: {
    customSize?: number | undefined;
    theme: InternalTheme;
}) => {
    height: number;
    paddingHorizontal: number;
};
export {};
//# sourceMappingURL=utils.d.ts.map