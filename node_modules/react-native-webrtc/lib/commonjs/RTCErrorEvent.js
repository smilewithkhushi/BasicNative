"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _index = require("event-target-shim/index");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
/**
 * @brief This class Represents internal error happening on the native side as
 * part of asynchronous invocations to synchronous web APIs.
 */
class RTCErrorEvent extends _index.Event {
  constructor(type, func, message) {
    super(type);
    _defineProperty(this, "func", void 0);
    _defineProperty(this, "message", void 0);
    this.func = func;
    this.message = message;
  }
}
exports.default = RTCErrorEvent;
//# sourceMappingURL=RTCErrorEvent.js.map