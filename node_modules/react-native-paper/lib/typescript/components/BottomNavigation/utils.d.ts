import type { InternalTheme } from 'src/types';
import type { black, white } from '../../styles/themes/v2/colors';
declare type BaseProps = {
    defaultColor: typeof black | typeof white;
    theme: InternalTheme;
};
export declare const getActiveTintColor: ({ activeColor, defaultColor, theme, }: BaseProps & {
    activeColor: string | undefined;
}) => string;
export declare const getInactiveTintColor: ({ inactiveColor, defaultColor, theme, }: BaseProps & {
    inactiveColor: string | undefined;
}) => string;
export declare const getLabelColor: ({ tintColor, hasColor, focused, defaultColor, theme, }: BaseProps & {
    tintColor: string;
    hasColor: boolean;
    focused: boolean;
}) => string;
export {};
//# sourceMappingURL=utils.d.ts.map