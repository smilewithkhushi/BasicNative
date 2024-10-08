import type { ColorValue } from 'react-native';
import type { InternalTheme } from '../../types';
declare type IconButtonMode = 'outlined' | 'contained' | 'contained-tonal';
export declare const getIconButtonColor: ({ theme, disabled, mode, selected, customIconColor, customContainerColor, customRippleColor, }: {
    theme: InternalTheme;
    disabled?: boolean | undefined;
    selected?: boolean | undefined;
    mode?: IconButtonMode | undefined;
    customIconColor?: string | undefined;
    customContainerColor?: string | undefined;
    customRippleColor?: ColorValue | undefined;
}) => {
    iconColor: string;
    backgroundColor: string | undefined;
    rippleColor: ColorValue;
    borderColor: string | undefined;
};
export {};
//# sourceMappingURL=utils.d.ts.map