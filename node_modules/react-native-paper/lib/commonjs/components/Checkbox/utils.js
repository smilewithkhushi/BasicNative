"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getSelectionControlIOSColor = exports.getAndroidSelectionControlColor = void 0;
var _color = _interopRequireDefault(require("color"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const getAndroidCheckedColor = _ref => {
  let {
    theme,
    customColor
  } = _ref;
  if (customColor) {
    return customColor;
  }
  if (theme.isV3) {
    return theme.colors.primary;
  }
  return theme.colors.accent;
};
const getAndroidUncheckedColor = _ref2 => {
  let {
    theme,
    customUncheckedColor
  } = _ref2;
  if (customUncheckedColor) {
    return customUncheckedColor;
  }
  if (theme.isV3) {
    return theme.colors.onSurfaceVariant;
  }
  if (theme.dark) {
    return (0, _color.default)(theme.colors.text).alpha(0.7).rgb().string();
  }
  return (0, _color.default)(theme.colors.text).alpha(0.54).rgb().string();
};
const getAndroidRippleColor = _ref3 => {
  let {
    theme,
    checkedColor,
    disabled
  } = _ref3;
  if (disabled) {
    if (theme.isV3) {
      return (0, _color.default)(theme.colors.onSurface).alpha(0.16).rgb().string();
    }
    return (0, _color.default)(theme.colors.text).alpha(0.16).rgb().string();
  }
  return (0, _color.default)(checkedColor).fade(0.32).rgb().string();
};
const getAndroidControlColor = _ref4 => {
  let {
    theme,
    checked,
    disabled,
    checkedColor,
    uncheckedColor
  } = _ref4;
  if (disabled) {
    if (theme.isV3) {
      return theme.colors.onSurfaceDisabled;
    }
    return theme.colors.disabled;
  }
  if (checked) {
    return checkedColor;
  }
  return uncheckedColor;
};
const getAndroidSelectionControlColor = _ref5 => {
  let {
    theme,
    disabled,
    checked,
    customColor,
    customUncheckedColor
  } = _ref5;
  const checkedColor = getAndroidCheckedColor({
    theme,
    customColor
  });
  const uncheckedColor = getAndroidUncheckedColor({
    theme,
    customUncheckedColor
  });
  return {
    rippleColor: getAndroidRippleColor({
      theme,
      checkedColor,
      disabled
    }),
    selectionControlColor: getAndroidControlColor({
      theme,
      disabled,
      checked,
      checkedColor,
      uncheckedColor
    })
  };
};
exports.getAndroidSelectionControlColor = getAndroidSelectionControlColor;
const getIOSCheckedColor = _ref6 => {
  let {
    theme,
    disabled,
    customColor
  } = _ref6;
  if (disabled) {
    if (theme.isV3) {
      return theme.colors.onSurfaceDisabled;
    }
    return theme.colors.disabled;
  }
  if (customColor) {
    return customColor;
  }
  if (theme.isV3) {
    return theme.colors.primary;
  }
  return theme.colors.accent;
};
const getIOSRippleColor = _ref7 => {
  let {
    theme,
    checkedColor,
    disabled
  } = _ref7;
  if (disabled) {
    if (theme.isV3) {
      return (0, _color.default)(theme.colors.onSurface).alpha(0.16).rgb().string();
    }
    return (0, _color.default)(theme.colors.text).alpha(0.16).rgb().string();
  }
  return (0, _color.default)(checkedColor).fade(0.32).rgb().string();
};
const getSelectionControlIOSColor = _ref8 => {
  let {
    theme,
    disabled,
    customColor
  } = _ref8;
  const checkedColor = getIOSCheckedColor({
    theme,
    disabled,
    customColor
  });
  return {
    checkedColor,
    rippleColor: getIOSRippleColor({
      theme,
      checkedColor,
      disabled
    })
  };
};
exports.getSelectionControlIOSColor = getSelectionControlIOSColor;
//# sourceMappingURL=utils.js.map