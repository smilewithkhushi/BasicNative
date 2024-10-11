import * as React from 'react';
import { Animated, GestureResponderEvent, StyleProp, ViewStyle } from 'react-native';
import type { $Omit, ThemeProp } from '../../types';
import Surface from '../Surface';
declare type OutlinedCardProps = {
    mode: 'outlined';
    elevation?: never;
};
declare type ElevatedCardProps = {
    mode?: 'elevated';
    elevation?: number;
};
declare type ContainedCardProps = {
    mode?: 'contained';
    elevation?: never;
};
declare type Mode = 'elevated' | 'outlined' | 'contained';
export declare type Props = $Omit<React.ComponentProps<typeof Surface>, 'mode'> & {
    /**
     * Mode of the Card.
     * - `elevated` - Card with elevation.
     * - `contained` - Card without outline and elevation @supported Available in v5.x with theme version 3
     * - `outlined` - Card with an outline.
     */
    mode?: Mode;
    /**
     * Content of the `Card`.
     */
    children: React.ReactNode;
    /**
     * Function to execute on long press.
     */
    onLongPress?: () => void;
    /**
     * Function to execute on press.
     */
    onPress?: (e: GestureResponderEvent) => void;
    /**
     * Function to execute as soon as the touchable element is pressed and invoked even before onPress.
     */
    onPressIn?: (e: GestureResponderEvent) => void;
    /**
     * Function to execute as soon as the touch is released even before onPress.
     */
    onPressOut?: (e: GestureResponderEvent) => void;
    /**
     * The number of milliseconds a user must touch the element before executing `onLongPress`.
     */
    delayLongPress?: number;
    /**
     * If true, disable all interactions for this component.
     */
    disabled?: boolean;
    /**
     * Changes Card shadow and background on iOS and Android.
     */
    elevation?: 0 | 1 | 2 | 3 | 4 | 5 | Animated.Value;
    /**
     * Style of card's inner content.
     */
    contentStyle?: StyleProp<ViewStyle>;
    style?: StyleProp<ViewStyle>;
    /**
     * @optional
     */
    theme?: ThemeProp;
    /**
     * Pass down testID from card props to touchable
     */
    testID?: string;
    /**
     * Pass down accessible from card props to touchable
     */
    accessible?: boolean;
};
/**
 * A card is a sheet of material that serves as an entry point to more detailed information.
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { Avatar, Button, Card, Text } from 'react-native-paper';
 *
 * const LeftContent = props => <Avatar.Icon {...props} icon="folder" />
 *
 * const MyComponent = () => (
 *   <Card>
 *     <Card.Title title="Card Title" subtitle="Card Subtitle" left={LeftContent} />
 *     <Card.Content>
 *       <Text variant="titleLarge">Card title</Text>
 *       <Text variant="bodyMedium">Card content</Text>
 *     </Card.Content>
 *     <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
 *     <Card.Actions>
 *       <Button>Cancel</Button>
 *       <Button>Ok</Button>
 *     </Card.Actions>
 *   </Card>
 * );
 *
 * export default MyComponent;
 * ```
 */
declare const Card: {
    ({ elevation: cardElevation, delayLongPress, onPress, onLongPress, onPressOut, onPressIn, mode: cardMode, children, style, contentStyle, theme: themeOverrides, testID, accessible, disabled, ...rest }: (OutlinedCardProps | ElevatedCardProps | ContainedCardProps) & Props): React.JSX.Element;
    Content: {
        ({ index, total, siblings, style, ...rest }: import("./CardContent").Props): React.JSX.Element;
        displayName: string;
    };
    Actions: {
        (props: import("./CardActions").Props): React.JSX.Element;
        displayName: string;
    };
    Cover: {
        ({ index, total, style, theme: themeOverrides, ...rest }: import("./CardCover").Props): React.JSX.Element;
        displayName: string;
    };
    Title: {
        ({ title, titleStyle, titleNumberOfLines, titleVariant, titleMaxFontSizeMultiplier, subtitle, subtitleStyle, subtitleNumberOfLines, subtitleVariant, subtitleMaxFontSizeMultiplier, left, leftStyle, right, rightStyle, style, theme: themeOverrides, }: import("./CardTitle").Props): React.JSX.Element;
        displayName: string;
    };
};
export default Card;
//# sourceMappingURL=Card.d.ts.map