"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var React = _interopRequireWildcard(require("react"));
var _reactNative = require("react-native");
var _theming = require("../core/theming");
var _overlay = _interopRequireWildcard(require("../styles/overlay"));
var _shadow = _interopRequireDefault(require("../styles/shadow"));
var _forwardRef = require("../utils/forwardRef");
var _splitStyles = require("../utils/splitStyles");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
const MD2Surface = (0, _forwardRef.forwardRef)((_ref, ref) => {
  let {
    style,
    theme: overrideTheme,
    ...rest
  } = _ref;
  const {
    elevation = 4
  } = _reactNative.StyleSheet.flatten(style) || {};
  const {
    dark: isDarkTheme,
    mode,
    colors
  } = (0, _theming.useInternalTheme)(overrideTheme);
  return /*#__PURE__*/React.createElement(_reactNative.Animated.View, _extends({
    ref: ref
  }, rest, {
    style: [{
      backgroundColor: isDarkTheme && mode === 'adaptive' ? (0, _overlay.default)(elevation, colors === null || colors === void 0 ? void 0 : colors.surface) : colors === null || colors === void 0 ? void 0 : colors.surface
    }, elevation ? (0, _shadow.default)(elevation) : null, style]
  }));
});
const outerLayerStyleProperties = ['position', 'alignSelf', 'top', 'right', 'bottom', 'left', 'start', 'end', 'flex', 'flexShrink', 'flexGrow', 'width', 'height', 'transform', 'opacity'];
const shadowColor = '#000';
const iOSShadowOutputRanges = [{
  shadowOpacity: 0.15,
  height: [0, 1, 2, 4, 6, 8],
  shadowRadius: [0, 3, 6, 8, 10, 12]
}, {
  shadowOpacity: 0.3,
  height: [0, 1, 1, 1, 2, 4],
  shadowRadius: [0, 1, 2, 3, 3, 4]
}];
const inputRange = [0, 1, 2, 3, 4, 5];
function getStyleForShadowLayer(elevation, layer) {
  if ((0, _overlay.isAnimatedValue)(elevation)) {
    return {
      shadowColor,
      shadowOpacity: elevation.interpolate({
        inputRange: [0, 1],
        outputRange: [0, iOSShadowOutputRanges[layer].shadowOpacity],
        extrapolate: 'clamp'
      }),
      shadowOffset: {
        width: 0,
        height: elevation.interpolate({
          inputRange,
          outputRange: iOSShadowOutputRanges[layer].height
        })
      },
      shadowRadius: elevation.interpolate({
        inputRange,
        outputRange: iOSShadowOutputRanges[layer].shadowRadius
      })
    };
  }
  return {
    shadowColor,
    shadowOpacity: elevation ? iOSShadowOutputRanges[layer].shadowOpacity : 0,
    shadowOffset: {
      width: 0,
      height: iOSShadowOutputRanges[layer].height[elevation]
    },
    shadowRadius: iOSShadowOutputRanges[layer].shadowRadius[elevation]
  };
}
const SurfaceIOS = (0, _forwardRef.forwardRef)((_ref2, ref) => {
  let {
    elevation,
    style,
    backgroundColor,
    testID,
    children,
    mode = 'elevated',
    ...props
  } = _ref2;
  const [outerLayerViewStyles, innerLayerViewStyles] = React.useMemo(() => {
    const flattenedStyles = _reactNative.StyleSheet.flatten(style) || {};
    const [filteredStyles, outerLayerStyles, borderRadiusStyles] = (0, _splitStyles.splitStyles)(flattenedStyles, style => outerLayerStyleProperties.includes(style) || style.startsWith('margin'), style => style.startsWith('border') && style.endsWith('Radius'));
    if (process.env.NODE_ENV !== 'production' && filteredStyles.overflow === 'hidden' && elevation !== 0) {
      console.warn('When setting overflow to hidden on Surface the shadow will not be displayed correctly. Wrap the content of your component in a separate View with the overflow style.');
    }
    const bgColor = flattenedStyles.backgroundColor || backgroundColor;
    const isElevated = mode === 'elevated';
    const outerLayerViewStyles = {
      ...(isElevated && getStyleForShadowLayer(elevation, 0)),
      ...outerLayerStyles,
      ...borderRadiusStyles,
      backgroundColor: bgColor
    };
    const innerLayerViewStyles = {
      ...(isElevated && getStyleForShadowLayer(elevation, 1)),
      ...filteredStyles,
      ...borderRadiusStyles,
      flex: flattenedStyles.height ? 1 : undefined,
      backgroundColor: bgColor
    };
    return [outerLayerViewStyles, innerLayerViewStyles];
  }, [style, elevation, backgroundColor, mode]);
  return /*#__PURE__*/React.createElement(_reactNative.Animated.View, {
    ref: ref,
    style: outerLayerViewStyles,
    testID: `${testID}-outer-layer`
  }, /*#__PURE__*/React.createElement(_reactNative.Animated.View, _extends({}, props, {
    style: innerLayerViewStyles,
    testID: testID
  }), children));
});

