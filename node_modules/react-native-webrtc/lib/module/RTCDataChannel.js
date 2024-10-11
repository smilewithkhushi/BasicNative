function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
import * as base64 from 'base64-js';
import { EventTarget, defineEventAttribute } from 'event-target-shim/index';
import { NativeModules } from 'react-native';
import { addListener, removeListener } from './EventEmitter';
import MessageEvent from './MessageEvent';
import RTCDataChannelEvent from './RTCDataChannelEvent';
const {
  WebRTCModule
} = NativeModules;
export default class RTCDataChannel extends EventTarget {
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
    addListener(this, 'dataChannelStateChanged', ev => {
      if (ev.reactTag !== this._reactTag) {
        return;
      }
      this._readyState = ev.state;
      if (this._id === null && ev.id !== -1) {
        this._id = ev.id;
      }
      if (this._readyState === 'open') {
        this.dispatchEvent(new RTCDataChannelEvent('open', {
          channel: this
        }));
      } else if (this._readyState === 'closing') {
        this.dispatchEvent(new RTCDataChannelEvent('closing', {
          channel: this
        }));
      } else if (this._readyState === 'closed') {
        this.dispatchEvent(new RTCDataChannelEvent('close', {
          channel: this
        }));

        // This DataChannel is done, clean up event handlers.
        removeListener(this);
        WebRTCModule.dataChannelDispose(this._peerConnectionId, this._reactTag);
      }
    });
    addListener(this, 'dataChannelReceiveMessage', ev => {
      if (ev.reactTag !== this._reactTag) {
        return;
      }
      let data = ev.data;
      if (ev.type === 'binary') {
        data = base64.toByteArray(ev.data).buffer;
      }
      this.dispatchEvent(new MessageEvent('message', {
        data
      }));
    });
    addListener(this, 'dataChannelDidChangeBufferedAmount', ev => {
      if (ev.reactTag !== this._reactTag) {
        return;
      }
      this._bufferedAmount = ev.bufferedAmount;
      if (this._bufferedAmount < this.bufferedAmountLowThreshold) {
        this.dispatchEvent(new RTCDataChannelEvent('bufferedamountlow', {
          channel: this
        }));
      }
    });
  }
}

/**
 * Define the `onxxx` event handlers.
 */
const proto = RTCDataChannel.prototype;
defineEventAttribute(proto, 'bufferedamountlow');
defineEventAttribute(proto, 'close');
defineEventAttribute(proto, 'closing');
defineEventAttribute(proto, 'error');
defineEventAttribute(proto, 'message');
defineEventAttribute(proto, 'open');
//# sourceMappingURL=RTCDataChannel.js.map