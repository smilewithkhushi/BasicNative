"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
class RTCRtpCodecCapability {
  constructor(init) {
    _defineProperty(this, "_mimeType", void 0);
    this._mimeType = init.mimeType;
    Object.freeze(this);
  }
  get mimeType() {
    return this._mimeType;
  }
}
exports.default = RTCRtpCodecCapability;
//# sourceMappingURL=RTCRtpCodecCapability.js.map