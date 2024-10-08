'use strict';

function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
import { ComplexAnimationBuilder } from '../animationBuilder';

/**
 * Fade in animation. You can modify the behavior by chaining methods like `.springify()` or `.duration(500)`.
 *
 *  You pass it to the `entering` prop on [an Animated component](https://docs.swmansion.com/react-native-reanimated/docs/fundamentals/glossary#animated-component).
 *
 * @see https://docs.swmansion.com/react-native-reanimated/docs/layout-animations/entering-exiting-animations#fade
 */
export class FadeIn extends ComplexAnimationBuilder {
  constructor(...args) {
    super(...args);
    _defineProperty(this, "build", () => {
      const delayFunction = this.getDelayFunction();
      const [animation, config] = this.getAnimationAndConfig();
      const callback = this.callbackV;
      const initialValues = this.initialValues;
      const delay = this.getDelay();
      return () => {
        'worklet';

        return {
          animations: {
            opacity: delayFunction(delay, animation(1, config))
          },
          initialValues: {
            opacity: 0,
            ...initialValues
          },
          callback
        };
      };
    });
  }
  static createInstance() {
    return new FadeIn();
  }
}

/**
 * Fade from right animation. You can modify the behavior by chaining methods like `.springify()` or `.duration(500)`.
 *
 * You pass it to the `entering` prop on [an Animated component](https://docs.swmansion.com/react-native-reanimated/docs/fundamentals/glossary#animated-component).
 *
 * @see https://docs.swmansion.com/react-native-reanimated/docs/layout-animations/entering-exiting-animations#fade
 */
_defineProperty(FadeIn, "presetName", 'FadeIn');
export class FadeInRight extends ComplexAnimationBuilder {
  constructor(...args) {
    super(...args);
    _defineProperty(this, "build", () => {
      const delayFunction = this.getDelayFunction();
      const [animation, config] = this.getAnimationAndConfig();
      const callback = this.callbackV;
      const initialValues = this.initialValues;
      const delay = this.getDelay();
      return () => {
        'worklet';

        return {
          animations: {
            opacity: delayFunction(delay, animation(1, config)),
            transform: [{
              translateX: delayFunction(delay, animation(0, config))
            }]
          },
          initialValues: {
            opacity: 0,
            transform: [{
              translateX: 25
            }],
            ...initialValues
          },
          callback
        };
      };
    });
  }
  static createInstance() {
    return new FadeInRight();
  }
}

/**
 * Fade from left animation. You can modify the behavior by chaining methods like `.springify()` or `.duration(500)`.
 *
 * You pass it to the `entering` prop on [an Animated component](https://docs.swmansion.com/react-native-reanimated/docs/fundamentals/glossary#animated-component).
 *
 * @see https://docs.swmansion.com/react-native-reanimated/docs/layout-animations/entering-exiting-animations#fade
 */
_defineProperty(FadeInRight, "presetName", 'FadeInRight');
export class FadeInLeft extends ComplexAnimationBuilder {
  constructor(...args) {
    super(...args);
    _defineProperty(this, "build", () => {
      const delayFunction = this.getDelayFunction();
      const [animation, config] = this.getAnimationAndConfig();
      const callback = this.callbackV;
      const initialValues = this.initialValues;
      const delay = this.getDelay();
      return () => {
        'worklet';

        return {
          animations: {
            opacity: delayFunction(delay, animation(1, config)),
            transform: [{
              translateX: delayFunction(delay, animation(0, config))
            }]
          },
          initialValues: {
            opacity: 0,
            transform: [{
              translateX: -25
            }],
            ...initialValues
          },
          callback
        };
      };
    });
  }
  static createInstance() {
    return new FadeInLeft();
  }
}

/**
 * Fade from top animation. You can modify the behavior by chaining methods like `.springify()` or `.duration(500)`.
 *
 * You pass it to the `entering` prop on [an Animated component](https://docs.swmansion.com/react-native-reanimated/docs/fundamentals/glossary#animated-component).
 *
 * @see https://docs.swmansion.com/react-native-reanimated/docs/layout-animations/entering-exiting-animations#fade
 */
