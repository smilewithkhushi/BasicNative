import * as React from 'react';
import { GestureResponderEvent } from 'react-native';
import type { $RemoveChildren, ThemeProp } from '../../types';
import TouchableRipple from '../TouchableRipple/TouchableRipple';
export declare type Props = $RemoveChildren<typeof TouchableRipple> & {
    /**
     * Status of checkbox.
     */
    status: 'checked' | 'unchecked' | 'indeterminate';
    /**
     * Whether checkbox is disabled.
     */
    disabled?: boolean;
    /**
     * Function to execute on press.
     */
    onPress?: (e: GestureResponderEvent) => void;
    /**
     * Custom color for checkbox.
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
 * Checkboxes allow the selection of multiple options from a set.
 * This component follows platform guidelines for iOS, but can be used
 * on any platform.
 *
 * @extends TouchableRipple props https://callstack.github.io/react-native-paper/docs/components/TouchableRipple
 */
declare const CheckboxIOS: {
    ({ status, disabled, onPress, theme: themeOverrides, testID, ...rest }: Props): React.JSX.Element;
    displayName: string;
};
export default CheckboxIOS;
export { CheckboxIOS };
//# sourceMappingURL=CheckboxIOS.d.ts.map