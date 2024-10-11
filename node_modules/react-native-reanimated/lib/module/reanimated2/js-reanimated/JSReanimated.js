'use strict';

function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
import { isChromeDebugger, isJest, isWeb, isWindowAvailable } from '../PlatformChecker';
import { SensorType } from '../commonTypes';
import { mockedRequestAnimationFrame } from '../mockedRequestAnimationFrame';
// In Node.js environments (like when static rendering with Expo Router)
// requestAnimationFrame is unavailable, so we use our mock.
// It also has to be mocked for Jest purposes (see `initializeUIRuntime`).
const requestAnimationFrameImpl = isJest() || !globalThis.requestAnimationFrame ? mockedRequestAnimationFrame : globalThis.requestAnimationFrame;
export default class JSReanimated {
  constructor() {
    _defineProperty(this, "nextSensorId", 0);
    _defineProperty(this, "sensors", new Map());
    _defineProperty(this, "platform", undefined);
    _defineProperty(this, "getSensorCallback", (sensor, sensorType, eventHandler) => {
      switch (sensorType) {
        case SensorType.ACCELEROMETER:
        case SensorType.GRAVITY:
          return () => {
            let {
              x,
              y,
              z
            } = sensor;

            // Web Android sensors have a different coordinate system than iOS
            if (this.platform === Platform.WEB_ANDROID) {
              [x, y, z] = [-x, -y, -z];
            }
            // TODO TYPESCRIPT on web ShareableRef is the value itself so we call it directly
            eventHandler({
              x,
              y,
              z,
              interfaceOrientation: 0
            });
          };
        case SensorType.GYROSCOPE:
        case SensorType.MAGNETIC_FIELD:
          return () => {
            const {
              x,
              y,
              z
            } = sensor;
            // TODO TYPESCRIPT on web ShareableRef is the value itself so we call it directly
            eventHandler({
              x,
              y,
              z,
              interfaceOrientation: 0
            });
          };
        case SensorType.ROTATION:
          return () => {
            let [qw, qx, qy, qz] = sensor.quaternion;

            // Android sensors have a different coordinate system than iOS
            if (this.platform === Platform.WEB_ANDROID) {
              [qy, qz] = [qz, -qy];
            }

            // reference: https://stackoverflow.com/questions/5782658/extracting-yaw-from-a-quaternion
            const yaw = -Math.atan2(2.0 * (qy * qz + qw * qx), qw * qw - qx * qx - qy * qy + qz * qz);
            const pitch = Math.sin(-2.0 * (qx * qz - qw * qy));
            const roll = -Math.atan2(2.0 * (qx * qy + qw * qz), qw * qw + qx * qx - qy * qy - qz * qz);
            // TODO TYPESCRIPT on web ShareableRef is the value itself so we call it directly
            eventHandler({
              qw,
              qx,
              qy,
              qz,
              yaw,
              pitch,
              roll,
              interfaceOrientation: 0
            });
          };
      }
    });
  }
  makeShareableClone() {
    throw new Error('[Reanimated] makeShareableClone should never be called in JSReanimated.');
  }
  scheduleOnUI(worklet) {
    // @ts-ignore web implementation has still not been updated after the rewrite, this will be addressed once the web implementation updates are ready
    requestAnimationFrameImpl(worklet);
  }
  createWorkletRuntime(_name, _initializer) {
    throw new Error('[Reanimated] createWorkletRuntime is not available in JSReanimated.');
  }
  scheduleOnRuntime() {
    throw new Error('[Reanimated] scheduleOnRuntime is not available in JSReanimated.');
  }
  registerEventHandler(_eventHandler, _eventName, _emitterReactTag) {
    throw new Error('[Reanimated] registerEventHandler is not available in JSReanimated.');
  }
  unregisterEventHandler(_) {
    throw new Error('[Reanimated] unregisterEventHandler is not available in JSReanimated.');
  }
  enableLayoutAnimations() {
    if (isWeb()) {
      console.warn('[Reanimated] Layout Animations are not supported on web yet.');
    } else if (isJest()) {
      console.warn('[Reanimated] Layout Animations are no-ops when using Jest.');
    } else if (isChromeDebugger()) {
      console.warn('[Reanimated] Layout Animations are no-ops when using Chrome Debugger.');
    } else {
      console.warn('[Reanimated] Layout Animations are not supported on this configuration.');
    }
  }
  configureLayoutAnimationBatch() {
    // no-op
  }
  setShouldAnimateExitingForTag() {
    // no-op
  }
  registerSensor(sensorType, interval, _iosReferenceFrame, eventHandler) {
    if (!isWindowAvailable()) {
      // the window object is unavailable when building the server portion of a site that uses SSG
      // this check is here to ensure that the server build won't fail
      return -1;
    }
    if (this.platform === undefined) {
      this.detectPlatform();
    }
    if (!(this.getSensorName(sensorType) in window)) {
      // https://w3c.github.io/sensors/#secure-context
      console.warn('[Reanimated] Sensor is not available.' + (isWeb() && location.protocol !== 'https:' ? ' Make sure you use secure origin with `npx expo start --web --https`.' : '') + (this.platform === Platform.WEB_IOS ? ' For iOS web, you will also have to also grant permission in the browser: https://dev.to/li/how-to-requestpermission-for-devicemotion-and-deviceorientation-events-in-ios-13-46g2.' : ''));
      return -1;
    }
    if (this.platform === undefined) {
      this.detectPlatform();
    }
    const sensor = this.initializeSensor(sensorType, interval);
    sensor.addEventListener('reading', this.getSensorCallback(sensor, sensorType, eventHandler));
    sensor.start();
    this.sensors.set(this.nextSensorId, sensor);
    return this.nextSensorId++;
  }
  unregisterSensor(id) {
    const sensor = this.sensors.get(id);
    if (sensor !== undefined) {
      sensor.stop();
      this.sensors.delete(id);
    }
  }
  subscribeForKeyboardEvents(_) {
    if (isWeb()) {
      console.warn('[Reanimated] useAnimatedKeyboard is not available on web yet.');
    } else if (isJest()) {
      console.warn('[Reanimated] useAnimatedKeyboard is not available when using Jest.');
    } else if (isChromeDebugger()) {
      console.warn('[Reanimated] useAnimatedKeyboard is not available when using Chrome Debugger.');
    } else {
      console.warn('[Reanimated] useAnimatedKeyboard is not available on this configuration.');
    }
    return -1;
  }
  unsubscribeFromKeyboardEvents(_) {
    // noop
  }
  initializeSensor(sensorType, interval) {
    const config = interval <= 0 ? {
      referenceFrame: 'device'
    } : {
      frequency: 1000 / interval
    };
    switch (sensorType) {
      case SensorType.ACCELEROMETER:
        return new window.Accelerometer(config);
      case SensorType.GYROSCOPE:
        return new window.Gyroscope(config);
      case SensorType.GRAVITY:
        return new window.GravitySensor(config);
      case SensorType.MAGNETIC_FIELD:
        return new window.Magnetometer(config);
      case SensorType.ROTATION:
        return new window.AbsoluteOrientationSensor(config);
    }
  }
  getSensorName(sensorType) {
    switch (sensorType) {
      case SensorType.ACCELEROMETER:
        return 'Accelerometer';
      case SensorType.GRAVITY:
        return 'GravitySensor';
      case SensorType.GYROSCOPE:
        return 'Gyroscope';
      case SensorType.MAGNETIC_FIELD:
        return 'Magnetometer';
      case SensorType.ROTATION:
        return 'AbsoluteOrientationSensor';
    }
  }
  detectPlatform() {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;
    if (userAgent === undefined) {
      this.platform = Platform.UNKNOWN;
    } else if (/iPad|iPhone|iPod/.test(userAgent)) {
      this.platform = Platform.WEB_IOS;
    } else if (/android/i.test(userAgent)) {
      this.platform = Platform.WEB_ANDROID;
    } else {
      this.platform = Platform.WEB;
    }
  }
  getViewProp(_viewTag, _propName, _component, _callback) {
    throw new Error('[Reanimated] getViewProp is not available in JSReanimated.');
  }
  configureProps() {
    throw new Error('[Reanimated] configureProps is not available in JSReanimated.');
  }
  executeOnUIRuntimeSync(_shareable) {
    throw new Error('[Reanimated] `executeOnUIRuntimeSync` is not available in JSReanimated.');
  }
}
var Platform = /*#__PURE__*/function (Platform) {
  Platform["WEB_IOS"] = "web iOS";
  Platform["WEB_ANDROID"] = "web Android";
  Platform["WEB"] = "web";
  Platform["UNKNOWN"] = "unknown";
  return Platform;
}(Platform || {});
//# sourceMappingURL=JSReanimated.js.map