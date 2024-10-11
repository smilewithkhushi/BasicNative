"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _index = require("event-target-shim/index");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
/**
 * @eventClass
 * This event is fired whenever the Track is changed in PeerConnection.
 * @param {TRACK_EVENTS} type - The type of event.
 * @param {IRTCTrackEventInitDict} eventInitDict - The event init properties.
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/RTCPeerConnection/track_event MDN} for details.
 */
class RTCTrackEvent extends _index.Event {
  /** @eventProperty */

  /** @eventProperty */

  /** @eventProperty */

  /** @eventProperty */

  constructor(type, eventInitDict) {
    super(type, eventInitDict);
    _defineProperty(this, "streams", []);
    _defineProperty(this, "transceiver", void 0);
    _defineProperty(this, "receiver", void 0);
    _defineProperty(this, "track", void 0);
    this.streams = eventInitDict.streams;
    this.transceiver = eventInitDict.transceiver;
    this.receiver = eventInitDict.transceiver.receiver;
    this.track = eventInitDict.transceiver.receiver ? eventInitDict.transceiver.receiver.track : null;
  }
}
exports.default = RTCTrackEvent;
//# sourceMappingURL=RTCTrackEvent.js.map