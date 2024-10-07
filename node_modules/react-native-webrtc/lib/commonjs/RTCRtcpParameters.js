"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
class RTCRtcpParameters {
  constructor(init) {
    _defineProperty(this, "cname", void 0);
    _defineProperty(this, "reducedSize", void 0);
    this.cname = init.cname;
    this.reducedSize = init.reducedSize;
    Object.freeze(this);
  }
  toJSON() {
    return {
      cname: this.cname,
      reducedSize: this.reducedSize
    };
  }
}
exports.default = RTCRtcpParameters;
//# sourceMappingURL=RTCRtcpParameters.js.map