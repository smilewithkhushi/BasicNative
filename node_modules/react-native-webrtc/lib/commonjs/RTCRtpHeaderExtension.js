"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
class RTCRtpHeaderExtension {
  constructor(init) {
    _defineProperty(this, "id", void 0);
    _defineProperty(this, "uri", void 0);
    _defineProperty(this, "encrypted", void 0);
    this.id = init.id;
    this.uri = init.uri;
    this.encrypted = init.encrypted;
    Object.freeze(this);
  }
  toJSON() {
    return {
      id: this.id,
      uri: this.uri,
      encrypted: this.encrypted
    };
  }
}
exports.default = RTCRtpHeaderExtension;
//# sourceMappingURL=RTCRtpHeaderExtension.js.map