function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
export default class MediaStreamErrorEvent {
  constructor(type, eventInitDict) {
    _defineProperty(this, "type", void 0);
    _defineProperty(this, "error", void 0);
    this.type = type.toString();
    Object.assign(this, eventInitDict);
  }
}
//# sourceMappingURL=MediaStreamErrorEvent.js.map