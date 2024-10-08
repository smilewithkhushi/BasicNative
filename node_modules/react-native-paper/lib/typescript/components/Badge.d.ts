import * as React from 'react';
import { Animated, StyleProp, TextStyle } from 'react-native';
import type { ThemeProp } from '../types';
export declare type Props = React.ComponentProps<typeof Animated.Text> & {
    /**
     * Whether the badge is visible
     */
    visible?: boolean;
    /**
     * Content of the `Badge`.
     */
    children?: string | number;
    /**
     * Size of the `Badge`.
     */
    size?: number;
    style?: StyleProp<TextStyle>;
    ref?: React.RefObject<typeof Animated.Text>;
    /**
     * @optional
     */
    theme?: ThemeProp;
};
/**
 * Badges are small status descriptors for UI elements.
 * A badge consists of a small circle, typically containing a number or other short set of characters, that appears in proximity to another object.
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { Badge } from 'react-native-paper';
 *
 * const MyComponent = () => (
 *   <Badge>3</Badge>
 * );
 *
 * export default MyComponent;
 * ```
 */
declare const Badge: ({ children, size, style, theme: themeOverrides, visible, ...rest }: Props) => React.JSX.Element;
export default Badge;
//# sourceMappingURL=Badge.d.ts.map