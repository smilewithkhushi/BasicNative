'use strict';

function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
import { ComplexAnimationBuilder } from '../animationBuilder';
/**
 * Rotate to bottom from left edge. You can modify the behavior by chaining methods like `.springify()` or `.duration(500)`.
 *
 * You pass it to the `entering` prop on [an Animated component](https://docs.swmansion.com/react-native-reanimated/docs/fundamentals/glossary#animated-component).
 *
 * @see https://docs.swmansion.com/react-native-reanimated/docs/layout-animations/entering-exiting-animations#rotate
 */
export class RotateInDownLeft extends ComplexAnimationBuilder {
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
            opacity: delayFunction(delay, animation(1, config)),
            transform: [{
              rotate: delayFunction(delay, animation('0deg', config))
            }, {
              translateX: delayFunction(delay, animation(0, config))
            }, {
              translateY: delayFunction(delay, animation(0, config))
            }]
          },
          initialValues: {
            opacity: 0,
            transform: [{
              rotate: '-90deg'
            }, {
              translateX: values.targetWidth / 2 - values.targetHeight / 2
            }, {
              translateY: -(values.targetWidth / 2 - values.targetHeight / 2)
            }],
            ...initialValues
          },
          callback
        };
      };
    });
  }
  static createInstance() {
    return new RotateInDownLeft();
  }
}

/**
 * Rotate to bottom from right edge. You can modify the behavior by chaining methods like `.springify()` or `.duration(500)`.
 *
 * You pass it to the `entering` prop on [an Animated component](https://docs.swmansion.com/react-native-reanimated/docs/fundamentals/glossary#animated-component).
 *
 * @see https://docs.swmansion.com/react-native-reanimated/docs/layout-animations/entering-exiting-animations#rotate
 */
_defineProperty(RotateInDownLeft, "presetName", 'RotateInDownLeft');
export class RotateInDownRight extends ComplexAnimationBuilder {
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
            opacity: delayFunction(delay, animation(1, config)),
            transform: [{
              rotate: delayFunction(delay, animation('0deg', config))
            }, {
              translateX: delayFunction(delay, animation(0, config))
            }, {
              translateY: delayFunction(delay, animation(0, config))
            }]
          },
          initialValues: {
            opacity: 0,
            transform: [{
              rotate: '90deg'
            }, {
              translateX: -(values.targetWidth / 2 - values.targetHeight / 2)
            }, {
              translateY: -(values.targetWidth / 2 - values.targetHeight / 2)
            }],
            ...initialValues
          },
          callback
        };
      };
    });
  }
  static createInstance() {
    return new RotateInDownRight();
  }
}

/**
 * Rotate to top from left edge. You can modify the behavior by chaining methods like `.springify()` or `.duration(500)`.
 *
 * You pass it to the `entering` prop on [an Animated component](https://docs.swmansion.com/react-native-reanimated/docs/fundamentals/glossary#animated-component).
 *
 * @see https://docs.swmansion.com/react-native-reanimated/docs/layout-animations/entering-exiting-animations#rotate
 */
_defineProperty(RotateInDownRight, "presetName", 'RotateInDownRight');
export class RotateInUpLeft extends ComplexAnimationBuilder {
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
            opacity: delayFunction(delay, animation(1, config)),
            transform: [{
              rotate: delayFunction(delay, animation('0deg', config))
            }, {
              translateX: delayFunction(delay, animation(0, config))
            }, {
              translateY: delayFunction(delay, animation(0, config))
            }]
          },
          initialValues: {
            opacity: 0,
            transform: [{
              rotate: '90deg'
            }, {
              translateX: values.targetWidth / 2 - values.targetHeight / 2
            }, {
              translateY: values.targetWidth / 2 - values.targetHeight / 2
            }],
            ...initialValues
          },
          callback
        };
      };
    });
  }
  static createInstance() {
    return new RotateInUpLeft();
  }
}

/**
 * Rotate to top from right edge. You can modify the behavior by chaining methods like `.springify()` or `.duration(500)`.
 *
 * You pass it to the `entering` prop on [an Animated component](https://docs.swmansion.com/react-native-reanimated/docs/fundamentals/glossary#animated-component).
 *
 * @see https://docs.swmansion.com/react-native-reanimated/docs/layout-animations/entering-exiting-animations#rotate
 */
_defineProperty(RotateInUpLeft, "presetName", 'RotateInUpLeft');
export class RotateInUpRight extends ComplexAnimationBuilder {
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
            opacity: delayFunction(delay, animation(1, config)),
            transform: [{
              rotate: delayFunction(delay, animation('0deg', config))
            }, {
              translateX: delayFunction(delay, animation(0, config))
            }, {
              translateY: delayFunction(delay, animation(0, config))
            }]
          },
          initialValues: {
            opacity: 0,
            transform: [{
              rotate: '-90deg'
            }, {
              translateX: -(values.targetWidth / 2 - values.targetHeight / 2)
            }, {
              translateY: values.targetWidth / 2 - values.targetHeight / 2
            }],
            ...initialValues
          },
          callback
        };
      };
    });
  }
  static createInstance() {
    return new RotateInUpRight();
  }
}

