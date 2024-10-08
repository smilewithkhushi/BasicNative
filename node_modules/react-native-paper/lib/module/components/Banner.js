function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from 'react';
import { Animated, StyleSheet, View } from 'react-native';
import useLatestCallback from 'use-latest-callback';
import Button from './Button/Button';
import Icon from './Icon';
import Surface from './Surface';
import Text from './Typography/Text';
import { useInternalTheme } from '../core/theming';
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
  const theme = useInternalTheme(themeOverrides);
  const {
    current: position
  } = React.useRef(new Animated.Value(visible ? 1 : 0));
  const [layout, setLayout] = React.useState({
    height: 0,
    measured: false
  });
  const showCallback = useLatestCallback(onShowAnimationFinished);
  const hideCallback = useLatestCallback(onHideAnimationFinished);
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
      Animated.timing(position, {
        duration: 250 * scale,
        toValue: 1,
        useNativeDriver: false
      }).start(showCallback);
    } else {
      // hide
      Animated.timing(position, {
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
  const height = Animated.multiply(position, layout.height);
  const translateY = Animated.multiply(Animated.add(position, -1), layout.height);
  return /*#__PURE__*/React.createElement(Surface, _extends({}, rest, {
    style: [!theme.isV3 && styles.elevation, {
      opacity
    }, style],
    theme: theme
  }, theme.isV3 && {
    elevation
  }), /*#__PURE__*/React.createElement(View, {
    style: [styles.wrapper, contentStyle]
  }, /*#__PURE__*/React.createElement(Animated.View, {
    style: {
      height
    }
  }), /*#__PURE__*/React.createElement(Animated.View, {
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
  }, /*#__PURE__*/React.createElement(View, {
    style: styles.content
  }, icon ? /*#__PURE__*/React.createElement(View, {
    style: styles.icon
  }, /*#__PURE__*/React.createElement(Icon, {
    source: icon,
    size: 40
  })) : null, /*#__PURE__*/React.createElement(Text, {
    style: [styles.message, {
      color: theme.isV3 ? theme.colors.onSurface : theme.colors.text
    }],
    accessibilityLiveRegion: visible ? 'polite' : 'none',
    accessibilityRole: "alert",
    maxFontSizeMultiplier: maxFontSizeMultiplier
  }, children)), /*#__PURE__*/React.createElement(View, {
    style: styles.actions
  }, actions.map((_ref3, i) => {
    var _theme$colors;
    let {
      label,
      ...others
    } = _ref3;
    return /*#__PURE__*/React.createElement(Button, _extends({
      key: /* eslint-disable-line react/no-array-index-key */i,
      compact: true,
      mode: "text",
      style: styles.button,
      textColor: (_theme$colors = theme.colors) === null || _theme$colors === void 0 ? void 0 : _theme$colors.primary,
      theme: theme
    }, others), label);
  })))));
};
const styles = StyleSheet.create({
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
export default Banner;
//# sourceMappingURL=Banner.js.map