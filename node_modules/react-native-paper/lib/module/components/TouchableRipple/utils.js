import color from 'color';
const getUnderlayColor = _ref => {
  let {
    theme,
    calculatedRippleColor,
    underlayColor
  } = _ref;
  if (underlayColor != null) {
    return underlayColor;
  }
  if (theme.isV3) {
    return color(calculatedRippleColor).rgb().string();
  }
  return color(calculatedRippleColor).fade(0.5).rgb().string();
};
const getRippleColor = _ref2 => {
  let {
    theme,
    rippleColor
  } = _ref2;
  if (rippleColor) {
    return rippleColor;
  }
  if (theme.isV3) {
    return color(theme.colors.onSurface).alpha(0.12).rgb().string();
  }
  if (theme.dark) {
    return color(theme.colors.text).alpha(0.32).rgb().string();
  }
  return color(theme.colors.text).alpha(0.2).rgb().string();
};
export const getTouchableRippleColors = _ref3 => {
  let {
    theme,
    rippleColor,
    underlayColor
  } = _ref3;
  const calculatedRippleColor = getRippleColor({
    theme,
    rippleColor
  });
  return {
    calculatedRippleColor,
    calculatedUnderlayColor: getUnderlayColor({
      theme,
      calculatedRippleColor,
      underlayColor
    })
  };
};
//# sourceMappingURL=utils.js.map