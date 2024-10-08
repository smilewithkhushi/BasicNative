"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addListener = addListener;
exports.removeListener = removeListener;
exports.setupNativeEvents = setupNativeEvents;
var _reactNative = require("react-native");
var _EventEmitter = _interopRequireDefault(require("react-native/Libraries/vendor/emitter/EventEmitter"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
// @ts-ignore

const {
  WebRTCModule
} = _reactNative.NativeModules;

// This emitter is going to be used to listen to all the native events (once) and then
// re-emit them on a JS-only emitter.
const nativeEmitter = new _reactNative.NativeEventEmitter(WebRTCModule);
const NATIVE_EVENTS = ['peerConnectionSignalingStateChanged', 'peerConnectionStateChanged', 'peerConnectionOnRenegotiationNeeded', 'peerConnectionIceConnectionChanged', 'peerConnectionIceGatheringChanged', 'peerConnectionGotICECandidate', 'peerConnectionDidOpenDataChannel', 'peerConnectionOnRemoveTrack', 'peerConnectionOnTrack', 'dataChannelStateChanged', 'dataChannelReceiveMessage', 'dataChannelDidChangeBufferedAmount', 'mediaStreamTrackMuteChanged', 'mediaStreamTrackEnded'];
const eventEmitter = new _EventEmitter.default();
function setupNativeEvents() {
  for (const eventName of NATIVE_EVENTS) {
    nativeEmitter.addListener(eventName, function () {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      eventEmitter.emit(eventName, ...args);
    });
  }
}
const _subscriptions = new Map();
function addListener(listener, eventName, eventHandler) {
  var _subscriptions$get;
  if (!NATIVE_EVENTS.includes(eventName)) {
    throw new Error(`Invalid event: ${eventName}`);
  }
  if (!_subscriptions.has(listener)) {
    _subscriptions.set(listener, []);
  }
  (_subscriptions$get = _subscriptions.get(listener)) === null || _subscriptions$get === void 0 ? void 0 : _subscriptions$get.push(eventEmitter.addListener(eventName, eventHandler));
}
function removeListener(listener) {
  var _subscriptions$get2;
  (_subscriptions$get2 = _subscriptions.get(listener)) === null || _subscriptions$get2 === void 0 ? void 0 : _subscriptions$get2.forEach(sub => {
    sub.remove();
  });
  _subscriptions.delete(listener);
}
//# sourceMappingURL=EventEmitter.js.map