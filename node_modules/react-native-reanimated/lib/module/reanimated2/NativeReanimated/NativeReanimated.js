'use strict';

function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
import { checkCppVersion } from '../platform-specific/checkCppVersion';
import { jsVersion } from '../platform-specific/jsVersion';
import { getValueUnpackerCode } from '../valueUnpacker';
import { isFabric } from '../PlatformChecker';
import { getShadowNodeWrapperFromRef } from '../fabricUtils';
import ReanimatedModule from '../../specs/NativeReanimatedModule';

// this is the type of `__reanimatedModuleProxy` which is injected using JSI

function assertSingleReanimatedInstance() {
  if (global._REANIMATED_VERSION_JS !== undefined && global._REANIMATED_VERSION_JS !== jsVersion) {
    throw new Error(`[Reanimated] Another instance of Reanimated was detected.
See \`https://docs.swmansion.com/react-native-reanimated/docs/guides/troubleshooting#another-instance-of-reanimated-was-detected\` for more details. Previous: ${global._REANIMATED_VERSION_JS}, current: ${jsVersion}.`);
  }
}
export class NativeReanimated {
  constructor() {
    _defineProperty(this, "InnerNativeModule", void 0);
    // These checks have to split since version checking depend on the execution order
    if (__DEV__) {
      assertSingleReanimatedInstance();
    }
    global._REANIMATED_VERSION_JS = jsVersion;
    if (global.__reanimatedModuleProxy === undefined) {
      const valueUnpackerCode = getValueUnpackerCode();
      ReanimatedModule === null || ReanimatedModule === void 0 || ReanimatedModule.installTurboModule(valueUnpackerCode);
    }
    if (global.__reanimatedModuleProxy === undefined) {
      throw new Error(`[Reanimated] Native part of Reanimated doesn't seem to be initialized.
See https://docs.swmansion.com/react-native-reanimated/docs/guides/troubleshooting#native-part-of-reanimated-doesnt-seem-to-be-initialized for more details.`);
    }
    if (__DEV__) {
      checkCppVersion();
    }
    this.InnerNativeModule = global.__reanimatedModuleProxy;
  }
  makeShareableClone(value, shouldPersistRemote, nativeStateSource) {
    return this.InnerNativeModule.makeShareableClone(value, shouldPersistRemote, nativeStateSource);
  }
  scheduleOnUI(shareable) {
    return this.InnerNativeModule.scheduleOnUI(shareable);
  }
  executeOnUIRuntimeSync(shareable) {
    return this.InnerNativeModule.executeOnUIRuntimeSync(shareable);
  }
  createWorkletRuntime(name, initializer) {
    return this.InnerNativeModule.createWorkletRuntime(name, initializer);
  }
  scheduleOnRuntime(workletRuntime, shareableWorklet) {
    return this.InnerNativeModule.scheduleOnRuntime(workletRuntime, shareableWorklet);
  }
  registerSensor(sensorType, interval, iosReferenceFrame, handler) {
    return this.InnerNativeModule.registerSensor(sensorType, interval, iosReferenceFrame, handler);
  }
  unregisterSensor(sensorId) {
    return this.InnerNativeModule.unregisterSensor(sensorId);
  }
  registerEventHandler(eventHandler, eventName, emitterReactTag) {
    return this.InnerNativeModule.registerEventHandler(eventHandler, eventName, emitterReactTag);
  }
  unregisterEventHandler(id) {
    return this.InnerNativeModule.unregisterEventHandler(id);
  }
  getViewProp(viewTag, propName, component,
  // required on Fabric
  callback) {
    let shadowNodeWrapper;
    if (isFabric()) {
      shadowNodeWrapper = getShadowNodeWrapperFromRef(component);
      return this.InnerNativeModule.getViewProp(shadowNodeWrapper, propName, callback);
    }
    return this.InnerNativeModule.getViewProp(viewTag, propName, callback);
  }
  configureLayoutAnimationBatch(layoutAnimationsBatch) {
    this.InnerNativeModule.configureLayoutAnimationBatch(layoutAnimationsBatch);
  }
  setShouldAnimateExitingForTag(viewTag, shouldAnimate) {
    this.InnerNativeModule.setShouldAnimateExitingForTag(viewTag, shouldAnimate);
  }
  enableLayoutAnimations(flag) {
    this.InnerNativeModule.enableLayoutAnimations(flag);
  }
  configureProps(uiProps, nativeProps) {
    this.InnerNativeModule.configureProps(uiProps, nativeProps);
  }
  subscribeForKeyboardEvents(handler, isStatusBarTranslucent) {
    return this.InnerNativeModule.subscribeForKeyboardEvents(handler, isStatusBarTranslucent);
  }
  unsubscribeFromKeyboardEvents(listenerId) {
    this.InnerNativeModule.unsubscribeFromKeyboardEvents(listenerId);
  }
}
//# sourceMappingURL=NativeReanimated.js.map