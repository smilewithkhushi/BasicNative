"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var React = _interopRequireWildcard(require("react"));
var _reactNative = require("react-native");
var _AnimatedText = _interopRequireDefault(require("../../Typography/AnimatedText"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
const LabelBackground = _ref => {
  let {
    labeled,
    labelLayoutWidth,
    placeholderStyle,
    baseLabelTranslateX,
    topPosition,
    label,
    backgroundColor,
    roundness,
    labelStyle,
    maxFontSizeMultiplier,
    testID
  } = _ref;
  const opacity = labeled.interpolate({
    inputRange: [0, 0.6],
    outputRange: [1, 0]
  });
  const labelTranslationX = {
    translateX: labeled.interpolate({
      inputRange: [0, 1],
      outputRange: [-baseLabelTranslateX, 0]
    })
  };
  const labelTextScaleY = {
    scaleY: labeled.interpolate({
      inputRange: [0, 1],
      outputRange: [0.2, 1]
    })
  };
  const labelTextTransform = [...labelStyle.transform, labelTextScaleY];
  const isRounded = roundness > 6;
  const roundedEdgeCover = isRounded ? /*#__PURE__*/React.createElement(_reactNative.Animated.View, {
    key: "labelBackground-view",
    pointerEvents: "none",
    style: [_reactNative.StyleSheet.absoluteFill, styles.view, {
      backgroundColor,
      maxHeight: Math.max(roundness / 3, 2),
      bottom: Math.max(roundness, 2),
      transform: [labelTranslationX],
      opacity
    }]
  }) : null;
  return [roundedEdgeCover, /*#__PURE__*/React.createElement(_AnimatedText.default, {
    key: "labelBackground-text",
    testID: `${testID}-label-background`,
    style: [placeholderStyle, labelStyle, styles.outlinedLabel, {
      top: topPosition + 1,
      width: labelLayoutWidth - placeholderStyle.paddingHorizontal,
      backgroundColor,
      opacity,
      transform: labelTextTransform
    }],
    numberOfLines: 1,
    maxFontSizeMultiplier: maxFontSizeMultiplier
  }, typeof label === 'string' ? label : label === null || label === void 0 ? void 0 : label.props.children)];
};
var _default = LabelBackground;
exports.default = _default;
const styles = _reactNative.StyleSheet.create({
  view: {
    position: 'absolute',
    top: 6,
    left: 10,
    width: 12
  },
  // eslint-disable-next-line react-native/no-color-literals
  outlinedLabel: {
    position: 'absolute',
    left: 8,
    paddingHorizontal: 0,
    color: 'transparent'
  }
});
//# sourceMappingURL=LabelBackground.js.map