/**
 * Surface is a basic container that can give depth to an element with elevation shadow.
 * On dark theme with `adaptive` mode, surface is constructed by also placing a semi-transparent white overlay over a component surface.
 * See [Dark Theme](https://callstack.github.io/react-native-paper/docs/guides/theming#dark-theme) for more information.
 * Overlay and shadow can be applied by specifying the `elevation` property both on Android and iOS.
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { Surface, Text } from 'react-native-paper';
 * import { StyleSheet } from 'react-native';
 *
 * const MyComponent = () => (
 *   <Surface style={styles.surface} elevation={4}>
 *      <Text>Surface</Text>
 *   </Surface>
 * );
 *
 * export default MyComponent;
 *
 * const styles = StyleSheet.create({
 *   surface: {
 *     padding: 8,
 *     height: 80,
 *     width: 80,
 *     alignItems: 'center',
 *     justifyContent: 'center',
 *   },
 * });
 * ```
 */
const Surface = (0, _forwardRef.forwardRef)((_ref3, ref) => {
  let {
    elevation = 1,
    children,
    theme: overridenTheme,
    style,
    testID = 'surface',
    mode = 'elevated',
    ...props
  } = _ref3;
  const theme = (0, _theming.useInternalTheme)(overridenTheme);
  if (!theme.isV3) return /*#__PURE__*/React.createElement(MD2Surface, _extends({}, props, {
    theme: theme,
    style: style,
    ref: ref
  }), children);
  const {
    colors
  } = theme;
  const inputRange = [0, 1, 2, 3, 4, 5];
  const backgroundColor = (_colors$elevation2 => {
    if ((0, _overlay.isAnimatedValue)(elevation)) {
      return elevation.interpolate({
        inputRange,
        outputRange: inputRange.map(elevation => {
          var _colors$elevation;
          return (_colors$elevation = colors.elevation) === null || _colors$elevation === void 0 ? void 0 : _colors$elevation[`level${elevation}`];
        })
      });
    }
    return (_colors$elevation2 = colors.elevation) === null || _colors$elevation2 === void 0 ? void 0 : _colors$elevation2[`level${elevation}`];
  })();
  const isElevated = mode === 'elevated';
  if (_reactNative.Platform.OS === 'web') {
    const {
      pointerEvents = 'auto'
    } = props;
    return /*#__PURE__*/React.createElement(_reactNative.Animated.View, _extends({}, props, {
      pointerEvents: pointerEvents,
      ref: ref,
      testID: testID,
      style: [{
        backgroundColor
      }, elevation && isElevated ? (0, _shadow.default)(elevation, theme.isV3) : null, style]
    }), children);
  }
  if (_reactNative.Platform.OS === 'android') {
    const elevationLevel = [0, 3, 6, 9, 12, 15];
    const getElevationAndroid = () => {
      if ((0, _overlay.isAnimatedValue)(elevation)) {
        return elevation.interpolate({
          inputRange,
          outputRange: elevationLevel
        });
      }
      return elevationLevel[elevation];
    };
    const {
      margin,
      padding,
      transform,
      borderRadius
    } = _reactNative.StyleSheet.flatten(style) || {};
    const outerLayerStyles = {
      margin,
      padding,
      transform,
      borderRadius
    };
    const sharedStyle = [{
      backgroundColor
    }, style];
    return /*#__PURE__*/React.createElement(_reactNative.Animated.View, _extends({}, props, {
      testID: testID,
      ref: ref,
      style: [{
        backgroundColor,
        transform
      }, outerLayerStyles, sharedStyle, isElevated && {
        elevation: getElevationAndroid()
      }]
    }), children);
  }
  return /*#__PURE__*/React.createElement(SurfaceIOS, _extends({}, props, {
    ref: ref,
    elevation: elevation,
    backgroundColor: backgroundColor,
    style: style,
    testID: testID,
    mode: mode
  }), children);
});
var _default = Surface;
exports.default = _default;
//# sourceMappingURL=Surface.js.map