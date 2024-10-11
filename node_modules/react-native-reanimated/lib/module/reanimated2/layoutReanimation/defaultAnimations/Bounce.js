'use strict';

function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
import { withSequence, withTiming } from '../../animation';
import { ComplexAnimationBuilder } from '../animationBuilder';

/**
 * Bounce entering animation. You can modify the behavior by chaining methods like `.delay(300)` or `.duration(100)`.
 *
 * You pass it to the `entering` prop on [an Animated component](https://docs.swmansion.com/react-native-reanimated/docs/fundamentals/glossary#animated-component).
 *
 * @see https://docs.swmansion.com/react-native-reanimated/docs/layout-animations/entering-exiting-animations#bounce
 */
export class BounceIn extends ComplexAnimationBuilder {
  constructor(...args) {
    super(...args);
    _defineProperty(this, "build", () => {
      const delayFunction = this.getDelayFunction();
      const delay = this.getDelay();
      const duration = this.getDuration();
      const callback = this.callbackV;
      const initialValues = this.initialValues;
      return () => {
        'worklet';

        return {
          animations: {
            transform: [{
              scale: delayFunction(delay, withSequence(withTiming(1.2, {
                duration: duration * 0.55
              }), withTiming(0.9, {
                duration: duration * 0.15
              }), withTiming(1.1, {
                duration: duration * 0.15
              }), withTiming(1, {
                duration: duration * 0.15
              })))
            }]
          },
          initialValues: {
            transform: [{
              scale: 0
            }],
            ...initialValues
          },
          callback
        };
      };
    });
  }
  static createInstance() {
    return new BounceIn();
  }
  static getDuration() {
    return 600;
  }
  getDuration() {
    return this.durationV ?? 600;
  }
}

/**
 * Bounce from bottom animation. You can modify the behavior by chaining methods like `.delay(300)` or `.duration(100)`.
 *
 * You pass it to the `entering` prop on [an Animated component](https://docs.swmansion.com/react-native-reanimated/docs/fundamentals/glossary#animated-component).
 *
 * @see https://docs.swmansion.com/react-native-reanimated/docs/layout-animations/entering-exiting-animations#bounce
 */
_defineProperty(BounceIn, "presetName", 'BounceIn');
export class BounceInDown extends ComplexAnimationBuilder {
  constructor(...args) {
    super(...args);
    _defineProperty(this, "build", () => {
      const delayFunction = this.getDelayFunction();
      const delay = this.getDelay();
      const duration = this.getDuration();
      const callback = this.callbackV;
      const initialValues = this.initialValues;
      return values => {
        'worklet';

        return {
          animations: {
            transform: [{
              translateY: delayFunction(delay, withSequence(withTiming(-20, {
                duration: duration * 0.55
              }), withTiming(10, {
                duration: duration * 0.15
              }), withTiming(-10, {
                duration: duration * 0.15
              }), withTiming(0, {
                duration: duration * 0.15
              })))
            }]
          },
          initialValues: {
            transform: [{
              translateY: values.windowHeight
            }],
            ...initialValues
          },
          callback
        };
      };
    });
  }
  static createInstance() {
    return new BounceInDown();
  }
  static getDuration() {
    return 600;
  }
  getDuration() {
    return this.durationV ?? 600;
  }
}

/**
 * Bounce from top animation. You can modify the behavior by chaining methods like `.delay(300)` or `.duration(100)`.
 *
 * You pass it to the `entering` prop on [an Animated component](https://docs.swmansion.com/react-native-reanimated/docs/fundamentals/glossary#animated-component).
 *
 * @see https://docs.swmansion.com/react-native-reanimated/docs/layout-animations/entering-exiting-animations#bounce
 */
