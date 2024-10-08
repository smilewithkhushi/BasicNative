import * as React from 'react';
import { StyleProp, Text as NativeText, TextStyle } from 'react-native';
import type { VariantProp } from './types';
import type { ThemeProp } from '../../types';
export declare type Props<T> = React.ComponentProps<typeof NativeText> & {
    /**
     * @supported Available in v5.x with theme version 3
     *
     * Variant defines appropriate text styles for type role and its size.
     * Available variants:
     *
     *  Display: `displayLarge`, `displayMedium`, `displaySmall`
     *
     *  Headline: `headlineLarge`, `headlineMedium`, `headlineSmall`
     *
     *  Title: `titleLarge`, `titleMedium`, `titleSmall`
     *
     *  Label:  `labelLarge`, `labelMedium`, `labelSmall`
     *
     *  Body: `bodyLarge`, `bodyMedium`, `bodySmall`
     */
    variant?: VariantProp<T>;
    children: React.ReactNode;
    theme?: ThemeProp;
    style?: StyleProp<TextStyle>;
};
export declare type TextRef = React.ForwardedRef<{
    setNativeProps(args: Object): void;
}>;
declare type TextComponent<T> = (props: Props<T> & {
    ref?: React.RefObject<TextRef>;
}) => JSX.Element;
declare const Component: TextComponent<never>;
export declare const customText: <T>() => TextComponent<T>;
export default Component;
//# sourceMappingURL=Text.d.ts.map