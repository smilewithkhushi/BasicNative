function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
import { Event } from 'event-target-shim/index';
/**
 * @brief This class Represents internal error happening on the native side as
 * part of asynchronous invocations to synchronous web APIs.
 */
export default class RTCErrorEvent extends Event {
  constructor(type, func, message) {
    super(type);
    _defineProperty(this, "func", void 0);
    _defineProperty(this, "message", void 0);
    this.func = func;
    this.message = message;
  }
}
//# sourceMappingURL=RTCErrorEvent.js.map