_defineProperty(FadeInLeft, "presetName", 'FadeInLeft');
export class FadeInUp extends ComplexAnimationBuilder {
  constructor(...args) {
    super(...args);
    _defineProperty(this, "build", () => {
      const delayFunction = this.getDelayFunction();
      const [animation, config] = this.getAnimationAndConfig();
      const callback = this.callbackV;
      const initialValues = this.initialValues;
      const delay = this.getDelay();
      return () => {
        'worklet';

        return {
          animations: {
            opacity: delayFunction(delay, animation(1, config)),
            transform: [{
              translateY: delayFunction(delay, animation(0, config))
            }]
          },
          initialValues: {
            opacity: 0,
            transform: [{
              translateY: -25
            }],
            ...initialValues
          },
          callback
        };
      };
    });
  }
  static createInstance() {
    return new FadeInUp();
  }
}

/**
 * Fade from bottom animation. You can modify the behavior by chaining methods like `.springify()` or `.duration(500)`.
 *
 * You pass it to the `entering` prop on [an Animated component](https://docs.swmansion.com/react-native-reanimated/docs/fundamentals/glossary#animated-component).
 *
 * @see https://docs.swmansion.com/react-native-reanimated/docs/layout-animations/entering-exiting-animations#fade
 */
_defineProperty(FadeInUp, "presetName", 'FadeInUp');
export class FadeInDown extends ComplexAnimationBuilder {
  constructor(...args) {
    super(...args);
    _defineProperty(this, "build", () => {
      const delayFunction = this.getDelayFunction();
      const [animation, config] = this.getAnimationAndConfig();
      const callback = this.callbackV;
      const initialValues = this.initialValues;
      const delay = this.getDelay();
      return () => {
        'worklet';

        return {
          animations: {
            opacity: delayFunction(delay, animation(1, config)),
            transform: [{
              translateY: delayFunction(delay, animation(0, config))
            }]
          },
          initialValues: {
            opacity: 0,
            transform: [{
              translateY: 25
            }],
            ...initialValues
          },
          callback
        };
      };
    });
  }
  static createInstance() {
    return new FadeInDown();
  }
}

/**
 * Fade out animation. You can modify the behavior by chaining methods like `.springify()` or `.duration(500)`.
 *
 * You pass it to the `exiting` prop on [an Animated component](https://docs.swmansion.com/react-native-reanimated/docs/fundamentals/glossary#animated-component).
 *
 * @see https://docs.swmansion.com/react-native-reanimated/docs/layout-animations/entering-exiting-animations#fade
 */
_defineProperty(FadeInDown, "presetName", 'FadeInDown');
export class FadeOut extends ComplexAnimationBuilder {
  constructor(...args) {
    super(...args);
    _defineProperty(this, "build", () => {
      const delayFunction = this.getDelayFunction();
      const [animation, config] = this.getAnimationAndConfig();
      const callback = this.callbackV;
      const initialValues = this.initialValues;
      const delay = this.getDelay();
      return () => {
        'worklet';

        return {
          animations: {
            opacity: delayFunction(delay, animation(0, config))
          },
          initialValues: {
            opacity: 1,
            ...initialValues
          },
          callback
        };
      };
    });
  }
  static createInstance() {
    return new FadeOut();
  }
}

/**
 * Fade to right animation. You can modify the behavior by chaining methods like `.springify()` or `.duration(500)`.
 *
 * You pass it to the `exiting` prop on [an Animated component](https://docs.swmansion.com/react-native-reanimated/docs/fundamentals/glossary#animated-component).
 *
 * @see https://docs.swmansion.com/react-native-reanimated/docs/layout-animations/entering-exiting-animations#fade
 */
