'use strict';

var _BaseAnimationBuilder;
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
import { withDelay } from '../../animation';
import { ReduceMotion } from '../../commonTypes';
import { getReduceMotionFromConfig } from '../../animation/util';
export class BaseAnimationBuilder {
  constructor() {
    _defineProperty(this, "durationV", void 0);
    _defineProperty(this, "delayV", void 0);
    _defineProperty(this, "reduceMotionV", ReduceMotion.System);
    _defineProperty(this, "randomizeDelay", false);
    _defineProperty(this, "callbackV", void 0);
    _defineProperty(this, "build", () => {
      throw new Error('[Reanimated] Unimplemented method in child class.');
    });
  }
  /**
   * Lets you adjust the animation duration. Can be chained alongside other [layout animation modifiers](https://docs.swmansion.com/react-native-reanimated/docs/fundamentals/glossary#layout-animation-modifier).
   *
   * @param durationMs - Length of the animation (in milliseconds).
   */
  static duration(durationMs) {
    const instance = this.createInstance();
    return instance.duration(durationMs);
  }
  duration(durationMs) {
    this.durationV = durationMs;
    return this;
  }

  /**
   * Lets you adjust the delay before the animation starts (in milliseconds). Can be chained alongside other [layout animation modifiers](https://docs.swmansion.com/react-native-reanimated/docs/fundamentals/glossary#layout-animation-modifier).
   *
   * @param delayMs - Delay before the animation starts (in milliseconds).
   */
  static delay(delayMs) {
    const instance = this.createInstance();
    return instance.delay(delayMs);
  }
  delay(delayMs) {
    this.delayV = delayMs;
    return this;
  }

  /**
   * The callback that will fire after the animation ends. Can be chained alongside other [layout animation modifiers](https://docs.swmansion.com/react-native-reanimated/docs/fundamentals/glossary#layout-animation-modifier).
   *
   * @param callback - Callback that will fire after the animation ends.
   */
  static withCallback(callback) {
    const instance = this.createInstance();
    return instance.withCallback(callback);
  }
  withCallback(callback) {
    this.callbackV = callback;
    return this;
  }

  /**
   * Lets you adjust the behavior when the device's reduced motion accessibility setting is turned on.  Can be chained alongside other [layout animation modifiers](https://docs.swmansion.com/react-native-reanimated/docs/fundamentals/glossary#layout-animation-modifier).
   *
   * @param reduceMotion - Determines how the animation responds to the device's reduced motion accessibility setting. Default to `ReduceMotion.System` - {@link ReduceMotion}.
   */
  static reduceMotion(reduceMotion) {
    const instance = this.createInstance();
    return instance.reduceMotion(reduceMotion);
  }
  reduceMotion(reduceMotionV) {
    this.reduceMotionV = reduceMotionV;
    return this;
  }

  // 300ms is the default animation duration. If any animation has different default has to override this method.
  static getDuration() {
    return 300;
  }
  getDuration() {
    return this.durationV ?? 300;
  }

  /**
   * @deprecated Use `.delay()` with `Math.random()` instead
   */
  static randomDelay() {
    const instance = this.createInstance();
    return instance.randomDelay();
  }
  randomDelay() {
    this.randomizeDelay = true;
    return this;
  }

  // when randomizeDelay is set to true, randomize delay between 0 and provided value (or 1000ms if delay is not provided)
  getDelay() {
    return this.randomizeDelay ? Math.random() * (this.delayV ?? 1000) : this.delayV ?? 0;
  }
  getReduceMotion() {
    return this.reduceMotionV;
  }
  getDelayFunction() {
    const isDelayProvided = this.randomizeDelay || this.delayV;
    const reduceMotion = this.getReduceMotion();
    return isDelayProvided ? (delay, animation) => {
      'worklet';

      return withDelay(delay, animation, reduceMotion);
    } : (_, animation) => {
      'worklet';

      animation.reduceMotion = getReduceMotionFromConfig(reduceMotion);
      return animation;
    };
  }
  static build() {
    const instance = this.createInstance();
    return instance.build();
  }
}
_BaseAnimationBuilder = BaseAnimationBuilder;
_defineProperty(BaseAnimationBuilder, "createInstance", void 0);
//# sourceMappingURL=BaseAnimationBuilder.js.map