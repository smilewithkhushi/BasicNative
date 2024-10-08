function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { getIconColor } from './utils';
import { useInternalTheme } from '../../../core/theming';
import IconButton from '../../IconButton/IconButton';
import { ICON_SIZE } from '../constants';
import { getConstants } from '../helpers';
const StyleContext = /*#__PURE__*/React.createContext({
  style: {},
  isTextInputFocused: false,
  forceFocus: () => {},
  testID: ''
});
const IconAdornment = _ref => {
  let {
    icon,
    topPosition,
    side,
    isTextInputFocused,
    forceFocus,
    testID,
    theme: themeOverrides,
    disabled
  } = _ref;
  const {
    isV3
  } = useInternalTheme(themeOverrides);
  const {
    ICON_OFFSET
  } = getConstants(isV3);
  const style = {
    top: topPosition,
    [side]: ICON_OFFSET
  };
  const contextState = {
    style,
    isTextInputFocused,
    forceFocus,
    testID,
    disabled
  };
  return /*#__PURE__*/React.createElement(StyleContext.Provider, {
    value: contextState
  }, icon);
};

/**
 * A component to render a leading / trailing icon in the TextInput
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
 *       label="Password"
 *       secureTextEntry
 *       right={<TextInput.Icon icon="eye" />}
 *     />
 *   );
 * };
 *
 * export default MyComponent;
 * ```
 */

const TextInputIcon = _ref2 => {
  let {
    icon,
    onPress,
    forceTextInputFocus,
    color: customColor,
    theme: themeOverrides,
    rippleColor,
    ...rest
  } = _ref2;
  const {
    style,
    isTextInputFocused,
    forceFocus,
    testID,
    disabled
  } = React.useContext(StyleContext);
  const onPressWithFocusControl = React.useCallback(e => {
    if (forceTextInputFocus && !isTextInputFocused) {
      forceFocus();
    }
    onPress === null || onPress === void 0 ? void 0 : onPress(e);
  }, [forceTextInputFocus, forceFocus, isTextInputFocused, onPress]);
  const theme = useInternalTheme(themeOverrides);
  const iconColor = getIconColor({
    theme,
    disabled,
    isTextInputFocused,
    customColor
  });
  return /*#__PURE__*/React.createElement(View, {
    style: [styles.container, style]
  }, /*#__PURE__*/React.createElement(IconButton, _extends({
    icon: icon,
    style: styles.iconButton,
    size: ICON_SIZE,
    onPress: onPressWithFocusControl,
    iconColor: iconColor,
    testID: testID,
    theme: themeOverrides,
    rippleColor: rippleColor
  }, rest)));
};
TextInputIcon.displayName = 'TextInput.Icon';
TextInputIcon.defaultProps = {
  forceTextInputFocus: true
};
const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    width: ICON_SIZE,
    height: ICON_SIZE,
    justifyContent: 'center',
    alignItems: 'center'
  },
  iconButton: {
    margin: 0
  }
});
export default TextInputIcon;

// @component-docs ignore-next-line
export { IconAdornment };
//# sourceMappingURL=TextInputIcon.js.map