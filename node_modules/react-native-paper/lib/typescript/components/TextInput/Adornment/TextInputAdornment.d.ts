import React from 'react';
import type { LayoutChangeEvent, TextStyle, StyleProp, Animated } from 'react-native';
import type { ThemeProp } from 'src/types';
import { AdornmentSide, AdornmentType } from './enums';
import type { AdornmentConfig, AdornmentStyleAdjustmentForNativeInput } from './types';
export declare function getAdornmentConfig({ left, right, }: {
    left?: React.ReactNode;
    right?: React.ReactNode;
}): Array<AdornmentConfig>;
export declare function getAdornmentStyleAdjustmentForNativeInput({ adornmentConfig, leftAffixWidth, rightAffixWidth, paddingHorizontal, inputOffset, mode, isV3, }: {
    inputOffset?: number;
    adornmentConfig: AdornmentConfig[];
    leftAffixWidth: number;
    rightAffixWidth: number;
    mode?: 'outlined' | 'flat';
    paddingHorizontal?: number | string;
    isV3?: boolean;
}): AdornmentStyleAdjustmentForNativeInput | {};
export interface TextInputAdornmentProps {
    forceFocus: () => void;
    adornmentConfig: AdornmentConfig[];
    topPosition: {
        [AdornmentType.Affix]: {
            [AdornmentSide.Left]: number | null;
            [AdornmentSide.Right]: number | null;
        };
        [AdornmentType.Icon]: number;
    };
    onAffixChange: {
        [AdornmentSide.Left]: (event: LayoutChangeEvent) => void;
        [AdornmentSide.Right]: (event: LayoutChangeEvent) => void;
    };
    left?: React.ReactNode;
    right?: React.ReactNode;
    textStyle?: StyleProp<TextStyle>;
    visible?: Animated.Value;
    isTextInputFocused: boolean;
    paddingHorizontal?: number | string;
    maxFontSizeMultiplier?: number | undefined | null;
    theme?: ThemeProp;
    disabled?: boolean;
}
declare const TextInputAdornment: React.FunctionComponent<TextInputAdornmentProps>;
export default TextInputAdornment;
//# sourceMappingURL=TextInputAdornment.d.ts.map