function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
import { Event } from 'event-target-shim/index';
/**
 * @eventClass
 * This event is fired whenever the icecandidate related RTC_EVENTS changed.
 * @type {RTCIceCandidateEvent} for icecandidate related.
 * @param {RTC_ICECANDIDATE_EVENTS} type - The type of event.
 * @param {IRTCDataChannelEventInitDict} eventInitDict - The event init properties.
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/RTCPeerConnection#events MDN} for details.
 */
export default class RTCIceCandidateEvent extends Event {
  /** @eventProperty */

  constructor(type, eventInitDict) {
    var _eventInitDict$candid;
    super(type, eventInitDict);
    _defineProperty(this, "candidate", void 0);
    this.candidate = (_eventInitDict$candid = eventInitDict === null || eventInitDict === void 0 ? void 0 : eventInitDict.candidate) !== null && _eventInitDict$candid !== void 0 ? _eventInitDict$candid : null;
  }
}
//# sourceMappingURL=RTCIceCandidateEvent.js.map