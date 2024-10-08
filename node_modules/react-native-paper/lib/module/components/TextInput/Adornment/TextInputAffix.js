import React from 'react';
import { Animated, Pressable, StyleSheet, Text } from 'react-native';
import { AdornmentSide } from './enums';
import { getTextColor } from './utils';
import { useInternalTheme } from '../../../core/theming';
import { getConstants } from '../helpers';
const AffixContext = /*#__PURE__*/React.createContext({
  textStyle: {
    fontFamily: '',
    color: ''
  },
  topPosition: null,
  side: AdornmentSide.Left
});
const AffixAdornment = _ref => {
  let {
    affix,
    side,
    textStyle,
    topPosition,
    onLayout,
    visible,
    paddingHorizontal,
    maxFontSizeMultiplier,
    testID,
    disabled
  } = _ref;
  return /*#__PURE__*/React.createElement(AffixContext.Provider, {
    value: {
      side,
      textStyle,
      topPosition,
      onLayout,
      visible,
      paddingHorizontal,
      maxFontSizeMultiplier,
      testID,
      disabled
    }
  }, affix);
};

/**
 * A component to render a leading / trailing text in the TextInput
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { TextInput } from 'react-native-paper';
 *
 * const MyComponent = () => {
 *   const [text, setText] = React.useState('');
 *
 *   return (
 *     <TextInput
 *       mode="outlined"
 *       label="Outlined input"
 *       placeholder="Type something"
 *       right={<TextInput.Affix text="/100" />}
 *     />
 *   );
 * };
 *
 * export default MyComponent;
 * ```
 */

const TextInputAffix = _ref2 => {
  let {
    text,
    textStyle: labelStyle,
    theme: themeOverrides,
    onLayout: onTextLayout,
    onPress,
    accessibilityLabel = text
  } = _ref2;
  const theme = useInternalTheme(themeOverrides);
  const {
    AFFIX_OFFSET
  } = getConstants(theme.isV3);
  const {
    textStyle,
    onLayout,
    topPosition,
    side,
    visible,
    paddingHorizontal,
    maxFontSizeMultiplier,
    testID,
    disabled
  } = React.useContext(AffixContext);
  const offset = typeof paddingHorizontal === 'number' ? paddingHorizontal : AFFIX_OFFSET;
  const style = {
    top: topPosition,
    [side]: offset
  };
  const textColor = getTextColor({
    theme,
    disabled
  });
  const affix = /*#__PURE__*/React.createElement(Animated.View, {
    style: [styles.container, style, {
      opacity: (visible === null || visible === void 0 ? void 0 : visible.interpolate({
        inputRange: [0, 1],
        outputRange: [1, 0]
      })) || 1
    }],
    onLayout: onLayout,
    testID: testID
  }, /*#__PURE__*/React.createElement(Text, {
    maxFontSizeMultiplier: maxFontSizeMultiplier,
    style: [{
      color: textColor
    }, textStyle, labelStyle],
    onLayout: onTextLayout,
    testID: `${testID}-text`
  }, text));
  if (onPress) {
    return /*#__PURE__*/React.createElement(Pressable, {
      onPress: onPress,
      accessibilityRole: "button",
      accessibilityLabel: accessibilityLabel,
      style: styles.container
    }, affix);
  }
  return affix;
};
TextInputAffix.displayName = 'TextInput.Affix';
const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center'
  }
});
export default TextInputAffix;

// @component-docs ignore-next-line
export { TextInputAffix, AffixAdornment };
//# sourceMappingURL=TextInputAffix.js.map