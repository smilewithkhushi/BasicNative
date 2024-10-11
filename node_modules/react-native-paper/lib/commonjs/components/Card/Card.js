"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var React = _interopRequireWildcard(require("react"));
var _reactNative = require("react-native");
var _useLatestCallback = _interopRequireDefault(require("use-latest-callback"));
var _CardActions = _interopRequireDefault(require("./CardActions"));
var _CardContent = _interopRequireDefault(require("./CardContent"));
var _CardCover = _interopRequireDefault(require("./CardCover"));
var _CardTitle = _interopRequireDefault(require("./CardTitle"));
var _utils = require("./utils");
var _theming = require("../../core/theming");
var _hasTouchHandler = _interopRequireDefault(require("../../utils/hasTouchHandler"));
var _splitStyles = require("../../utils/splitStyles");
var _Surface = _interopRequireDefault(require("../Surface"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
// eslint-disable-next-line @typescript-eslint/no-unused-vars
// eslint-disable-next-line @typescript-eslint/no-unused-vars
/**
 * A card is a sheet of material that serves as an entry point to more detailed information.
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { Avatar, Button, Card, Text } from 'react-native-paper';
 *
 * const LeftContent = props => <Avatar.Icon {...props} icon="folder" />
 *
 * const MyComponent = () => (
 *   <Card>
 *     <Card.Title title="Card Title" subtitle="Card Subtitle" left={LeftContent} />
 *     <Card.Content>
 *       <Text variant="titleLarge">Card title</Text>
 *       <Text variant="bodyMedium">Card content</Text>
 *     </Card.Content>
 *     <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
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
const Card = _ref => {
  let {
    elevation: cardElevation = 1,
    delayLongPress,
    onPress,
    onLongPress,
    onPressOut,
    onPressIn,
    mode: cardMode = 'elevated',
    children,
    style,
    contentStyle,
    theme: themeOverrides,
    testID = 'card',
    accessible,
    disabled,
    ...rest
  } = _ref;
  const theme = (0, _theming.useInternalTheme)(themeOverrides);
  const isMode = React.useCallback(modeToCompare => {
    return cardMode === modeToCompare;
  }, [cardMode]);
  const hasPassedTouchHandler = (0, _hasTouchHandler.default)({
    onPress,
    onLongPress,
    onPressIn,
    onPressOut
  });

  // Default animated value
  const {
    current: elevation
  } = React.useRef(new _reactNative.Animated.Value(cardElevation));
  // Dark adaptive animated value, used in case of toggling the theme,
  // it prevents animating the background with native drivers inside Surface
  const {
    current: elevationDarkAdaptive
  } = React.useRef(new _reactNative.Animated.Value(cardElevation));
  const {
    animation,
    dark,
    mode,
    roundness,
    isV3
  } = theme;
  const prevDarkRef = React.useRef(dark);
  React.useEffect(() => {
    prevDarkRef.current = dark;
  });
  const prevDark = prevDarkRef.current;
  const isAdaptiveMode = mode === 'adaptive';
  const animationDuration = 150 * animation.scale;
  React.useEffect(() => {
    /**
     * Resets animations values if updating to dark adaptive mode,
     * otherwise, any card that is in the middle of animation while
     * toggling the theme will stay at that animated value until
     * the next press-in
     */
    if (dark && isAdaptiveMode && !prevDark) {
      elevation.setValue(cardElevation);
      elevationDarkAdaptive.setValue(cardElevation);
    }
  }, [prevDark, dark, isAdaptiveMode, cardElevation, elevation, elevationDarkAdaptive]);
  const runElevationAnimation = pressType => {
    const isPressTypeIn = pressType === 'in';
    if (dark && isAdaptiveMode) {
      _reactNative.Animated.timing(elevationDarkAdaptive, {
        toValue: isPressTypeIn ? isV3 ? 2 : 8 : cardElevation,
        duration: animationDuration,
        useNativeDriver: false
      }).start();
    } else {
      _reactNative.Animated.timing(elevation, {
        toValue: isPressTypeIn ? isV3 ? 2 : 8 : cardElevation,
        duration: animationDuration,
        useNativeDriver: false
      }).start();
    }
  };
  const handlePressIn = (0, _useLatestCallback.default)(e => {
    onPressIn === null || onPressIn === void 0 ? void 0 : onPressIn(e);
    runElevationAnimation('in');
  });
  const handlePressOut = (0, _useLatestCallback.default)(e => {
    onPressOut === null || onPressOut === void 0 ? void 0 : onPressOut(e);
    runElevationAnimation('out');
  });
  const total = React.Children.count(children);
  const siblings = React.Children.map(children, child => /*#__PURE__*/React.isValidElement(child) && child.type ? child.type.displayName : null);
  const computedElevation = dark && isAdaptiveMode ? elevationDarkAdaptive : elevation;
  const {
    backgroundColor,
    borderColor: themedBorderColor
  } = (0, _utils.getCardColors)({
    theme,
    mode: cardMode
  });
  const flattenedStyles = _reactNative.StyleSheet.flatten(style) || {};
  const {
    borderColor = themedBorderColor
  } = flattenedStyles;
  const [, borderRadiusStyles] = (0, _splitStyles.splitStyles)(flattenedStyles, style => style.startsWith('border') && style.endsWith('Radius'));
  const borderRadiusCombinedStyles = {
    borderRadius: (isV3 ? 3 : 1) * roundness,
    ...borderRadiusStyles
  };
  const content = /*#__PURE__*/React.createElement(_reactNative.View, {
    style: [styles.innerContainer, contentStyle],
    testID: testID
  }, React.Children.map(children, (child, index) => /*#__PURE__*/React.isValidElement(child) ? /*#__PURE__*/React.cloneElement(child, {
    index,
    total,
    siblings,
    borderRadiusStyles
  }) : child));
  return /*#__PURE__*/React.createElement(_Surface.default, _extends({
    style: [isV3 && !isMode('elevated') && {
      backgroundColor
    }, !isV3 && isMode('outlined') ? styles.resetElevation : {
      elevation: computedElevation
    }, borderRadiusCombinedStyles, style],
    theme: theme
  }, isV3 && {
    elevation: isMode('elevated') ? computedElevation : 0
  }, {
    testID: `${testID}-container`
  }, rest), isMode('outlined') && /*#__PURE__*/React.createElement(_reactNative.View, {
    pointerEvents: "none",
    testID: `${testID}-outline`,
    style: [{
      borderColor
    }, styles.outline, borderRadiusCombinedStyles]
  }), hasPassedTouchHandler ? /*#__PURE__*/React.createElement(_reactNative.Pressable, {
    accessible: accessible,
    unstable_pressDelay: 0,
    disabled: disabled,
    delayLongPress: delayLongPress,
    onLongPress: onLongPress,
    onPress: onPress,
    onPressIn: handlePressIn,
    onPressOut: handlePressOut
  }, content) : content);
};

// @component ./CardContent.tsx
Card.Content = _CardContent.default;
// @component ./CardActions.tsx
Card.Actions = _CardActions.default;
// @component ./CardCover.tsx
Card.Cover = _CardCover.default;
// @component ./CardTitle.tsx
Card.Title = _CardTitle.default;
const styles = _reactNative.StyleSheet.create({
  innerContainer: {
    flexShrink: 1
  },
  outline: {
    borderWidth: 1,
    position: 'absolute',
    width: '100%',
    height: '100%',
    zIndex: 2
  },
  resetElevation: {
    elevation: 0
  }
});
var _default = Card;
exports.default = _default;
//# sourceMappingURL=Card.js.map