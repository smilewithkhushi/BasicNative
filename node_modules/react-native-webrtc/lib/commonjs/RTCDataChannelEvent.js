"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _index = require("event-target-shim/index");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
/**
 * @eventClass
 * This event is fired whenever the RTCDataChannel has changed in any way.
 * @param {DATA_CHANNEL_EVENTS} type - The type of event.
 * @param {IRTCDataChannelEventInitDict} eventInitDict - The event init properties.
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/RTCDataChannel#events MDN} for details.
 */
class RTCDataChannelEvent extends _index.Event {
  /** @eventProperty */

  constructor(type, eventInitDict) {
    super(type, eventInitDict);
    _defineProperty(this, "channel", void 0);
    this.channel = eventInitDict.channel;
  }
}
exports.default = RTCDataChannelEvent;
//# sourceMappingURL=RTCDataChannelEvent.js.map