import * as React from 'react';
import { StyleProp, View, ViewStyle } from 'react-native';
import type { ThemeProp } from 'src/types';
export declare type Props = React.ComponentPropsWithRef<typeof View> & {
    /**
     * Items inside the `CardActions`.
     */
    children: React.ReactNode;
    style?: StyleProp<ViewStyle>;
    theme?: ThemeProp;
};
/**
 * A component to show a list of actions inside a Card.
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { Card, Button } from 'react-native-paper';
 *
 * const MyComponent = () => (
 *   <Card>
 *     <Card.Actions>
 *       <Button>Cancel</Button>
 *       <Button>Ok</Button>
 *     </Card.Actions>
 *   </Card>
 * );
 *
 * export default MyComponent;
 * ```
 */
declare const CardActions: {
    (props: Props): React.JSX.Element;
    displayName: string;
};
export default CardActions;
//# sourceMappingURL=CardActions.d.ts.map