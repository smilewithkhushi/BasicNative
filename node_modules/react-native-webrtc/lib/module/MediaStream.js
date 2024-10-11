function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
import { EventTarget, defineEventAttribute } from 'event-target-shim/index';
import { NativeModules } from 'react-native';
import MediaStreamTrack from './MediaStreamTrack';
import { uniqueID } from './RTCUtil';
const {
  WebRTCModule
} = NativeModules;
export default class MediaStream extends EventTarget {
  /**
   * The identifier of this MediaStream unique within the associated
   * WebRTCModule instance. As the id of a remote MediaStream instance is unique
   * only within the associated RTCPeerConnection, it is not sufficiently unique
   * to identify this MediaStream across multiple RTCPeerConnections and to
   * unambiguously differentiate it from a local MediaStream instance not added
   * to an RTCPeerConnection.
   */

  /**
   * A MediaStream can be constructed in several ways, depending on the parameters
   * that are passed here.
   *
   * - undefined: just a new stream, with no tracks.
   * - MediaStream instance: a new stream, with a copy of the tracks of the passed stream.
   * - Array of MediaStreamTrack: a new stream with a copy of the tracks in the array.
   * - object: a new stream instance, represented by the passed info object, this is always
   *   done internally, when the stream is first created in native and the JS wrapper is
   *   built afterwards.
   */
  constructor(arg) {
    super();

    // Assign a UUID to start with. It will get overridden for remote streams.
    _defineProperty(this, "_tracks", []);
    _defineProperty(this, "_id", void 0);
    _defineProperty(this, "_reactTag", void 0);
    this._id = uniqueID();

    // Local MediaStreams are created by WebRTCModule to have their id and
    // reactTag equal because WebRTCModule follows the respective standard's
    // recommendation for id generation i.e. uses UUID which is unique enough
    // for the purposes of reactTag.
    this._reactTag = this._id;
    if (typeof arg === 'undefined') {
      WebRTCModule.mediaStreamCreate(this.id);
    } else if (arg instanceof MediaStream) {
      WebRTCModule.mediaStreamCreate(this.id);
      for (const track of arg.getTracks()) {
        this.addTrack(track);
      }
    } else if (Array.isArray(arg)) {
      WebRTCModule.mediaStreamCreate(this.id);
      for (const track of arg) {
        this.addTrack(track);
      }
    } else if (typeof arg === 'object' && arg.streamId && arg.streamReactTag && arg.tracks) {
      this._id = arg.streamId;
      this._reactTag = arg.streamReactTag;
      for (const trackInfo of arg.tracks) {
        // We are not using addTrack here because the track is already part of the
        // stream, so there is no need to add it on the native side.
        this._tracks.push(new MediaStreamTrack(trackInfo));
      }
    } else {
      throw new TypeError(`invalid type: ${typeof arg}`);
    }
  }
  get id() {
    return this._id;
  }
  get active() {
    // TODO: can we reliably report this value?

    return true;
  }
  addTrack(track) {
    const index = this._tracks.indexOf(track);
    if (index !== -1) {
      return;
    }
    this._tracks.push(track);
    WebRTCModule.mediaStreamAddTrack(this._reactTag, track.remote ? track._peerConnectionId : -1, track.id);
  }
  removeTrack(track) {
    const index = this._tracks.indexOf(track);
    if (index === -1) {
      return;
    }
    this._tracks.splice(index, 1);
    WebRTCModule.mediaStreamRemoveTrack(this._reactTag, track.remote ? track._peerConnectionId : -1, track.id);
  }
  getTracks() {
    return this._tracks.slice();
  }
  getTrackById(trackId) {
    return this._tracks.find(track => track.id === trackId);
  }
  getAudioTracks() {
    return this._tracks.filter(track => track.kind === 'audio');
  }
  getVideoTracks() {
    return this._tracks.filter(track => track.kind === 'video');
  }
  clone() {
    throw new Error('Not implemented.');
  }
  toURL() {
    return this._reactTag;
  }
  release() {
    let releaseTracks = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
    const tracks = [...this._tracks];
    for (const track of tracks) {
      this.removeTrack(track);
      if (releaseTracks) {
        track.release();
      }
    }
    WebRTCModule.mediaStreamRelease(this._reactTag);
  }
}

/**
 * Define the `onxxx` event handlers.
 */
const proto = MediaStream.prototype;
defineEventAttribute(proto, 'addtrack');
defineEventAttribute(proto, 'removetrack');
//# sourceMappingURL=MediaStream.js.map