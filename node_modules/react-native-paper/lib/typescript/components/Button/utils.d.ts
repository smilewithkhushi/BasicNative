import type { InternalTheme } from '../../types';
export declare type ButtonMode = 'text' | 'outlined' | 'contained' | 'elevated' | 'contained-tonal';
export declare const getButtonColors: ({ theme, mode, customButtonColor, customTextColor, disabled, dark, }: {
    theme: InternalTheme;
    mode: ButtonMode;
    customButtonColor?: string | undefined;
    customTextColor?: string | undefined;
    disabled?: boolean | undefined;
    dark?: boolean | undefined;
}) => {
    backgroundColor: string;
    borderColor: string;
    textColor: string;
    borderWidth: number;
};
//# sourceMappingURL=utils.d.ts.map