'use strict';

function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
import { NativeEventEmitter, Platform, findNodeHandle } from 'react-native';
import { shouldBeUseWeb } from '../reanimated2/PlatformChecker';
import { runOnJS, runOnUIImmediately } from '../reanimated2/threads';
import NativeReanimatedModule from '../specs/NativeReanimatedModule';
const SHOULD_BE_USE_WEB = shouldBeUseWeb();
class JSPropsUpdaterPaper {
  constructor() {
    _defineProperty(this, "_reanimatedEventEmitter", void 0);
    this._reanimatedEventEmitter = new NativeEventEmitter(
    // NativeEventEmitter only uses this parameter on iOS.
    Platform.OS === 'ios' ? NativeReanimatedModule : undefined);
  }
  addOnJSPropsChangeListener(animatedComponent) {
    const viewTag = findNodeHandle(animatedComponent);
    JSPropsUpdaterPaper._tagToComponentMapping.set(viewTag, animatedComponent);
    if (JSPropsUpdaterPaper._tagToComponentMapping.size === 1) {
      const listener = data => {
        const component = JSPropsUpdaterPaper._tagToComponentMapping.get(data.viewTag);
        component === null || component === void 0 || component._updateFromNative(data.props);
      };
      this._reanimatedEventEmitter.addListener('onReanimatedPropsChange', listener);
    }
  }
  removeOnJSPropsChangeListener(animatedComponent) {
    const viewTag = findNodeHandle(animatedComponent);
    JSPropsUpdaterPaper._tagToComponentMapping.delete(viewTag);
    if (JSPropsUpdaterPaper._tagToComponentMapping.size === 0) {
      this._reanimatedEventEmitter.removeAllListeners('onReanimatedPropsChange');
    }
  }
}
_defineProperty(JSPropsUpdaterPaper, "_tagToComponentMapping", new Map());
class JSPropsUpdaterFabric {
  constructor() {
    if (!JSPropsUpdaterFabric.isInitialized) {
      const updater = (viewTag, props) => {
        const component = JSPropsUpdaterFabric._tagToComponentMapping.get(viewTag);
        component === null || component === void 0 || component._updateFromNative(props);
      };
      runOnUIImmediately(() => {
        'worklet';

        global.updateJSProps = (viewTag, props) => {
          runOnJS(updater)(viewTag, props);
        };
      })();
      JSPropsUpdaterFabric.isInitialized = true;
    }
  }
  addOnJSPropsChangeListener(animatedComponent) {
    if (!JSPropsUpdaterFabric.isInitialized) {
      return;
    }
    const viewTag = findNodeHandle(animatedComponent);
    JSPropsUpdaterFabric._tagToComponentMapping.set(viewTag, animatedComponent);
  }
  removeOnJSPropsChangeListener(animatedComponent) {
    if (!JSPropsUpdaterFabric.isInitialized) {
      return;
    }
    const viewTag = findNodeHandle(animatedComponent);
    JSPropsUpdaterFabric._tagToComponentMapping.delete(viewTag);
  }
}
_defineProperty(JSPropsUpdaterFabric, "_tagToComponentMapping", new Map());
_defineProperty(JSPropsUpdaterFabric, "isInitialized", false);
class JSPropsUpdaterWeb {
  addOnJSPropsChangeListener(_animatedComponent) {
    // noop
  }
  removeOnJSPropsChangeListener(_animatedComponent) {
    // noop
  }
}
let JSPropsUpdater;
if (SHOULD_BE_USE_WEB) {
  JSPropsUpdater = JSPropsUpdaterWeb;
} else if (global._IS_FABRIC) {
  JSPropsUpdater = JSPropsUpdaterFabric;
} else {
  JSPropsUpdater = JSPropsUpdaterPaper;
}
export default JSPropsUpdater;
//# sourceMappingURL=JSPropsUpdater.js.map