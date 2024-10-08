"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getFabStyle = exports.getFABGroupColors = exports.getFABColors = exports.getExtendedFabStyle = exports.getCombinedStyles = void 0;
var _reactNative = require("react-native");
var _color = _interopRequireDefault(require("color"));
var _colors = require("../../styles/themes/v2/colors");
var _getContrastingColor = _interopRequireDefault(require("../../utils/getContrastingColor"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const getCombinedStyles = _ref => {
  let {
    isAnimatedFromRight,
    isIconStatic,
    distance,
    animFAB
  } = _ref;
  const {
    isRTL
  } = _reactNative.I18nManager;
  const defaultPositionStyles = {
    left: -distance,
    right: undefined
  };
  const combinedStyles = {
    innerWrapper: {
      ...defaultPositionStyles
    },
    iconWrapper: {
      ...defaultPositionStyles
    },
    absoluteFill: {}
  };
  const animatedFromRight = isAnimatedFromRight && !isRTL;
  const animatedFromRightRTL = isAnimatedFromRight && isRTL;
  const animatedFromLeft = !isAnimatedFromRight && !isRTL;
  const animatedFromLeftRTL = !isAnimatedFromRight && isRTL;
  if (animatedFromRight) {
    combinedStyles.innerWrapper.transform = [{
      translateX: animFAB.interpolate({
        inputRange: [distance, 0],
        outputRange: [distance, 0]
      })
    }];
    combinedStyles.iconWrapper.transform = [{
      translateX: isIconStatic ? 0 : animFAB
    }];
    combinedStyles.absoluteFill.transform = [{
      translateX: animFAB.interpolate({
        inputRange: [distance, 0],
        outputRange: [Math.abs(distance) / 2, Math.abs(distance)]
      })
    }];
  } else if (animatedFromRightRTL) {
    combinedStyles.iconWrapper.transform = [{
      translateX: isIconStatic ? 0 : animFAB.interpolate({
        inputRange: [distance, 0],
        outputRange: [-distance, 0]
      })
    }];
    combinedStyles.innerWrapper.transform = [{
      translateX: animFAB.interpolate({
        inputRange: [distance, 0],
        outputRange: [-distance, 0]
      })
    }];
    combinedStyles.absoluteFill.transform = [{
      translateX: animFAB.interpolate({
        inputRange: [distance, 0],
        outputRange: [0, distance]
      })
    }];
  } else if (animatedFromLeft) {
    combinedStyles.iconWrapper.transform = [{
      translateX: isIconStatic ? distance : animFAB.interpolate({
        inputRange: [0, distance],
        outputRange: [distance, distance * 2]
      })
    }];
    combinedStyles.innerWrapper.transform = [{
      translateX: animFAB
    }];
    combinedStyles.absoluteFill.transform = [{
      translateX: animFAB.interpolate({
        inputRange: [0, distance],
        outputRange: [0, Math.abs(distance) / 2]
      })
    }];
  } else if (animatedFromLeftRTL) {
    combinedStyles.iconWrapper.transform = [{
      translateX: isIconStatic ? animFAB.interpolate({
        inputRange: [0, distance],
        outputRange: [-distance, -distance * 2]
      }) : -distance
    }];
    combinedStyles.innerWrapper.transform = [{
      translateX: animFAB.interpolate({
        inputRange: [0, distance],
        outputRange: [0, -distance]
      })
    }];
    combinedStyles.absoluteFill.transform = [{
      translateX: animFAB.interpolate({
        inputRange: [0, distance],
        outputRange: [0, -distance]
      })
    }];
  }
  return combinedStyles;
};
exports.getCombinedStyles = getCombinedStyles;
const getBackgroundColor = _ref2 => {
  var _theme$colors;
  let {
    theme,
    isVariant,
    disabled,
    customBackgroundColor
  } = _ref2;
  if (customBackgroundColor && !disabled) {
    return customBackgroundColor;
  }
  if (theme.isV3) {
    if (disabled) {
      return theme.colors.surfaceDisabled;
    }
    if (isVariant('primary')) {
      return theme.colors.primaryContainer;
    }
    if (isVariant('secondary')) {
      return theme.colors.secondaryContainer;
    }
    if (isVariant('tertiary')) {
      return theme.colors.tertiaryContainer;
    }
    if (isVariant('surface')) {
      return theme.colors.elevation.level3;
    }
  }
  if (disabled) {
    if (theme.dark) {
      return (0, _color.default)(_colors.white).alpha(0.12).rgb().string();
    }
    return (0, _color.default)(_colors.black).alpha(0.12).rgb().string();
  }

  //@ts-ignore
  return (_theme$colors = theme.colors) === null || _theme$colors === void 0 ? void 0 : _theme$colors.accent;
};
const getForegroundColor = _ref3 => {
  let {
    theme,
    isVariant,
    disabled,
    backgroundColor,
    customColor
  } = _ref3;
  if (typeof customColor !== 'undefined' && !disabled) {
    return customColor;
  }
  if (theme.isV3) {
    if (disabled) {
      return theme.colors.onSurfaceDisabled;
    }
    if (isVariant('primary')) {
      return theme.colors.onPrimaryContainer;
    }
    if (isVariant('secondary')) {
      return theme.colors.onSecondaryContainer;
    }
    if (isVariant('tertiary')) {
      return theme.colors.onTertiaryContainer;
    }
    if (isVariant('surface')) {
      return theme.colors.primary;
    }
  }
  if (disabled) {
    if (theme.dark) {
      return (0, _color.default)(_colors.white).alpha(0.32).rgb().string();
    }
    return (0, _color.default)(_colors.black).alpha(0.32).rgb().string();
  }
  if (backgroundColor) {
    return (0, _getContrastingColor.default)(backgroundColor || _colors.white, _colors.white, 'rgba(0, 0, 0, .54)');
  }
  return (0, _getContrastingColor.default)(_colors.white, _colors.white, 'rgba(0, 0, 0, .54)');
};
const getFABColors = _ref4 => {
  let {
    theme,
    variant,
    disabled,
    customColor,
    customBackgroundColor,
    customRippleColor
  } = _ref4;
  const isVariant = variantToCompare => {
    return variant === variantToCompare;
  };
  const baseFABColorProps = {
    theme,
    isVariant,
    disabled
  };
  const backgroundColor = getBackgroundColor({
    ...baseFABColorProps,
    customBackgroundColor
  });
  const foregroundColor = getForegroundColor({
    ...baseFABColorProps,
    customColor,
    backgroundColor
  });
  return {
    backgroundColor,
    foregroundColor,
    rippleColor: customRippleColor || (0, _color.default)(foregroundColor).alpha(0.12).rgb().string()
  };
};
exports.getFABColors = getFABColors;
const getLabelColor = _ref5 => {
  let {
    theme
  } = _ref5;
  if (theme.isV3) {
    return theme.colors.onSurface;
  }
  if (theme.dark) {
    return theme.colors.text;
  }
  return (0, _color.default)(theme.colors.text).fade(0.54).rgb().string();
};
const getBackdropColor = _ref6 => {
  var _theme$colors2;
  let {
    theme,
    customBackdropColor
  } = _ref6;
  if (customBackdropColor) {
    return customBackdropColor;
  }
  if (theme.isV3) {
    return (0, _color.default)(theme.colors.background).alpha(0.95).rgb().string();
  }
  return (_theme$colors2 = theme.colors) === null || _theme$colors2 === void 0 ? void 0 : _theme$colors2.backdrop;
};
const getStackedFABBackgroundColor = _ref7 => {
  let {
    theme
  } = _ref7;
  if (theme.isV3) {
    return theme.colors.elevation.level3;
  }
  return theme.colors.surface;
};
const getFABGroupColors = _ref8 => {
  let {
    theme,
    customBackdropColor
  } = _ref8;
  return {
    labelColor: getLabelColor({
      theme
    }),
    backdropColor: getBackdropColor({
      theme,
      customBackdropColor
    }),
    stackedFABBackgroundColor: getStackedFABBackgroundColor({
      theme
    })
  };
};
exports.getFABGroupColors = getFABGroupColors;
const standardSize = {
  height: 56,
  width: 56,
  borderRadius: 28
};
const smallSize = {
  height: 40,
  width: 40,
  borderRadius: 28
};
const v3SmallSize = {
  height: 40,
  width: 40
};
const v3MediumSize = {
  height: 56,
  width: 56
};
const v3LargeSize = {
  height: 96,
  width: 96
};
const getCustomFabSize = (customSize, roundness) => ({
  height: customSize,
  width: customSize,
  borderRadius: roundness === 0 ? 0 : customSize / roundness
});
const getFabStyle = _ref9 => {
  let {
    size,
    theme,
    customSize
  } = _ref9;
  const {
    isV3,
    roundness
  } = theme;
  if (customSize) return getCustomFabSize(customSize, roundness);
  if (isV3) {
    switch (size) {
      case 'small':
        return {
          ...v3SmallSize,
          borderRadius: 3 * roundness
        };
      case 'medium':
        return {
          ...v3MediumSize,
          borderRadius: 4 * roundness
        };
      case 'large':
        return {
          ...v3LargeSize,
          borderRadius: 7 * roundness
        };
    }
  }
  if (size === 'small') {
    return smallSize;
  }
  return standardSize;
};
exports.getFabStyle = getFabStyle;
const extended = {
  height: 48,
  paddingHorizontal: 16
};
const v3Extended = {
  height: 56,
  borderRadius: 16,
  paddingHorizontal: 16
};
const getExtendedFabDimensions = customSize => ({
  height: customSize,
  paddingHorizontal: 16
});
const getExtendedFabStyle = _ref10 => {
  let {
    customSize,
    theme
  } = _ref10;
  if (customSize) return getExtendedFabDimensions(customSize);
  const {
    isV3
  } = theme;
  return isV3 ? v3Extended : extended;
};
exports.getExtendedFabStyle = getExtendedFabStyle;
//# sourceMappingURL=utils.js.map