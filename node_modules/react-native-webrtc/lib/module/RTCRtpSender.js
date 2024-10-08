function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
import { NativeModules } from 'react-native';
import RTCRtpSendParameters from './RTCRtpSendParameters';
const {
  WebRTCModule
} = NativeModules;
export default class RTCRtpSender {
  constructor(info) {
    _defineProperty(this, "_id", void 0);
    _defineProperty(this, "_track", null);
    _defineProperty(this, "_peerConnectionId", void 0);
    _defineProperty(this, "_rtpParameters", void 0);
    this._peerConnectionId = info.peerConnectionId;
    this._id = info.id;
    this._rtpParameters = new RTCRtpSendParameters(info.rtpParameters);
    if (info.track) {
      this._track = info.track;
    }
  }
  async replaceTrack(track) {
    try {
      await WebRTCModule.senderReplaceTrack(this._peerConnectionId, this._id, track ? track.id : null);
    } catch (e) {
      return;
    }
    this._track = track;
  }
  static getCapabilities(kind) {
    return WebRTCModule.senderGetCapabilities(kind);
  }
  getParameters() {
    return this._rtpParameters;
  }
  async setParameters(parameters) {
    // This allows us to get rid of private "underscore properties"
    const _params = JSON.parse(JSON.stringify(parameters));
    const newParameters = await WebRTCModule.senderSetParameters(this._peerConnectionId, this._id, _params);
    this._rtpParameters = new RTCRtpSendParameters(newParameters);
  }
  getStats() {
    return WebRTCModule.senderGetStats(this._peerConnectionId, this._id).then(data =>
    /* On both Android and iOS it is faster to construct a single
    JSON string representing the Map of StatsReports and have it
    pass through the React Native bridge rather than the Map of
    StatsReports. While the implementations do try to be faster in
    general, the stress is on being faster to pass through the React
    Native bridge which is a bottleneck that tends to be visible in
    the UI when there is congestion involving UI-related passing.
    */
    new Map(JSON.parse(data)));
  }
  get track() {
    return this._track;
  }
  get id() {
    return this._id;
  }
}
//# sourceMappingURL=RTCRtpSender.js.map