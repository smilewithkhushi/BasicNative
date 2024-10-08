import * as React from 'react';
import { StyleProp, TextStyle, View, ViewStyle } from 'react-native';
import type { MD3TypescaleKey, ThemeProp } from '../../types';
export declare type Props = React.ComponentPropsWithRef<typeof View> & {
    /**
     * Text for the title. Note that this will only accept a string or `<Text>`-based node.
     */
    title: React.ReactNode;
    /**
     * Style for the title.
     */
    titleStyle?: StyleProp<TextStyle>;
    /**
     * Number of lines for the title.
     */
    titleNumberOfLines?: number;
    /**
     * @supported Available in v5.x with theme version 3
     *
     * Title text variant defines appropriate text styles for type role and its size.
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
    titleVariant?: keyof typeof MD3TypescaleKey;
    /**
     * Text for the subtitle. Note that this will only accept a string or `<Text>`-based node.
     */
    subtitle?: React.ReactNode;
    /**
     * Style for the subtitle.
     */
    subtitleStyle?: StyleProp<TextStyle>;
    /**
     * Number of lines for the subtitle.
     */
    subtitleNumberOfLines?: number;
    /**
     * @supported Available in v5.x with theme version 3
     *
     * Subtitle text variant defines appropriate text styles for type role and its size.
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
    subtitleVariant?: keyof typeof MD3TypescaleKey;
    /**
     * Callback which returns a React element to display on the left side.
     */
    left?: (props: {
        size: number;
    }) => React.ReactNode;
    /**
     * Style for the left element wrapper.
     */
    leftStyle?: StyleProp<ViewStyle>;
    /**
     * Callback which returns a React element to display on the right side.
     */
    right?: (props: {
        size: number;
    }) => React.ReactNode;
    /**
     * Style for the right element wrapper.
     */
    rightStyle?: StyleProp<ViewStyle>;
    /**
     * @internal
     */
    index?: number;
    /**
     * @internal
     */
    total?: number;
    /**
     * Specifies the largest possible scale a title font can reach.
     */
    titleMaxFontSizeMultiplier?: number;
    /**
     * Specifies the largest possible scale a subtitle font can reach.
     */
    subtitleMaxFontSizeMultiplier?: number;
    style?: StyleProp<ViewStyle>;
    /**
     * @optional
     */
    theme?: ThemeProp;
};
/**
 * A component to show a title, subtitle and an avatar inside a Card.
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { Avatar, Card, IconButton } from 'react-native-paper';
 *
 * const MyComponent = () => (
 *   <Card.Title
 *     title="Card Title"
 *     subtitle="Card Subtitle"
 *     left={(props) => <Avatar.Icon {...props} icon="folder" />}
 *     right={(props) => <IconButton {...props} icon="dots-vertical" onPress={() => {}} />}
 *   />
 * );
 *
 * export default MyComponent;
 * ```
 */
declare const CardTitle: {
    ({ title, titleStyle, titleNumberOfLines, titleVariant, titleMaxFontSizeMultiplier, subtitle, subtitleStyle, subtitleNumberOfLines, subtitleVariant, subtitleMaxFontSizeMultiplier, left, leftStyle, right, rightStyle, style, theme: themeOverrides, }: Props): React.JSX.Element;
    displayName: string;
};
export default CardTitle;
export { CardTitle };
//# sourceMappingURL=CardTitle.d.ts.map