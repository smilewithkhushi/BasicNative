import * as React from 'react';
import { StyleProp, TextStyle, View, ViewStyle } from 'react-native';
import type { ThemeProp } from '../../types';
export declare type Props = React.ComponentPropsWithRef<typeof View> & {
    /**
     * Initials to show as the text in the `Avatar`.
     */
    label: string;
    /**
     * Size of the avatar.
     */
    size?: number;
    /**
     * Custom color for the text.
     */
    color?: string;
    /**
     * Style for text container
     */
    style?: StyleProp<ViewStyle>;
    /**
     * Style for the title.
     */
    labelStyle?: StyleProp<TextStyle>;
    /**
     * Specifies the largest possible scale a text font can reach.
     */
    maxFontSizeMultiplier?: number;
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
 *   <Avatar.Text size={24} label="XD" />
 * );
 * ```
 */
declare const AvatarText: {
    ({ label, size, style, labelStyle, color: customColor, theme: themeOverrides, maxFontSizeMultiplier, ...rest }: Props): React.JSX.Element;
    displayName: string;
};
export default AvatarText;
//# sourceMappingURL=AvatarText.d.ts.map