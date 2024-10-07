import React from 'react';
import type { ColorValue, ViewStyle } from 'react-native';
import { Animated } from 'react-native';
import type { InternalTheme, ThemeProp } from '../../types';
export declare type AppbarModes = 'small' | 'medium' | 'large' | 'center-aligned';
export declare const getAppbarBackgroundColor: (theme: InternalTheme, elevation: number, customBackground?: ColorValue, elevated?: boolean) => ColorValue;
export declare const getAppbarColor: ({ color, isDark, isV3, }: BaseProps & {
    color: string;
}) => string | undefined;
export declare const getAppbarBorders: (style: Animated.Value | Animated.AnimatedInterpolation<string | number> | Animated.WithAnimatedObject<ViewStyle>) => Record<string, number>;
declare type BaseProps = {
    isDark: boolean;
    isV3: boolean;
};
declare type RenderAppbarContentProps = BaseProps & {
    children: React.ReactNode;
    shouldCenterContent?: boolean;
    isV3: boolean;
    renderOnly?: (string | boolean)[];
    renderExcept?: string[];
    mode?: AppbarModes;
    theme?: ThemeProp;
};
export declare const DEFAULT_APPBAR_HEIGHT = 56;
export declare const modeAppbarHeight: {
    small: number;
    medium: number;
    large: number;
    'center-aligned': number;
};
export declare const modeTextVariant: {
    readonly small: "titleLarge";
    readonly medium: "headlineSmall";
    readonly large: "headlineMedium";
    readonly 'center-aligned': "titleLarge";
};
export declare const renderAppbarContent: ({ children, isDark, shouldCenterContent, isV3, renderOnly, renderExcept, mode, theme, }: RenderAppbarContentProps) => (string | number | Iterable<React.ReactNode> | React.ReactElement<unknown, string | React.JSXElementConstructor<any>>)[];
export {};
//# sourceMappingURL=utils.d.ts.map