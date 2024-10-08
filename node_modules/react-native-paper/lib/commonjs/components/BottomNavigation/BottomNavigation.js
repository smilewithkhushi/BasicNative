"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var React = _interopRequireWildcard(require("react"));
var _reactNative = require("react-native");
var _useLatestCallback = _interopRequireDefault(require("use-latest-callback"));
var _BottomNavigationBar = _interopRequireDefault(require("./BottomNavigationBar"));
var _BottomNavigationRouteScreen = _interopRequireDefault(require("./BottomNavigationRouteScreen"));
var _theming = require("../../core/theming");
var _useAnimatedValueArray = _interopRequireDefault(require("../../utils/useAnimatedValueArray"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
const FAR_FAR_AWAY = _reactNative.Platform.OS === 'web' ? 0 : 9999;
const SceneComponent = /*#__PURE__*/React.memo(_ref => {
  let {
    component,
    ...rest
  } = _ref;
  return /*#__PURE__*/React.createElement(component, rest);
});

/**
 * BottomNavigation provides quick navigation between top-level views of an app with a bottom navigation bar.
 * It is primarily designed for use on mobile. If you want to use the navigation bar only see [`BottomNavigation.Bar`](BottomNavigationBar).
 *
 * By default BottomNavigation uses primary color as a background, in dark theme with `adaptive` mode it will use surface colour instead.
 * See [Dark Theme](https://callstack.github.io/react-native-paper/docs/guides/theming#dark-theme) for more information.
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { BottomNavigation, Text } from 'react-native-paper';
 *
 * const MusicRoute = () => <Text>Music</Text>;
 *
 * const AlbumsRoute = () => <Text>Albums</Text>;
 *
 * const RecentsRoute = () => <Text>Recents</Text>;
 *
 * const NotificationsRoute = () => <Text>Notifications</Text>;
 *
 * const MyComponent = () => {
 *   const [index, setIndex] = React.useState(0);
 *   const [routes] = React.useState([
 *     { key: 'music', title: 'Favorites', focusedIcon: 'heart', unfocusedIcon: 'heart-outline'},
 *     { key: 'albums', title: 'Albums', focusedIcon: 'album' },
 *     { key: 'recents', title: 'Recents', focusedIcon: 'history' },
 *     { key: 'notifications', title: 'Notifications', focusedIcon: 'bell', unfocusedIcon: 'bell-outline' },
 *   ]);
 *
 *   const renderScene = BottomNavigation.SceneMap({
 *     music: MusicRoute,
 *     albums: AlbumsRoute,
 *     recents: RecentsRoute,
 *     notifications: NotificationsRoute,
 *   });
 *
 *   return (
 *     <BottomNavigation
 *       navigationState={{ index, routes }}
 *       onIndexChange={setIndex}
 *       renderScene={renderScene}
 *     />
 *   );
 * };
 *
 * export default MyComponent;
 * ```
 */
const BottomNavigation = _ref2 => {
  let {
    navigationState,
    renderScene,
    renderIcon,
    renderLabel,
    renderTouchable,
    getLabelText,
    getBadge,
    getColor,
    getAccessibilityLabel,
    getTestID,
    activeColor,
    inactiveColor,
    keyboardHidesNavigationBar = _reactNative.Platform.OS === 'android',
    barStyle,
    labeled = true,
    style,
    activeIndicatorStyle,
    sceneAnimationEnabled = false,
    sceneAnimationType = 'opacity',
    sceneAnimationEasing,
    onTabPress,
    onTabLongPress,
    onIndexChange,
    shifting: shiftingProp,
    safeAreaInsets,
    labelMaxFontSizeMultiplier = 1,
    compact: compactProp,
    testID = 'bottom-navigation',
    theme: themeOverrides,
    getLazy = _ref3 => {
      let {
        route
      } = _ref3;
      return route.lazy;
    }
  } = _ref2;
  const theme = (0, _theming.useInternalTheme)(themeOverrides);
  const {
    scale
  } = theme.animation;
  const compact = compactProp ?? !theme.isV3;
  let shifting = shiftingProp ?? (theme.isV3 ? false : navigationState.routes.length > 3);
  if (shifting && navigationState.routes.length < 2) {
    shifting = false;
    console.warn('BottomNavigation needs at least 2 tabs to run shifting animation');
  }
  const focusedKey = navigationState.routes[navigationState.index].key;

  /**
   * Active state of individual tab item positions:
   * -1 if they're before the active tab, 0 if they're active, 1 if they're after the active tab
   */
  const tabsPositionAnims = (0, _useAnimatedValueArray.default)(navigationState.routes.map((_, i) => i === navigationState.index ? 0 : i >= navigationState.index ? 1 : -1));

  /**
   * The top offset for each tab item to position it offscreen.
   * Placing items offscreen helps to save memory usage for inactive screens with removeClippedSubviews.
   * We use animated values for this to prevent unnecessary re-renders.
   */
  const offsetsAnims = (0, _useAnimatedValueArray.default)(navigationState.routes.map(
  // offscreen === 1, normal === 0
  (_, i) => i === navigationState.index ? 0 : 1));

  /**
   * List of loaded tabs, tabs will be loaded when navigated to.
   */
  const [loaded, setLoaded] = React.useState([focusedKey]);
  if (!loaded.includes(focusedKey)) {
    // Set the current tab to be loaded if it was not loaded before
    setLoaded(loaded => [...loaded, focusedKey]);
  }
  const animateToIndex = React.useCallback(index => {
    _reactNative.Animated.parallel([...navigationState.routes.map((_, i) => _reactNative.Animated.timing(tabsPositionAnims[i], {
      toValue: i === index ? 0 : i >= index ? 1 : -1,
      duration: theme.isV3 || shifting ? 150 * scale : 0,
      useNativeDriver: true,
      easing: sceneAnimationEasing
    }))]).start(_ref4 => {
      let {
        finished
      } = _ref4;
      if (finished) {
        // Position all inactive screens offscreen to save memory usage
        // Only do it when animation has finished to avoid glitches mid-transition if switching fast
        offsetsAnims.forEach((offset, i) => {
          if (i === index) {
            offset.setValue(0);
          } else {
            offset.setValue(1);
          }
        });
      }
    });
  }, [shifting, navigationState.routes, offsetsAnims, scale, tabsPositionAnims, sceneAnimationEasing, theme]);
  React.useEffect(() => {
    // Workaround for native animated bug in react-native@^0.57
    // Context: https://github.com/callstack/react-native-paper/pull/637
    animateToIndex(navigationState.index);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const prevNavigationState = React.useRef();
  React.useEffect(() => {
    // Reset offsets of previous and current tabs before animation
    offsetsAnims.forEach((offset, i) => {
      var _prevNavigationState$;
      if (i === navigationState.index || i === ((_prevNavigationState$ = prevNavigationState.current) === null || _prevNavigationState$ === void 0 ? void 0 : _prevNavigationState$.index)) {
        offset.setValue(0);
      }
    });
    animateToIndex(navigationState.index);
  }, [navigationState.index, animateToIndex, offsetsAnims]);
  const handleTabPress = (0, _useLatestCallback.default)(event => {
    onTabPress === null || onTabPress === void 0 ? void 0 : onTabPress(event);
    if (event.defaultPrevented) {
      return;
    }
    const index = navigationState.routes.findIndex(route => event.route.key === route.key);
    if (index !== navigationState.index) {
      prevNavigationState.current = navigationState;
      onIndexChange(index);
    }
  });
  const jumpTo = (0, _useLatestCallback.default)(key => {
    const index = navigationState.routes.findIndex(route => route.key === key);
    prevNavigationState.current = navigationState;
    onIndexChange(index);
  });
  const {
    routes
  } = navigationState;
  const {
    colors
  } = theme;
  return /*#__PURE__*/React.createElement(_reactNative.View, {
    style: [styles.container, style],
    testID: testID
  }, /*#__PURE__*/React.createElement(_reactNative.View, {
    style: [styles.content, {
      backgroundColor: colors === null || colors === void 0 ? void 0 : colors.background
    }]
  }, routes.map((route, index) => {
    var _prevNavigationState$2;
    if (getLazy({
      route
    }) !== false && !loaded.includes(route.key)) {
      // Don't render a screen if we've never navigated to it
      return null;
    }
    const focused = navigationState.index === index;
    const previouslyFocused = ((_prevNavigationState$2 = prevNavigationState.current) === null || _prevNavigationState$2 === void 0 ? void 0 : _prevNavigationState$2.index) === index;
    const countAlphaOffscreen = sceneAnimationEnabled && (focused || previouslyFocused);
    const renderToHardwareTextureAndroid = sceneAnimationEnabled && focused;
    const opacity = sceneAnimationEnabled ? tabsPositionAnims[index].interpolate({
      inputRange: [-1, 0, 1],
      outputRange: [0, 1, 0]
    }) : focused ? 1 : 0;
    const offsetTarget = focused ? 0 : FAR_FAR_AWAY;
    const top = sceneAnimationEnabled ? offsetsAnims[index].interpolate({
      inputRange: [0, 1],
      outputRange: [0, offsetTarget]
    }) : offsetTarget;
    const left = sceneAnimationType === 'shifting' ? tabsPositionAnims[index].interpolate({
      inputRange: [-1, 0, 1],
      outputRange: [-50, 0, 50]
    }) : 0;
    const zIndex = focused ? 1 : 0;
    return /*#__PURE__*/React.createElement(_BottomNavigationRouteScreen.default, {
      key: route.key,
      pointerEvents: focused ? 'auto' : 'none',
      accessibilityElementsHidden: !focused,
      importantForAccessibility: focused ? 'auto' : 'no-hide-descendants',
      index: index,
      visibility: opacity,
      style: [_reactNative.StyleSheet.absoluteFill, {
        zIndex
      }],
      collapsable: false,
      removeClippedSubviews:
      // On iOS, set removeClippedSubviews to true only when not focused
      // This is an workaround for a bug where the clipped view never re-appears
      _reactNative.Platform.OS === 'ios' ? navigationState.index !== index : true
    }, /*#__PURE__*/React.createElement(_reactNative.Animated.View, _extends({}, _reactNative.Platform.OS === 'android' && {
      needsOffscreenAlphaCompositing: countAlphaOffscreen
    }, {
      renderToHardwareTextureAndroid: renderToHardwareTextureAndroid,
      style: [styles.content, {
        opacity,
        transform: [{
          translateX: left
        }, {
          translateY: top
        }]
      }]
    }), renderScene({
      route,
      jumpTo
    })));
  })), /*#__PURE__*/React.createElement(_BottomNavigationBar.default, {
    navigationState: navigationState,
    renderIcon: renderIcon,
    renderLabel: renderLabel,
    renderTouchable: renderTouchable,
    getLabelText: getLabelText,
    getBadge: getBadge,
    getColor: getColor,
    getAccessibilityLabel: getAccessibilityLabel,
    getTestID: getTestID,
    activeColor: activeColor,
    inactiveColor: inactiveColor,
    keyboardHidesNavigationBar: keyboardHidesNavigationBar,
    style: barStyle,
    activeIndicatorStyle: activeIndicatorStyle,
    labeled: labeled,
    animationEasing: sceneAnimationEasing,
    onTabPress: handleTabPress,
    onTabLongPress: onTabLongPress,
    shifting: shifting,
    safeAreaInsets: safeAreaInsets,
    labelMaxFontSizeMultiplier: labelMaxFontSizeMultiplier,
    compact: compact,
    testID: `${testID}-bar`,
    theme: theme
  }));
};

/**
 * Function which takes a map of route keys to components.
 * Pure components are used to minimize re-rendering of the pages.
 * This drastically improves the animation performance.
 */
BottomNavigation.SceneMap = scenes => {
  return _ref5 => {
    let {
      route,
      jumpTo
    } = _ref5;
    return /*#__PURE__*/React.createElement(SceneComponent, {
      key: route.key,
      component: scenes[route.key ? route.key : ''],
      route: route,
      jumpTo: jumpTo
    });
  };
};

// @component ./BottomNavigationBar.tsx
BottomNavigation.Bar = _BottomNavigationBar.default;
var _default = BottomNavigation;
exports.default = _default;
const styles = _reactNative.StyleSheet.create({
  container: {
    flex: 1,
    overflow: 'hidden'
  },
  content: {
    flex: 1
  }
});
//# sourceMappingURL=BottomNavigation.js.map