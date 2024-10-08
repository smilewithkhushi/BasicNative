"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = extractBrush;
var _reactNative = require("react-native");
const urlIdPattern = /^url\(#(.+)\)$/;
const currentColorBrush = {
  type: 2
};
const contextFillBrush = {
  type: 3
};
const contextStrokeBrush = {
  type: 4
};
function extractBrush(color) {
  if (!color || color === 'none') {
    return null;
  }
  if (color === 'currentColor') {
    return currentColorBrush;
  }
  if (color === 'context-fill') {
    return contextFillBrush;
  }
  if (color === 'context-stroke') {
    return contextStrokeBrush;
  }
  const brush = typeof color === 'string' && color.match(urlIdPattern);
  if (brush) {
    return {
      type: 1,
      brushRef: brush[1]
    };
  }
  const processedColor = (0, _reactNative.processColor)(color);
  if (typeof processedColor === 'number') {
    return {
      type: 0,
      payload: processedColor
    };
  }
  if (typeof processedColor === 'object' && processedColor !== null) {
    // if we got an object, it should be `PlatformColor` or `DynamicColorIOS`,
    // so we pass it as an object with `0` value as first item, which is interpreted
    // on the native side as color to be managed by `RCTConvert`.
    return {
      type: 0,
      payload: processedColor
    };
  }
  console.warn(`"${String(color)}" is not a valid color or brush`);
  return null;
}
//# sourceMappingURL=extractBrush.js.map