_defineProperty(FadeOut, "presetName", 'FadeOut');
export class FadeOutRight extends ComplexAnimationBuilder {
  constructor(...args) {
    super(...args);
    _defineProperty(this, "build", () => {
      const delayFunction = this.getDelayFunction();
      const [animation, config] = this.getAnimationAndConfig();
      const callback = this.callbackV;
      const initialValues = this.initialValues;
      const delay = this.getDelay();
      return () => {
        'worklet';

        return {
          animations: {
            opacity: delayFunction(delay, animation(0, config)),
            transform: [{
              translateX: delayFunction(delay, animation(25, config))
            }]
          },
          initialValues: {
            opacity: 1,
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
    return new FadeOutRight();
  }
}

/**
 * Fade to left animation. You can modify the behavior by chaining methods like `.springify()` or `.duration(500)`.
 *
 * You pass it to the `exiting` prop on [an Animated component](https://docs.swmansion.com/react-native-reanimated/docs/fundamentals/glossary#animated-component).
 *
 * @see https://docs.swmansion.com/react-native-reanimated/docs/layout-animations/entering-exiting-animations#fade
 */
_defineProperty(FadeOutRight, "presetName", 'FadeOutRight');
export class FadeOutLeft extends ComplexAnimationBuilder {
  constructor(...args) {
    super(...args);
    _defineProperty(this, "build", () => {
      const delayFunction = this.getDelayFunction();
      const [animation, config] = this.getAnimationAndConfig();
      const callback = this.callbackV;
      const initialValues = this.initialValues;
      const delay = this.getDelay();
      return () => {
        'worklet';

        return {
          animations: {
            opacity: delayFunction(delay, animation(0, config)),
            transform: [{
              translateX: delayFunction(delay, animation(-25, config))
            }]
          },
          initialValues: {
            opacity: 1,
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
    return new FadeOutLeft();
  }
}
/**
 * Fade to top animation. You can modify the behavior by chaining methods like `.springify()` or `.duration(500)`.
 *
 * You pass it to the `exiting` prop on [an Animated component](https://docs.swmansion.com/react-native-reanimated/docs/fundamentals/glossary#animated-component).
 *
 * @see https://docs.swmansion.com/react-native-reanimated/docs/layout-animations/entering-exiting-animations#fade
 */
_defineProperty(FadeOutLeft, "presetName", 'FadeOutLeft');
export class FadeOutUp extends ComplexAnimationBuilder {
  constructor(...args) {
    super(...args);
    _defineProperty(this, "build", () => {
      const delayFunction = this.getDelayFunction();
      const [animation, config] = this.getAnimationAndConfig();
      const callback = this.callbackV;
      const initialValues = this.initialValues;
      const delay = this.getDelay();
      return () => {
        'worklet';

        return {
          animations: {
            opacity: delayFunction(delay, animation(0, config)),
            transform: [{
              translateY: delayFunction(delay, animation(-25, config))
            }]
          },
          initialValues: {
            opacity: 1,
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
    return new FadeOutUp();
  }
}

/**
 * Fade to bottom animation. You can modify the behavior by chaining methods like `.springify()` or `.duration(500)`.
 *
 * You pass it to the `exiting` prop on [an Animated component](https://docs.swmansion.com/react-native-reanimated/docs/fundamentals/glossary#animated-component).
 *
 * @see https://docs.swmansion.com/react-native-reanimated/docs/layout-animations/entering-exiting-animations#fade
 */
_defineProperty(FadeOutUp, "presetName", 'FadeOutUp');
export class FadeOutDown extends ComplexAnimationBuilder {
  constructor(...args) {
    super(...args);
    _defineProperty(this, "build", () => {
      const delayFunction = this.getDelayFunction();
      const [animation, config] = this.getAnimationAndConfig();
      const callback = this.callbackV;
      const initialValues = this.initialValues;
      const delay = this.getDelay();
      return () => {
        'worklet';

        return {
          animations: {
            opacity: delayFunction(delay, animation(0, config)),
            transform: [{
              translateY: delayFunction(delay, animation(25, config))
            }]
          },
          initialValues: {
            opacity: 1,
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
    return new FadeOutDown();
  }
}
_defineProperty(FadeOutDown, "presetName", 'FadeOutDown');
//# sourceMappingURL=Fade.js.map