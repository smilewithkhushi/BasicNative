"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
class RTCSessionDescription {
  constructor() {
    let info = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
      type: null,
      sdp: ''
    };
    _defineProperty(this, "_sdp", void 0);
    _defineProperty(this, "_type", void 0);
    this._sdp = info.sdp;
    this._type = info.type;
  }
  get sdp() {
    return this._sdp;
  }
  get type() {
    return this._type;
  }
  toJSON() {
    return {
      sdp: this._sdp,
      type: this._type
    };
  }
}
exports.default = RTCSessionDescription;
//# sourceMappingURL=RTCSessionDescription.js.map