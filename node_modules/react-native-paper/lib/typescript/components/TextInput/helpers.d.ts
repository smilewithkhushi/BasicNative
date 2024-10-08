import type { AdornmentConfig } from './Adornment/types';
import type { TextInputLabelProp } from './types';
import type { InternalTheme } from '../../types';
declare type PaddingProps = {
    height: number | null;
    labelHalfHeight: number;
    multiline: boolean | null;
    dense: boolean | null;
    topPosition: number;
    fontSize: number;
    lineHeight?: number;
    label?: TextInputLabelProp | null;
    scale: number;
    offset: number;
    isAndroid: boolean;
    styles: {
        paddingTop: number;
        paddingBottom: number;
    };
};
declare type AdjProps = PaddingProps & {
    pad: number;
};
export declare type Padding = {
    paddingTop: number;
    paddingBottom: number;
};
export declare const calculateLabelTopPosition: (labelHeight: number, height?: number, optionalPadding?: number) => number;
export declare const calculateInputHeight: (labelHeight: number, height: any, minHeight: number) => number;
export declare const calculatePadding: (props: PaddingProps) => number;
export declare const adjustPaddingOut: ({ pad, multiline, label, scale, height, fontSize, lineHeight, dense, offset, isAndroid, }: AdjProps) => Padding;
export declare const adjustPaddingFlat: ({ pad, scale, multiline, label, height, offset, dense, fontSize, isAndroid, styles, }: AdjProps) => Padding;
export declare function calculateFlatAffixTopPosition({ height, paddingTop, paddingBottom, affixHeight, }: {
    height: number;
    paddingTop: number;
    paddingBottom: number;
    affixHeight: number;
}): number;
export declare function calculateOutlinedIconAndAffixTopPosition({ height, affixHeight, labelYOffset, }: {
    height: number;
    affixHeight: number;
    labelYOffset: number;
}): number;
export declare const calculateFlatInputHorizontalPadding: ({ adornmentConfig, isV3, }: {
    adornmentConfig: AdornmentConfig[];
    isV3?: boolean | undefined;
}) => {
    paddingLeft: number;
    paddingRight: number;
};
export declare const getFlatInputColors: ({ underlineColor, activeUnderlineColor, customSelectionColor, textColor, disabled, error, theme, }: {
    underlineColor?: string | undefined;
    activeUnderlineColor?: string | undefined;
    customSelectionColor?: string | undefined;
    textColor?: string | undefined;
    disabled?: boolean | undefined;
    error?: boolean | undefined;
    theme: InternalTheme;
}) => {
    inputTextColor: string;
    activeColor: string;
    underlineColorCustom: string;
    placeholderColor: string;
    selectionColor: string;
    errorColor: string;
    backgroundColor: string | undefined;
};
export declare const getOutlinedInputColors: ({ activeOutlineColor, customOutlineColor, customSelectionColor, textColor, disabled, error, theme, }: {
    activeOutlineColor?: string | undefined;
    customOutlineColor?: string | undefined;
    customSelectionColor?: string | undefined;
    textColor?: string | undefined;
    disabled?: boolean | undefined;
    error?: boolean | undefined;
    theme: InternalTheme;
}) => {
    inputTextColor: string;
    activeColor: string;
    outlineColor: string | undefined;
    placeholderColor: string;
    selectionColor: string;
    errorColor: string;
};
export declare const getConstants: (isV3?: boolean) => {
    AFFIX_OFFSET: number;
    ICON_OFFSET: number;
    LABEL_PADDING_TOP: number;
    LABEL_PADDING_HORIZONTAL: number;
    FLAT_INPUT_OFFSET: number;
    MIN_HEIGHT: number;
    INPUT_PADDING_HORIZONTAL: number;
    ADORNMENT_OFFSET: number;
    OUTLINED_INPUT_OFFSET: number;
    MIN_WIDTH: number;
};
export {};
//# sourceMappingURL=helpers.d.ts.map