import * as React from 'react';
import { GestureResponderEvent, StyleProp, TextStyle, ViewStyle } from 'react-native';
import type { ThemeProp } from 'src/types';
import type { IconSource } from '../Icon';
declare type ConditionalValue = {
    /**
     * Array of the currently selected segmented button values.
     */
    value: string[];
    /**
     * Support multiple selected options.
     */
    multiSelect: true;
    /**
     * Function to execute on selection change
     */
    onValueChange: (value: string[]) => void;
} | {
    /**
     * Value of the currently selected segmented button.
     */
    value: string;
    /**
     * Support multiple selected options.
     */
    multiSelect?: false;
    /**
     * Function to execute on selection change
     */
    onValueChange: (value: string) => void;
};
export declare type Props = {
    /**
     * Buttons to display as options in toggle button.
     * Button should contain the following properties:
     * - `value`: value of button (required)
     * - `icon`: icon to display for the item
     * - `disabled`: whether the button is disabled
     * - `accessibilityLabel`: acccessibility label for the button. This is read by the screen reader when the user taps the button.
     * - `checkedColor`: custom color for checked Text and Icon
     * - `uncheckedColor`: custom color for unchecked Text and Icon
     * - `onPress`: callback that is called when button is pressed
     * - `label`: label text of the button
     * - `showSelectedCheck`: show optional check icon to indicate selected state
     * - `style`: pass additional styles for the button
     * - `testID`: testID to be used on tests
     */
    buttons: {
        value: string;
        icon?: IconSource;
        disabled?: boolean;
        accessibilityLabel?: string;
        checkedColor?: string;
        uncheckedColor?: string;
        onPress?: (event: GestureResponderEvent) => void;
        label?: string;
        showSelectedCheck?: boolean;
        style?: StyleProp<ViewStyle>;
        labelStyle?: StyleProp<TextStyle>;
        testID?: string;
    }[];
    /**
     * Density is applied to the height, to allow usage in denser UIs
     */
    density?: 'regular' | 'small' | 'medium' | 'high';
    style?: StyleProp<ViewStyle>;
    theme?: ThemeProp;
} & ConditionalValue;
/**
 * Segmented buttons can be used to select options, switch views or sort elements.</br>
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { SafeAreaView, StyleSheet } from 'react-native';
 * import { SegmentedButtons } from 'react-native-paper';
 *
 * const MyComponent = () => {
 *   const [value, setValue] = React.useState('');
 *
 *   return (
 *     <SafeAreaView style={styles.container}>
 *       <SegmentedButtons
 *         value={value}
 *         onValueChange={setValue}
 *         buttons={[
 *           {
 *             value: 'walk',
 *             label: 'Walking',
 *           },
 *           {
 *             value: 'train',
 *             label: 'Transit',
 *           },
 *           { value: 'drive', label: 'Driving' },
 *         ]}
 *       />
 *     </SafeAreaView>
 *   );
 * };
 *
 * const styles = StyleSheet.create({
 *   container: {
 *     flex: 1,
 *     alignItems: 'center',
 *   },
 * });
 *
 * export default MyComponent;
 *```
 */
declare const SegmentedButtons: ({ value, onValueChange, buttons, multiSelect, density, style, theme: themeOverrides, }: Props) => React.JSX.Element;
export default SegmentedButtons;
export { SegmentedButtons as SegmentedButtons };
//# sourceMappingURL=SegmentedButtons.d.ts.map