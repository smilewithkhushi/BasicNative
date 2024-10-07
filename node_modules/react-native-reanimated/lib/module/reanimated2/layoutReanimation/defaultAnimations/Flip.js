'use strict';

function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
import { ComplexAnimationBuilder } from '../animationBuilder';

/**
 * Rotate from top on the X axis. You can modify the behavior by chaining methods like `.springify()` or `.duration(500)`.
 *
 * You pass it to the `entering` prop on [an Animated component](https://docs.swmansion.com/react-native-reanimated/docs/fundamentals/glossary#animated-component).
 *
 * @see https://docs.swmansion.com/react-native-reanimated/docs/layout-animations/entering-exiting-animations#flip
 */
export class FlipInXUp extends ComplexAnimationBuilder {
  constructor(...args) {
    super(...args);
    _defineProperty(this, "build", () => {
      const delayFunction = this.getDelayFunction();
      const [animation, config] = this.getAnimationAndConfig();
      const delay = this.getDelay();
      const callback = this.callbackV;
      const initialValues = this.initialValues;
      return targetValues => {
        'worklet';

        return {
          initialValues: {
            transform: [{
              perspective: 500
            }, {
              rotateX: '90deg'
            }, {
              translateY: -targetValues.targetHeight
            }],
            ...initialValues
          },
          animations: {
            transform: [{
              perspective: 500
            }, {
              rotateX: delayFunction(delay, animation('0deg', config))
            }, {
              translateY: delayFunction(delay, animation(0, config))
            }]
          },
          callback
        };
      };
    });
  }
  static createInstance() {
    return new FlipInXUp();
  }
}

/**
 * Rotate from left on the Y axis. You can modify the behavior by chaining methods like `.springify()` or `.duration(500)`.
 *
 * You pass it to the `entering` prop on [an Animated component](https://docs.swmansion.com/react-native-reanimated/docs/fundamentals/glossary#animated-component).
 *
 * @see https://docs.swmansion.com/react-native-reanimated/docs/layout-animations/entering-exiting-animations#flip
 */
_defineProperty(FlipInXUp, "presetName", 'FlipInXUp');
export class FlipInYLeft extends ComplexAnimationBuilder {
  constructor(...args) {
    super(...args);
    _defineProperty(this, "build", () => {
      const delayFunction = this.getDelayFunction();
      const [animation, config] = this.getAnimationAndConfig();
      const delay = this.getDelay();
      const callback = this.callbackV;
      const initialValues = this.initialValues;
      return targetValues => {
        'worklet';

        return {
          initialValues: {
            transform: [{
              perspective: 500
            }, {
              rotateY: '-90deg'
            }, {
              translateX: -targetValues.targetWidth
            }],
            ...initialValues
          },
          animations: {
            transform: [{
              perspective: delayFunction(delay, animation(500, config))
            }, {
              rotateY: delayFunction(delay, animation('0deg', config))
            }, {
              translateX: delayFunction(delay, animation(0, config))
            }]
          },
          callback
        };
      };
    });
  }
  static createInstance() {
    return new FlipInYLeft();
  }
}

/**
 * Rotate from bottom on the X axis. You can modify the behavior by chaining methods like `.springify()` or `.duration(500)`.
 *
 * You pass it to the `entering` prop on [an Animated component](https://docs.swmansion.com/react-native-reanimated/docs/fundamentals/glossary#animated-component).
 *
 * @see https://docs.swmansion.com/react-native-reanimated/docs/layout-animations/entering-exiting-animations#flip
 */
_defineProperty(FlipInYLeft, "presetName", 'FlipInYLeft');
export class FlipInXDown extends ComplexAnimationBuilder {
  constructor(...args) {
    super(...args);
    _defineProperty(this, "build", () => {
      const delayFunction = this.getDelayFunction();
      const [animation, config] = this.getAnimationAndConfig();
      const delay = this.getDelay();
      const callback = this.callbackV;
      const initialValues = this.initialValues;
      return targetValues => {
        'worklet';

        return {
          initialValues: {
            transform: [{
              perspective: 500
            }, {
              rotateX: '-90deg'
            }, {
              translateY: targetValues.targetHeight
            }],
            ...initialValues
          },
          animations: {
            transform: [{
              perspective: delayFunction(delay, animation(500, config))
            }, {
              rotateX: delayFunction(delay, animation('0deg', config))
            }, {
              translateY: delayFunction(delay, animation(0, config))
            }]
          },
          callback
        };
      };
    });
  }
  static createInstance() {
    return new FlipInXDown();
  }
}

