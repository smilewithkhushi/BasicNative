"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
class RTCIceCandidate {
  constructor(_ref) {
    let {
      candidate = '',
      sdpMLineIndex = null,
      sdpMid = null
    } = _ref;
    _defineProperty(this, "candidate", void 0);
    _defineProperty(this, "sdpMLineIndex", void 0);
    _defineProperty(this, "sdpMid", void 0);
    if (sdpMLineIndex === null && sdpMid === null) {
      throw new TypeError('`sdpMLineIndex` and `sdpMid` must not be both null');
    }
    this.candidate = candidate;
    this.sdpMLineIndex = sdpMLineIndex;
    this.sdpMid = sdpMid;
  }
  toJSON() {
    return {
      candidate: this.candidate,
      sdpMLineIndex: this.sdpMLineIndex,
      sdpMid: this.sdpMid
    };
  }
}
exports.default = RTCIceCandidate;
//# sourceMappingURL=RTCIceCandidate.js.map