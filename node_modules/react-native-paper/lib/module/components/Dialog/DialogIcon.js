import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { useInternalTheme } from '../../core/theming';
import Icon from '../Icon';
/**
 * @supported Available in v5.x with theme version 3
 * A component to show an icon in a Dialog.
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { StyleSheet } from 'react-native';
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
 *         <Dialog.Icon icon="alert" />
 *         <Dialog.Title style={styles.title}>This is a title</Dialog.Title>
 *         <Dialog.Content>
 *           <Text variant="bodyMedium">This is simple dialog</Text>
 *         </Dialog.Content>
 *       </Dialog>
 *     </Portal>
 *   );
 * };
 *
 * const styles = StyleSheet.create({
 *   title: {
 *     textAlign: 'center',
 *   },
 * })
 *
 * export default MyComponent;
 * ```
 */
const DialogIcon = _ref => {
  let {
    size = 24,
    color,
    icon,
    theme: themeOverrides
  } = _ref;
  const theme = useInternalTheme(themeOverrides);
  if (!theme.isV3) {
    return null;
  }

  //@ts-ignore
  const iconColor = color || theme.colors.secondary;
  return /*#__PURE__*/React.createElement(View, {
    style: styles.wrapper
  }, /*#__PURE__*/React.createElement(Icon, {
    source: icon,
    color: iconColor,
    size: size
  }));
};
DialogIcon.displayName = 'Dialog.Icon';
const styles = StyleSheet.create({
  wrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 24
  }
});
export default DialogIcon;

// @component-docs ignore-next-line
export { DialogIcon };
//# sourceMappingURL=DialogIcon.js.map