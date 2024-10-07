"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getIconButtonColor = void 0;
var _color = _interopRequireDefault(require("color"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const getBorderColor = _ref => {
  let {
    theme,
    disabled
  } = _ref;
  if (theme.isV3) {
    if (disabled) {
      return theme.colors.surfaceDisabled;
    }
    return theme.colors.outline;
  }
  return undefined;
};
const getBackgroundColor = _ref2 => {
  let {
    theme,
    isMode,
    disabled,
    selected,
    customContainerColor
  } = _ref2;
  if (theme.isV3) {
    if (disabled) {
      if (isMode('contained') || isMode('contained-tonal')) {
        return theme.colors.surfaceDisabled;
      }
    }
    if (typeof customContainerColor !== 'undefined') {
      return customContainerColor;
    }
    if (isMode('contained')) {
      if (selected) {
        return theme.colors.primary;
      }
      return theme.colors.surfaceVariant;
    }
    if (isMode('contained-tonal')) {
      if (selected) {
        return theme.colors.secondaryContainer;
      }
      return theme.colors.surfaceVariant;
    }
    if (isMode('outlined')) {
      if (selected) {
        return theme.colors.inverseSurface;
      }
    }
  }
  if (typeof customContainerColor !== 'undefined') {
    return customContainerColor;
  }
  return undefined;
};
const getIconColor = _ref3 => {
  let {
    theme,
    isMode,
    disabled,
    selected,
    customIconColor
  } = _ref3;
  if (theme.isV3) {
    if (disabled) {
      return theme.colors.onSurfaceDisabled;
    }
    if (typeof customIconColor !== 'undefined') {
      return customIconColor;
    }
    if (isMode('contained')) {
      if (selected) {
        return theme.colors.onPrimary;
      }
      return theme.colors.primary;
    }
    if (isMode('contained-tonal')) {
      if (selected) {
        return theme.colors.onSecondaryContainer;
      }
      return theme.colors.onSurfaceVariant;
    }
    if (isMode('outlined')) {
      if (selected) {
        return theme.colors.inverseOnSurface;
      }
      return theme.colors.onSurfaceVariant;
    }
    if (selected) {
      return theme.colors.primary;
    }
    return theme.colors.onSurfaceVariant;
  }
  if (typeof customIconColor !== 'undefined') {
    return customIconColor;
  }
  return theme.colors.text;
};
const getRippleColor = _ref4 => {
  let {
    theme,
    iconColor,
    customRippleColor
  } = _ref4;
  if (customRippleColor) {
    return customRippleColor;
  }
  if (theme.isV3) {
    return (0, _color.default)(iconColor).alpha(0.12).rgb().string();
  }
  return (0, _color.default)(iconColor).alpha(0.32).rgb().string();
};
const getIconButtonColor = _ref5 => {
  let {
    theme,
    disabled,
    mode,
    selected,
    customIconColor,
    customContainerColor,
    customRippleColor
  } = _ref5;
  const isMode = modeToCompare => {
    return mode === modeToCompare;
  };
  const baseIconColorProps = {
    theme,
    isMode,
    disabled,
    selected
  };
  const iconColor = getIconColor({
    ...baseIconColorProps,
    customIconColor
  });
  return {
    iconColor,
    backgroundColor: getBackgroundColor({
      ...baseIconColorProps,
      customContainerColor
    }),
    rippleColor: getRippleColor({
      theme,
      iconColor,
      customRippleColor
    }),
    borderColor: getBorderColor({
      theme,
      disabled
    })
  };
};
exports.getIconButtonColor = getIconButtonColor;
//# sourceMappingURL=utils.js.map