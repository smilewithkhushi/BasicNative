import * as React from 'react';
import { ColorValue, StyleProp, ViewStyle } from 'react-native';
import { TextInputLabelProp } from '../types';
declare type OutlineProps = {
    isV3: boolean;
    activeColor: string;
    backgroundColor: ColorValue;
    hasActiveOutline?: boolean;
    focused?: boolean;
    outlineColor?: string;
    roundness?: number;
    label?: TextInputLabelProp;
    style?: StyleProp<ViewStyle>;
};
export declare const Outline: ({ isV3, label, activeColor, backgroundColor, hasActiveOutline, focused, outlineColor, roundness, style, }: OutlineProps) => React.JSX.Element;
export {};
//# sourceMappingURL=Outline.d.ts.map