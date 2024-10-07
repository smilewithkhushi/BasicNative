'use strict';

function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
import { ComplexAnimationBuilder } from '../animationBuilder';
/**
 * Roll from left animation. You can modify the behavior by chaining methods like `.springify()` or `.duration(500)`.
 *
 * You pass it to the `entering` prop on [an Animated component](https://docs.swmansion.com/react-native-reanimated/docs/fundamentals/glossary#animated-component).
 *
 * @see https://docs.swmansion.com/react-native-reanimated/docs/layout-animations/entering-exiting-animations#roll
 */
export class RollInLeft extends ComplexAnimationBuilder {
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
            transform: [{
              translateX: delayFunction(delay, animation(0), config)
            }, {
              rotate: delayFunction(delay, animation('0deg', config))
            }]
          },
          initialValues: {
            transform: [{
              translateX: -values.windowWidth
            }, {
              rotate: '-180deg'
            }],
            ...initialValues
          },
          callback
        };
      };
    });
  }
  static createInstance() {
    return new RollInLeft();
  }
}

/**
 * Roll from right animation. You can modify the behavior by chaining methods like `.springify()` or `.duration(500)`.
 *
 * You pass it to the `entering` prop on [an Animated component](https://docs.swmansion.com/react-native-reanimated/docs/fundamentals/glossary#animated-component).
 *
 * @see https://docs.swmansion.com/react-native-reanimated/docs/layout-animations/entering-exiting-animations#roll
 */
_defineProperty(RollInLeft, "presetName", 'RollInLeft');
export class RollInRight extends ComplexAnimationBuilder {
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
            transform: [{
              translateX: delayFunction(delay, animation(0, config))
            }, {
              rotate: delayFunction(delay, animation('0deg', config))
            }]
          },
          initialValues: {
            transform: [{
              translateX: values.windowWidth
            }, {
              rotate: '180deg'
            }],
            ...initialValues
          },
          callback
        };
      };
    });
  }
  static createInstance() {
    return new RollInRight();
  }
}

/**
 * Roll to left animation. You can modify the behavior by chaining methods like `.springify()` or `.duration(500)`.
 *
 * You pass it to the `exiting` prop on [an Animated component](https://docs.swmansion.com/react-native-reanimated/docs/fundamentals/glossary#animated-component).
 *
 * @see https://docs.swmansion.com/react-native-reanimated/docs/layout-animations/entering-exiting-animations#roll
 */
_defineProperty(RollInRight, "presetName", 'RollInRight');
export class RollOutLeft extends ComplexAnimationBuilder {
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
            transform: [{
              translateX: delayFunction(delay, animation(-values.windowWidth, config))
            }, {
              rotate: delayFunction(delay, animation('-180deg', config))
            }]
          },
          initialValues: {
            transform: [{
              translateX: 0
            }, {
              rotate: '0deg'
            }],
            ...initialValues
          },
          callback
        };
      };
    });
  }
  static createInstance() {
    return new RollOutLeft();
  }
}

/**
 * Roll to right animation. You can modify the behavior by chaining methods like `.springify()` or `.duration(500)`.
 *
 * You pass it to the `exiting` prop on [an Animated component](https://docs.swmansion.com/react-native-reanimated/docs/fundamentals/glossary#animated-component).
 *
 * @see https://docs.swmansion.com/react-native-reanimated/docs/layout-animations/entering-exiting-animations#roll
 */
_defineProperty(RollOutLeft, "presetName", 'RollOutLeft');
export class RollOutRight extends ComplexAnimationBuilder {
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
            transform: [{
              translateX: delayFunction(delay, animation(values.windowWidth, config))
            }, {
              rotate: delayFunction(delay, animation('180deg', config))
            }]
          },
          initialValues: {
            transform: [{
              translateX: 0
            }, {
              rotate: '0deg'
            }],
            ...initialValues
          },
          callback
        };
      };
    });
  }
  static createInstance() {
    return new RollOutRight();
  }
}
_defineProperty(RollOutRight, "presetName", 'RollOutRight');
//# sourceMappingURL=Roll.js.map