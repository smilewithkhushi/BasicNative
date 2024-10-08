function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from 'react';
import { StyleSheet } from 'react-native';
import { useInternalTheme } from '../../core/theming';
import Text from '../Typography/Text';
import Title from '../Typography/v2/Title';
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
const DialogTitle = _ref => {
  let {
    children,
    theme: themeOverrides,
    style,
    ...rest
  } = _ref;
  const theme = useInternalTheme(themeOverrides);
  const {
    isV3,
    colors,
    fonts
  } = theme;
  const TextComponent = isV3 ? Text : Title;
  const headerTextStyle = {
    color: isV3 ? colors.onSurface : colors === null || colors === void 0 ? void 0 : colors.text,
    ...(isV3 ? fonts.headlineSmall : {})
  };
  return /*#__PURE__*/React.createElement(TextComponent, _extends({
    variant: "headlineSmall",
    accessibilityRole: "header",
    style: [styles.text, isV3 && styles.v3Text, headerTextStyle, style]
  }, rest), children);
};
DialogTitle.displayName = 'Dialog.Title';
const styles = StyleSheet.create({
  text: {
    marginTop: 22,
    marginBottom: 18,
    marginHorizontal: 24
  },
  v3Text: {
    marginTop: 16,
    marginBottom: 16
  }
});
export default DialogTitle;

// @component-docs ignore-next-line
export { DialogTitle };
//# sourceMappingURL=DialogTitle.js.map