_defineProperty(BounceInDown, "presetName", 'BounceInDown');
export class BounceInUp extends ComplexAnimationBuilder {
  constructor(...args) {
    super(...args);
    _defineProperty(this, "build", () => {
      const delayFunction = this.getDelayFunction();
      const delay = this.getDelay();
      const duration = this.getDuration();
      const callback = this.callbackV;
      const initialValues = this.initialValues;
      return values => {
        'worklet';

        return {
          animations: {
            transform: [{
              translateY: delayFunction(delay, withSequence(withTiming(20, {
                duration: duration * 0.55
              }), withTiming(-10, {
                duration: duration * 0.15
              }), withTiming(10, {
                duration: duration * 0.15
              }), withTiming(0, {
                duration: duration * 0.15
              })))
            }]
          },
          initialValues: {
            transform: [{
              translateY: -values.windowHeight
            }],
            ...initialValues
          },
          callback
        };
      };
    });
  }
  static createInstance() {
    return new BounceInUp();
  }
  static getDuration() {
    return 600;
  }
  getDuration() {
    return this.durationV ?? 600;
  }
}

/**
 * Bounce from left animation. You can modify the behavior by chaining methods like `.delay(300)` or `.duration(100)`.
 *
 * You pass it to the `entering` prop on [an Animated component](https://docs.swmansion.com/react-native-reanimated/docs/fundamentals/glossary#animated-component).
 *
 * @see https://docs.swmansion.com/react-native-reanimated/docs/layout-animations/entering-exiting-animations#bounce
 */
_defineProperty(BounceInUp, "presetName", 'BounceInUp');
export class BounceInLeft extends ComplexAnimationBuilder {
  constructor(...args) {
    super(...args);
    _defineProperty(this, "build", () => {
      const delayFunction = this.getDelayFunction();
      const delay = this.getDelay();
      const duration = this.getDuration();
      const callback = this.callbackV;
      const initialValues = this.initialValues;
      return values => {
        'worklet';

        return {
          animations: {
            transform: [{
              translateX: delayFunction(delay, withSequence(withTiming(20, {
                duration: duration * 0.55
              }), withTiming(-10, {
                duration: duration * 0.15
              }), withTiming(10, {
                duration: duration * 0.15
              }), withTiming(0, {
                duration: duration * 0.15
              })))
            }]
          },
          initialValues: {
            transform: [{
              translateX: -values.windowWidth
            }],
            ...initialValues
          },
          callback
        };
      };
    });
  }
  static createInstance() {
    return new BounceInLeft();
  }
  static getDuration() {
    return 600;
  }
  getDuration() {
    return this.durationV ?? 600;
  }
}

/**
 * Bounce from right animation. You can modify the behavior by chaining methods like `.delay(300)` or `.duration(100)`.
 *
 * You pass it to the `entering` prop on [an Animated component](https://docs.swmansion.com/react-native-reanimated/docs/fundamentals/glossary#animated-component).
 *
 * @see https://docs.swmansion.com/react-native-reanimated/docs/layout-animations/entering-exiting-animations#bounce
 */
_defineProperty(BounceInLeft, "presetName", 'BounceInLeft');
export class BounceInRight extends ComplexAnimationBuilder {
  constructor(...args) {
    super(...args);
    _defineProperty(this, "build", () => {
      const delayFunction = this.getDelayFunction();
      const delay = this.getDelay();
      const duration = this.getDuration();
      const callback = this.callbackV;
      const initialValues = this.initialValues;
      return values => {
        'worklet';

        return {
          animations: {
            transform: [{
              translateX: delayFunction(delay, withSequence(withTiming(-20, {
                duration: duration * 0.55
              }), withTiming(10, {
                duration: duration * 0.15
              }), withTiming(-10, {
                duration: duration * 0.15
              }), withTiming(0, {
                duration: duration * 0.15
              })))
            }]
          },
          initialValues: {
            transform: [{
              translateX: values.windowWidth
            }],
            ...initialValues
          },
          callback
        };
      };
    });
  }
  static createInstance() {
    return new BounceInRight();
  }
  static getDuration() {
    return 600;
  }
  getDuration() {
    return this.durationV ?? 600;
  }
}

