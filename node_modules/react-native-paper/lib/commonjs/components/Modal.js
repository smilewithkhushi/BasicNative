"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var React = _interopRequireWildcard(require("react"));
var _reactNative = require("react-native");
var _reactNativeSafeAreaContext = require("react-native-safe-area-context");
var _useLatestCallback = _interopRequireDefault(require("use-latest-callback"));
var _Surface = _interopRequireDefault(require("./Surface"));
var _theming = require("../core/theming");
var _addEventListener = require("../utils/addEventListener");
var _BackHandler = require("../utils/BackHandler/BackHandler");
var _useAnimatedValue = _interopRequireDefault(require("../utils/useAnimatedValue"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
const DEFAULT_DURATION = 220;
const AnimatedPressable = _reactNative.Animated.createAnimatedComponent(_reactNative.Pressable);

/**
 * The Modal component is a simple way to present content above an enclosing view.
 * To render the `Modal` above other components, you'll need to wrap it with the [`Portal`](./Portal) component.
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { Modal, Portal, Text, Button, PaperProvider } from 'react-native-paper';
 *
 * const MyComponent = () => {
 *   const [visible, setVisible] = React.useState(false);
 *
 *   const showModal = () => setVisible(true);
 *   const hideModal = () => setVisible(false);
 *   const containerStyle = {backgroundColor: 'white', padding: 20};
 *
 *   return (
 *     <PaperProvider>
 *       <Portal>
 *         <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={containerStyle}>
 *           <Text>Example Modal.  Click outside this area to dismiss.</Text>
 *         </Modal>
 *       </Portal>
 *       <Button style={{marginTop: 30}} onPress={showModal}>
 *         Show
 *       </Button>
 *     </PaperProvider>
 *   );
 * };
 *
 * export default MyComponent;
 * ```
 */
function Modal(_ref) {
  var _theme$colors;
  let {
    dismissable = true,
    dismissableBackButton = dismissable,
    visible = false,
    overlayAccessibilityLabel = 'Close modal',
    onDismiss = () => {},
    children,
    contentContainerStyle,
    style,
    theme: themeOverrides,
    testID = 'modal'
  } = _ref;
  const theme = (0, _theming.useInternalTheme)(themeOverrides);
  const visibleRef = React.useRef(visible);
  React.useEffect(() => {
    visibleRef.current = visible;
  });
  const onDismissCallback = (0, _useLatestCallback.default)(onDismiss);
  const {
    scale
  } = theme.animation;
  const {
    top,
    bottom
  } = (0, _reactNativeSafeAreaContext.useSafeAreaInsets)();
  const opacity = (0, _useAnimatedValue.default)(visible ? 1 : 0);
  const [rendered, setRendered] = React.useState(visible);
  if (visible && !rendered) {
    setRendered(true);
  }
  const showModal = React.useCallback(() => {
    _reactNative.Animated.timing(opacity, {
      toValue: 1,
      duration: scale * DEFAULT_DURATION,
      easing: _reactNative.Easing.out(_reactNative.Easing.cubic),
      useNativeDriver: true
    }).start();
  }, [opacity, scale]);
  const hideModal = React.useCallback(() => {
    _reactNative.Animated.timing(opacity, {
      toValue: 0,
      duration: scale * DEFAULT_DURATION,
      easing: _reactNative.Easing.out(_reactNative.Easing.cubic),
      useNativeDriver: true
    }).start(_ref2 => {
      let {
        finished
      } = _ref2;
      if (!finished) {
        return;
      }
      if (visible) {
        onDismissCallback();
      }
      if (visibleRef.current) {
        showModal();
      } else {
        setRendered(false);
      }
    });
  }, [onDismissCallback, opacity, scale, showModal, visible]);
  React.useEffect(() => {
    if (!visible) {
      return undefined;
    }
    const onHardwareBackPress = () => {
      if (dismissable || dismissableBackButton) {
        hideModal();
      }
      return true;
    };
    const subscription = (0, _addEventListener.addEventListener)(_BackHandler.BackHandler, 'hardwareBackPress', onHardwareBackPress);
    return () => subscription.remove();
  }, [dismissable, dismissableBackButton, hideModal, visible]);
  const prevVisible = React.useRef(null);
  React.useEffect(() => {
    if (prevVisible.current !== visible) {
      if (visible) {
        showModal();
      } else {
        hideModal();
      }
    }
    prevVisible.current = visible;
  });
  if (!rendered) return null;
  return /*#__PURE__*/React.createElement(_reactNative.Animated.View, {
    pointerEvents: visible ? 'auto' : 'none',
    accessibilityViewIsModal: true,
    accessibilityLiveRegion: "polite",
    style: _reactNative.StyleSheet.absoluteFill,
    onAccessibilityEscape: hideModal,
    testID: testID
  }, /*#__PURE__*/React.createElement(AnimatedPressable, {
    accessibilityLabel: overlayAccessibilityLabel,
    accessibilityRole: "button",
    disabled: !dismissable,
    onPress: dismissable ? hideModal : undefined,
    importantForAccessibility: "no",
    style: [styles.backdrop, {
      backgroundColor: (_theme$colors = theme.colors) === null || _theme$colors === void 0 ? void 0 : _theme$colors.backdrop,
      opacity
    }],
    testID: `${testID}-backdrop`
  }), /*#__PURE__*/React.createElement(_reactNative.View, {
    style: [styles.wrapper, {
      marginTop: top,
      marginBottom: bottom
    }, style],
    pointerEvents: "box-none",
    testID: `${testID}-wrapper`
  }, /*#__PURE__*/React.createElement(_Surface.default, {
    testID: `${testID}-surface`,
    theme: theme,
    style: [{
      opacity
    }, styles.content, contentContainerStyle]
  }, children)));
}
var _default = Modal;
exports.default = _default;
const styles = _reactNative.StyleSheet.create({
  backdrop: {
    flex: 1
  },
  wrapper: {
    ..._reactNative.StyleSheet.absoluteFillObject,
    justifyContent: 'center'
  },
  // eslint-disable-next-line react-native/no-color-literals
  content: {
    backgroundColor: 'transparent',
    justifyContent: 'center'
  }
});
//# sourceMappingURL=Modal.js.map