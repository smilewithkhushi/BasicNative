import * as React from 'react';
import { StyleProp, ImageSourcePropType, ImageStyle } from 'react-native';
import type { ThemeProp } from '../../types';
export declare type Props = {
    source: ImageSourcePropType;
    variant?: 'image' | 'video';
    style?: StyleProp<ImageStyle>;
    /**
     * @optional
     */
    theme?: ThemeProp;
};
/**
 * A component to show image in a list item.
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { List, MD3Colors } from 'react-native-paper';
 *
 * const MyComponent = () => (
 *   <>
 *     <List.Image variant="image" source={{uri: 'https://www.someurl.com/apple'}} />
 *     <List.Image variant="video" source={require('../../some-apple.png')} />
 *   </>
 * );
 *
 * export default MyComponent;
 * ```
 */
declare const ListImage: {
    ({ style, source, variant, theme: themeOverrides, }: Props): React.JSX.Element;
    displayName: string;
};
export default ListImage;
//# sourceMappingURL=ListImage.d.ts.map