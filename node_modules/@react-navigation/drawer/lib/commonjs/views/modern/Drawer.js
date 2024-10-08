"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Drawer;
var React = _interopRequireWildcard(require("react"));
var _reactNative = require("react-native");
var _reactNativeGestureHandler = require("react-native-gesture-handler");
var _reactNativeReanimated = _interopRequireWildcard(require("react-native-reanimated"));
var _DrawerProgressContext = _interopRequireDefault(require("../../utils/DrawerProgressContext"));
var _Overlay = _interopRequireDefault(require("./Overlay"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
const SWIPE_DISTANCE_MINIMUM = 5;
const DEFAULT_DRAWER_WIDTH = '80%';
const minmax = (value, start, end) => {
  'worklet';

  return Math.min(Math.max(value, start), end);
};
function Drawer(_ref) {
  let {
    dimensions,
    drawerPosition,
    drawerStyle,
    drawerType,
    gestureHandlerProps,
    hideStatusBarOnOpen,
    keyboardDismissMode,
    onClose,
    onOpen,
    open,
    overlayStyle,
    renderDrawerContent,
    renderSceneContent,
    statusBarAnimation,
    swipeDistanceThreshold,
    swipeEdgeWidth,
    swipeEnabled,
    swipeVelocityThreshold,
    overlayAccessibilityLabel
  } = _ref;
  const getDrawerWidth = () => {
    const {
      width = DEFAULT_DRAWER_WIDTH
    } = _reactNative.StyleSheet.flatten(drawerStyle) || {};
    if (typeof width === 'string' && width.endsWith('%')) {
      // Try to calculate width if a percentage is given
      const percentage = Number(width.replace(/%$/, ''));
      if (Number.isFinite(percentage)) {
        return dimensions.width * (percentage / 100);
      }
    }
    return typeof width === 'number' ? width : 0;
  };
  const drawerWidth = getDrawerWidth();
  const isOpen = drawerType === 'permanent' ? true : open;
  const isRight = drawerPosition === 'right';
  const getDrawerTranslationX = React.useCallback(open => {
    'worklet';

    if (drawerPosition === 'left') {
      return open ? 0 : -drawerWidth;
    }
    return open ? 0 : drawerWidth;
  }, [drawerPosition, drawerWidth]);
  const hideStatusBar = React.useCallback(hide => {
    if (hideStatusBarOnOpen) {
      _reactNative.StatusBar.setHidden(hide, statusBarAnimation);
    }
  }, [hideStatusBarOnOpen, statusBarAnimation]);
  React.useEffect(() => {
    hideStatusBar(isOpen);
    return () => hideStatusBar(false);
  }, [isOpen, hideStatusBarOnOpen, statusBarAnimation, hideStatusBar]);
  const interactionHandleRef = React.useRef(null);
  const startInteraction = () => {
    interactionHandleRef.current = _reactNative.InteractionManager.createInteractionHandle();
  };
  const endInteraction = () => {
    if (interactionHandleRef.current != null) {
      _reactNative.InteractionManager.clearInteractionHandle(interactionHandleRef.current);
      interactionHandleRef.current = null;
    }
  };
  const hideKeyboard = () => {
    if (keyboardDismissMode === 'on-drag') {
      _reactNative.Keyboard.dismiss();
    }
  };
  const onGestureStart = () => {
    startInteraction();
    hideKeyboard();
    hideStatusBar(true);
  };
  const onGestureFinish = () => {
    endInteraction();
  };

  // FIXME: Currently hitSlop is broken when on Android when drawer is on right
  // https://github.com/software-mansion/react-native-gesture-handler/issues/569
  const hitSlop = isRight ?
  // Extend hitSlop to the side of the screen when drawer is closed
  // This lets the user drag the drawer from the side of the screen
  {
    right: 0,
    width: isOpen ? undefined : swipeEdgeWidth
  } : {
    left: 0,
    width: isOpen ? undefined : swipeEdgeWidth
  };
  const touchStartX = (0, _reactNativeReanimated.useSharedValue)(0);
  const touchX = (0, _reactNativeReanimated.useSharedValue)(0);
  const translationX = (0, _reactNativeReanimated.useSharedValue)(getDrawerTranslationX(open));
  const gestureState = (0, _reactNativeReanimated.useSharedValue)(_reactNativeGestureHandler.State.UNDETERMINED);
  const toggleDrawer = React.useCallback(_ref2 => {
    'worklet';

    let {
      open,
      isUserInitiated,
      velocity
    } = _ref2;
    const translateX = getDrawerTranslationX(open);
    touchStartX.value = 0;
    touchX.value = 0;
    translationX.value = (0, _reactNativeReanimated.withSpring)(translateX, {
      velocity,
      stiffness: 1000,
      damping: 500,
      mass: 3,
      overshootClamping: true,
      restDisplacementThreshold: 0.01,
      restSpeedThreshold: 0.01
    });
    if (!isUserInitiated) {
      return;
    }
    if (open) {
      (0, _reactNativeReanimated.runOnJS)(onOpen)();
    } else {
      (0, _reactNativeReanimated.runOnJS)(onClose)();
    }
  }, [getDrawerTranslationX, onClose, onOpen, touchStartX, touchX, translationX]);
  React.useEffect(() => toggleDrawer({
    open,
    isUserInitiated: false
  }), [open, toggleDrawer]);
  const onGestureEvent = (0, _reactNativeReanimated.useAnimatedGestureHandler)({
    onStart: (event, ctx) => {
      ctx.hasCalledOnStart = false;
      ctx.startX = translationX.value;
      gestureState.value = event.state;
      touchStartX.value = event.x;
    },
    onActive: (event, ctx) => {
      touchX.value = event.x;
      translationX.value = ctx.startX + event.translationX;
      gestureState.value = event.state;

      // onStart will _always_ be called, even when the activation
      // criteria isn't met yet. This makes sure onGestureStart is only
      // called when the criteria is really met.
      if (!ctx.hasCalledOnStart) {
        ctx.hasCalledOnStart = true;
        (0, _reactNativeReanimated.runOnJS)(onGestureStart)();
      }
    },
    onEnd: event => {
      gestureState.value = event.state;
      const nextOpen = Math.abs(event.translationX) > SWIPE_DISTANCE_MINIMUM && Math.abs(event.translationX) > swipeVelocityThreshold || Math.abs(event.translationX) > swipeDistanceThreshold ? drawerPosition === 'left' ?
      // If swiped to right, open the drawer, otherwise close it
      (event.velocityX === 0 ? event.translationX : event.velocityX) > 0 :
      // If swiped to left, open the drawer, otherwise close it
      (event.velocityX === 0 ? event.translationX : event.velocityX) < 0 : open;
      toggleDrawer({
        open: nextOpen,
        isUserInitiated: true,
        velocity: event.velocityX
      });
    },
    onFinish: () => {
      (0, _reactNativeReanimated.runOnJS)(onGestureFinish)();
    }
  });
  const translateX = (0, _reactNativeReanimated.useDerivedValue)(() => {
    // Comment stolen from react-native-gesture-handler/DrawerLayout
    //
    // While closing the drawer when user starts gesture outside of its area (in greyed
    // out part of the window), we want the drawer to follow only once finger reaches the
    // edge of the drawer.
    // E.g. on the diagram below drawer is illustrate by X signs and the greyed out area by
    // dots. The touch gesture starts at '*' and moves left, touch path is indicated by
    // an arrow pointing left
    // 1) +---------------+ 2) +---------------+ 3) +---------------+ 4) +---------------+
    //    |XXXXXXXX|......|    |XXXXXXXX|......|    |XXXXXXXX|......|    |XXXXX|.........|
    //    |XXXXXXXX|......|    |XXXXXXXX|......|    |XXXXXXXX|......|    |XXXXX|.........|
    //    |XXXXXXXX|......|    |XXXXXXXX|......|    |XXXXXXXX|......|    |XXXXX|.........|
    //    |XXXXXXXX|......|    |XXXXXXXX|.<-*..|    |XXXXXXXX|<--*..|    |XXXXX|<-----*..|
    //    |XXXXXXXX|......|    |XXXXXXXX|......|    |XXXXXXXX|......|    |XXXXX|.........|
    //    |XXXXXXXX|......|    |XXXXXXXX|......|    |XXXXXXXX|......|    |XXXXX|.........|
    //    |XXXXXXXX|......|    |XXXXXXXX|......|    |XXXXXXXX|......|    |XXXXX|.........|
    //    +---------------+    +---------------+    +---------------+    +---------------+
    //
    // For the above to work properly we define animated value that will keep start position
    // of the gesture. Then we use that value to calculate how much we need to subtract from
    // the translationX. If the gesture started on the greyed out area we take the distance from the
    // edge of the drawer to the start position. Otherwise we don't subtract at all and the
    // drawer be pulled back as soon as you start the pan.
    //
    // This is used only when drawerType is "front"
    const touchDistance = drawerType === 'front' && gestureState.value === _reactNativeGestureHandler.State.ACTIVE ? minmax(drawerPosition === 'left' ? touchStartX.value - drawerWidth : dimensions.width - drawerWidth - touchStartX.value, 0, dimensions.width) : 0;
    const translateX = drawerPosition === 'left' ? minmax(translationX.value + touchDistance, -drawerWidth, 0) : minmax(translationX.value - touchDistance, 0, drawerWidth);
    return translateX;
  });
  const isRTL = _reactNative.I18nManager.getConstants().isRTL;
  const drawerAnimatedStyle = (0, _reactNativeReanimated.useAnimatedStyle)(() => {
    const distanceFromEdge = dimensions.width - drawerWidth;
    return {
      transform: drawerType === 'permanent' ?
      // Reanimated needs the property to be present, but it results in Browser bug
      // https://bugs.chromium.org/p/chromium/issues/detail?id=20574
      [] : [{
        translateX:
        // The drawer stays in place when `drawerType` is `back`
        (drawerType === 'back' ? 0 : translateX.value) + (drawerPosition === 'left' ? isRTL ? -distanceFromEdge : 0 : isRTL ? 0 : distanceFromEdge)
      }]
    };
  });
  const contentAnimatedStyle = (0, _reactNativeReanimated.useAnimatedStyle)(() => {
    return {
      transform: drawerType === 'permanent' ?
      // Reanimated needs the property to be present, but it results in Browser bug
      // https://bugs.chromium.org/p/chromium/issues/detail?id=20574
      [] : [{
        translateX:
        // The screen content stays in place when `drawerType` is `front`
        drawerType === 'front' ? 0 : translateX.value + drawerWidth * (drawerPosition === 'left' ? 1 : -1)
      }]
    };
  });
  const progress = (0, _reactNativeReanimated.useDerivedValue)(() => {
    return drawerType === 'permanent' ? 1 : (0, _reactNativeReanimated.interpolate)(translateX.value, [getDrawerTranslationX(false), getDrawerTranslationX(true)], [0, 1]);
  });
  return /*#__PURE__*/React.createElement(_DrawerProgressContext.default.Provider, {
    value: progress
  }, /*#__PURE__*/React.createElement(_reactNativeGestureHandler.PanGestureHandler, _extends({
    activeOffsetX: [-SWIPE_DISTANCE_MINIMUM, SWIPE_DISTANCE_MINIMUM],
    failOffsetY: [-SWIPE_DISTANCE_MINIMUM, SWIPE_DISTANCE_MINIMUM],
    hitSlop: hitSlop,
    enabled: drawerType !== 'permanent' && swipeEnabled,
    onGestureEvent: onGestureEvent
  }, gestureHandlerProps), /*#__PURE__*/React.createElement(_reactNativeReanimated.default.View, {
    style: [styles.main, {
      flexDirection: drawerType === 'permanent' && !isRight ? 'row-reverse' : 'row'
    }]
  }, /*#__PURE__*/React.createElement(_reactNativeReanimated.default.View, {
    style: [styles.content, contentAnimatedStyle]
  }, /*#__PURE__*/React.createElement(_reactNative.View, {
    accessibilityElementsHidden: isOpen && drawerType !== 'permanent',
    importantForAccessibility: isOpen && drawerType !== 'permanent' ? 'no-hide-descendants' : 'auto',
    style: styles.content
  }, renderSceneContent()), drawerType !== 'permanent' ? /*#__PURE__*/React.createElement(_Overlay.default, {
    progress: progress,
    onPress: () => toggleDrawer({
      open: false,
      isUserInitiated: true
    }),
    style: overlayStyle,
    accessibilityLabel: overlayAccessibilityLabel
  }) : null), /*#__PURE__*/React.createElement(_reactNativeReanimated.default.View, {
    removeClippedSubviews: _reactNative.Platform.OS !== 'ios',
    style: [styles.container, {
      position: drawerType === 'permanent' ? 'relative' : 'absolute',
      zIndex: drawerType === 'back' ? -1 : 0
    }, drawerAnimatedStyle, drawerStyle]
  }, renderDrawerContent()))));
}
const styles = _reactNative.StyleSheet.create({
  container: {
    top: 0,
    bottom: 0,
    maxWidth: '100%',
    width: DEFAULT_DRAWER_WIDTH
  },
  content: {
    flex: 1
  },
  main: {
    flex: 1,
    ..._reactNative.Platform.select({
      // FIXME: We need to hide `overflowX` on Web so the translated content doesn't show offscreen.
      // But adding `overflowX: 'hidden'` prevents content from collapsing the URL bar.
      web: null,
      default: {
        overflow: 'hidden'
      }
    })
  }
});
//# sourceMappingURL=Drawer.js.map