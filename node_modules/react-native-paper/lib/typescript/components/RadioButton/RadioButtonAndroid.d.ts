import * as React from 'react';
import type { $RemoveChildren, ThemeProp } from '../../types';
import TouchableRipple from '../TouchableRipple/TouchableRipple';
export declare type Props = $RemoveChildren<typeof TouchableRipple> & {
    /**
     * Value of the radio button
     */
    value: string;
    /**
     * Status of radio button.
     */
    status?: 'checked' | 'unchecked';
    /**
     * Whether radio is disabled.
     */
    disabled?: boolean;
    /**
     * Function to execute on press.
     */
    onPress?: (param?: any) => void;
    /**
     * Custom color for unchecked radio.
     */
    uncheckedColor?: string;
    /**
     * Custom color for radio.
     */
    color?: string;
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
 * Radio buttons allow the selection a single option from a set.
 * This component follows platform guidelines for Android, but can be used
 * on any platform.
 *
 * @extends TouchableRipple props https://callstack.github.io/react-native-paper/docs/components/TouchableRipple
 */
declare const RadioButtonAndroid: {
    ({ disabled, onPress, theme: themeOverrides, value, status, testID, ...rest }: Props): React.JSX.Element;
    displayName: string;
};
export default RadioButtonAndroid;
export { RadioButtonAndroid };
//# sourceMappingURL=RadioButtonAndroid.d.ts.map