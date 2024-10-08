import * as React from 'react';
import { Animated, StyleProp, View, ViewStyle } from 'react-native';
import type { ThemeProp } from '../types';
export declare type Props = React.ComponentPropsWithRef<typeof View> & {
    /**
     * Animated value (between 0 and 1). This tells the progress bar to rely on this value to animate it.
     * Note: It should not be used in parallel with the `progress` prop.
     */
    animatedValue?: number;
    /**
     * Progress value (between 0 and 1).
     * Note: It should not be used in parallel with the `animatedValue` prop.
     */
    progress?: number;
    /**
     * Color of the progress bar. The background color will be calculated based on this but you can change it by passing `backgroundColor` to `style` prop.
     */
    color?: string;
    /**
     * If the progress bar will show indeterminate progress.
     */
    indeterminate?: boolean;
    /**
     * Whether to show the ProgressBar (true, the default) or hide it (false).
     */
    visible?: boolean;
    /**
     * Style of filled part of the ProgresBar.
     */
    fillStyle?: Animated.WithAnimatedValue<StyleProp<ViewStyle>>;
    style?: StyleProp<ViewStyle>;
    /**
     * @optional
     */
    theme?: ThemeProp;
    /**
     * testID to be used on tests.
     */
    testID?: string;
};
/**
 * Progress bar is an indicator used to present progress of some activity in the app.
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { ProgressBar, MD3Colors } from 'react-native-paper';
 *
 * const MyComponent = () => (
 *   <ProgressBar progress={0.5} color={MD3Colors.error50} />
 * );
 *
 * export default MyComponent;
 * ```
 */
declare const ProgressBar: ({ color, indeterminate, progress, visible, theme: themeOverrides, animatedValue, style, fillStyle, testID, ...rest }: Props) => React.JSX.Element;
export default ProgressBar;
//# sourceMappingURL=ProgressBar.d.ts.map