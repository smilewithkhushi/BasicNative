import color from 'color';
export function getTextColor(_ref) {
  var _theme$colors;
  let {
    theme,
    disabled
  } = _ref;
  if (theme.isV3) {
    if (disabled) {
      return theme.colors.onSurfaceDisabled;
    }
    return theme.colors.onSurfaceVariant;
  }
  return color((_theme$colors = theme.colors) === null || _theme$colors === void 0 ? void 0 : _theme$colors.text).alpha(theme.dark ? 0.7 : 0.54).rgb().string();
}
export function getIconColor(_ref2) {
  let {
    theme,
    isTextInputFocused,
    disabled,
    customColor
  } = _ref2;
  if (typeof customColor === 'function') {
    return customColor(isTextInputFocused);
  }
  if (customColor) {
    return customColor;
  }
  if (!theme.isV3) {
    return theme.colors.text;
  }
  if (disabled) {
    return theme.colors.onSurfaceDisabled;
  }
  return theme.colors.onSurfaceVariant;
}
//# sourceMappingURL=utils.js.map