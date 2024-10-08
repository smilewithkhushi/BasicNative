import * as React from 'react';
import { StyleProp, TextStyle } from 'react-native';
import type { ThemeProp } from 'src/types';
import Text from '../Typography/Text';
export declare type Props = React.ComponentProps<typeof Text> & {
    /**
     * @optional
     */
    theme?: ThemeProp;
    /**
     * Style that is passed to Text element.
     */
    style?: StyleProp<TextStyle>;
    /**
     * Specifies the largest possible scale a text font can reach.
     */
    maxFontSizeMultiplier?: number;
};
/**
 * A component used to display a header in lists.
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { List } from 'react-native-paper';
 *
 * const MyComponent = () => <List.Subheader>My List Title</List.Subheader>;
 *
 * export default MyComponent;
 * ```
 */
declare const ListSubheader: {
    ({ style, theme: overrideTheme, maxFontSizeMultiplier, ...rest }: Props): React.JSX.Element;
    displayName: string;
};
export default ListSubheader;
//# sourceMappingURL=ListSubheader.d.ts.map