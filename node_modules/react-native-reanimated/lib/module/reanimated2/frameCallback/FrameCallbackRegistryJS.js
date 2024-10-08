'use strict';

function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
import { runOnUI } from '../core';
import { prepareUIRegistry } from './FrameCallbackRegistryUI';
export default class FrameCallbackRegistryJS {
  constructor() {
    _defineProperty(this, "nextCallbackId", 0);
    prepareUIRegistry();
  }
  registerFrameCallback(callback) {
    if (!callback) {
      return -1;
    }
    const callbackId = this.nextCallbackId;
    this.nextCallbackId++;
    runOnUI(() => {
      global._frameCallbackRegistry.registerFrameCallback(callback, callbackId);
    })();
    return callbackId;
  }
  unregisterFrameCallback(callbackId) {
    runOnUI(() => {
      global._frameCallbackRegistry.unregisterFrameCallback(callbackId);
    })();
  }
  manageStateFrameCallback(callbackId, state) {
    runOnUI(() => {
      global._frameCallbackRegistry.manageStateFrameCallback(callbackId, state);
    })();
  }
}
//# sourceMappingURL=FrameCallbackRegistryJS.js.map