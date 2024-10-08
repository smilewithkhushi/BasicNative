import * as React from 'react';
import { Animated, TextStyle } from 'react-native';
import type { VariantProp } from './types';
import type { ThemeProp } from '../../types';
declare type Props<T> = React.ComponentPropsWithRef<typeof Animated.Text> & {
    /**
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
    style?: TextStyle;
    /**
     * @optional
     */
    theme?: ThemeProp;
};
/**
 * Animated text component which follows styles from the theme.
 *
 * @extends Text props https://reactnative.dev/docs/text#props
 */
declare function AnimatedText({ style, theme: themeOverrides, variant, ...rest }: Props<never>): React.JSX.Element;
export declare const customAnimatedText: <T>() => (props: Props<T>) => JSX.Element;
export default AnimatedText;
//# sourceMappingURL=AnimatedText.d.ts.map