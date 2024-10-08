function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
export default class MediaStreamError {
  constructor(error) {
    _defineProperty(this, "name", void 0);
    _defineProperty(this, "message", void 0);
    _defineProperty(this, "constraintName", void 0);
    this.name = error.name;
    this.message = error.message;
    this.constraintName = error.constraintName;
  }
}
//# sourceMappingURL=MediaStreamError.js.map