/**
 * Bounce exiting animation. You can modify the behavior by chaining methods like `.delay(300)` or `.duration(100)`.
 *
 * You pass it to the `exiting` prop on [an Animated component](https://docs.swmansion.com/react-native-reanimated/docs/fundamentals/glossary#animated-component).
 *
 * @see https://docs.swmansion.com/react-native-reanimated/docs/layout-animations/entering-exiting-animations#bounce
 */
_defineProperty(BounceInRight, "presetName", 'BounceInRight');
export class BounceOut extends ComplexAnimationBuilder {
  constructor(...args) {
    super(...args);
    _defineProperty(this, "build", () => {
      const delayFunction = this.getDelayFunction();
      const delay = this.getDelay();
      const duration = this.getDuration();
      const callback = this.callbackV;
      const initialValues = this.initialValues;
      return () => {
        'worklet';

        return {
          animations: {
            transform: [{
              scale: delayFunction(delay, withSequence(withTiming(1.1, {
                duration: duration * 0.15
              }), withTiming(0.9, {
                duration: duration * 0.15
              }), withTiming(1.2, {
                duration: duration * 0.15
              }), withTiming(0, {
                duration: duration * 0.55
              })))
            }]
          },
          initialValues: {
            transform: [{
              scale: 1
            }],
            ...initialValues
          },
          callback
        };
      };
    });
  }
  static createInstance() {
    return new BounceOut();
  }
  static getDuration() {
    return 600;
  }
  getDuration() {
    return this.durationV ?? 600;
  }
}

/**
 * Bounce to bottom animation. You can modify the behavior by chaining methods like `.delay(300)` or `.duration(100)`.
 *
 * You pass it to the `exiting` prop on [an Animated component](https://docs.swmansion.com/react-native-reanimated/docs/fundamentals/glossary#animated-component).
 *
 * @see https://docs.swmansion.com/react-native-reanimated/docs/layout-animations/entering-exiting-animations#bounce
 */
_defineProperty(BounceOut, "presetName", 'BounceOut');
export class BounceOutDown extends ComplexAnimationBuilder {
  constructor(...args) {
    super(...args);
    _defineProperty(this, "build", () => {
      const delayFunction = this.getDelayFunction();
      const delay = this.getDelay();
      const duration = this.getDuration();
      const callback = this.callbackV;
      const initialValues = this.initialValues;
      return values => {
        'worklet';

        return {
          animations: {
            transform: [{
              translateY: delayFunction(delay, withSequence(withTiming(-10, {
                duration: duration * 0.15
              }), withTiming(10, {
                duration: duration * 0.15
              }), withTiming(-20, {
                duration: duration * 0.15
              }), withTiming(values.windowHeight, {
                duration: duration * 0.55
              })))
            }]
          },
          initialValues: {
            transform: [{
              translateY: 0
            }],
            ...initialValues
          },
          callback
        };
      };
    });
  }
  static createInstance() {
    return new BounceOutDown();
  }
  static getDuration() {
    return 600;
  }
  getDuration() {
    return this.durationV ?? 600;
  }
}

/**
 * Bounce to top animation. You can modify the behavior by chaining methods like `.delay(300)` or `.duration(100)`.
 *
 * You pass it to the `exiting` prop on [an Animated component](https://docs.swmansion.com/react-native-reanimated/docs/fundamentals/glossary#animated-component).
 *
 * @see https://docs.swmansion.com/react-native-reanimated/docs/layout-animations/entering-exiting-animations#bounce
 */
