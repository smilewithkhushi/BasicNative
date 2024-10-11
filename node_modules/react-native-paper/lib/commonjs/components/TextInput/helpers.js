"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.adjustPaddingOut = exports.adjustPaddingFlat = void 0;
exports.calculateFlatAffixTopPosition = calculateFlatAffixTopPosition;
exports.calculateLabelTopPosition = exports.calculateInputHeight = exports.calculateFlatInputHorizontalPadding = void 0;
exports.calculateOutlinedIconAndAffixTopPosition = calculateOutlinedIconAndAffixTopPosition;
exports.getOutlinedInputColors = exports.getFlatInputColors = exports.getConstants = exports.calculatePadding = void 0;
var _reactNative = require("react-native");
var _color = _interopRequireDefault(require("color"));
var _enums = require("./Adornment/enums");
var _constants = require("./constants");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const calculateLabelTopPosition = function (labelHeight) {
  let height = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  let optionalPadding = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  const customHeight = height > 0 ? height : 0;
  return Math.floor((customHeight - labelHeight) / 2 + optionalPadding);
};
exports.calculateLabelTopPosition = calculateLabelTopPosition;
const calculateInputHeight = function (labelHeight) {
  let height = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  let minHeight = arguments.length > 2 ? arguments[2] : undefined;
  const finalHeight = height > 0 ? height : labelHeight;
  if (height > 0) return height;
  return finalHeight < minHeight ? minHeight : finalHeight;
};
exports.calculateInputHeight = calculateInputHeight;
const calculatePadding = props => {
  const {
    height,
    multiline = false
  } = props;
  let result = 0;
  if (multiline) {
    if (height && multiline) {
      result = calculateTextAreaPadding(props);
    } else {
      result = calculateInputPadding(props);
    }
  }
  return Math.max(0, result);
};
exports.calculatePadding = calculatePadding;
const calculateTextAreaPadding = props => {
  const {
    dense
  } = props;
  return dense ? 10 : 20;
};
const calculateInputPadding = _ref => {
  let {
    topPosition,
    fontSize,
    multiline,
    scale,
    dense,
    offset,
    isAndroid
  } = _ref;
  const refFontSize = scale * fontSize;
  let result = Math.floor(topPosition / 2);
  result = result + Math.floor((refFontSize - fontSize) / 2) - (scale < 1 ? offset / 2 : 0);
  if (multiline && isAndroid) result = Math.min(dense ? offset / 2 : offset, result);
  return result;
};
const adjustPaddingOut = _ref2 => {
  let {
    pad,
    multiline,
    label,
    scale,
    height,
    fontSize,
    lineHeight,
    dense,
    offset,
    isAndroid
  } = _ref2;
  const fontHeight = lineHeight ?? fontSize;
  const refFontHeight = scale * fontSize;
  let result = pad;
  if (height && !multiline) {
    return {
      paddingTop: Math.max(0, (height - fontHeight) / 2),
      paddingBottom: Math.max(0, (height - fontHeight) / 2)
    };
  }
  if (!isAndroid && multiline) {
    if (dense) {
      if (label) {
        result += scale < 1 ? Math.min(offset, refFontHeight / 2 * scale) : 0;
      } else {
        result += 0;
      }
    }
    if (!dense) {
      if (label) {
        result += scale < 1 ? Math.min(offset, refFontHeight * scale) : Math.min(offset / 2, refFontHeight * scale);
      } else {
        result += scale < 1 ? Math.min(offset / 2, refFontHeight * scale) : 0;
      }
    }
    result = Math.floor(result);
  }
  return {
    paddingTop: result,
    paddingBottom: result
  };
};
exports.adjustPaddingOut = adjustPaddingOut;
const adjustPaddingFlat = _ref3 => {
  let {
    pad,
    scale,
    multiline,
    label,
    height,
    offset,
    dense,
    fontSize,
    isAndroid,
    styles
  } = _ref3;
  let result = pad;
  let topResult = result;
  let bottomResult = result;
  const {
    paddingTop,
    paddingBottom
  } = styles;
  const refFontSize = scale * fontSize;
  if (!multiline) {
    // do not modify padding if input is not multiline
    if (label) {
      // return const style for flat input with label
      return {
        paddingTop,
        paddingBottom
      };
    }
    // return pad for flat input without label
    return {
      paddingTop: result,
      paddingBottom: result
    };
  }
  if (label) {
    // add paddings passed from styles
    topResult = paddingTop;
    bottomResult = paddingBottom;

    // adjust top padding for iOS
    if (!isAndroid) {
      if (dense) {
        topResult += scale < 1 ? Math.min(result, refFontSize * scale) - result / 2 : Math.min(result, refFontSize * scale) - result / 2;
      }
      if (!dense) {
        topResult += scale < 1 ? Math.min(offset / 2, refFontSize * scale) : Math.min(result, refFontSize * scale) - offset / 2;
      }
    }
    topResult = Math.floor(topResult);
  } else {
    if (height) {
      // center text when height is passed
      return {
        paddingTop: Math.max(0, (height - fontSize) / 2),
        paddingBottom: Math.max(0, (height - fontSize) / 2)
      };
    }
    // adjust paddings for iOS if no label
    if (!isAndroid) {
      if (dense) {
        result += scale < 1 ? Math.min(offset / 2, fontSize / 2 * scale) : Math.min(offset / 2, scale);
      }
      if (!dense) {
        result += scale < 1 ? Math.min(offset, fontSize * scale) : Math.min(fontSize, offset / 2 * scale);
      }
      result = Math.floor(result);
      topResult = result;
      bottomResult = result;
    }
  }
  return {
    paddingTop: Math.max(0, topResult),
    paddingBottom: Math.max(0, bottomResult)
  };
};
exports.adjustPaddingFlat = adjustPaddingFlat;
function calculateFlatAffixTopPosition(_ref4) {
  let {
    height,
    paddingTop,
    paddingBottom,
    affixHeight
  } = _ref4;
  const inputHeightWithoutPadding = height - paddingTop - paddingBottom;
  const halfOfTheInputHeightDecreasedByAffixHeight = (inputHeightWithoutPadding - affixHeight) / 2;
  return paddingTop + halfOfTheInputHeightDecreasedByAffixHeight;
}
function calculateOutlinedIconAndAffixTopPosition(_ref5) {
  let {
    height,
    affixHeight,
    labelYOffset
  } = _ref5;
  return (height - affixHeight + labelYOffset) / 2;
}
const calculateFlatInputHorizontalPadding = _ref6 => {
  let {
    adornmentConfig,
    isV3
  } = _ref6;
  const {
    LABEL_PADDING_HORIZONTAL,
    ADORNMENT_OFFSET,
    FLAT_INPUT_OFFSET
  } = getConstants(isV3);
  let paddingLeft = LABEL_PADDING_HORIZONTAL;
  let paddingRight = LABEL_PADDING_HORIZONTAL;
  adornmentConfig.forEach(_ref7 => {
    let {
      type,
      side
    } = _ref7;
    if (type === _enums.AdornmentType.Icon && side === _enums.AdornmentSide.Left) {
      paddingLeft = _constants.ADORNMENT_SIZE + ADORNMENT_OFFSET + FLAT_INPUT_OFFSET;
    } else if (side === _enums.AdornmentSide.Right) {
      if (type === _enums.AdornmentType.Affix) {
        paddingRight = _constants.ADORNMENT_SIZE + ADORNMENT_OFFSET + FLAT_INPUT_OFFSET;
      } else if (type === _enums.AdornmentType.Icon) {
        paddingRight = _constants.ADORNMENT_SIZE + ADORNMENT_OFFSET + FLAT_INPUT_OFFSET;
      }
    }
  });
  return {
    paddingLeft,
    paddingRight
  };
};
exports.calculateFlatInputHorizontalPadding = calculateFlatInputHorizontalPadding;
const getInputTextColor = _ref8 => {
  let {
    theme,
    textColor,
    disabled
  } = _ref8;
  if (textColor) {
    return textColor;
  }
  if (theme.isV3) {
    if (disabled) {
      return theme.colors.onSurfaceDisabled;
    }
    return theme.colors.onSurface;
  }
  if (disabled) {
    return (0, _color.default)(theme.colors.text).alpha(0.54).rgb().string();
  }
  return theme.colors.text;
};
const getActiveColor = _ref9 => {
  let {
    theme,
    disabled,
    error,
    activeUnderlineColor,
    activeOutlineColor,
    mode
  } = _ref9;
  const isFlat = mode === 'flat';
  const modeColor = isFlat ? activeUnderlineColor : activeOutlineColor;
  if (error) {
    return theme.colors.error;
  }
  if (modeColor) {
    return modeColor;
  }
  if (disabled) {
    if (theme.isV3) {
      return theme.colors.onSurfaceDisabled;
    }
    return (0, _color.default)(theme.colors.text).alpha(0.54).rgb().string();
  }
  return theme.colors.primary;
};
const getPlaceholderColor = _ref10 => {
  let {
    theme,
    disabled
  } = _ref10;
  if (theme.isV3) {
    if (disabled) {
      return theme.colors.onSurfaceDisabled;
    }
    return theme.colors.onSurfaceVariant;
  }
  if (disabled) {
    return theme.colors.disabled;
  }
  return theme.colors.placeholder;
};
const getSelectionColor = _ref11 => {
  let {
    activeColor,
    customSelectionColor
  } = _ref11;
  if (typeof customSelectionColor !== 'undefined') {
    return customSelectionColor;
  }
  if (_reactNative.Platform.OS === 'android') {
    return (0, _color.default)(activeColor).alpha(0.54).rgb().string();
  }
  return activeColor;
};
const getFlatBackgroundColor = _ref12 => {
  var _theme$colors, _theme$colors2;
  let {
    theme,
    disabled
  } = _ref12;
  if (theme.isV3) {
    if (disabled) {
      return (0, _color.default)(theme.colors.onSurface).alpha(0.04).rgb().string();
    } else {
      return theme.colors.surfaceVariant;
    }
  }
  if (disabled) {
    return undefined;
  }
  return theme.dark ? (0, _color.default)((_theme$colors = theme.colors) === null || _theme$colors === void 0 ? void 0 : _theme$colors.background).lighten(0.24).rgb().string() : (0, _color.default)((_theme$colors2 = theme.colors) === null || _theme$colors2 === void 0 ? void 0 : _theme$colors2.background).darken(0.06).rgb().string();
};
const getFlatUnderlineColor = _ref13 => {
  let {
    theme,
    disabled,
    underlineColor
  } = _ref13;
  if (!disabled && underlineColor) {
    return underlineColor;
  }
  if (theme.isV3) {
    if (disabled) {
      return theme.colors.onSurfaceDisabled;
    }
    return theme.colors.onSurfaceVariant;
  }
  if (disabled) {
    return 'transparent';
  }
  return theme.colors.disabled;
};
const getOutlinedOutlineInputColor = _ref14 => {
  let {
    theme,
    disabled,
    customOutlineColor
  } = _ref14;
  const isTransparent = (0, _color.default)(customOutlineColor).alpha() === 0;
  if (!disabled && customOutlineColor) {
    return customOutlineColor;
  }
  if (theme.isV3) {
    if (disabled) {
      if (theme.dark) {
        return 'transparent';
      }
      return theme.colors.surfaceDisabled;
    }
    return theme.colors.outline;
  }
  if (disabled) {
    if (isTransparent) {
      return customOutlineColor;
    }
    return theme.colors.disabled;
  }
  return theme.colors.placeholder;
};
const getFlatInputColors = _ref15 => {
  let {
    underlineColor,
    activeUnderlineColor,
    customSelectionColor,
    textColor,
    disabled,
    error,
    theme
  } = _ref15;
  const baseFlatColorProps = {
    theme,
    disabled
  };
  const activeColor = getActiveColor({
    ...baseFlatColorProps,
    error,
    activeUnderlineColor,
    mode: 'flat'
  });
  return {
    inputTextColor: getInputTextColor({
      ...baseFlatColorProps,
      textColor
    }),
    activeColor,
    underlineColorCustom: getFlatUnderlineColor({
      ...baseFlatColorProps,
      underlineColor
    }),
    placeholderColor: getPlaceholderColor(baseFlatColorProps),
    selectionColor: getSelectionColor({
      activeColor,
      customSelectionColor
    }),
    errorColor: theme.colors.error,
    backgroundColor: getFlatBackgroundColor(baseFlatColorProps)
  };
};
exports.getFlatInputColors = getFlatInputColors;
const getOutlinedInputColors = _ref16 => {
  let {
    activeOutlineColor,
    customOutlineColor,
    customSelectionColor,
    textColor,
    disabled,
    error,
    theme
  } = _ref16;
  const baseOutlinedColorProps = {
    theme,
    disabled
  };
  const activeColor = getActiveColor({
    ...baseOutlinedColorProps,
    error,
    activeOutlineColor,
    mode: 'outlined'
  });
  return {
    inputTextColor: getInputTextColor({
      ...baseOutlinedColorProps,
      textColor
    }),
    activeColor,
    outlineColor: getOutlinedOutlineInputColor({
      ...baseOutlinedColorProps,
      customOutlineColor
    }),
    placeholderColor: getPlaceholderColor(baseOutlinedColorProps),
    selectionColor: getSelectionColor({
      activeColor,
      customSelectionColor
    }),
    errorColor: theme.colors.error
  };
};
exports.getOutlinedInputColors = getOutlinedInputColors;
const getConstants = isV3 => {
  // Text input affix
  let AFFIX_OFFSET;
  // Text input icon
  let ICON_OFFSET;
  //Text input flat
  let LABEL_PADDING_TOP;
  let LABEL_PADDING_HORIZONTAL;
  let FLAT_INPUT_OFFSET;
  let MIN_HEIGHT;
  // Text input outlined;
  let INPUT_PADDING_HORIZONTAL;
  let ADORNMENT_OFFSET;
  let OUTLINED_INPUT_OFFSET;
  if (isV3) {
    AFFIX_OFFSET = _constants.MD3_AFFIX_OFFSET;
    ICON_OFFSET = _constants.MD3_ICON_OFFSET;
    LABEL_PADDING_TOP = _constants.MD3_LABEL_PADDING_TOP;
    LABEL_PADDING_HORIZONTAL = _constants.MD3_LABEL_PADDING_HORIZONTAL;
    FLAT_INPUT_OFFSET = _constants.MD3_FLAT_INPUT_OFFSET;
    MIN_HEIGHT = _constants.MD3_MIN_HEIGHT;
    INPUT_PADDING_HORIZONTAL = _constants.MD3_INPUT_PADDING_HORIZONTAL;
    ADORNMENT_OFFSET = _constants.MD3_ADORNMENT_OFFSET;
    OUTLINED_INPUT_OFFSET = _constants.MD3_OUTLINED_INPUT_OFFSET;
  } else {
    AFFIX_OFFSET = _constants.MD2_AFFIX_OFFSET;
    ICON_OFFSET = _constants.MD2_ICON_OFFSET;
    LABEL_PADDING_TOP = _constants.MD2_LABEL_PADDING_TOP;
    LABEL_PADDING_HORIZONTAL = _constants.MD2_LABEL_PADDING_HORIZONTAL;
    FLAT_INPUT_OFFSET = _constants.MD2_FLAT_INPUT_OFFSET;
    MIN_HEIGHT = _constants.MD2_MIN_HEIGHT;
    INPUT_PADDING_HORIZONTAL = _constants.MD2_INPUT_PADDING_HORIZONTAL;
    ADORNMENT_OFFSET = _constants.MD2_ADORNMENT_OFFSET;
    OUTLINED_INPUT_OFFSET = _constants.MD2_OUTLINED_INPUT_OFFSET;
  }
  return {
    AFFIX_OFFSET,
    ICON_OFFSET,
    LABEL_PADDING_TOP,
    LABEL_PADDING_HORIZONTAL,
    FLAT_INPUT_OFFSET,
    MIN_HEIGHT,
    INPUT_PADDING_HORIZONTAL,
    ADORNMENT_OFFSET,
    OUTLINED_INPUT_OFFSET,
    MIN_WIDTH: _constants.MIN_WIDTH
  };
};
exports.getConstants = getConstants;
//# sourceMappingURL=helpers.js.map