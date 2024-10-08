import * as React from 'react';
import { ColorValue, GestureResponderEvent, StyleProp, TextStyle, ViewProps, ViewStyle, PressableAndroidRippleConfig } from 'react-native';
import type { Style } from './utils';
import type { ThemeProp } from '../../types';
export declare type Props = {
    /**
     * Title text for the list accordion.
     */
    title: React.ReactNode;
    /**
     * Description text for the list accordion.
     */
    description?: React.ReactNode;
    /**
     * Callback which returns a React element to display on the left side.
     */
    left?: (props: {
        color: string;
        style: Style;
    }) => React.ReactNode;
    /**
     * Callback which returns a React element to display on the right side.
     */
    right?: (props: {
        isExpanded: boolean;
    }) => React.ReactNode;
    /**
     * Whether the accordion is expanded
     * If this prop is provided, the accordion will behave as a "controlled component".
     * You'll need to update this prop when you want to toggle the component or on `onPress`.
     */
    expanded?: boolean;
    /**
     * Function to execute on press.
     */
    onPress?: (e: GestureResponderEvent) => void;
    /**
     * Function to execute on long press.
     */
    onLongPress?: (e: GestureResponderEvent) => void;
    /**
     * The number of milliseconds a user must touch the element before executing `onLongPress`.
     */
    delayLongPress?: number;
    /**
     * Content of the section.
     */
    children: React.ReactNode;
    /**
     * @optional
     */
    theme?: ThemeProp;
    /**
     * Type of background drawabale to display the feedback (Android).
     * https://reactnative.dev/docs/pressable#rippleconfig
     */
    background?: PressableAndroidRippleConfig;
    /**
     * Style that is passed to the wrapping TouchableRipple element.
     */
    style?: StyleProp<ViewStyle>;
    /**
     * Style that is passed to Title element.
     */
    titleStyle?: StyleProp<TextStyle>;
    /**
     * Style that is passed to Description element.
     */
    descriptionStyle?: StyleProp<TextStyle>;
    /**
     * Color of the ripple effect.
     */
    rippleColor?: ColorValue;
    /**
     * Truncate Title text such that the total number of lines does not
     * exceed this number.
     */
    titleNumberOfLines?: number;
    /**
     * Truncate Description text such that the total number of lines does not
     * exceed this number.
     */
    descriptionNumberOfLines?: number;
    /**
     * Specifies the largest possible scale a title font can reach.
     */
    titleMaxFontSizeMultiplier?: number;
    /**
     * Specifies the largest possible scale a description font can reach.
     */
    descriptionMaxFontSizeMultiplier?: number;
    /**
     * Id is used for distinguishing specific accordion when using List.AccordionGroup. Property is required when using List.AccordionGroup and has no impact on behavior when using standalone List.Accordion.
     */
    id?: string | number;
    /**
     * TestID used for testing purposes
     */
    testID?: string;
    /**
     * Accessibility label for the TouchableRipple. This is read by the screen reader when the user taps the touchable.
     */
    accessibilityLabel?: string;
    /**
     * `pointerEvents` passed to the `View` container
     */
    pointerEvents?: ViewProps['pointerEvents'];
};
/**
 * A component used to display an expandable list item.
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { List } from 'react-native-paper';
 *
 * const MyComponent = () => {
 *   const [expanded, setExpanded] = React.useState(true);
 *
 *   const handlePress = () => setExpanded(!expanded);
 *
 *   return (
 *     <List.Section title="Accordions">
 *       <List.Accordion
 *         title="Uncontrolled Accordion"
 *         left={props => <List.Icon {...props} icon="folder" />}>
 *         <List.Item title="First item" />
 *         <List.Item title="Second item" />
 *       </List.Accordion>
 *
 *       <List.Accordion
 *         title="Controlled Accordion"
 *         left={props => <List.Icon {...props} icon="folder" />}
 *         expanded={expanded}
 *         onPress={handlePress}>
 *         <List.Item title="First item" />
 *         <List.Item title="Second item" />
 *       </List.Accordion>
 *     </List.Section>
 *   );
 * };
 *
 * export default MyComponent;
 * ```
 */
declare const ListAccordion: {
    ({ left, right, title, description, children, theme: themeOverrides, titleStyle, descriptionStyle, titleNumberOfLines, descriptionNumberOfLines, rippleColor: customRippleColor, style, id, testID, background, onPress, onLongPress, delayLongPress, expanded: expandedProp, accessibilityLabel, pointerEvents, titleMaxFontSizeMultiplier, descriptionMaxFontSizeMultiplier, }: Props): React.JSX.Element;
    displayName: string;
};
export default ListAccordion;
//# sourceMappingURL=ListAccordion.d.ts.map