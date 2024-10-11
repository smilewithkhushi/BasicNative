import * as React from 'react';
import { ImageSourcePropType } from 'react-native';
import type { ThemeProp } from '../types';
declare type IconSourceBase = string | ImageSourcePropType;
export declare type IconSource = IconSourceBase | Readonly<{
    source: IconSourceBase;
    direction: 'rtl' | 'ltr' | 'auto';
}> | ((props: IconProps & {
    color: string;
}) => React.ReactNode);
declare type IconProps = {
    /**
     * Size of icon.
     */
    size: number;
    allowFontScaling?: boolean;
};
export declare const isValidIcon: (source: any) => boolean;
export declare const isEqualIcon: (a: any, b: any) => boolean;
export declare type Props = IconProps & {
    /**
     * Icon to display.
     */
    source: any;
    /**
     * Color of the icon.
     */
    color?: string;
    /**
     * TestID used for testing purposes
     */
    testID?: string;
    /**
     * @optional
     */
    theme?: ThemeProp;
};
/**
 * An icon component which renders icon from vector library.
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { Icon, MD3Colors } from 'react-native-paper';
 *
 * const MyComponent = () => (
 *   <Icon
 *     source="camera"
 *     color={MD3Colors.error50}
 *     size={20}
 *   />
 * );
 *
 * export default MyComponent;
 * ```
 */
declare const Icon: ({ source, color, size, theme: themeOverrides, testID, ...rest }: Props) => any;
export default Icon;
//# sourceMappingURL=Icon.d.ts.map