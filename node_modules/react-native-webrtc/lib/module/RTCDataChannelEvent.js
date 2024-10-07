function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
import { Event } from 'event-target-shim/index';
/**
 * @eventClass
 * This event is fired whenever the RTCDataChannel has changed in any way.
 * @param {DATA_CHANNEL_EVENTS} type - The type of event.
 * @param {IRTCDataChannelEventInitDict} eventInitDict - The event init properties.
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/RTCDataChannel#events MDN} for details.
 */
export default class RTCDataChannelEvent extends Event {
  /** @eventProperty */

  constructor(type, eventInitDict) {
    super(type, eventInitDict);
    _defineProperty(this, "channel", void 0);
    this.channel = eventInitDict.channel;
  }
}
//# sourceMappingURL=RTCDataChannelEvent.js.map