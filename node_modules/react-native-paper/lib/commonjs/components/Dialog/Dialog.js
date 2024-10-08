"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var React = _interopRequireWildcard(require("react"));
var _reactNative = require("react-native");
var _reactNativeSafeAreaContext = require("react-native-safe-area-context");
var _DialogActions = _interopRequireDefault(require("./DialogActions"));
var _DialogContent = _interopRequireDefault(require("./DialogContent"));
var _DialogIcon = _interopRequireDefault(require("./DialogIcon"));
var _DialogScrollArea = _interopRequireDefault(require("./DialogScrollArea"));
var _DialogTitle = _interopRequireDefault(require("./DialogTitle"));
var _theming = require("../../core/theming");
var _overlay = _interopRequireDefault(require("../../styles/overlay"));
var _Modal = _interopRequireDefault(require("../Modal"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
const DIALOG_ELEVATION = 24;

/**
 * Dialogs inform users about a specific task and may contain critical information, require decisions, or involve multiple tasks.
 * To render the `Dialog` above other components, you'll need to wrap it with the [`Portal`](../../Portal) component.
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { View } from 'react-native';
 * import { Button, Dialog, Portal, PaperProvider, Text } from 'react-native-paper';
 *
 * const MyComponent = () => {
 *   const [visible, setVisible] = React.useState(false);
 *
 *   const showDialog = () => setVisible(true);
 *
 *   const hideDialog = () => setVisible(false);
 *
 *   return (
 *     <PaperProvider>
 *       <View>
 *         <Button onPress={showDialog}>Show Dialog</Button>
 *         <Portal>
 *           <Dialog visible={visible} onDismiss={hideDialog}>
 *             <Dialog.Title>Alert</Dialog.Title>
 *             <Dialog.Content>
 *               <Text variant="bodyMedium">This is simple dialog</Text>
 *             </Dialog.Content>
 *             <Dialog.Actions>
 *               <Button onPress={hideDialog}>Done</Button>
 *             </Dialog.Actions>
 *           </Dialog>
 *         </Portal>
 *       </View>
 *     </PaperProvider>
 *   );
 * };
 *
 * export default MyComponent;
 * ```
 */
const Dialog = _ref => {
  let {
    children,
    dismissable = true,
    dismissableBackButton = dismissable,
    onDismiss,
    visible = false,
    style,
    theme: themeOverrides,
    testID
  } = _ref;
  const {
    right,
    left
  } = (0, _reactNativeSafeAreaContext.useSafeAreaInsets)();
  const theme = (0, _theming.useInternalTheme)(themeOverrides);
  const {
    isV3,
    dark,
    mode,
    colors,
    roundness
  } = theme;
  const borderRadius = (isV3 ? 7 : 1) * roundness;
  const backgroundColorV2 = dark && mode === 'adaptive' ? (0, _overlay.default)(DIALOG_ELEVATION, colors === null || colors === void 0 ? void 0 : colors.surface) : colors === null || colors === void 0 ? void 0 : colors.surface;
  const backgroundColor = isV3 ? theme.colors.elevation.level3 : backgroundColorV2;
  return /*#__PURE__*/React.createElement(_Modal.default, {
    dismissable: dismissable,
    dismissableBackButton: dismissableBackButton,
    onDismiss: onDismiss,
    visible: visible,
    contentContainerStyle: [{
      borderRadius,
      backgroundColor,
      marginHorizontal: Math.max(left, right, 26)
    }, styles.container, style],
    theme: theme,
    testID: testID
  }, React.Children.toArray(children).filter(child => child != null && typeof child !== 'boolean').map((child, i) => {
    if (isV3) {
      if (i === 0 && /*#__PURE__*/React.isValidElement(child)) {
        return /*#__PURE__*/React.cloneElement(child, {
          style: [{
            marginTop: 24
          }, child.props.style]
        });
      }
    }
    if (i === 0 && /*#__PURE__*/React.isValidElement(child) && child.type === _DialogContent.default) {
      // Dialog content is the first item, so we add a top padding
      return /*#__PURE__*/React.cloneElement(child, {
        style: [{
          paddingTop: 24
        }, child.props.style]
      });
    }
    return child;
  }));
};

// @component ./DialogContent.tsx
Dialog.Content = _DialogContent.default;
// @component ./DialogActions.tsx
Dialog.Actions = _DialogActions.default;
// @component ./DialogTitle.tsx
Dialog.Title = _DialogTitle.default;
// @component ./DialogScrollArea.tsx
Dialog.ScrollArea = _DialogScrollArea.default;
// @component ./DialogIcon.tsx
Dialog.Icon = _DialogIcon.default;
const styles = _reactNative.StyleSheet.create({
  container: {
    /**
     * This prevents the shadow from being clipped on Android since Android
     * doesn't support `overflow: visible`.
     * One downside for this fix is that it will disable clicks on the area
     * of the shadow around the dialog, consequently, if you click around the
     * dialog (44 pixel from the top and bottom) it won't be dismissed.
     */
    marginVertical: _reactNative.Platform.OS === 'android' ? 44 : 0,
    elevation: DIALOG_ELEVATION,
    justifyContent: 'flex-start'
  }
});
var _default = Dialog;
exports.default = _default;
//# sourceMappingURL=Dialog.js.map