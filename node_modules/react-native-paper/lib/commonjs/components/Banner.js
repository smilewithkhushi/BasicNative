"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var React = _interopRequireWildcard(require("react"));
var _reactNative = require("react-native");
var _useLatestCallback = _interopRequireDefault(require("use-latest-callback"));
var _Button = _interopRequireDefault(require("./Button/Button"));
var _Icon = _interopRequireDefault(require("./Icon"));
var _Surface = _interopRequireDefault(require("./Surface"));
var _Text = _interopRequireDefault(require("./Typography/Text"));
var _theming = require("../core/theming");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
const DEFAULT_MAX_WIDTH = 960;
/**
 * Banner displays a prominent message and related actions.
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { Image } from 'react-native';
 * import { Banner } from 'react-native-paper';
 *
 * const MyComponent = () => {
 *   const [visible, setVisible] = React.useState(true);
 *
 *   return (
 *     <Banner
 *       visible={visible}
 *       actions={[
 *         {
 *           label: 'Fix it',
 *           onPress: () => setVisible(false),
 *         },
 *         {
 *           label: 'Learn more',
 *           onPress: () => setVisible(false),
 *         },
 *       ]}
 *       icon={({size}) => (
 *         <Image
 *           source={{
 *             uri: 'https://avatars3.githubusercontent.com/u/17571969?s=400&v=4',
 *           }}
 *           style={{
 *             width: size,
 *             height: size,
 *           }}
 *         />
 *       )}>
 *       There was a problem processing a transaction on your credit card.
 *     </Banner>
 *   );
 * };
 *
 * export default MyComponent;
 * ```
 */
const Banner = _ref => {
  let {
    visible,
    icon,
    children,
    actions = [],
    contentStyle,
    elevation = 1,
    style,
    theme: themeOverrides,
    onShowAnimationFinished = () => {},
    onHideAnimationFinished = () => {},
    maxFontSizeMultiplier,
    ...rest
  } = _ref;
  const theme = (0, _theming.useInternalTheme)(themeOverrides);
  const {
    current: position
  } = React.useRef(new _reactNative.Animated.Value(visible ? 1 : 0));
  const [layout, setLayout] = React.useState({
    height: 0,
    measured: false
  });
  const showCallback = (0, _useLatestCallback.default)(onShowAnimationFinished);
  const hideCallback = (0, _useLatestCallback.default)(onHideAnimationFinished);
  const {
    scale
  } = theme.animation;
  const opacity = position.interpolate({
    inputRange: [0, 0.1, 1],
    outputRange: [0, 1, 1]
  });
  React.useEffect(() => {
    if (visible) {
      // show
      _reactNative.Animated.timing(position, {
        duration: 250 * scale,
        toValue: 1,
        useNativeDriver: false
      }).start(showCallback);
    } else {
      // hide
      _reactNative.Animated.timing(position, {
        duration: 200 * scale,
        toValue: 0,
        useNativeDriver: false
      }).start(hideCallback);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [visible, position, scale]);
  const handleLayout = _ref2 => {
    let {
      nativeEvent
    } = _ref2;
    const {
      height
    } = nativeEvent.layout;
    setLayout({
      height,
      measured: true
    });
  };

  // The banner animation has 2 parts:
  // 1. Blank spacer element which animates its height to move the content
  // 2. Actual banner which animates its translateY
  // In initial render, we position everything normally and measure the height of the banner
  // Once we have the height, we apply the height to the spacer and switch the banner to position: absolute
  // We need this because we need to move the content below as if banner's height was being animated
  // However we can't animated banner's height directly as it'll also resize the content inside
  const height = _reactNative.Animated.multiply(position, layout.height);
  const translateY = _reactNative.Animated.multiply(_reactNative.Animated.add(position, -1), layout.height);
  return /*#__PURE__*/React.createElement(_Surface.default, _extends({}, rest, {
    style: [!theme.isV3 && styles.elevation, {
      opacity
    }, style],
    theme: theme
  }, theme.isV3 && {
    elevation
  }), /*#__PURE__*/React.createElement(_reactNative.View, {
    style: [styles.wrapper, contentStyle]
  }, /*#__PURE__*/React.createElement(_reactNative.Animated.View, {
    style: {
      height
    }
  }), /*#__PURE__*/React.createElement(_reactNative.Animated.View, {
    onLayout: handleLayout,
    style: [layout.measured || !visible ?
    // If we have measured banner's height or it's invisible,
    // Position it absolutely, the layout will be taken care of the spacer
    [styles.absolute, {
      transform: [{
        translateY
      }]
    }] :
    // Otherwise position it normally
    null, !layout.measured && !visible ?
    // If we haven't measured banner's height yet and it's invisible,
    // hide it with opacity: 0 so user doesn't see it
    styles.transparent : null]
  }, /*#__PURE__*/React.createElement(_reactNative.View, {
    style: styles.content
  }, icon ? /*#__PURE__*/React.createElement(_reactNative.View, {
    style: styles.icon
  }, /*#__PURE__*/React.createElement(_Icon.default, {
    source: icon,
    size: 40
  })) : null, /*#__PURE__*/React.createElement(_Text.default, {
    style: [styles.message, {
      color: theme.isV3 ? theme.colors.onSurface : theme.colors.text
    }],
    accessibilityLiveRegion: visible ? 'polite' : 'none',
    accessibilityRole: "alert",
    maxFontSizeMultiplier: maxFontSizeMultiplier
  }, children)), /*#__PURE__*/React.createElement(_reactNative.View, {
    style: styles.actions
  }, actions.map((_ref3, i) => {
    var _theme$colors;
    let {
      label,
      ...others
    } = _ref3;
    return /*#__PURE__*/React.createElement(_Button.default, _extends({
      key: /* eslint-disable-line react/no-array-index-key */i,
      compact: true,
      mode: "text",
      style: styles.button,
      textColor: (_theme$colors = theme.colors) === null || _theme$colors === void 0 ? void 0 : _theme$colors.primary,
      theme: theme
    }, others), label);
  })))));
};
const styles = _reactNative.StyleSheet.create({
  wrapper: {
    overflow: 'hidden',
    alignSelf: 'center',
    width: '100%',
    maxWidth: DEFAULT_MAX_WIDTH
  },
  absolute: {
    position: 'absolute',
    top: 0,
    width: '100%'
  },
  content: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginHorizontal: 8,
    marginTop: 16,
    marginBottom: 0
  },
  icon: {
    margin: 8
  },
  message: {
    flex: 1,
    margin: 8
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    margin: 4
  },
  button: {
    margin: 4
  },
  elevation: {
    elevation: 1
  },
  transparent: {
    opacity: 0
  }
});
var _default = Banner;
exports.default = _default;
//# sourceMappingURL=Banner.js.map