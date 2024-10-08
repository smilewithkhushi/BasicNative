function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
import { NativeModules } from 'react-native';
import RTCRtpReceiveParameters from './RTCRtpReceiveParameters';
const {
  WebRTCModule
} = NativeModules;
export default class RTCRtpReceiver {
  constructor(info) {
    _defineProperty(this, "_id", void 0);
    _defineProperty(this, "_peerConnectionId", void 0);
    _defineProperty(this, "_track", null);
    _defineProperty(this, "_rtpParameters", void 0);
    this._id = info.id;
    this._peerConnectionId = info.peerConnectionId;
    this._rtpParameters = new RTCRtpReceiveParameters(info.rtpParameters);
    if (info.track) {
      this._track = info.track;
    }
  }
  static getCapabilities(kind) {
    return WebRTCModule.receiverGetCapabilities(kind);
  }
  getStats() {
    return WebRTCModule.receiverGetStats(this._peerConnectionId, this._id).then(data =>
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
  getParameters() {
    return this._rtpParameters;
  }
  get id() {
    return this._id;
  }
  get track() {
    return this._track;
  }
}
//# sourceMappingURL=RTCRtpReceiver.js.map