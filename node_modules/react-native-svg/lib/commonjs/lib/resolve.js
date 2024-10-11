"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.resolve = resolve;
var _reactNative = require("react-native");
// Kept in separate file, to avoid name collision with Symbol element
function resolve(styleProp, cleanedProps) {
  if (styleProp) {
    return _reactNative.StyleSheet ? [styleProp, cleanedProps] :
    // Compatibility for arrays of styles in plain react web
    styleProp[Symbol.iterator] ? Object.assign({}, ...styleProp, cleanedProps) : Object.assign({}, styleProp, cleanedProps);
  } else {
    return cleanedProps;
  }
}
//# sourceMappingURL=resolve.js.map