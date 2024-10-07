function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from 'react';
import { Animated, Easing, I18nManager, Platform, ScrollView, StyleSheet, View } from 'react-native';
import color from 'color';
import { getCombinedStyles, getFABColors } from './utils';
import { useInternalTheme } from '../../core/theming';
import Icon from '../Icon';
import Surface from '../Surface';
import TouchableRipple from '../TouchableRipple/TouchableRipple';
import AnimatedText from '../Typography/AnimatedText';
const SIZE = 56;
const SCALE = 0.9;

/**
 * An animated, extending horizontally floating action button represents the primary action in an application.
 *
 * ## Usage
 * ```js
 * import React from 'react';
 * import {
 *   StyleProp,
 *   ViewStyle,
 *   Animated,
 *   StyleSheet,
 *   Platform,
 *   ScrollView,
 *   Text,
 *   SafeAreaView,
 *   I18nManager,
 * } from 'react-native';
 * import { AnimatedFAB } from 'react-native-paper';
 *
 * const MyComponent = ({
 *   animatedValue,
 *   visible,
 *   extended,
 *   label,
 *   animateFrom,
 *   style,
 *   iconMode,
 * }) => {
 *   const [isExtended, setIsExtended] = React.useState(true);
 *
 *   const isIOS = Platform.OS === 'ios';
 *
 *   const onScroll = ({ nativeEvent }) => {
 *     const currentScrollPosition =
 *       Math.floor(nativeEvent?.contentOffset?.y) ?? 0;
 *
 *     setIsExtended(currentScrollPosition <= 0);
 *   };
 *
 *   const fabStyle = { [animateFrom]: 16 };
 *
 *   return (
 *     <SafeAreaView style={styles.container}>
 *       <ScrollView onScroll={onScroll}>
 *         {[...new Array(100).keys()].map((_, i) => (
 *           <Text>{i}</Text>
 *         ))}
 *       </ScrollView>
 *       <AnimatedFAB
 *         icon={'plus'}
 *         label={'Label'}
 *         extended={isExtended}
 *         onPress={() => console.log('Pressed')}
 *         visible={visible}
 *         animateFrom={'right'}
 *         iconMode={'static'}
 *         style={[styles.fabStyle, style, fabStyle]}
 *       />
 *     </SafeAreaView>
 *   );
 * };
 *
 * export default MyComponent;
 *
 * const styles = StyleSheet.create({
 *   container: {
 *     flexGrow: 1,
 *   },
 *   fabStyle: {
 *     bottom: 16,
 *     right: 16,
 *     position: 'absolute',
 *   },
 * });
 * ```
 */
