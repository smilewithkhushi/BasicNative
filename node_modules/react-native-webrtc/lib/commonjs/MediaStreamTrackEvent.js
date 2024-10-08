"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _index = require("event-target-shim/index");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
/**
 * @eventClass
 * This event is fired whenever the MediaStreamTrack has changed in any way.
 * @param {MEDIA_STREAM_EVENTS} type - The type of event.
 * @param {IMediaStreamTrackEventInitDict} eventInitDict - The event init properties.
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/MediaStream#events MDN} for details.
 */
class MediaStreamTrackEvent extends _index.Event {
  /** @eventProperty */

  constructor(type, eventInitDict) {
    super(type, eventInitDict);
    _defineProperty(this, "track", void 0);
    this.track = eventInitDict.track;
  }
}
exports.default = MediaStreamTrackEvent;
//# sourceMappingURL=MediaStreamTrackEvent.js.map