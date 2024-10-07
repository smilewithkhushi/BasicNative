function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from 'react';
import { StyleSheet } from 'react-native';
import color from 'color';
import { ToggleButtonGroupContext } from './ToggleButtonGroup';
import { getToggleButtonColor } from './utils';
import { useInternalTheme } from '../../core/theming';
import { black, white } from '../../styles/themes/v2/colors';
import { forwardRef } from '../../utils/forwardRef';
import IconButton from '../IconButton/IconButton';
/**
 * Toggle buttons can be used to group related options. To emphasize groups of related toggle buttons,
 * a group should share a common container.
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { ToggleButton } from 'react-native-paper';
 *
 * const ToggleButtonExample = () => {
 *   const [status, setStatus] = React.useState('checked');
 *
 *   const onButtonToggle = value => {
 *     setStatus(status === 'checked' ? 'unchecked' : 'checked');
 *   };
 *
 *   return (
 *     <ToggleButton
 *       icon="bluetooth"
 *       value="bluetooth"
 *       status={status}
 *       onPress={onButtonToggle}
 *     />
 *   );
 * };
 *
 * export default ToggleButtonExample;
 *
 * ```
 */
const ToggleButton = forwardRef((_ref, ref) => {
  let {
    icon,
    size,
    theme: themeOverrides,
    accessibilityLabel,
    disabled,
    style,
    value,
    status,
    onPress,
    rippleColor,
    ...rest
  } = _ref;
  const theme = useInternalTheme(themeOverrides);
  const borderRadius = theme.roundness;
  return /*#__PURE__*/React.createElement(ToggleButtonGroupContext.Consumer, null, context => {
    const checked = context && context.value === value || status === 'checked';
    const backgroundColor = getToggleButtonColor({
      theme,
      checked
    });
    const borderColor = theme.isV3 ? theme.colors.outline : color(theme.dark ? white : black).alpha(0.29).rgb().string();
    return /*#__PURE__*/React.createElement(IconButton, _extends({
      borderless: false,
      icon: icon,
      onPress: e => {
        if (onPress) {
          onPress(e);
        }
        if (context) {
          context.onValueChange(!checked ? value : null);
        }
      },
      size: size,
      accessibilityLabel: accessibilityLabel,
      accessibilityState: {
        disabled,
        selected: checked
      },
      disabled: disabled,
      style: [styles.content, {
        backgroundColor,
        borderRadius,
        borderColor
      }, style],
      ref: ref,
      theme: theme,
      rippleColor: rippleColor
    }, rest));
  });
});
const styles = StyleSheet.create({
  content: {
    width: 42,
    height: 42,
    margin: 0
  }
});
export default ToggleButton;

// @component-docs ignore-next-line
export { ToggleButton };
//# sourceMappingURL=ToggleButton.js.map