function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from 'react';
import { Animated, I18nManager, Platform, StyleSheet, View } from 'react-native';
import setColor from 'color';
import { useInternalTheme } from '../core/theming';
const INDETERMINATE_DURATION = 2000;
const INDETERMINATE_MAX_WIDTH = 0.6;
const {
  isRTL
} = I18nManager;

/**
 * Progress bar is an indicator used to present progress of some activity in the app.
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { ProgressBar, MD3Colors } from 'react-native-paper';
 *
 * const MyComponent = () => (
 *   <ProgressBar progress={0.5} color={MD3Colors.error50} />
 * );
 *
 * export default MyComponent;
 * ```
 */
const ProgressBar = _ref => {
  var _theme$colors;
  let {
    color,
    indeterminate,
    progress = 0,
    visible = true,
    theme: themeOverrides,
    animatedValue,
    style,
    fillStyle,
    testID = 'progress-bar',
    ...rest
  } = _ref;
  const isWeb = Platform.OS === 'web';
  const theme = useInternalTheme(themeOverrides);
  const {
    current: timer
  } = React.useRef(new Animated.Value(0));
  const {
    current: fade
  } = React.useRef(new Animated.Value(0));
  const passedAnimatedValue = React.useRef(animatedValue);
  const [width, setWidth] = React.useState(0);
  const [prevWidth, setPrevWidth] = React.useState(0);
  const indeterminateAnimation = React.useRef(null);
  const {
    scale
  } = theme.animation;
  React.useEffect(() => {
    passedAnimatedValue.current = animatedValue;
  });
  const startAnimation = React.useCallback(() => {
    // Show progress bar
    Animated.timing(fade, {
      duration: 200 * scale,
      toValue: 1,
      useNativeDriver: true,
      isInteraction: false
    }).start();

    /**
     * We shouldn't add @param animatedValue to the
     * deps array, to avoid the unnecessary loop.
     * We can only check if the prop is passed initially,
     * and we do early return.
     */
    const externalAnimation = typeof passedAnimatedValue.current !== 'undefined' && passedAnimatedValue.current >= 0;
    if (externalAnimation) {
      return;
    }

    // Animate progress bar
    if (indeterminate) {
      if (!indeterminateAnimation.current) {
        indeterminateAnimation.current = Animated.timing(timer, {
          duration: INDETERMINATE_DURATION,
          toValue: 1,
          // Animated.loop does not work if useNativeDriver is true on web
          useNativeDriver: !isWeb,
          isInteraction: false
        });
      }

      // Reset timer to the beginning
      timer.setValue(0);
      Animated.loop(indeterminateAnimation.current).start();
    } else {
      Animated.timing(timer, {
        duration: 200 * scale,
        toValue: progress ? progress : 0,
        useNativeDriver: true,
        isInteraction: false
      }).start();
    }
  }, [fade, scale, indeterminate, timer, progress, isWeb]);
  const stopAnimation = React.useCallback(() => {
    // Stop indeterminate animation
    if (indeterminateAnimation.current) {
      indeterminateAnimation.current.stop();
    }
    Animated.timing(fade, {
      duration: 200 * scale,
      toValue: 0,
      useNativeDriver: true,
      isInteraction: false
    }).start();
  }, [fade, scale]);
  React.useEffect(() => {
    if (visible) startAnimation();else stopAnimation();
  }, [visible, startAnimation, stopAnimation]);
  React.useEffect(() => {
    if (animatedValue && animatedValue >= 0) {
      timer.setValue(animatedValue);
    }
  }, [animatedValue, timer]);
  React.useEffect(() => {
    // Start animation the very first time when previously the width was unclear
    if (visible && prevWidth === 0) {
      startAnimation();
    }
  }, [prevWidth, startAnimation, visible]);
  const onLayout = event => {
    setPrevWidth(width);
    setWidth(event.nativeEvent.layout.width);
  };
  const tintColor = color || ((_theme$colors = theme.colors) === null || _theme$colors === void 0 ? void 0 : _theme$colors.primary);
  const trackTintColor = theme.isV3 ? theme.colors.surfaceVariant : setColor(tintColor).alpha(0.38).rgb().string();
  return /*#__PURE__*/React.createElement(View, _extends({
    onLayout: onLayout
  }, rest, {
    accessible: true,
    accessibilityRole: "progressbar",
    accessibilityState: {
      busy: visible
    },
    accessibilityValue: indeterminate ? {} : {
      min: 0,
      max: 100,
      now: progress * 100
    },
    style: isWeb && styles.webContainer,
    testID: testID
  }), /*#__PURE__*/React.createElement(Animated.View, {
    style: [styles.container, {
      backgroundColor: trackTintColor,
      opacity: fade
    }, style]
  }, width ? /*#__PURE__*/React.createElement(Animated.View, {
    testID: `${testID}-fill`,
    style: [styles.progressBar, {
      width,
      backgroundColor: tintColor,
      transform: [{
        translateX: timer.interpolate(indeterminate ? {
          inputRange: [0, 0.5, 1],
          outputRange: [(isRTL ? 1 : -1) * 0.5 * width, (isRTL ? 1 : -1) * 0.5 * INDETERMINATE_MAX_WIDTH * width, (isRTL ? -1 : 1) * 0.7 * width]
        } : {
          inputRange: [0, 1],
          outputRange: [(isRTL ? 1 : -1) * 0.5 * width, 0]
        })
      }, {
        // Workaround for workaround for https://github.com/facebook/react-native/issues/6278
        scaleX: timer.interpolate(indeterminate ? {
          inputRange: [0, 0.5, 1],
          outputRange: [0.0001, INDETERMINATE_MAX_WIDTH, 0.0001]
        } : {
          inputRange: [0, 1],
          outputRange: [0.0001, 1]
        })
      }]
    }, fillStyle]
  }) : null));
};
const styles = StyleSheet.create({
  container: {
    height: 4,
    overflow: 'hidden'
  },
  webContainer: {
    width: '100%',
    height: '100%'
  },
  progressBar: {
    flex: 1
  }
});
export default ProgressBar;
//# sourceMappingURL=ProgressBar.js.map