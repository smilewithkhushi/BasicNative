'use strict';

function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }
function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _classPrivateFieldGet(s, a) { return s.get(_assertClassBrand(s, a)); }
function _classPrivateFieldSet(s, a, r) { return s.set(_assertClassBrand(s, a), r), r; }
function _assertClassBrand(e, t, n) { if ("function" == typeof e ? e === t : e.has(t)) return arguments.length < 3 ? t : n; throw new TypeError("Private element is not present on this object"); }
import { registerEventHandler, unregisterEventHandler } from './core';
import { shouldBeUseWeb } from './PlatformChecker';
const SHOULD_BE_USE_WEB = shouldBeUseWeb();
// In JS implementation (e.g. for web) we don't use Reanimated's
// event emitter, therefore we have to handle here
// the event that came from React Native and convert it.
function jsListener(eventName, handler) {
  return evt => {
    handler({
      ...evt.nativeEvent,
      eventName
    });
  };
}
var _viewTags = /*#__PURE__*/new WeakMap();
var _registrations = /*#__PURE__*/new WeakMap();
class WorkletEventHandlerNative {
  // keys are viewTags, values are arrays of registration ID's for each viewTag
  constructor(worklet, eventNames) {
    _defineProperty(this, "eventNames", void 0);
    _defineProperty(this, "worklet", void 0);
    _classPrivateFieldInitSpec(this, _viewTags, void 0);
    _classPrivateFieldInitSpec(this, _registrations, void 0);
    this.worklet = worklet;
    this.eventNames = eventNames;
    _classPrivateFieldSet(_viewTags, this, new Set());
    _classPrivateFieldSet(_registrations, this, new Map());
  }
  updateEventHandler(newWorklet, newEvents) {
    // Update worklet and event names
    this.worklet = newWorklet;
    this.eventNames = newEvents;

    // Detach all events
    _classPrivateFieldGet(_registrations, this).forEach(registrationIDs => {
      registrationIDs.forEach(id => unregisterEventHandler(id));
      // No need to remove registrationIDs from map, since it gets overwritten when attaching
    });

    // Attach new events with new worklet
    Array.from(_classPrivateFieldGet(_viewTags, this)).forEach(tag => {
      const newRegistrations = this.eventNames.map(eventName => registerEventHandler(this.worklet, eventName, tag));
      _classPrivateFieldGet(_registrations, this).set(tag, newRegistrations);
    });
  }
  registerForEvents(viewTag, fallbackEventName) {
    _classPrivateFieldGet(_viewTags, this).add(viewTag);
    const newRegistrations = this.eventNames.map(eventName => registerEventHandler(this.worklet, eventName, viewTag));
    _classPrivateFieldGet(_registrations, this).set(viewTag, newRegistrations);
    if (this.eventNames.length === 0 && fallbackEventName) {
      const newRegistration = registerEventHandler(this.worklet, fallbackEventName, viewTag);
      _classPrivateFieldGet(_registrations, this).set(viewTag, [newRegistration]);
    }
  }
  unregisterFromEvents(viewTag) {
    var _classPrivateFieldGet2;
    _classPrivateFieldGet(_viewTags, this).delete(viewTag);
    (_classPrivateFieldGet2 = _classPrivateFieldGet(_registrations, this).get(viewTag)) === null || _classPrivateFieldGet2 === void 0 || _classPrivateFieldGet2.forEach(id => {
      unregisterEventHandler(id);
    });
    _classPrivateFieldGet(_registrations, this).delete(viewTag);
  }
}
class WorkletEventHandlerWeb {
  constructor(worklet, eventNames = []) {
    _defineProperty(this, "eventNames", void 0);
    _defineProperty(this, "listeners", void 0);
    _defineProperty(this, "worklet", void 0);
    this.worklet = worklet;
    this.eventNames = eventNames;
    this.listeners = {};
    this.setupWebListeners();
  }
  setupWebListeners() {
    this.listeners = {};
    this.eventNames.forEach(eventName => {
      this.listeners[eventName] = jsListener(eventName, this.worklet);
    });
  }
  updateEventHandler(newWorklet, newEvents) {
    // Update worklet and event names
    this.worklet = newWorklet;
    this.eventNames = newEvents;
    this.setupWebListeners();
  }
  registerForEvents(_viewTag, _fallbackEventName) {
    // noop
  }
  unregisterFromEvents(_viewTag) {
    // noop
  }
}
export const WorkletEventHandler = SHOULD_BE_USE_WEB ? WorkletEventHandlerWeb : WorkletEventHandlerNative;
//# sourceMappingURL=WorkletEventHandler.js.map