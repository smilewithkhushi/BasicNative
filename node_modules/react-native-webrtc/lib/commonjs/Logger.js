"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _debug = _interopRequireDefault(require("debug"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
class Logger {
  static enable(ns) {
    _debug.default.enable(ns);
  }
  constructor(prefix) {
    _defineProperty(this, "_debug", void 0);
    _defineProperty(this, "_info", void 0);
    _defineProperty(this, "_warn", void 0);
    _defineProperty(this, "_error", void 0);
    const _prefix = `${Logger.ROOT_PREFIX}:${prefix}`;
    this._debug = (0, _debug.default)(`${_prefix}:DEBUG`);
    this._info = (0, _debug.default)(`${_prefix}:INFO`);
    this._warn = (0, _debug.default)(`${_prefix}:WARN`);
    this._error = (0, _debug.default)(`${_prefix}:ERROR`);
    const log = console.log.bind(console);
    this._debug.log = log;
    this._info.log = log;
    this._warn.log = log;
    this._error.log = log;
  }
  debug(msg) {
    this._debug(msg);
  }
  info(msg) {
    this._info(msg);
  }
  warn(msg) {
    this._warn(msg);
  }
  error(msg, err) {
    var _err$stack;
    const trace = (_err$stack = err === null || err === void 0 ? void 0 : err.stack) !== null && _err$stack !== void 0 ? _err$stack : 'N/A';
    this._error(`${msg} Trace: ${trace}`);
  }
}
exports.default = Logger;
_defineProperty(Logger, "ROOT_PREFIX", 'rn-webrtc');
//# sourceMappingURL=Logger.js.map