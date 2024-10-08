import * as React from 'react';
import { Animated, StyleSheet, View } from 'react-native';
import Icon, { isEqualIcon, isValidIcon } from './Icon';
import { useInternalTheme } from '../core/theming';
const CrossFadeIcon = _ref => {
  let {
    color,
    size,
    source,
    theme: themeOverrides,
    testID = 'cross-fade-icon'
  } = _ref;
  const theme = useInternalTheme(themeOverrides);
  const [currentIcon, setCurrentIcon] = React.useState(() => source);
  const [previousIcon, setPreviousIcon] = React.useState(null);
  const {
    current: fade
  } = React.useRef(new Animated.Value(1));
  const {
    scale
  } = theme.animation;
  if (currentIcon !== source) {
    setPreviousIcon(() => currentIcon);
    setCurrentIcon(() => source);
  }
  React.useEffect(() => {
    if (isValidIcon(previousIcon) && !isEqualIcon(previousIcon, currentIcon)) {
      fade.setValue(1);
      Animated.timing(fade, {
        duration: scale * 200,
        toValue: 0,
        useNativeDriver: true
      }).start();
    }
  }, [currentIcon, previousIcon, fade, scale]);
  const opacityPrev = fade;
  const opacityNext = previousIcon ? fade.interpolate({
    inputRange: [0, 1],
    outputRange: [1, 0]
  }) : 1;
  const rotatePrev = fade.interpolate({
    inputRange: [0, 1],
    outputRange: ['-90deg', '0deg']
  });
  const rotateNext = previousIcon ? fade.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '-180deg']
  }) : '0deg';
  return /*#__PURE__*/React.createElement(View, {
    style: [styles.content, {
      height: size,
      width: size
    }]
  }, previousIcon ? /*#__PURE__*/React.createElement(Animated.View, {
    style: [styles.icon, {
      opacity: opacityPrev,
      transform: [{
        rotate: rotatePrev
      }]
    }],
    testID: `${testID}-previous`
  }, /*#__PURE__*/React.createElement(Icon, {
    source: previousIcon,
    size: size,
    color: color,
    theme: theme
  })) : null, /*#__PURE__*/React.createElement(Animated.View, {
    style: [styles.icon, {
      opacity: opacityNext,
      transform: [{
        rotate: rotateNext
      }]
    }],
    testID: `${testID}-current`
  }, /*#__PURE__*/React.createElement(Icon, {
    source: currentIcon,
    size: size,
    color: color,
    theme: theme
  })));
};
export default CrossFadeIcon;
const styles = StyleSheet.create({
  content: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  icon: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
  }
});
//# sourceMappingURL=CrossFadeIcon.js.map