/**
 * Rotate from right on the Y axis. You can modify the behavior by chaining methods like `.springify()` or `.duration(500)`.
 *
 * You pass it to the `entering` prop on [an Animated component](https://docs.swmansion.com/react-native-reanimated/docs/fundamentals/glossary#animated-component).
 *
 * @see https://docs.swmansion.com/react-native-reanimated/docs/layout-animations/entering-exiting-animations#flip
 */
_defineProperty(FlipInXDown, "presetName", 'FlipInXDown');
export class FlipInYRight extends ComplexAnimationBuilder {
  constructor(...args) {
    super(...args);
    _defineProperty(this, "build", () => {
      const delayFunction = this.getDelayFunction();
      const [animation, config] = this.getAnimationAndConfig();
      const delay = this.getDelay();
      const callback = this.callbackV;
      const initialValues = this.initialValues;
      return targetValues => {
        'worklet';

        return {
          initialValues: {
            transform: [{
              perspective: 500
            }, {
              rotateY: '90deg'
            }, {
              translateX: targetValues.targetWidth
            }],
            ...initialValues
          },
          animations: {
            transform: [{
              perspective: delayFunction(delay, animation(500, config))
            }, {
              rotateY: delayFunction(delay, animation('0deg', config))
            }, {
              translateX: delayFunction(delay, animation(0, config))
            }]
          },
          callback
        };
      };
    });
  }
  static createInstance() {
    return new FlipInYRight();
  }
}

/**
 * Eased rotate in on the X axis. You can modify the behavior by chaining methods like `.springify()` or `.duration(500)`.
 *
 * You pass it to the `entering` prop on [an Animated component](https://docs.swmansion.com/react-native-reanimated/docs/fundamentals/glossary#animated-component).
 *
 * @see https://docs.swmansion.com/react-native-reanimated/docs/layout-animations/entering-exiting-animations#flip
 */
_defineProperty(FlipInYRight, "presetName", 'FlipInYRight');
export class FlipInEasyX extends ComplexAnimationBuilder {
  constructor(...args) {
    super(...args);
    _defineProperty(this, "build", () => {
      const delayFunction = this.getDelayFunction();
      const [animation, config] = this.getAnimationAndConfig();
      const delay = this.getDelay();
      const callback = this.callbackV;
      const initialValues = this.initialValues;
      return () => {
        'worklet';

        return {
          initialValues: {
            transform: [{
              perspective: 500
            }, {
              rotateX: '90deg'
            }],
            ...initialValues
          },
          animations: {
            transform: [{
              perspective: delayFunction(delay, animation(500, config))
            }, {
              rotateX: delayFunction(delay, animation('0deg', config))
            }]
          },
          callback
        };
      };
    });
  }
  static createInstance() {
    return new FlipInEasyX();
  }
}

/**
 * Eased rotate in on the Y axis. You can modify the behavior by chaining methods like `.springify()` or `.duration(500)`.
 *
 * You pass it to the `entering` prop on [an Animated component](https://docs.swmansion.com/react-native-reanimated/docs/fundamentals/glossary#animated-component).
 *
 * @see https://docs.swmansion.com/react-native-reanimated/docs/layout-animations/entering-exiting-animations#flip
 */
_defineProperty(FlipInEasyX, "presetName", 'FlipInEasyX');
export class FlipInEasyY extends ComplexAnimationBuilder {
  constructor(...args) {
    super(...args);
    _defineProperty(this, "build", () => {
      const delayFunction = this.getDelayFunction();
      const [animation, config] = this.getAnimationAndConfig();
      const delay = this.getDelay();
      const callback = this.callbackV;
      const initialValues = this.initialValues;
      return () => {
        'worklet';

        return {
          initialValues: {
            transform: [{
              perspective: 500
            }, {
              rotateY: '90deg'
            }],
            ...initialValues
          },
          animations: {
            transform: [{
              perspective: delayFunction(delay, animation(500, config))
            }, {
              rotateY: delayFunction(delay, animation('0deg', config))
            }]
          },
          callback
        };
      };
    });
  }
  static createInstance() {
    return new FlipInEasyY();
  }
}

