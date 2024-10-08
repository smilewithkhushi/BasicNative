import * as React from 'react';
import { StyleProp, TextStyle, ViewStyle } from 'react-native';
type Props = {
    /**
     * The label text of the item.
     */
    label: string | ((props: {
        focused: boolean;
        color: string;
    }) => React.ReactNode);
    /**
     * Icon to display for the `DrawerItem`.
     */
    icon?: (props: {
        focused: boolean;
        size: number;
        color: string;
    }) => React.ReactNode;
    /**
     * URL to use for the link to the tab.
     */
    to?: string;
    /**
     * Whether to highlight the drawer item as active.
     */
    focused?: boolean;
    /**
     * Function to execute on press.
     */
    onPress: () => void;
    /**
     * Color for the icon and label when the item is active.
     */
    activeTintColor?: string;
    /**
     * Color for the icon and label when the item is inactive.
     */
    inactiveTintColor?: string;
    /**
     * Background color for item when its active.
     */
    activeBackgroundColor?: string;
    /**
     * Background color for item when its inactive.
     */
    inactiveBackgroundColor?: string;
    /**
     * Color of the touchable effect on press.
     * Only supported on Android.
     *
     * @platform android
     */
    pressColor?: string;
    /**
     * Opacity of the touchable effect on press.
     * Only supported on iOS.
     *
     * @platform ios
     */
    pressOpacity?: number;
    /**
     * Style object for the label element.
     */
    labelStyle?: StyleProp<TextStyle>;
    /**
     * Style object for the wrapper element.
     */
    style?: StyleProp<ViewStyle>;
    /**
     * Whether label font should scale to respect Text Size accessibility settings.
     */
    allowFontScaling?: boolean;
    /**
     * Accessibility label for drawer item.
     */
    accessibilityLabel?: string;
    /**
     * ID to locate this drawer item in tests.
     */
    testID?: string;
};
/**
 * A component used to show an action item with an icon and a label in a navigation drawer.
 */
export default function DrawerItem(props: Props): JSX.Element;
export {};
//# sourceMappingURL=DrawerItem.d.ts.map