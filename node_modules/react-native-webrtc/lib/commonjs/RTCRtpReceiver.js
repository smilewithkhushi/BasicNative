"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _reactNative = require("react-native");
var _RTCRtpReceiveParameters = _interopRequireDefault(require("./RTCRtpReceiveParameters"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
const {
  WebRTCModule
} = _reactNative.NativeModules;
class RTCRtpReceiver {
  constructor(info) {
    _defineProperty(this, "_id", void 0);
    _defineProperty(this, "_peerConnectionId", void 0);
    _defineProperty(this, "_track", null);
    _defineProperty(this, "_rtpParameters", void 0);
    this._id = info.id;
    this._peerConnectionId = info.peerConnectionId;
    this._rtpParameters = new _RTCRtpReceiveParameters.default(info.rtpParameters);
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
exports.default = RTCRtpReceiver;
//# sourceMappingURL=RTCRtpReceiver.js.map