/**
 * Rotate to top animation on the X axis. You can modify the behavior by chaining methods like `.springify()` or `.duration(500)`.
 *
 * You pass it to the `exiting` prop on [an Animated component](https://docs.swmansion.com/react-native-reanimated/docs/fundamentals/glossary#animated-component).
 *
 * @see https://docs.swmansion.com/react-native-reanimated/docs/layout-animations/entering-exiting-animations#flip
 */
_defineProperty(FlipInEasyY, "presetName", 'FlipInEasyY');
export class FlipOutXUp extends ComplexAnimationBuilder {
  constructor(...args) {
    super(...args);
    _defineProperty(this, "build", () => {
      const delayFunction = this.getDelayFunction();
      const [animation, config] = this.getAnimationAndConfig();
      const delay = this.getDelay();
      const callback = this.callbackV;
      const initialValues = this.initialValues;
      return targetValues => {
        'worklet';

        return {
          initialValues: {
            transform: [{
              perspective: 500
            }, {
              rotateX: '0deg'
            }, {
              translateY: 0
            }],
            ...initialValues
          },
          animations: {
            transform: [{
              perspective: delayFunction(delay, animation(500, config))
            }, {
              rotateX: delayFunction(delay, animation('90deg', config))
            }, {
              translateY: delayFunction(delay, animation(-targetValues.currentHeight, config))
            }]
          },
          callback
        };
      };
    });
  }
  static createInstance() {
    return new FlipOutXUp();
  }
}

/**
 * Rotate to left on the Y axis. You can modify the behavior by chaining methods like `.springify()` or `.duration(500)`.
 *
 * You pass it to the `exiting` prop on [an Animated component](https://docs.swmansion.com/react-native-reanimated/docs/fundamentals/glossary#animated-component).
 *
 * @see https://docs.swmansion.com/react-native-reanimated/docs/layout-animations/entering-exiting-animations#flip
 */
_defineProperty(FlipOutXUp, "presetName", 'FlipOutXUp');
export class FlipOutYLeft extends ComplexAnimationBuilder {
  constructor(...args) {
    super(...args);
    _defineProperty(this, "build", () => {
      const delayFunction = this.getDelayFunction();
      const [animation, config] = this.getAnimationAndConfig();
      const delay = this.getDelay();
      const callback = this.callbackV;
      const initialValues = this.initialValues;
      return targetValues => {
        'worklet';

        return {
          initialValues: {
            transform: [{
              perspective: 500
            }, {
              rotateY: '0deg'
            }, {
              translateX: 0
            }],
            ...initialValues
          },
          animations: {
            transform: [{
              perspective: delayFunction(delay, animation(500, config))
            }, {
              rotateY: delayFunction(delay, animation('-90deg', config))
            }, {
              translateX: delayFunction(delay, animation(-targetValues.currentWidth, config))
            }]
          },
          callback
        };
      };
    });
  }
  static createInstance() {
    return new FlipOutYLeft();
  }
}

/**
 * Rotate to bottom on the X axis. You can modify the behavior by chaining methods like `.springify()` or `.duration(500)`.
 *
 * You pass it to the `exiting` prop on [an Animated component](https://docs.swmansion.com/react-native-reanimated/docs/fundamentals/glossary#animated-component).
 *
 * @see https://docs.swmansion.com/react-native-reanimated/docs/layout-animations/entering-exiting-animations#flip
 */
_defineProperty(FlipOutYLeft, "presetName", 'FlipOutYLeft');
export class FlipOutXDown extends ComplexAnimationBuilder {
  constructor(...args) {
    super(...args);
    _defineProperty(this, "build", () => {
      const delayFunction = this.getDelayFunction();
      const [animation, config] = this.getAnimationAndConfig();
      const delay = this.getDelay();
      const callback = this.callbackV;
      const initialValues = this.initialValues;
      return targetValues => {
        'worklet';

        return {
          initialValues: {
            transform: [{
              perspective: 500
            }, {
              rotateX: '0deg'
            }, {
              translateY: 0
            }],
            ...initialValues
          },
          animations: {
            transform: [{
              perspective: delayFunction(delay, animation(500, config))
            }, {
              rotateX: delayFunction(delay, animation('-90deg', config))
            }, {
              translateY: delayFunction(delay, animation(targetValues.currentHeight, config))
            }]
          },
          callback
        };
      };
    });
  }
  static createInstance() {
    return new FlipOutXDown();
  }
}

