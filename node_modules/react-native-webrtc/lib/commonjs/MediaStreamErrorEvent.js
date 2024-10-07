"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
class MediaStreamErrorEvent {
  constructor(type, eventInitDict) {
    _defineProperty(this, "type", void 0);
    _defineProperty(this, "error", void 0);
    this.type = type.toString();
    Object.assign(this, eventInitDict);
  }
}
exports.default = MediaStreamErrorEvent;
//# sourceMappingURL=MediaStreamErrorEvent.js.map