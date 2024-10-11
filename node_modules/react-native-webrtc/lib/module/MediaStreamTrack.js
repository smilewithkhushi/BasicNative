function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
import { EventTarget, Event, defineEventAttribute } from 'event-target-shim/index';
import { NativeModules } from 'react-native';
import { addListener, removeListener } from './EventEmitter';
import Logger from './Logger';
import { deepClone } from './RTCUtil';
const log = new Logger('pc');
const {
  WebRTCModule
} = NativeModules;
export default class MediaStreamTrack extends EventTarget {
  constructor(info) {
    super();
    _defineProperty(this, "_constraints", void 0);
    _defineProperty(this, "_enabled", void 0);
    _defineProperty(this, "_settings", void 0);
    _defineProperty(this, "_muted", void 0);
    _defineProperty(this, "_peerConnectionId", void 0);
    _defineProperty(this, "_readyState", void 0);
    _defineProperty(this, "id", void 0);
    _defineProperty(this, "kind", void 0);
    _defineProperty(this, "label", '');
    _defineProperty(this, "remote", void 0);
    this._constraints = info.constraints || {};
    this._enabled = info.enabled;
    this._settings = info.settings || {};
    this._muted = false;
    this._peerConnectionId = info.peerConnectionId;
    this._readyState = info.readyState;
    this.id = info.id;
    this.kind = info.kind;
    this.remote = info.remote;
    if (!this.remote) {
      this._registerEvents();
    }
  }
  get enabled() {
    return this._enabled;
  }
  set enabled(enabled) {
    if (enabled === this._enabled) {
      return;
    }
    this._enabled = Boolean(enabled);
    if (this._readyState === 'ended') {
      return;
    }
    WebRTCModule.mediaStreamTrackSetEnabled(this.remote ? this._peerConnectionId : -1, this.id, this._enabled);
  }
  get muted() {
    return this._muted;
  }
  get readyState() {
    return this._readyState;
  }
  stop() {
    this.enabled = false;
    this._readyState = 'ended';
  }

  /**
   * Private / custom API for switching the cameras on the fly, without the
   * need for adding / removing tracks or doing any SDP renegotiation.
   *
   * This is how the reference application (AppRTCMobile) implements camera
   * switching.
   */
  _switchCamera() {
    if (this.remote) {
      throw new Error('Not implemented for remote tracks');
    }
    if (this.kind !== 'video') {
      throw new Error('Only implemented for video tracks');
    }
    WebRTCModule.mediaStreamTrackSwitchCamera(this.id);
  }
  _setVideoEffect(name) {
    if (this.remote) {
      throw new Error('Not implemented for remote tracks');
    }
    if (this.kind !== 'video') {
      throw new Error('Only implemented for video tracks');
    }
    WebRTCModule.mediaStreamTrackSetVideoEffect(this.id, name);
  }

  /**
   * Internal function which is used to set the muted state on remote tracks and
   * emit the mute / unmute event.
   *
   * @param muted Whether the track should be marked as muted / unmuted.
   */
  _setMutedInternal(muted) {
    if (!this.remote) {
      throw new Error('Track is not remote!');
    }
    this._muted = muted;
    this.dispatchEvent(new Event(muted ? 'mute' : 'unmute'));
  }

  /**
   * Custom API for setting the volume on an individual audio track.
   *
   * @param volume a gain value in the range of 0-10. defaults to 1.0
   */
  _setVolume(volume) {
    if (this.kind !== 'audio') {
      throw new Error('Only implemented for audio tracks');
    }
    WebRTCModule.mediaStreamTrackSetVolume(this.remote ? this._peerConnectionId : -1, this.id, volume);
  }
  applyConstraints() {
    throw new Error('Not implemented.');
  }
  clone() {
    throw new Error('Not implemented.');
  }
  getCapabilities() {
    throw new Error('Not implemented.');
  }
  getConstraints() {
    return deepClone(this._constraints);
  }
  getSettings() {
    return deepClone(this._settings);
  }
  _registerEvents() {
    addListener(this, 'mediaStreamTrackEnded', ev => {
      if (ev.trackId !== this.id || this._readyState === 'ended') {
        return;
      }
      log.debug(`${this.id} mediaStreamTrackEnded`);
      this._readyState = 'ended';
      this.dispatchEvent(new Event('ended'));
    });
  }
  release() {
    if (this.remote) {
      return;
    }
    removeListener(this);
    WebRTCModule.mediaStreamTrackRelease(this.id);
  }
}

/**
 * Define the `onxxx` event handlers.
 */
const proto = MediaStreamTrack.prototype;
defineEventAttribute(proto, 'ended');
defineEventAttribute(proto, 'mute');
defineEventAttribute(proto, 'unmute');
//# sourceMappingURL=MediaStreamTrack.js.map