/**
 * Rotate to right animation on the Y axis. You can modify the behavior by chaining methods like `.springify()` or `.duration(500)`.
 *
 * You pass it to the `exiting` prop on [an Animated component](https://docs.swmansion.com/react-native-reanimated/docs/fundamentals/glossary#animated-component).
 *
 * @see https://docs.swmansion.com/react-native-reanimated/docs/layout-animations/entering-exiting-animations#flip
 */
_defineProperty(FlipOutXDown, "presetName", 'FlipOutXDown');
export class FlipOutYRight extends ComplexAnimationBuilder {
  constructor(...args) {
    super(...args);
    _defineProperty(this, "build", () => {
      const delayFunction = this.getDelayFunction();
      const [animation, config] = this.getAnimationAndConfig();
      const delay = this.getDelay();
      const callback = this.callbackV;
      const initialValues = this.initialValues;
      return targetValues => {
        'worklet';

        return {
          initialValues: {
            transform: [{
              perspective: 500
            }, {
              rotateY: '0deg'
            }, {
              translateX: 0
            }],
            ...initialValues
          },
          animations: {
            transform: [{
              perspective: delayFunction(delay, animation(500, config))
            }, {
              rotateY: delayFunction(delay, animation('90deg', config))
            }, {
              translateX: delayFunction(delay, animation(targetValues.currentWidth, config))
            }]
          },
          callback
        };
      };
    });
  }
  static createInstance() {
    return new FlipOutYRight();
  }
}

/**
 * Eased rotate on the X axis. You can modify the behavior by chaining methods like `.springify()` or `.duration(500)`.
 *
 * You pass it to the `exiting` prop on [an Animated component](https://docs.swmansion.com/react-native-reanimated/docs/fundamentals/glossary#animated-component).
 *
 * @see https://docs.swmansion.com/react-native-reanimated/docs/layout-animations/entering-exiting-animations#flip
 */
_defineProperty(FlipOutYRight, "presetName", 'FlipOutYRight');
export class FlipOutEasyX extends ComplexAnimationBuilder {
  constructor(...args) {
    super(...args);
    _defineProperty(this, "build", () => {
      const delayFunction = this.getDelayFunction();
      const [animation, config] = this.getAnimationAndConfig();
      const delay = this.getDelay();
      const callback = this.callbackV;
      const initialValues = this.initialValues;
      return () => {
        'worklet';

        return {
          initialValues: {
            transform: [{
              perspective: 500
            }, {
              rotateX: '0deg'
            }],
            ...initialValues
          },
          animations: {
            transform: [{
              perspective: delayFunction(delay, animation(500, config))
            }, {
              rotateX: delayFunction(delay, animation('90deg', config))
            }]
          },
          callback
        };
      };
    });
  }
  static createInstance() {
    return new FlipOutEasyX();
  }
}

/**
 * Eased rotate on the Y axis. You can modify the behavior by chaining methods like `.springify()` or `.duration(500)`.
 *
 * You pass it to the `exiting` prop on [an Animated component](https://docs.swmansion.com/react-native-reanimated/docs/fundamentals/glossary#animated-component).
 *
 * @see https://docs.swmansion.com/react-native-reanimated/docs/layout-animations/entering-exiting-animations#flip
 */
_defineProperty(FlipOutEasyX, "presetName", 'FlipOutEasyX');
export class FlipOutEasyY extends ComplexAnimationBuilder {
  constructor(...args) {
    super(...args);
    _defineProperty(this, "build", () => {
      const delayFunction = this.getDelayFunction();
      const [animation, config] = this.getAnimationAndConfig();
      const delay = this.getDelay();
      const callback = this.callbackV;
      const initialValues = this.initialValues;
      return () => {
        'worklet';

        return {
          initialValues: {
            transform: [{
              perspective: 500
            }, {
              rotateY: '0deg'
            }],
            ...initialValues
          },
          animations: {
            transform: [{
              perspective: delayFunction(delay, animation(500, config))
            }, {
              rotateY: delayFunction(delay, animation('90deg', config))
            }]
          },
          callback
        };
      };
    });
  }
  static createInstance() {
    return new FlipOutEasyY();
  }
}
_defineProperty(FlipOutEasyY, "presetName", 'FlipOutEasyY');
//# sourceMappingURL=Flip.js.map