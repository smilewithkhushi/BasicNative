"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getRightStyles = exports.getLeftStyles = exports.getAccordionColors = void 0;
var _reactNative = require("react-native");
var _color = _interopRequireDefault(require("color"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const getLeftStyles = (alignToTop, description, isV3) => {
  const stylesV3 = {
    marginRight: 0,
    marginLeft: 16,
    alignSelf: alignToTop ? 'flex-start' : 'center'
  };
  if (!description) {
    return {
      ...styles.iconMarginLeft,
      ...styles.marginVerticalNone,
      ...(isV3 && {
        ...stylesV3
      })
    };
  }
  if (!isV3) {
    return styles.iconMarginLeft;
  }
  return {
    ...styles.iconMarginLeft,
    ...stylesV3
  };
};
exports.getLeftStyles = getLeftStyles;
const getRightStyles = (alignToTop, description, isV3) => {
  const stylesV3 = {
    marginLeft: 16,
    alignSelf: alignToTop ? 'flex-start' : 'center'
  };
  if (!description) {
    return {
      ...styles.iconMarginRight,
      ...styles.marginVerticalNone,
      ...(isV3 && {
        ...stylesV3
      })
    };
  }
  if (!isV3) {
    return styles.iconMarginRight;
  }
  return {
    ...styles.iconMarginRight,
    ...stylesV3
  };
};
exports.getRightStyles = getRightStyles;
const styles = _reactNative.StyleSheet.create({
  marginVerticalNone: {
    marginVertical: 0
  },
  iconMarginLeft: {
    marginLeft: 0,
    marginRight: 16
  },
  iconMarginRight: {
    marginRight: 0
  }
});
const getAccordionColors = _ref => {
  var _theme$colors;
  let {
    theme,
    isExpanded,
    customRippleColor
  } = _ref;
  const titleColor = theme.isV3 ? theme.colors.onSurface : (0, _color.default)(theme.colors.text).alpha(0.87).rgb().string();
  const descriptionColor = theme.isV3 ? theme.colors.onSurfaceVariant : (0, _color.default)(theme.colors.text).alpha(0.54).rgb().string();
  const titleTextColor = isExpanded ? (_theme$colors = theme.colors) === null || _theme$colors === void 0 ? void 0 : _theme$colors.primary : titleColor;
  const rippleColor = customRippleColor || (0, _color.default)(titleTextColor).alpha(0.12).rgb().string();
  return {
    titleColor,
    descriptionColor,
    titleTextColor,
    rippleColor
  };
};
exports.getAccordionColors = getAccordionColors;
//# sourceMappingURL=utils.js.map