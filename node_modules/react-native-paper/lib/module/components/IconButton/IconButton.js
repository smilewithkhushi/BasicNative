function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from 'react';
import { StyleSheet } from 'react-native';
import { getIconButtonColor } from './utils';
import { useInternalTheme } from '../../core/theming';
import { forwardRef } from '../../utils/forwardRef';
import ActivityIndicator from '../ActivityIndicator';
import CrossFadeIcon from '../CrossFadeIcon';
import Icon from '../Icon';
import Surface from '../Surface';
import TouchableRipple from '../TouchableRipple/TouchableRipple';
const PADDING = 8;
/**
 * An icon button is a button which displays only an icon without a label.
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { IconButton, MD3Colors } from 'react-native-paper';
 *
 * const MyComponent = () => (
 *   <IconButton
 *     icon="camera"
 *     iconColor={MD3Colors.error50}
 *     size={20}
 *     onPress={() => console.log('Pressed')}
 *   />
 * );
 *
 * export default MyComponent;
 * ```
 *
 * @extends TouchableRipple props https://callstack.github.io/react-native-paper/docs/components/TouchableRipple
 */
const IconButton = forwardRef((_ref, ref) => {
  let {
    icon,
    iconColor: customIconColor,
    containerColor: customContainerColor,
    rippleColor: customRippleColor,
    size = 24,
    accessibilityLabel,
    disabled,
    onPress,
    selected = false,
    animated = false,
    mode,
    style,
    theme: themeOverrides,
    testID = 'icon-button',
    loading = false,
    ...rest
  } = _ref;
  const theme = useInternalTheme(themeOverrides);
  const {
    isV3
  } = theme;
  const IconComponent = animated ? CrossFadeIcon : Icon;
  const {
    iconColor,
    rippleColor,
    backgroundColor,
    borderColor
  } = getIconButtonColor({
    theme,
    disabled,
    selected,
    mode,
    customIconColor,
    customContainerColor,
    customRippleColor
  });
  const buttonSize = isV3 ? size + 2 * PADDING : size * 1.5;
  const {
    borderWidth = isV3 && mode === 'outlined' && !selected ? 1 : 0,
    borderRadius = buttonSize / 2
  } = StyleSheet.flatten(style) || {};
  const borderStyles = {
    borderWidth,
    borderRadius,
    borderColor
  };
  return /*#__PURE__*/React.createElement(Surface, _extends({
    ref: ref,
    testID: `${testID}-container`,
    style: [{
      backgroundColor,
      width: buttonSize,
      height: buttonSize
    }, styles.container, borderStyles, !isV3 && disabled && styles.disabled, style]
  }, isV3 && {
    elevation: 0
  }), /*#__PURE__*/React.createElement(TouchableRipple, _extends({
    borderless: true,
    centered: true,
    onPress: onPress,
    rippleColor: rippleColor,
    accessibilityLabel: accessibilityLabel,
    style: [styles.touchable, {
      borderRadius
    }]
    // @ts-expect-error We keep old a11y props for backwards compat with old RN versions
    ,
    accessibilityTraits: disabled ? ['button', 'disabled'] : 'button',
    accessibilityComponentType: "button",
    accessibilityRole: "button",
    accessibilityState: {
      disabled
    },
    disabled: disabled,
    hitSlop: TouchableRipple.supported ? {
      top: 10,
      left: 10,
      bottom: 10,
      right: 10
    } : {
      top: 6,
      left: 6,
      bottom: 6,
      right: 6
    },
    testID: testID
  }, rest), loading ? /*#__PURE__*/React.createElement(ActivityIndicator, {
    size: size,
    color: iconColor
  }) : /*#__PURE__*/React.createElement(IconComponent, {
    color: iconColor,
    source: icon,
    size: size
  })));
});
const styles = StyleSheet.create({
  container: {
    overflow: 'hidden',
    margin: 6,
    elevation: 0
  },
  touchable: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  disabled: {
    opacity: 0.32
  }
});
export default IconButton;
//# sourceMappingURL=IconButton.js.map