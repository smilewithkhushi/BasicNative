"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getMenuItemColor = exports.getContentMaxWidth = exports.MIN_WIDTH = exports.MAX_WIDTH = void 0;
var _color = _interopRequireDefault(require("color"));
var _colors = require("../../styles/themes/v2/colors");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const MIN_WIDTH = 112;
exports.MIN_WIDTH = MIN_WIDTH;
const MAX_WIDTH = 280;
exports.MAX_WIDTH = MAX_WIDTH;
const getDisabledColor = theme => {
  if (theme.isV3) {
    return theme.colors.onSurfaceDisabled;
  }
  return (0, _color.default)(theme.dark ? _colors.white : _colors.black).alpha(0.32).rgb().string();
};
const getTitleColor = _ref => {
  let {
    theme,
    disabled
  } = _ref;
  if (disabled) {
    return getDisabledColor(theme);
  }
  if (theme.isV3) {
    return theme.colors.onSurface;
  }
  return (0, _color.default)(theme.colors.text).alpha(0.87).rgb().string();
};
const getIconColor = _ref2 => {
  let {
    theme,
    disabled
  } = _ref2;
  if (disabled) {
    return getDisabledColor(theme);
  }
  if (theme.isV3) {
    return theme.colors.onSurfaceVariant;
  }
  return (0, _color.default)(theme.colors.text).alpha(0.54).rgb().string();
};
const getRippleColor = _ref3 => {
  let {
    theme,
    customRippleColor
  } = _ref3;
  if (customRippleColor) {
    return customRippleColor;
  }
  if (theme.isV3) {
    return (0, _color.default)(theme.colors.onSurfaceVariant).alpha(0.12).rgb().string();
  }
  return undefined;
};
const getMenuItemColor = _ref4 => {
  let {
    theme,
    disabled,
    customRippleColor
  } = _ref4;
  return {
    titleColor: getTitleColor({
      theme,
      disabled
    }),
    iconColor: getIconColor({
      theme,
      disabled
    }),
    rippleColor: getRippleColor({
      theme,
      customRippleColor
    })
  };
};
exports.getMenuItemColor = getMenuItemColor;
const getContentMaxWidth = _ref5 => {
  let {
    isV3,
    iconWidth,
    leadingIcon,
    trailingIcon
  } = _ref5;
  if (isV3) {
    if (leadingIcon && trailingIcon) {
      return MAX_WIDTH - (2 * iconWidth + 24);
    }
    if (leadingIcon || trailingIcon) {
      return MAX_WIDTH - (iconWidth + 24);
    }
    return MAX_WIDTH - 12;
  }
  if (leadingIcon) {
    return MAX_WIDTH - (iconWidth + 48);
  }
  return MAX_WIDTH - 16;
};
exports.getContentMaxWidth = getContentMaxWidth;
//# sourceMappingURL=utils.js.map