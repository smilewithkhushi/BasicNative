"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _RTCRtpEncodingParameters = _interopRequireDefault(require("./RTCRtpEncodingParameters"));
var _RTCRtpParameters = _interopRequireDefault(require("./RTCRtpParameters"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
/**
 * Class to convert degradation preference format. Native has a format such as
 * MAINTAIN_FRAMERATE whereas the web APIs expect maintain-framerate
 */
class DegradationPreference {
  static fromNative(nativeFormat) {
    const stringFormat = nativeFormat.toLowerCase().replace('_', '-');
    return stringFormat;
  }
  static toNative(format) {
    return format.toUpperCase().replace('-', '_');
  }
}
class RTCRtpSendParameters extends _RTCRtpParameters.default {
  constructor(init) {
    super(init);
    _defineProperty(this, "transactionId", void 0);
    _defineProperty(this, "encodings", void 0);
    _defineProperty(this, "degradationPreference", void 0);
    this.transactionId = init.transactionId;
    this.encodings = [];
    this.degradationPreference = init.degradationPreference ? DegradationPreference.fromNative(init.degradationPreference) : null;
    for (const enc of init.encodings) {
      this.encodings.push(new _RTCRtpEncodingParameters.default(enc));
    }
  }
  toJSON() {
    const obj = super.toJSON();
    obj['transactionId'] = this.transactionId;
    obj['encodings'] = this.encodings.map(e => e.toJSON());
    if (this.degradationPreference !== null) {
      obj['degradationPreference'] = DegradationPreference.toNative(this.degradationPreference);
    }
    return obj;
  }
}
exports.default = RTCRtpSendParameters;
//# sourceMappingURL=RTCRtpSendParameters.js.map