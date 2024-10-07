"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Outline = void 0;
var React = _interopRequireWildcard(require("react"));
var _reactNative = require("react-native");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
const Outline = _ref => {
  let {
    isV3,
    label,
    activeColor,
    backgroundColor,
    hasActiveOutline,
    focused,
    outlineColor,
    roundness,
    style
  } = _ref;
  return /*#__PURE__*/React.createElement(_reactNative.View, {
    testID: "text-input-outline",
    pointerEvents: "none",
    style: [styles.outline, !label && styles.noLabelOutline,
    // eslint-disable-next-line react-native/no-inline-styles
    {
      backgroundColor,
      borderRadius: roundness,
      borderWidth: (isV3 ? hasActiveOutline : focused) ? 2 : 1,
      borderColor: hasActiveOutline ? activeColor : outlineColor
    }, style]
  });
};
exports.Outline = Outline;
const styles = _reactNative.StyleSheet.create({
  outline: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 6,
    bottom: 0
  },
  noLabelOutline: {
    top: 0
  }
});
//# sourceMappingURL=Outline.js.map