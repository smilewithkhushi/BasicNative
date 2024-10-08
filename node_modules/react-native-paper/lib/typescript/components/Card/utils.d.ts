import type { ViewStyle } from 'react-native';
import type { InternalTheme } from '../../types';
declare type CardMode = 'elevated' | 'outlined' | 'contained';
declare type BorderRadiusStyles = Pick<ViewStyle, Extract<keyof ViewStyle, `border${string}Radius`>>;
export declare const getCardCoverStyle: ({ theme, index, total, borderRadiusStyles, }: {
    theme: InternalTheme;
    borderRadiusStyles: BorderRadiusStyles;
    index?: number | undefined;
    total?: number | undefined;
}) => {
    borderBottomEndRadius?: number | undefined;
    borderBottomStartRadius?: number | undefined;
    borderTopEndRadius?: number | undefined;
    borderTopStartRadius?: number | undefined;
    borderBottomLeftRadius?: number | undefined;
    borderBottomRightRadius?: number | undefined;
    borderRadius: number;
    borderTopLeftRadius?: number | undefined;
    borderTopRightRadius?: number | undefined;
} | {
    borderTopLeftRadius: number;
    borderTopRightRadius: number;
    borderBottomLeftRadius?: undefined;
} | {
    borderBottomLeftRadius: number;
    borderTopLeftRadius?: undefined;
    borderTopRightRadius?: undefined;
} | undefined;
export declare const getCardColors: ({ theme, mode, }: {
    theme: InternalTheme;
    mode: CardMode;
}) => {
    backgroundColor: string | undefined;
    borderColor: string;
};
export {};
//# sourceMappingURL=utils.d.ts.map