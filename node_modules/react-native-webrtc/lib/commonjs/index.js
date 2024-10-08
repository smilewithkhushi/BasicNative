"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "MediaStream", {
  enumerable: true,
  get: function () {
    return _MediaStream.default;
  }
});
Object.defineProperty(exports, "MediaStreamTrack", {
  enumerable: true,
  get: function () {
    return _MediaStreamTrack.default;
  }
});
Object.defineProperty(exports, "RTCErrorEvent", {
  enumerable: true,
  get: function () {
    return _RTCErrorEvent.default;
  }
});
Object.defineProperty(exports, "RTCIceCandidate", {
  enumerable: true,
  get: function () {
    return _RTCIceCandidate.default;
  }
});
Object.defineProperty(exports, "RTCPeerConnection", {
  enumerable: true,
  get: function () {
    return _RTCPeerConnection.default;
  }
});
Object.defineProperty(exports, "RTCRtpReceiver", {
  enumerable: true,
  get: function () {
    return _RTCRtpReceiver.default;
  }
});
Object.defineProperty(exports, "RTCRtpSender", {
  enumerable: true,
  get: function () {
    return _RTCRtpSender.default;
  }
});
Object.defineProperty(exports, "RTCRtpTransceiver", {
  enumerable: true,
  get: function () {
    return _RTCRtpTransceiver.default;
  }
});
Object.defineProperty(exports, "RTCSessionDescription", {
  enumerable: true,
  get: function () {
    return _RTCSessionDescription.default;
  }
});
Object.defineProperty(exports, "RTCView", {
  enumerable: true,
  get: function () {
    return _RTCView.default;
  }
});
Object.defineProperty(exports, "ScreenCapturePickerView", {
  enumerable: true,
  get: function () {
    return _ScreenCapturePickerView.default;
  }
});
Object.defineProperty(exports, "mediaDevices", {
  enumerable: true,
  get: function () {
    return _MediaDevices.default;
  }
});
Object.defineProperty(exports, "permissions", {
  enumerable: true,
  get: function () {
    return _Permissions.default;
  }
});
exports.registerGlobals = registerGlobals;
var _reactNative = require("react-native");
var _EventEmitter = require("./EventEmitter");
var _Logger = _interopRequireDefault(require("./Logger"));
var _MediaDevices = _interopRequireDefault(require("./MediaDevices"));
var _MediaStream = _interopRequireDefault(require("./MediaStream"));
var _MediaStreamTrack = _interopRequireDefault(require("./MediaStreamTrack"));
var _MediaStreamTrackEvent = _interopRequireDefault(require("./MediaStreamTrackEvent"));
var _Permissions = _interopRequireDefault(require("./Permissions"));
var _RTCErrorEvent = _interopRequireDefault(require("./RTCErrorEvent"));
var _RTCIceCandidate = _interopRequireDefault(require("./RTCIceCandidate"));
var _RTCPeerConnection = _interopRequireDefault(require("./RTCPeerConnection"));
var _RTCRtpReceiver = _interopRequireDefault(require("./RTCRtpReceiver"));
var _RTCRtpSender = _interopRequireDefault(require("./RTCRtpSender"));
var _RTCRtpTransceiver = _interopRequireDefault(require("./RTCRtpTransceiver"));
var _RTCSessionDescription = _interopRequireDefault(require("./RTCSessionDescription"));
var _RTCView = _interopRequireDefault(require("./RTCView"));
var _ScreenCapturePickerView = _interopRequireDefault(require("./ScreenCapturePickerView"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const {
  WebRTCModule
} = _reactNative.NativeModules;
if (WebRTCModule === null) {
  throw new Error(`WebRTC native module not found.\n${_reactNative.Platform.OS === 'ios' ? 'Try executing the "pod install" command inside your projects ios folder.' : 'Try executing the "npm install" command inside your projects folder.'}`);
}
_Logger.default.enable(`${_Logger.default.ROOT_PREFIX}:*`);

// Add listeners for the native events early, since they are added asynchronously.
(0, _EventEmitter.setupNativeEvents)();
function registerGlobals() {
  // Should not happen. React Native has a global navigator object.
  if (typeof global.navigator !== 'object') {
    throw new Error('navigator is not an object');
  }
  if (!global.navigator.mediaDevices) {
    global.navigator.mediaDevices = {};
  }
  global.navigator.mediaDevices.getUserMedia = _MediaDevices.default.getUserMedia.bind(_MediaDevices.default);
  global.navigator.mediaDevices.getDisplayMedia = _MediaDevices.default.getDisplayMedia.bind(_MediaDevices.default);
  global.navigator.mediaDevices.enumerateDevices = _MediaDevices.default.enumerateDevices.bind(_MediaDevices.default);
  global.RTCIceCandidate = _RTCIceCandidate.default;
  global.RTCPeerConnection = _RTCPeerConnection.default;
  global.RTCRtpReceiver = _RTCRtpReceiver.default;
  global.RTCRtpSender = _RTCRtpReceiver.default;
  global.RTCSessionDescription = _RTCSessionDescription.default;
  global.MediaStream = _MediaStream.default;
  global.MediaStreamTrack = _MediaStreamTrack.default;
  global.MediaStreamTrackEvent = _MediaStreamTrackEvent.default;
  global.RTCRtpTransceiver = _RTCRtpTransceiver.default;
  global.RTCRtpReceiver = _RTCRtpReceiver.default;
  global.RTCRtpSender = _RTCRtpSender.default;
  global.RTCErrorEvent = _RTCErrorEvent.default;
}
//# sourceMappingURL=index.js.map