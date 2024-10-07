import color from 'color';
export const getActiveTintColor = _ref => {
  let {
    activeColor,
    defaultColor,
    theme
  } = _ref;
  if (typeof activeColor === 'string') {
    return activeColor;
  }
  if (theme.isV3) {
    return theme.colors.onSecondaryContainer;
  }
  return defaultColor;
};
export const getInactiveTintColor = _ref2 => {
  let {
    inactiveColor,
    defaultColor,
    theme
  } = _ref2;
  if (typeof inactiveColor === 'string') {
    return inactiveColor;
  }
  if (theme.isV3) {
    return theme.colors.onSurfaceVariant;
  }
  return color(defaultColor).alpha(0.5).rgb().string();
};
export const getLabelColor = _ref3 => {
  let {
    tintColor,
    hasColor,
    focused,
    defaultColor,
    theme
  } = _ref3;
  if (hasColor) {
    return tintColor;
  }
  if (theme.isV3) {
    if (focused) {
      return theme.colors.onSurface;
    }
    return theme.colors.onSurfaceVariant;
  }
  return defaultColor;
};
//# sourceMappingURL=utils.js.map