const AnimatedFAB = _ref => {
  let {
    icon,
    label,
    background,
    accessibilityLabel = label,
    accessibilityState,
    color: customColor,
    rippleColor: customRippleColor,
    disabled,
    onPress,
    onLongPress,
    delayLongPress,
    theme: themeOverrides,
    style,
    visible = true,
    uppercase: uppercaseProp,
    testID = 'animated-fab',
    animateFrom = 'right',
    extended = false,
    iconMode = 'dynamic',
    variant = 'primary',
    labelMaxFontSizeMultiplier,
    ...rest
  } = _ref;
  const theme = useInternalTheme(themeOverrides);
  const uppercase = uppercaseProp ?? !theme.isV3;
  const isIOS = Platform.OS === 'ios';
  const isAnimatedFromRight = animateFrom === 'right';
  const isIconStatic = iconMode === 'static';
  const {
    isRTL
  } = I18nManager;
  const {
    current: visibility
  } = React.useRef(new Animated.Value(visible ? 1 : 0));
  const {
    current: animFAB
  } = React.useRef(new Animated.Value(0));
  const {
    isV3,
    animation
  } = theme;
  const {
    scale
  } = animation;
  const [textWidth, setTextWidth] = React.useState(0);
  const [textHeight, setTextHeight] = React.useState(0);
  const borderRadius = SIZE / (isV3 ? 3.5 : 2);
  React.useEffect(() => {
    if (visible) {
      Animated.timing(visibility, {
        toValue: 1,
        duration: 200 * scale,
        useNativeDriver: true
      }).start();
    } else {
      Animated.timing(visibility, {
        toValue: 0,
        duration: 150 * scale,
        useNativeDriver: true
      }).start();
    }
  }, [visible, scale, visibility]);
  const {
    backgroundColor: customBackgroundColor,
    ...restStyle
  } = StyleSheet.flatten(style) || {};
  const {
    backgroundColor,
    foregroundColor
  } = getFABColors({
    theme,
    variant,
    disabled,
    customColor,
    customBackgroundColor
  });
  const rippleColor = customRippleColor || color(foregroundColor).alpha(0.12).rgb().string();
  const extendedWidth = textWidth + SIZE + borderRadius;
  const distance = isAnimatedFromRight ? -textWidth - borderRadius : textWidth + borderRadius;
  React.useEffect(() => {
    Animated.timing(animFAB, {
      toValue: !extended ? 0 : distance,
      duration: 150 * scale,
      useNativeDriver: true,
      easing: Easing.linear
    }).start();
  }, [animFAB, scale, distance, extended]);
  const onTextLayout = _ref2 => {
    let {
      nativeEvent
    } = _ref2;
    const currentWidth = Math.ceil(nativeEvent.lines[0].width);
    const currentHeight = Math.ceil(nativeEvent.lines[0].height);
    if (currentWidth !== textWidth || currentHeight !== textHeight) {
      setTextHeight(currentHeight);
      if (isIOS) {
        return setTextWidth(currentWidth - 12);
      }
      setTextWidth(currentWidth);
    }
  };
  const propForDirection = right => {
    if (isAnimatedFromRight) {
      return right;
    }
    return right.reverse();
  };
  const combinedStyles = getCombinedStyles({
    isAnimatedFromRight,
    isIconStatic,
    distance,
    animFAB
  });
  const font = isV3 ? theme.fonts.labelLarge : theme.fonts.medium;
  const textStyle = {
    color: foregroundColor,
    ...font
  };
  const md2Elevation = disabled || !isIOS ? 0 : 6;
  const md3Elevation = disabled || !isIOS ? 0 : 3;
  const shadowStyle = isV3 ? styles.v3Shadow : styles.shadow;
  const baseStyle = [StyleSheet.absoluteFill, disabled ? styles.disabled : shadowStyle];
  const newAccessibilityState = {
    ...accessibilityState,
    disabled
  };
  return /*#__PURE__*/React.createElement(Surface, _extends({}, rest, {
    testID: `${testID}-container`,
    style: [{
      opacity: visibility,
      transform: [{
        scale: visibility
      }],
      borderRadius
    }, !isV3 && {
      elevation: md2Elevation
    }, styles.container, restStyle]
  }, isV3 && {
    elevation: md3Elevation
  }, {
    theme: theme
  }), /*#__PURE__*/React.createElement(Animated.View, {
    style: [!isV3 && {
      transform: [{
        scaleY: animFAB.interpolate({
          inputRange: propForDirection([distance, 0]),
          outputRange: propForDirection([SCALE, 1])
        })
      }]
    }, styles.standard, {
      borderRadius
    }]
  }, /*#__PURE__*/React.createElement(View, {
    style: [StyleSheet.absoluteFill, styles.shadowWrapper]
  }, /*#__PURE__*/React.createElement(Animated.View, {
    pointerEvents: "none",
    style: [baseStyle, {
      width: extendedWidth,
      opacity: animFAB.interpolate({
        inputRange: propForDirection([distance, 0.9 * distance, 0]),
        outputRange: propForDirection([1, 0.15, 0])
      }),
      borderRadius
    }],
    testID: `${testID}-extended-shadow`
  }), /*#__PURE__*/React.createElement(Animated.View, {
    pointerEvents: "none",
    style: [baseStyle, {
      opacity: animFAB.interpolate({
        inputRange: propForDirection([distance, 0.9 * distance, 0]),
        outputRange: propForDirection([0, 0.85, 1])
      }),
      width: SIZE,
      borderRadius: animFAB.interpolate({
        inputRange: propForDirection([distance, 0]),
        outputRange: propForDirection([SIZE / (extendedWidth / SIZE), borderRadius])
      })
    }, combinedStyles.absoluteFill],
    testID: `${testID}-shadow`
  })), /*#__PURE__*/React.createElement(Animated.View, {
    pointerEvents: "box-none",
    style: [styles.innerWrapper, {
      borderRadius
    }]
  }, /*#__PURE__*/React.createElement(Animated.View, {
    style: [styles.standard, {
      width: extendedWidth,
      backgroundColor,
      borderRadius
    }, combinedStyles.innerWrapper]
  }, /*#__PURE__*/React.createElement(TouchableRipple, {
    borderless: true,
    background: background,
    onPress: onPress,
    onLongPress: onLongPress,
    delayLongPress: delayLongPress,
    rippleColor: rippleColor,
    disabled: disabled,
    accessibilityLabel: accessibilityLabel,
    accessibilityRole: "button",
    accessibilityState: newAccessibilityState,
    testID: testID,
    style: {
      borderRadius
    },
    theme: theme
  }, /*#__PURE__*/React.createElement(View, {
    style: [styles.standard, {
      width: extendedWidth,
      borderRadius
    }]
  }))))), /*#__PURE__*/React.createElement(Animated.View, {
    style: [styles.iconWrapper, combinedStyles.iconWrapper],
    pointerEvents: "none"
  }, /*#__PURE__*/React.createElement(Icon, {
    source: icon,
    size: 24,
    color: foregroundColor,
    theme: theme
  })), /*#__PURE__*/React.createElement(View, {
    pointerEvents: "none"
  }, /*#__PURE__*/React.createElement(AnimatedText, {
    variant: "labelLarge",
    numberOfLines: 1,
    onTextLayout: isIOS ? onTextLayout : undefined,
    ellipsizeMode: 'tail',
    style: [{
      [isAnimatedFromRight || isRTL ? 'right' : 'left']: isIconStatic ? textWidth - SIZE + borderRadius / (isV3 ? 1 : 2) : borderRadius
    }, {
      minWidth: textWidth,
      top: -SIZE / 2 - textHeight / 2,
      opacity: animFAB.interpolate({
        inputRange: propForDirection([distance, 0.7 * distance, 0]),
        outputRange: propForDirection([1, 0, 0])
      }),
      // TODO: check
      transform: [{
        translateX: animFAB.interpolate({
          inputRange: propForDirection([distance, 0]),
          outputRange: propForDirection([0, SIZE])
        })
      }]
    }, styles.label, uppercase && styles.uppercaseLabel, textStyle],
    theme: theme,
    testID: `${testID}-text`,
    maxFontSizeMultiplier: labelMaxFontSizeMultiplier
  }, label)), !isIOS &&
  /*#__PURE__*/
  // Method `onTextLayout` on Android returns sizes of text visible on the screen,
  // however during render the text in `FAB` isn't fully visible. In order to get
  // proper text measurements there is a need to additionaly render that text, but
  // wrapped in absolutely positioned `ScrollView` which height is 0.
  React.createElement(ScrollView, {
    style: styles.textPlaceholderContainer
  }, /*#__PURE__*/React.createElement(AnimatedText, {
    variant: "labelLarge",
    numberOfLines: 1,
    onTextLayout: onTextLayout,
    ellipsizeMode: 'tail',
    style: [styles.label, uppercase && styles.uppercaseLabel, textStyle],
    theme: theme
  }, label)));
};
const styles = StyleSheet.create({
  standard: {
    height: SIZE
  },
  disabled: {
    elevation: 0
  },
  // eslint-disable-next-line react-native/no-color-literals
  container: {
    position: 'absolute',
    backgroundColor: 'transparent'
  },
  innerWrapper: {
    flexDirection: 'row',
    overflow: 'hidden'
  },
  shadowWrapper: {
    elevation: 0
  },
  shadow: {
    elevation: 6
  },
  v3Shadow: {
    elevation: 3
  },
  iconWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    height: SIZE,
    width: SIZE
  },
  label: {
    position: 'absolute'
  },
  uppercaseLabel: {
    textTransform: 'uppercase'
  },
  textPlaceholderContainer: {
    height: 0,
    position: 'absolute'
  }
});
export default AnimatedFAB;
//# sourceMappingURL=AnimatedFAB.js.map