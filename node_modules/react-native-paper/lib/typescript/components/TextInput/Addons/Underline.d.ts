import * as React from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import type { ThemeProp } from 'src/types';
declare type UnderlineProps = {
    parentState: {
        focused: boolean;
    };
    error?: boolean;
    colors?: {
        error?: string;
    };
    activeColor: string;
    underlineColorCustom?: string;
    hasActiveOutline?: boolean;
    style?: StyleProp<ViewStyle>;
    theme?: ThemeProp;
};
export declare const Underline: ({ parentState, error, colors, activeColor, underlineColorCustom, hasActiveOutline, style, theme: themeOverrides, }: UnderlineProps) => React.JSX.Element;
export {};
//# sourceMappingURL=Underline.d.ts.map