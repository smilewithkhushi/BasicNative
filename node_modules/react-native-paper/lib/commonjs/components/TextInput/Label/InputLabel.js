"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactNative = require("react-native");
var _AnimatedText = _interopRequireDefault(require("../../Typography/AnimatedText"));
var _helpers = require("../helpers");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const InputLabel = props => {
  const {
    labeled,
    wiggle,
    error,
    focused,
    opacity,
    labelLayoutWidth,
    labelBackground,
    label,
    labelError,
    onLayoutAnimatedText,
    onLabelTextLayout,
    hasActiveOutline,
    activeColor,
    placeholderStyle,
    baseLabelTranslateX,
    baseLabelTranslateY,
    font,
    fontSize,
    lineHeight,
    fontWeight,
    placeholderOpacity,
    wiggleOffsetX,
    labelScale,
    topPosition,
    paddingLeft,
    paddingRight,
    backgroundColor,
    roundness,
    placeholderColor,
    errorColor,
    labelTranslationXOffset,
    maxFontSizeMultiplier,
    testID,
    isV3,
    inputContainerLayout
  } = props;
  const {
    INPUT_PADDING_HORIZONTAL
  } = (0, _helpers.getConstants)(isV3);
  const {
    width
  } = (0, _reactNative.useWindowDimensions)();
  const paddingOffset = paddingLeft && paddingRight ? {
    paddingLeft,
    paddingRight
  } : {};
  const labelTranslationX = {
    transform: [{
      // Offset label scale since RN doesn't support transform origin
      translateX: labeled.interpolate({
        inputRange: [0, 1],
        outputRange: [baseLabelTranslateX, labelTranslationXOffset || 0]
      })
    }]
  };
  const labelStyle = {
    ...font,
    fontSize,
    lineHeight,
    fontWeight,
    opacity: labeled.interpolate({
      inputRange: [0, 1],
      outputRange: [hasActiveOutline ? 1 : 0, 0]
    }),
    transform: [{
      // Wiggle the label when there's an error
      translateX: wiggle ? error.interpolate({
        inputRange: [0, 0.5, 1],
        outputRange: [0, wiggleOffsetX, 0]
      }) : 0
    }, {
      // Move label to top
      translateY: baseLabelTranslateY !== 0 ? labeled.interpolate({
        inputRange: [0, 1],
        outputRange: [baseLabelTranslateY, 0]
      }) : 0
    }, {
      // Make label smaller
      scale: labelScale !== 0 ? labeled.interpolate({
        inputRange: [0, 1],
        outputRange: [labelScale, 1]
      }) : labeled
    }]
  };
  const commonStyles = [placeholderStyle, {
    top: topPosition,
    maxWidth: inputContainerLayout.width + INPUT_PADDING_HORIZONTAL / 2
  }, labelStyle, paddingOffset || {}];
  const textColor = labelError && errorColor ? errorColor : placeholderColor;
  return (
    /*#__PURE__*/
    // Position colored placeholder and gray placeholder on top of each other and crossfade them
    // This gives the effect of animating the color, but allows us to use native driver
    _react.default.createElement(_reactNative.Animated.View, {
      pointerEvents: "none",
      style: [_reactNative.StyleSheet.absoluteFill, styles.labelContainer, _reactNative.Platform.OS !== 'web' && {
        width
      }, {
        opacity
      }, labelTranslationX]
    }, labelBackground === null || labelBackground === void 0 ? void 0 : labelBackground({
      labeled,
      labelLayoutWidth,
      labelStyle,
      placeholderStyle,
      baseLabelTranslateX,
      topPosition,
      label,
      backgroundColor,
      roundness,
      maxFontSizeMultiplier: maxFontSizeMultiplier,
      testID
    }), /*#__PURE__*/_react.default.createElement(_AnimatedText.default, {
      variant: "bodySmall",
      onLayout: onLayoutAnimatedText,
      onTextLayout: onLabelTextLayout,
      style: [commonStyles, {
        color: activeColor
      }],
      numberOfLines: 1,
      maxFontSizeMultiplier: maxFontSizeMultiplier,
      testID: `${testID}-label-active`
    }, label), /*#__PURE__*/_react.default.createElement(_AnimatedText.default, {
      variant: focused ? 'bodyLarge' : 'bodySmall',
      style: [commonStyles, {
        color: textColor,
        opacity: placeholderOpacity
      }],
      numberOfLines: 1,
      maxFontSizeMultiplier: maxFontSizeMultiplier,
      testID: `${testID}-label-inactive`
    }, label))
  );
};
const styles = _reactNative.StyleSheet.create({
  labelContainer: {
    zIndex: 3
  }
});
var _default = /*#__PURE__*/_react.default.memo(InputLabel);
exports.default = _default;
//# sourceMappingURL=InputLabel.js.map