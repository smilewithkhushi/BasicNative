"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.idPattern = void 0;
exports.pickNotNil = pickNotNil;
function pickNotNil(object) {
  const result = {};
  for (const key in object) {
    if (Object.prototype.hasOwnProperty.call(object, key)) {
      const value = object[key];
      if (value !== undefined && value !== null) {
        result[key] = value;
      }
    }
  }
  return result;
}
const idPattern = /#([^)]+)\)?$/;
exports.idPattern = idPattern;
//# sourceMappingURL=util.js.map