"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var base64 = _interopRequireWildcard(require("base64-js"));
var _index = require("event-target-shim/index");
var _reactNative = require("react-native");
var _EventEmitter = require("./EventEmitter");
var _MessageEvent = _interopRequireDefault(require("./MessageEvent"));
var _RTCDataChannelEvent = _interopRequireDefault(require("./RTCDataChannelEvent"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
const {
  WebRTCModule
} = _reactNative.NativeModules;
class RTCDataChannel extends _index.EventTarget {
  // we only support 'arraybuffer'

  constructor(info) {
    super();
    _defineProperty(this, "_peerConnectionId", void 0);
    _defineProperty(this, "_reactTag", void 0);
    _defineProperty(this, "_bufferedAmount", void 0);
    _defineProperty(this, "_id", void 0);
    _defineProperty(this, "_label", void 0);
    _defineProperty(this, "_maxPacketLifeTime", void 0);
    _defineProperty(this, "_maxRetransmits", void 0);
    _defineProperty(this, "_negotiated", void 0);
    _defineProperty(this, "_ordered", void 0);
    _defineProperty(this, "_protocol", void 0);
    _defineProperty(this, "_readyState", void 0);
    _defineProperty(this, "binaryType", 'arraybuffer');
    _defineProperty(this, "bufferedAmountLowThreshold", 0);
    this._peerConnectionId = info.peerConnectionId;
    this._reactTag = info.reactTag;
    this._bufferedAmount = 0;
    this._label = info.label;
    this._id = info.id === -1 ? null : info.id; // null until negotiated.
    this._ordered = Boolean(info.ordered);
    this._maxPacketLifeTime = info.maxPacketLifeTime;
    this._maxRetransmits = info.maxRetransmits;
    this._protocol = info.protocol || '';
    this._negotiated = Boolean(info.negotiated);
    this._readyState = info.readyState;
    this._registerEvents();
  }
  get bufferedAmount() {
    return this._bufferedAmount;
  }
  get label() {
    return this._label;
  }
  get id() {
    return this._id;
  }
  get ordered() {
    return this._ordered;
  }
  get maxPacketLifeTime() {
    return this._maxPacketLifeTime;
  }
  get maxRetransmits() {
    return this._maxRetransmits;
  }
  get protocol() {
    return this._protocol;
  }
  get negotiated() {
    return this._negotiated;
  }
  get readyState() {
    return this._readyState;
  }
  send(data) {
    if (typeof data === 'string') {
      WebRTCModule.dataChannelSend(this._peerConnectionId, this._reactTag, data, 'text');
      return;
    }

    // Safely convert the buffer object to an Uint8Array for base64-encoding
    if (ArrayBuffer.isView(data)) {
      data = new Uint8Array(data.buffer, data.byteOffset, data.byteLength);
    } else if (data instanceof ArrayBuffer) {
      data = new Uint8Array(data);
    } else {
      throw new TypeError('Data must be either string, ArrayBuffer, or ArrayBufferView');
    }
    const base64data = base64.fromByteArray(data);
    WebRTCModule.dataChannelSend(this._peerConnectionId, this._reactTag, base64data, 'binary');
  }
  close() {
    if (this._readyState === 'closing' || this._readyState === 'closed') {
      return;
    }
    WebRTCModule.dataChannelClose(this._peerConnectionId, this._reactTag);
  }
  _registerEvents() {
    (0, _EventEmitter.addListener)(this, 'dataChannelStateChanged', ev => {
      if (ev.reactTag !== this._reactTag) {
        return;
      }
      this._readyState = ev.state;
      if (this._id === null && ev.id !== -1) {
        this._id = ev.id;
      }
      if (this._readyState === 'open') {
        this.dispatchEvent(new _RTCDataChannelEvent.default('open', {
          channel: this
        }));
      } else if (this._readyState === 'closing') {
        this.dispatchEvent(new _RTCDataChannelEvent.default('closing', {
          channel: this
        }));
      } else if (this._readyState === 'closed') {
        this.dispatchEvent(new _RTCDataChannelEvent.default('close', {
          channel: this
        }));

        // This DataChannel is done, clean up event handlers.
        (0, _EventEmitter.removeListener)(this);
        WebRTCModule.dataChannelDispose(this._peerConnectionId, this._reactTag);
      }
    });
    (0, _EventEmitter.addListener)(this, 'dataChannelReceiveMessage', ev => {
      if (ev.reactTag !== this._reactTag) {
        return;
      }
      let data = ev.data;
      if (ev.type === 'binary') {
        data = base64.toByteArray(ev.data).buffer;
      }
      this.dispatchEvent(new _MessageEvent.default('message', {
        data
      }));
    });
    (0, _EventEmitter.addListener)(this, 'dataChannelDidChangeBufferedAmount', ev => {
      if (ev.reactTag !== this._reactTag) {
        return;
      }
      this._bufferedAmount = ev.bufferedAmount;
      if (this._bufferedAmount < this.bufferedAmountLowThreshold) {
        this.dispatchEvent(new _RTCDataChannelEvent.default('bufferedamountlow', {
          channel: this
        }));
      }
    });
  }
}

/**
 * Define the `onxxx` event handlers.
 */
exports.default = RTCDataChannel;
const proto = RTCDataChannel.prototype;
(0, _index.defineEventAttribute)(proto, 'bufferedamountlow');
(0, _index.defineEventAttribute)(proto, 'close');
(0, _index.defineEventAttribute)(proto, 'closing');
(0, _index.defineEventAttribute)(proto, 'error');
(0, _index.defineEventAttribute)(proto, 'message');
(0, _index.defineEventAttribute)(proto, 'open');
//# sourceMappingURL=RTCDataChannel.js.map