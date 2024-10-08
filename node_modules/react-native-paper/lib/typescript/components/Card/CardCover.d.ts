import * as React from 'react';
import { Image, StyleProp, ViewStyle } from 'react-native';
import type { ThemeProp } from '../../types';
export declare type Props = React.ComponentPropsWithRef<typeof Image> & {
    /**
     * @internal
     */
    index?: number;
    /**
     * @internal
     */
    total?: number;
    style?: StyleProp<ViewStyle>;
    /**
     * @optional
     */
    theme?: ThemeProp;
};
/**
 * A component to show a cover image inside a Card.
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { Card } from 'react-native-paper';
 *
 * const MyComponent = () => (
 *   <Card>
 *     <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
 *   </Card>
 * );
 *
 * export default MyComponent;
 * ```
 *
 * @extends Image props https://reactnative.dev/docs/image#props
 */
declare const CardCover: {
    ({ index, total, style, theme: themeOverrides, ...rest }: Props): React.JSX.Element;
    displayName: string;
};
export default CardCover;
export { CardCover };
//# sourceMappingURL=CardCover.d.ts.map