/**
 * Rotate to bottom from left edge. You can modify the behavior by chaining methods like `.springify()` or `.duration(500)`.
 *
 * You pass it to the `exiting` prop on [an Animated component](https://docs.swmansion.com/react-native-reanimated/docs/fundamentals/glossary#animated-component).
 *
 * @see https://docs.swmansion.com/react-native-reanimated/docs/layout-animations/entering-exiting-animations#rotate
 */
_defineProperty(RotateInUpRight, "presetName", 'RotateInUpRight');
export class RotateOutDownLeft extends ComplexAnimationBuilder {
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
              rotate: delayFunction(delay, animation('90deg', config))
            }, {
              translateX: delayFunction(delay, animation(values.currentWidth / 2 - values.currentHeight / 2, config))
            }, {
              translateY: delayFunction(delay, animation(values.currentWidth / 2 - values.currentHeight / 2, config))
            }]
          },
          initialValues: {
            opacity: 1,
            transform: [{
              rotate: '0deg'
            }, {
              translateX: 0
            }, {
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
    return new RotateOutDownLeft();
  }
}

/**
 * Rotate to bottom from right edge. You can modify the behavior by chaining methods like `.springify()` or `.duration(500)`.
 *
 * You pass it to the `exiting` prop on [an Animated component](https://docs.swmansion.com/react-native-reanimated/docs/fundamentals/glossary#animated-component).
 *
 * @see https://docs.swmansion.com/react-native-reanimated/docs/layout-animations/entering-exiting-animations#rotate
 */
_defineProperty(RotateOutDownLeft, "presetName", 'RotateOutDownLeft');
export class RotateOutDownRight extends ComplexAnimationBuilder {
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
              rotate: delayFunction(delay, animation('-90deg', config))
            }, {
              translateX: delayFunction(delay, animation(-(values.currentWidth / 2 - values.currentHeight / 2), config))
            }, {
              translateY: delayFunction(delay, animation(values.currentWidth / 2 - values.currentHeight / 2, config))
            }]
          },
          initialValues: {
            opacity: 1,
            transform: [{
              rotate: '0deg'
            }, {
              translateX: 0
            }, {
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
    return new RotateOutDownRight();
  }
}

/**
 * Rotate to top from left edge. You can modify the behavior by chaining methods like `.springify()` or `.duration(500)`.
 *
 * You pass it to the `exiting` prop on [an Animated component](https://docs.swmansion.com/react-native-reanimated/docs/fundamentals/glossary#animated-component).
 *
 * @see https://docs.swmansion.com/react-native-reanimated/docs/layout-animations/entering-exiting-animations#rotate
 */
_defineProperty(RotateOutDownRight, "presetName", 'RotateOutDownRight');
export class RotateOutUpLeft extends ComplexAnimationBuilder {
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
              rotate: delayFunction(delay, animation('-90deg', config))
            }, {
              translateX: delayFunction(delay, animation(values.currentWidth / 2 - values.currentHeight / 2, config))
            }, {
              translateY: delayFunction(delay, animation(-(values.currentWidth / 2 - values.currentHeight / 2), config))
            }]
          },
          initialValues: {
            opacity: 1,
            transform: [{
              rotate: '0deg'
            }, {
              translateX: 0
            }, {
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
    return new RotateOutUpLeft();
  }
}

/**
 * Rotate to top from right edge. You can modify the behavior by chaining methods like `.springify()` or `.duration(500)`.
 *
 * You pass it to the `exiting` prop on [an Animated component](https://docs.swmansion.com/react-native-reanimated/docs/fundamentals/glossary#animated-component).
 *
 * @see https://docs.swmansion.com/react-native-reanimated/docs/layout-animations/entering-exiting-animations#rotate
 */
_defineProperty(RotateOutUpLeft, "presetName", 'RotateOutUpLeft');
export class RotateOutUpRight extends ComplexAnimationBuilder {
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
              rotate: delayFunction(delay, animation('90deg', config))
            }, {
              translateX: delayFunction(delay, animation(-(values.currentWidth / 2 - values.currentHeight / 2), config))
            }, {
              translateY: delayFunction(delay, animation(-(values.currentWidth / 2 - values.currentHeight / 2), config))
            }]
          },
          initialValues: {
            opacity: 1,
            transform: [{
              rotate: '0deg'
            }, {
              translateX: 0
            }, {
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
    return new RotateOutUpRight();
  }
}
_defineProperty(RotateOutUpRight, "presetName", 'RotateOutUpRight');
//# sourceMappingURL=Rotate.js.map