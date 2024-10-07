function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
/**
 * @brief represents codec capabilities for senders and receivers.
 */
export default class RTCRtpCapabilities {
  constructor(codecs) {
    _defineProperty(this, "_codecs", []);
    this._codecs = codecs;
    Object.freeze(this);
  }
  get codecs() {
    return this._codecs;
  }
}
//# sourceMappingURL=RTCRtpCapabilities.js.map