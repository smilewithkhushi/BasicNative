import type { InternalTheme } from '../../types';
declare type BaseProps = {
    theme: InternalTheme;
    disabled?: boolean;
    value?: boolean;
};
export declare const getSwitchColor: ({ theme, disabled, value, color, }: BaseProps & {
    color?: string | undefined;
}) => {
    onTintColor: string;
    thumbTintColor: string | undefined;
    checkedColor: string;
};
export {};
//# sourceMappingURL=utils.d.ts.map