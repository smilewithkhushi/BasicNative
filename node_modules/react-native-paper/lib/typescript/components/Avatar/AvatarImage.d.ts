import * as React from 'react';
import { ImageProps, ImageSourcePropType, StyleProp, View, ViewStyle } from 'react-native';
import type { ThemeProp } from '../../types';
export declare type AvatarImageSource = ImageSourcePropType | ((props: {
    size: number;
}) => React.ReactNode);
export declare type Props = React.ComponentPropsWithRef<typeof View> & {
    /**
     * Image to display for the `Avatar`.
     * It accepts a standard React Native Image `source` prop
     * Or a function that returns an `Image`.
     */
    source: AvatarImageSource;
    /**
     * Size of the avatar.
     */
    size?: number;
    style?: StyleProp<ViewStyle>;
    /**
     * Invoked on load error.
     */
    onError?: ImageProps['onError'];
    /**
     * Invoked on mount and on layout changes.
     */
    onLayout?: ImageProps['onLayout'];
    /**
     * Invoked when load completes successfully.
     */
    onLoad?: ImageProps['onLoad'];
    /**
     * Invoked when load either succeeds or fails.
     */
    onLoadEnd?: ImageProps['onLoadEnd'];
    /**
     * Invoked on load start.
     */
    onLoadStart?: ImageProps['onLoadStart'];
    /**
     * Invoked on download progress.
     */
    onProgress?: ImageProps['onProgress'];
    /**
     * @optional
     */
    theme?: ThemeProp;
};
/**
 * Avatars can be used to represent people in a graphical way.
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { Avatar } from 'react-native-paper';
 *
 * const MyComponent = () => (
 *   <Avatar.Image size={24} source={require('../assets/avatar.png')} />
 * );
 * export default MyComponent
 * ```
 */
declare const AvatarImage: {
    ({ size, source, style, onError, onLayout, onLoad, onLoadEnd, onLoadStart, onProgress, theme: themeOverrides, testID, ...rest }: Props): React.JSX.Element;
    displayName: string;
};
export default AvatarImage;
//# sourceMappingURL=AvatarImage.d.ts.map