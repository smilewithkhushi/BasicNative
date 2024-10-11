import * as React from 'react';
import { View, ViewStyle, StyleProp } from 'react-native';
export declare type Props = React.ComponentPropsWithRef<typeof View> & {
    /**
     * Content of the `DialogContent`.
     */
    children: React.ReactNode;
    style?: StyleProp<ViewStyle>;
};
/**
 * A component to show content in a Dialog.
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { Dialog, Portal, Text } from 'react-native-paper';
 *
 * const MyComponent = () => {
 *   const [visible, setVisible] = React.useState(false);
 *
 *   const hideDialog = () => setVisible(false);
 *
 *   return (
 *     <Portal>
 *       <Dialog visible={visible} onDismiss={hideDialog}>
 *         <Dialog.Content>
 *           <Text variant="bodyMedium">This is simple dialog</Text>
 *         </Dialog.Content>
 *       </Dialog>
 *     </Portal>
 *   );
 * };
 *
 * export default MyComponent;
 * ```
 */
declare const DialogContent: {
    (props: Props): React.JSX.Element;
    displayName: string;
};
export default DialogContent;
//# sourceMappingURL=DialogContent.d.ts.map