function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from 'react';
import { Animated, StyleSheet, View } from 'react-native';
import { RadioButtonContext } from './RadioButtonGroup';
import { handlePress, isChecked } from './utils';
import { useInternalTheme } from '../../core/theming';
import { getAndroidSelectionControlColor } from '../Checkbox/utils';
import TouchableRipple from '../TouchableRipple/TouchableRipple';
const BORDER_WIDTH = 2;

/**
 * Radio buttons allow the selection a single option from a set.
 * This component follows platform guidelines for Android, but can be used
 * on any platform.
 *
 * @extends TouchableRipple props https://callstack.github.io/react-native-paper/docs/components/TouchableRipple
 */
const RadioButtonAndroid = _ref => {
  let {
    disabled,
    onPress,
    theme: themeOverrides,
    value,
    status,
    testID,
    ...rest
  } = _ref;
  const theme = useInternalTheme(themeOverrides);
  const {
    current: borderAnim
  } = React.useRef(new Animated.Value(BORDER_WIDTH));
  const {
    current: radioAnim
  } = React.useRef(new Animated.Value(1));
  const isFirstRendering = React.useRef(true);
  const {
    scale
  } = theme.animation;
  React.useEffect(() => {
    // Do not run animation on very first rendering
    if (isFirstRendering.current) {
      isFirstRendering.current = false;
      return;
    }
    if (status === 'checked') {
      radioAnim.setValue(1.2);
      Animated.timing(radioAnim, {
        toValue: 1,
        duration: 150 * scale,
        useNativeDriver: true
      }).start();
    } else {
      borderAnim.setValue(10);
      Animated.timing(borderAnim, {
        toValue: BORDER_WIDTH,
        duration: 150 * scale,
        useNativeDriver: false
      }).start();
    }
  }, [status, borderAnim, radioAnim, scale]);
  return /*#__PURE__*/React.createElement(RadioButtonContext.Consumer, null, context => {
    const checked = isChecked({
      contextValue: context === null || context === void 0 ? void 0 : context.value,
      status,
      value
    }) === 'checked';
    const {
      rippleColor,
      selectionControlColor
    } = getAndroidSelectionControlColor({
      theme,
      disabled,
      checked,
      customColor: rest.color,
      customUncheckedColor: rest.uncheckedColor
    });
    return /*#__PURE__*/React.createElement(TouchableRipple, _extends({}, rest, {
      borderless: true,
      rippleColor: rippleColor,
      onPress: disabled ? undefined : event => {
        handlePress({
          onPress,
          onValueChange: context === null || context === void 0 ? void 0 : context.onValueChange,
          value,
          event
        });
      },
      accessibilityRole: "radio",
      accessibilityState: {
        disabled,
        checked
      },
      accessibilityLiveRegion: "polite",
      style: styles.container,
      testID: testID,
      theme: theme
    }), /*#__PURE__*/React.createElement(Animated.View, {
      style: [styles.radio, {
        borderColor: selectionControlColor,
        borderWidth: borderAnim
      }]
    }, checked ? /*#__PURE__*/React.createElement(View, {
      style: [StyleSheet.absoluteFill, styles.radioContainer]
    }, /*#__PURE__*/React.createElement(Animated.View, {
      style: [styles.dot, {
        backgroundColor: selectionControlColor,
        transform: [{
          scale: radioAnim
        }]
      }]
    })) : null));
  });
};
RadioButtonAndroid.displayName = 'RadioButton.Android';
const styles = StyleSheet.create({
  container: {
    borderRadius: 18
  },
  radioContainer: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  radio: {
    height: 20,
    width: 20,
    borderRadius: 10,
    margin: 8
  },
  dot: {
    height: 10,
    width: 10,
    borderRadius: 5
  }
});
export default RadioButtonAndroid;

// @component-docs ignore-next-line
export { RadioButtonAndroid };
//# sourceMappingURL=RadioButtonAndroid.js.map