import * as React from 'react';
import { StyleProp, View, ViewStyle } from 'react-native';
export declare type Props = React.ComponentPropsWithRef<typeof View> & {
    /**
     * Items inside the `Card.Content`.
     */
    children: React.ReactNode;
    /**
     * @internal
     */
    index?: number;
    /**
     * @internal
     */
    total?: number;
    /**
     * @internal
     */
    siblings?: Array<string>;
    style?: StyleProp<ViewStyle>;
};
/**
 * A component to show content inside a Card.
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { Card, Text } from 'react-native-paper';
 *
 * const MyComponent = () => (
 *   <Card>
 *     <Card.Content>
 *       <Text variant="titleLarge">Card title</Text>
 *       <Text variant="bodyMedium">Card content</Text>
 *     </Card.Content>
 *   </Card>
 * );
 *
 * export default MyComponent;
 * ```
 */
declare const CardContent: {
    ({ index, total, siblings, style, ...rest }: Props): React.JSX.Element;
    displayName: string;
};
export default CardContent;
//# sourceMappingURL=CardContent.d.ts.map