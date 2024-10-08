import * as React from 'react';
import { Animated, StyleSheet, View } from 'react-native';
import color from 'color';
import { getSegmentedButtonBorderRadius, getSegmentedButtonColors, getSegmentedButtonDensityPadding } from './utils';
import { useInternalTheme } from '../../core/theming';
import Icon from '../Icon';
import TouchableRipple from '../TouchableRipple/TouchableRipple';
import Text from '../Typography/Text';
const SegmentedButtonItem = _ref => {
  let {
    checked,
    accessibilityLabel,
    disabled,
    style,
    labelStyle,
    showSelectedCheck,
    checkedColor,
    uncheckedColor,
    rippleColor: customRippleColor,
    background,
    icon,
    testID,
    label,
    onPress,
    segment,
    density = 'regular',
    theme: themeOverrides,
    labelMaxFontSizeMultiplier
  } = _ref;
  const theme = useInternalTheme(themeOverrides);
  const checkScale = React.useRef(new Animated.Value(0)).current;
  React.useEffect(() => {
    if (!showSelectedCheck) {
      return;
    }
    if (checked) {
      Animated.spring(checkScale, {
        toValue: 1,
        useNativeDriver: true
      }).start();
    } else {
      Animated.spring(checkScale, {
        toValue: 0,
        useNativeDriver: true
      }).start();
    }
  }, [checked, checkScale, showSelectedCheck]);
  const {
    roundness,
    isV3
  } = theme;
  const {
    borderColor,
    textColor,
    borderWidth,
    backgroundColor
  } = getSegmentedButtonColors({
    checked,
    theme,
    disabled,
    checkedColor,
    uncheckedColor
  });
  const borderRadius = (isV3 ? 5 : 1) * roundness;
  const segmentBorderRadius = getSegmentedButtonBorderRadius({
    theme,
    segment
  });
  const rippleColor = customRippleColor || color(textColor).alpha(0.12).rgb().string();
  const showIcon = !icon ? false : label && checked ? !showSelectedCheck : true;
  const showCheckedIcon = checked && showSelectedCheck;
  const iconSize = isV3 ? 18 : 16;
  const iconStyle = {
    marginRight: label ? 5 : showCheckedIcon ? 3 : 0,
    ...(label && {
      transform: [{
        scale: checkScale.interpolate({
          inputRange: [0, 1],
          outputRange: [1, 0]
        })
      }]
    })
  };
  const buttonStyle = {
    backgroundColor,
    borderColor,
    borderWidth,
    borderRadius,
    ...segmentBorderRadius
  };
  const paddingVertical = getSegmentedButtonDensityPadding({
    density
  });
  const rippleStyle = {
    borderRadius,
    ...segmentBorderRadius
  };
  const labelTextStyle = {
    ...(!isV3 ? {
      textTransform: 'uppercase',
      fontWeight: '500'
    } : theme.fonts.labelLarge),
    color: textColor
  };
  return /*#__PURE__*/React.createElement(View, {
    style: [buttonStyle, styles.button, style]
  }, /*#__PURE__*/React.createElement(TouchableRipple, {
    borderless: true,
    onPress: onPress,
    accessibilityLabel: accessibilityLabel,
    accessibilityState: {
      disabled,
      checked
    },
    accessibilityRole: "button",
    disabled: disabled,
    rippleColor: rippleColor,
    testID: testID,
    style: rippleStyle,
    background: background,
    theme: theme
  }, /*#__PURE__*/React.createElement(View, {
    style: [styles.content, {
      paddingVertical
    }]
  }, showCheckedIcon ? /*#__PURE__*/React.createElement(Animated.View, {
    testID: `${testID}-check-icon`,
    style: [iconStyle, {
      transform: [{
        scale: checkScale
      }]
    }]
  }, /*#__PURE__*/React.createElement(Icon, {
    source: 'check',
    size: iconSize,
    color: textColor
  })) : null, showIcon ? /*#__PURE__*/React.createElement(Animated.View, {
    testID: `${testID}-icon`,
    style: iconStyle
  }, /*#__PURE__*/React.createElement(Icon, {
    source: icon,
    size: iconSize,
    color: textColor
  })) : null, /*#__PURE__*/React.createElement(Text, {
    variant: "labelLarge",
    style: [styles.label, labelTextStyle, labelStyle],
    selectable: false,
    numberOfLines: 1,
    maxFontSizeMultiplier: labelMaxFontSizeMultiplier,
    testID: `${testID}-label`
  }, label))));
};
const styles = StyleSheet.create({
  button: {
    flex: 1,
    minWidth: 76,
    borderStyle: 'solid'
  },
  label: {
    textAlign: 'center'
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 9,
    paddingHorizontal: 16
  }
});
export default SegmentedButtonItem;
export { SegmentedButtonItem as SegmentedButton };
//# sourceMappingURL=SegmentedButtonItem.js.map