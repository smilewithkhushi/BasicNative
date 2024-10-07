import type { InternalTheme } from '../../types';
export declare const getAndroidSelectionControlColor: ({ theme, disabled, checked, customColor, customUncheckedColor, }: {
    theme: InternalTheme;
    checked: boolean;
    disabled?: boolean | undefined;
    customColor?: string | undefined;
    customUncheckedColor?: string | undefined;
}) => {
    rippleColor: string;
    selectionControlColor: string;
};
export declare const getSelectionControlIOSColor: ({ theme, disabled, customColor, }: {
    theme: InternalTheme;
    disabled?: boolean | undefined;
    customColor?: string | undefined;
}) => {
    checkedColor: string;
    rippleColor: string;
};
//# sourceMappingURL=utils.d.ts.map