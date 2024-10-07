import * as React from 'react';
import { ViewStyle, StyleProp } from 'react-native';
import type { ThemeProp } from '../../types';
import { IconSource } from '../Icon';
export declare type Props = {
    /**
     * Icon to show.
     */
    icon: IconSource;
    /**
     * Color for the icon.
     */
    color?: string;
    style?: StyleProp<ViewStyle>;
    /**
     * @optional
     */
    theme?: ThemeProp;
};
/**
 * A component to show an icon in a list item.
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { List, MD3Colors } from 'react-native-paper';
 *
 * const MyComponent = () => (
 *   <>
 *     <List.Icon color={MD3Colors.tertiary70} icon="folder" />
 *     <List.Icon color={MD3Colors.tertiary70} icon="equal" />
 *     <List.Icon color={MD3Colors.tertiary70} icon="calendar" />
 *   </>
 * );
 *
 * export default MyComponent;
 * ```
 */
declare const ListIcon: {
    ({ icon, color: iconColor, style, theme: themeOverrides, }: Props): React.JSX.Element;
    displayName: string;
};
export default ListIcon;
//# sourceMappingURL=ListIcon.d.ts.map