_defineProperty(BounceOutDown, "presetName", 'BounceOutDown');
export class BounceOutUp extends ComplexAnimationBuilder {
  constructor(...args) {
    super(...args);
    _defineProperty(this, "build", () => {
      const delayFunction = this.getDelayFunction();
      const delay = this.getDelay();
      const duration = this.getDuration();
      const callback = this.callbackV;
      const initialValues = this.initialValues;
      return values => {
        'worklet';

        return {
          animations: {
            transform: [{
              translateY: delayFunction(delay, withSequence(withTiming(10, {
                duration: duration * 0.15
              }), withTiming(-10, {
                duration: duration * 0.15
              }), withTiming(20, {
                duration: duration * 0.15
              }), withTiming(-values.windowHeight, {
                duration: duration * 0.55
              })))
            }]
          },
          initialValues: {
            transform: [{
              translateY: 0
            }],
            ...initialValues
          },
          callback
        };
      };
    });
  }
  static createInstance() {
    return new BounceOutUp();
  }
  static getDuration() {
    return 600;
  }
  getDuration() {
    return this.durationV ?? 600;
  }
}

/**
 * Bounce to left animation. You can modify the behavior by chaining methods like `.delay(300)` or `.duration(100)`.
 *
 * You pass it to the `exiting` prop on [an Animated component](https://docs.swmansion.com/react-native-reanimated/docs/fundamentals/glossary#animated-component).
 *
 * @see https://docs.swmansion.com/react-native-reanimated/docs/layout-animations/entering-exiting-animations#bounce
 */
_defineProperty(BounceOutUp, "presetName", 'BounceOutUp');
export class BounceOutLeft extends ComplexAnimationBuilder {
  constructor(...args) {
    super(...args);
    _defineProperty(this, "build", () => {
      const delayFunction = this.getDelayFunction();
      const delay = this.getDelay();
      const duration = this.getDuration();
      const callback = this.callbackV;
      const initialValues = this.initialValues;
      return values => {
        'worklet';

        return {
          animations: {
            transform: [{
              translateX: delayFunction(delay, withSequence(withTiming(10, {
                duration: duration * 0.15
              }), withTiming(-10, {
                duration: duration * 0.15
              }), withTiming(20, {
                duration: duration * 0.15
              }), withTiming(-values.windowWidth, {
                duration: duration * 0.55
              })))
            }]
          },
          initialValues: {
            transform: [{
              translateX: 0
            }],
            ...initialValues
          },
          callback
        };
      };
    });
  }
  static createInstance() {
    return new BounceOutLeft();
  }
  static getDuration() {
    return 600;
  }
  getDuration() {
    return this.durationV ?? 600;
  }
}

/**
 * Bounce to right animation. You can modify the behavior by chaining methods like `.delay(300)` or `.duration(100)`.
 *
 * You pass it to the `exiting` prop on [an Animated component](https://docs.swmansion.com/react-native-reanimated/docs/fundamentals/glossary#animated-component).
 *
 * @see https://docs.swmansion.com/react-native-reanimated/docs/layout-animations/entering-exiting-animations#bounce
 */
_defineProperty(BounceOutLeft, "presetName", 'BounceOutLeft');
export class BounceOutRight extends ComplexAnimationBuilder {
  constructor(...args) {
    super(...args);
    _defineProperty(this, "build", () => {
      const delayFunction = this.getDelayFunction();
      const delay = this.getDelay();
      const duration = this.getDuration();
      const callback = this.callbackV;
      const initialValues = this.initialValues;
      return values => {
        'worklet';

        return {
          animations: {
            transform: [{
              translateX: delayFunction(delay, withSequence(withTiming(-10, {
                duration: duration * 0.15
              }), withTiming(10, {
                duration: duration * 0.15
              }), withTiming(-20, {
                duration: duration * 0.15
              }), withTiming(values.windowWidth, {
                duration: duration * 0.55
              })))
            }]
          },
          initialValues: {
            transform: [{
              translateX: 0
            }],
            ...initialValues
          },
          callback
        };
      };
    });
  }
  static createInstance() {
    return new BounceOutRight();
  }
  static getDuration() {
    return 600;
  }
  getDuration() {
    return this.durationV ?? 600;
  }
}
_defineProperty(BounceOutRight, "presetName", 'BounceOutRight');
//# sourceMappingURL=Bounce.js.map