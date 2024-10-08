import * as React from 'react';
import { StyleProp, TextStyle } from 'react-native';
import type { ThemeProp } from '../../types';
import Title from '../Typography/v2/Title';
export declare type Props = React.ComponentPropsWithRef<typeof Title> & {
    /**
     * Title text for the `DialogTitle`.
     */
    children: React.ReactNode;
    style?: StyleProp<TextStyle>;
    /**
     * @optional
     */
    theme?: ThemeProp;
};
/**
 * A component to show a title in a Dialog.
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
 *         <Dialog.Title>This is a title</Dialog.Title>
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
declare const DialogTitle: {
    ({ children, theme: themeOverrides, style, ...rest }: Props): React.JSX.Element;
    displayName: string;
};
export default DialogTitle;
export { DialogTitle };
//# sourceMappingURL=DialogTitle.d.ts.map