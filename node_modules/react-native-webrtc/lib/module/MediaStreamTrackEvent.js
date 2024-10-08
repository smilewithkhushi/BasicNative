function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
import { Event } from 'event-target-shim/index';
/**
 * @eventClass
 * This event is fired whenever the MediaStreamTrack has changed in any way.
 * @param {MEDIA_STREAM_EVENTS} type - The type of event.
 * @param {IMediaStreamTrackEventInitDict} eventInitDict - The event init properties.
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/MediaStream#events MDN} for details.
 */
export default class MediaStreamTrackEvent extends Event {
  /** @eventProperty */

  constructor(type, eventInitDict) {
    super(type, eventInitDict);
    _defineProperty(this, "track", void 0);
    this.track = eventInitDict.track;
  }
}
//# sourceMappingURL=MediaStreamTrackEvent.js.map