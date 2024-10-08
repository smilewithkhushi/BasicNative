"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _RTCRtcpParameters = _interopRequireDefault(require("./RTCRtcpParameters"));
var _RTCRtpCodecParameters = _interopRequireDefault(require("./RTCRtpCodecParameters"));
var _RTCRtpHeaderExtension = _interopRequireDefault(require("./RTCRtpHeaderExtension"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
class RTCRtpParameters {
  constructor(init) {
    _defineProperty(this, "codecs", []);
    _defineProperty(this, "headerExtensions", []);
    _defineProperty(this, "rtcp", void 0);
    for (const codec of init.codecs) {
      this.codecs.push(new _RTCRtpCodecParameters.default(codec));
    }
    for (const ext of init.headerExtensions) {
      this.headerExtensions.push(new _RTCRtpHeaderExtension.default(ext));
    }
    this.rtcp = new _RTCRtcpParameters.default(init.rtcp);
  }
  toJSON() {
    return {
      codecs: this.codecs.map(c => c.toJSON()),
      headerExtensions: this.headerExtensions.map(he => he.toJSON()),
      rtcp: this.rtcp.toJSON()
    };
  }
}
exports.default = RTCRtpParameters;
//# sourceMappingURL=RTCRtpParameters.js.map