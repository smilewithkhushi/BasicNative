"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getTouchableRippleColors = void 0;
var _color = _interopRequireDefault(require("color"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
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
    return (0, _color.default)(calculatedRippleColor).rgb().string();
  }
  return (0, _color.default)(calculatedRippleColor).fade(0.5).rgb().string();
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
    return (0, _color.default)(theme.colors.onSurface).alpha(0.12).rgb().string();
  }
  if (theme.dark) {
    return (0, _color.default)(theme.colors.text).alpha(0.32).rgb().string();
  }
  return (0, _color.default)(theme.colors.text).alpha(0.2).rgb().string();
};
const getTouchableRippleColors = _ref3 => {
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
exports.getTouchableRippleColors = getTouchableRippleColors;
//# sourceMappingURL=utils.js.map