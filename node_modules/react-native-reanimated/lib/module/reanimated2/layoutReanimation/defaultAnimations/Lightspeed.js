'use strict';

function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
import { withSequence, withTiming } from '../../animation';
import { ComplexAnimationBuilder } from '../animationBuilder';
/**
 * Entry from right animation with change in skew and opacity. You can modify the behavior by chaining methods like `.springify()` or `.duration(500)`.
 *
 * You pass it to the `entering` prop on [an Animated component](https://docs.swmansion.com/react-native-reanimated/docs/fundamentals/glossary#animated-component).
 *
 * @see https://docs.swmansion.com/react-native-reanimated/docs/layout-animations/entering-exiting-animations#lightspeed
 */
export class LightSpeedInRight extends ComplexAnimationBuilder {
  constructor(...args) {
    super(...args);
    _defineProperty(this, "build", () => {
      const delayFunction = this.getDelayFunction();
      const [animation, config] = this.getAnimationAndConfig();
      const delay = this.getDelay();
      const duration = this.getDuration();
      const callback = this.callbackV;
      const initialValues = this.initialValues;
      return values => {
        'worklet';

        return {
          animations: {
            opacity: delayFunction(delay, withTiming(1, {
              duration
            })),
            transform: [{
              translateX: delayFunction(delay, animation(0, {
                ...config,
                duration: duration * 0.7
              }))
            }, {
              skewX: delayFunction(delay, withSequence(withTiming('10deg', {
                duration: duration * 0.7
              }), withTiming('-5deg', {
                duration: duration * 0.15
              }), withTiming('0deg', {
                duration: duration * 0.15
              })))
            }]
          },
          initialValues: {
            opacity: 0,
            transform: [{
              translateX: values.windowWidth
            }, {
              skewX: '-45deg'
            }],
            ...initialValues
          },
          callback
        };
      };
    });
  }
  static createInstance() {
    return new LightSpeedInRight();
  }
}

/**
 * Entry from left animation with change in skew and opacity. You can modify the behavior by chaining methods like `.springify()` or `.duration(500)`.
 *
 * You pass it to the `entering` prop on [an Animated component](https://docs.swmansion.com/react-native-reanimated/docs/fundamentals/glossary#animated-component).
 *
 * @see https://docs.swmansion.com/react-native-reanimated/docs/layout-animations/entering-exiting-animations#lightspeed
 */
_defineProperty(LightSpeedInRight, "presetName", 'LightSpeedInRight');
export class LightSpeedInLeft extends ComplexAnimationBuilder {
  constructor(...args) {
    super(...args);
    _defineProperty(this, "build", () => {
      const delayFunction = this.getDelayFunction();
      const [animation, config] = this.getAnimationAndConfig();
      const delay = this.getDelay();
      const duration = this.getDuration();
      const callback = this.callbackV;
      const initialValues = this.initialValues;
      return values => {
        'worklet';

        return {
          animations: {
            opacity: delayFunction(delay, withTiming(1, {
              duration
            })),
            transform: [{
              translateX: delayFunction(delay, animation(0, {
                ...config,
                duration: duration * 0.7
              }))
            }, {
              skewX: delayFunction(delay, withSequence(withTiming('-10deg', {
                duration: duration * 0.7
              }), withTiming('5deg', {
                duration: duration * 0.15
              }), withTiming('0deg', {
                duration: duration * 0.15
              })))
            }]
          },
          initialValues: {
            opacity: 0,
            transform: [{
              translateX: -values.windowWidth
            }, {
              skewX: '45deg'
            }],
            ...initialValues
          },
          callback
        };
      };
    });
  }
  static createInstance() {
    return new LightSpeedInLeft();
  }
}

/**
 * Exit to right animation with change in skew and opacity. You can modify the behavior by chaining methods like `.springify()` or `.duration(500)`.
 *
 * You pass it to the `exiting` prop on [an Animated component](https://docs.swmansion.com/react-native-reanimated/docs/fundamentals/glossary#animated-component).
 *
 * @see https://docs.swmansion.com/react-native-reanimated/docs/layout-animations/entering-exiting-animations#lightspeed
 */
_defineProperty(LightSpeedInLeft, "presetName", 'LightSpeedInLeft');
export class LightSpeedOutRight extends ComplexAnimationBuilder {
  constructor(...args) {
    super(...args);
    _defineProperty(this, "build", () => {
      const delayFunction = this.getDelayFunction();
      const [animation, config] = this.getAnimationAndConfig();
      const delay = this.getDelay();
      const callback = this.callbackV;
      const initialValues = this.initialValues;
      return values => {
        'worklet';

        return {
          animations: {
            opacity: delayFunction(delay, animation(0, config)),
            transform: [{
              translateX: delayFunction(delay, animation(values.windowWidth, config))
            }, {
              skewX: delayFunction(delay, animation('-45deg', config))
            }]
          },
          initialValues: {
            opacity: 1,
            transform: [{
              translateX: 0
            }, {
              skewX: '0deg'
            }],
            ...initialValues
          },
          callback
        };
      };
    });
  }
  static createInstance() {
    return new LightSpeedOutRight();
  }
}

/**
 * Exit to left animation with change in skew and opacity. You can modify the behavior by chaining methods like `.springify()` or `.duration(500)`.
 *
 * You pass it to the `exiting` prop on [an Animated component](https://docs.swmansion.com/react-native-reanimated/docs/fundamentals/glossary#animated-component).
 *
 * @see https://docs.swmansion.com/react-native-reanimated/docs/layout-animations/entering-exiting-animations/#lightspeed
 */
_defineProperty(LightSpeedOutRight, "presetName", 'LightSpeedOutRight');
export class LightSpeedOutLeft extends ComplexAnimationBuilder {
  constructor(...args) {
    super(...args);
    _defineProperty(this, "build", () => {
      const delayFunction = this.getDelayFunction();
      const [animation, config] = this.getAnimationAndConfig();
      const delay = this.getDelay();
      const callback = this.callbackV;
      const initialValues = this.initialValues;
      return values => {
        'worklet';

        return {
          animations: {
            opacity: delayFunction(delay, animation(0, config)),
            transform: [{
              translateX: delayFunction(delay, animation(-values.windowWidth, config))
            }, {
              skewX: delayFunction(delay, animation('45deg', config))
            }]
          },
          initialValues: {
            opacity: 1,
            transform: [{
              translateX: 0
            }, {
              skewX: '0deg'
            }],
            ...initialValues
          },
          callback
        };
      };
    });
  }
  static createInstance() {
    return new LightSpeedOutLeft();
  }
}
_defineProperty(LightSpeedOutLeft, "presetName", 'LightSpeedOutLeft');
//# sourceMappingURL=Lightspeed.js.map