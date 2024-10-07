"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BackHandler = void 0;
function emptyFunction() {}
const BackHandler = {
  exitApp: emptyFunction,
  addEventListener() {
    return {
      remove: emptyFunction
    };
  },
  removeEventListener: emptyFunction
};
exports.BackHandler = BackHandler;
//# sourceMappingURL=BackHandler.js.map