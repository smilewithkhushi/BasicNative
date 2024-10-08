import * as React from 'react';
import { GestureResponderEvent, StyleProp, View, ViewStyle } from 'react-native';
import type { ThemeProp } from '../../types';
import { IconSource } from '../Icon';
export declare type Props = React.ComponentPropsWithRef<typeof View> & {
    /**
     * The label text of the item.
     */
    label?: string;
    /**
     * Badge to show on the icon, can be `true` to show a dot, `string` or `number` to show text.
     */
    badge?: string | number | boolean;
    /**
     * Whether the item is disabled.
     */
    disabled?: boolean;
    /**
     * @renamed Renamed from 'icon' to 'focusedIcon' in v5.x
     * Icon to use as the focused destination icon, can be a string, an image source or a react component
     */
    focusedIcon?: IconSource;
    /**
     * @renamed Renamed from 'icon' to 'focusedIcon' in v5.x
     * Icon to use as the unfocused destination icon, can be a string, an image source or a react component
     */
    unfocusedIcon?: IconSource;
    /**
     * Whether to highlight the drawer item as active.
     */
    active?: boolean;
    /**
     * Function to execute on press.
     */
    onPress?: (e: GestureResponderEvent) => void;
    /**
     * Specifies the largest possible scale a label font can reach.
     */
    labelMaxFontSizeMultiplier?: number;
    /**
     * Accessibility label for the button. This is read by the screen reader when the user taps the button.
     */
    accessibilityLabel?: string;
    style?: StyleProp<ViewStyle>;
    /**
     * @optional
     */
    theme?: ThemeProp;
    /**
     * TestID used for testing purposes
     */
    testID?: string;
};
/**
 * Note: Available in v5.x with theme version 3
 *
 * Collapsed component used to show an action item with an icon and optionally label in a navigation drawer.
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { Drawer } from 'react-native-paper';
 *
 * const MyComponent = () => (
 *    <Drawer.CollapsedItem
 *      focusedIcon="inbox"
 *      unfocusedIcon="inbox-outline"
 *      label="Inbox"
 *    />
 * );
 *
 * export default MyComponent;
 * ```
 */
declare const DrawerCollapsedItem: {
    ({ focusedIcon, unfocusedIcon, label, active, theme: themeOverrides, style, onPress, disabled, accessibilityLabel, badge, testID, labelMaxFontSizeMultiplier, ...rest }: Props): React.JSX.Element | null;
    displayName: string;
};
export default DrawerCollapsedItem;
//# sourceMappingURL=DrawerCollapsedItem.d.ts.map