'use strict';

function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
import { ComplexAnimationBuilder } from '../animationBuilder';

/**
 * Scale from center animation. You can modify the behavior by chaining methods like `.springify()` or `.duration(500)`.
 *
 * You pass it to the `entering` prop on [an Animated component](https://docs.swmansion.com/react-native-reanimated/docs/fundamentals/glossary#animated-component).
 *
 * @see https://docs.swmansion.com/react-native-reanimated/docs/layout-animations/entering-exiting-animations/#zoom
 */
export class ZoomIn extends ComplexAnimationBuilder {
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
          animations: {
            transform: [{
              scale: delayFunction(delay, animation(1, config))
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
    return new ZoomIn();
  }
}

/**
 * Scale from center with rotation. You can modify the behavior by chaining methods like `.springify()` or `.duration(500)`.
 *
 * You pass it to the `entering` prop on [an Animated component](https://docs.swmansion.com/react-native-reanimated/docs/fundamentals/glossary#animated-component).
 *
 * @see https://docs.swmansion.com/react-native-reanimated/docs/layout-animations/entering-exiting-animations/#zoom
 */
_defineProperty(ZoomIn, "presetName", 'ZoomIn');
export class ZoomInRotate extends ComplexAnimationBuilder {
  constructor(...args) {
    super(...args);
    _defineProperty(this, "build", () => {
      const delayFunction = this.getDelayFunction();
      const [animation, config] = this.getAnimationAndConfig();
      const delay = this.getDelay();
      const rotate = this.rotateV ? this.rotateV : '0.3';
      const callback = this.callbackV;
      const initialValues = this.initialValues;
      return () => {
        'worklet';

        return {
          animations: {
            transform: [{
              scale: delayFunction(delay, animation(1, config))
            }, {
              rotate: delayFunction(delay, animation(0, config))
            }]
          },
          initialValues: {
            transform: [{
              scale: 0
            }, {
              rotate
            }],
            ...initialValues
          },
          callback
        };
      };
    });
  }
  static createInstance() {
    return new ZoomInRotate();
  }
}

/**
 * Scale from left animation. You can modify the behavior by chaining methods like `.springify()` or `.duration(500)`.
 *
 * You pass it to the `entering` prop on [an Animated component](https://docs.swmansion.com/react-native-reanimated/docs/fundamentals/glossary#animated-component).
 *
 * @see https://docs.swmansion.com/react-native-reanimated/docs/layout-animations/entering-exiting-animations/#zoom
 */
_defineProperty(ZoomInRotate, "presetName", 'ZoomInRotate');
export class ZoomInLeft extends ComplexAnimationBuilder {
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
              scale: delayFunction(delay, animation(1, config))
            }]
          },
          initialValues: {
            transform: [{
              translateX: -values.windowWidth
            }, {
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
    return new ZoomInLeft();
  }
}

/**
 * Scale from right animation. You can modify the behavior by chaining methods like `.springify()` or `.duration(500)`.
 *
 * You pass it to the `entering` prop on [an Animated component](https://docs.swmansion.com/react-native-reanimated/docs/fundamentals/glossary#animated-component).
 *
 * @see https://docs.swmansion.com/react-native-reanimated/docs/layout-animations/entering-exiting-animations/#zoom
 */
_defineProperty(ZoomInLeft, "presetName", 'ZoomInLeft');
export class ZoomInRight extends ComplexAnimationBuilder {
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
              scale: delayFunction(delay, animation(1, config))
            }]
          },
          initialValues: {
            transform: [{
              translateX: values.windowWidth
            }, {
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
    return new ZoomInRight();
  }
}

/**
 * Scale from top animation. You can modify the behavior by chaining methods like `.springify()` or `.duration(500)`.
 *
 * You pass it to the `entering` prop on [an Animated component](https://docs.swmansion.com/react-native-reanimated/docs/fundamentals/glossary#animated-component).
 *
 * @see https://docs.swmansion.com/react-native-reanimated/docs/layout-animations/entering-exiting-animations/#zoom
 */
_defineProperty(ZoomInRight, "presetName", 'ZoomInRight');
export class ZoomInUp extends ComplexAnimationBuilder {
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
              translateY: delayFunction(delay, animation(0, config))
            }, {
              scale: delayFunction(delay, animation(1, config))
            }]
          },
          initialValues: {
            transform: [{
              translateY: -values.windowHeight
            }, {
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
    return new ZoomInUp();
  }
}

/**
 * Scale from bottom animation. You can modify the behavior by chaining methods like `.springify()` or `.duration(500)`.
 *
 * You pass it to the `entering` prop on [an Animated component](https://docs.swmansion.com/react-native-reanimated/docs/fundamentals/glossary#animated-component).
 *
 * @see https://docs.swmansion.com/react-native-reanimated/docs/layout-animations/entering-exiting-animations/#zoom
 */
_defineProperty(ZoomInUp, "presetName", 'ZoomInUp');
export class ZoomInDown extends ComplexAnimationBuilder {
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
              translateY: delayFunction(delay, animation(0, config))
            }, {
              scale: delayFunction(delay, animation(1, config))
            }]
          },
          initialValues: {
            transform: [{
              translateY: values.windowHeight
            }, {
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
    return new ZoomInDown();
  }
}

/**
 * Eased scale from top animation. You can modify the behavior by chaining methods like `.springify()` or `.duration(500)`.
 *
 * You pass it to the `entering` prop on [an Animated component](https://docs.swmansion.com/react-native-reanimated/docs/fundamentals/glossary#animated-component).
 *
 * @see https://docs.swmansion.com/react-native-reanimated/docs/layout-animations/entering-exiting-animations/#zoom
 */
_defineProperty(ZoomInDown, "presetName", 'ZoomInDown');
export class ZoomInEasyUp extends ComplexAnimationBuilder {
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
              translateY: delayFunction(delay, animation(0, config))
            }, {
              scale: delayFunction(delay, animation(1, config))
            }]
          },
          initialValues: {
            transform: [{
              translateY: -values.targetHeight
            }, {
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
    return new ZoomInEasyUp();
  }
}

/**
 * Eased scale from bottom animation. You can modify the behavior by chaining methods like `.springify()` or `.duration(500)`.
 *
 * You pass it to the `entering` prop on [an Animated component](https://docs.swmansion.com/react-native-reanimated/docs/fundamentals/glossary#animated-component).
 *
 * @see https://docs.swmansion.com/react-native-reanimated/docs/layout-animations/entering-exiting-animations/#zoom
 */
_defineProperty(ZoomInEasyUp, "presetName", 'ZoomInEasyUp');
export class ZoomInEasyDown extends ComplexAnimationBuilder {
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
              translateY: delayFunction(delay, animation(0, config))
            }, {
              scale: delayFunction(delay, animation(1, config))
            }]
          },
          initialValues: {
            transform: [{
              translateY: values.targetHeight
            }, {
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
    return new ZoomInEasyDown();
  }
}

/**
 * Scale to center animation. You can modify the behavior by chaining methods like `.springify()` or `.duration(500)`.
 *
 * You pass it to the `exiting` prop on [an Animated component](https://docs.swmansion.com/react-native-reanimated/docs/fundamentals/glossary#animated-component).
 *
 * @see https://docs.swmansion.com/react-native-reanimated/docs/layout-animations/entering-exiting-animations/#zoom
 */
_defineProperty(ZoomInEasyDown, "presetName", 'ZoomInEasyDown');
export class ZoomOut extends ComplexAnimationBuilder {
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
          animations: {
            transform: [{
              scale: delayFunction(delay, animation(0, config))
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
    return new ZoomOut();
  }
}

/**
 * Scale to center with rotation. You can modify the behavior by chaining methods like `.springify()` or `.duration(500)`.
 *
 * You pass it to the `exiting` prop on [an Animated component](https://docs.swmansion.com/react-native-reanimated/docs/fundamentals/glossary#animated-component).
 *
 * @see https://docs.swmansion.com/react-native-reanimated/docs/layout-animations/entering-exiting-animations/#zoom
 */
_defineProperty(ZoomOut, "presetName", 'ZoomOut');
export class ZoomOutRotate extends ComplexAnimationBuilder {
  constructor(...args) {
    super(...args);
    _defineProperty(this, "build", () => {
      const delayFunction = this.getDelayFunction();
      const [animation, config] = this.getAnimationAndConfig();
      const delay = this.getDelay();
      const rotate = this.rotateV ? this.rotateV : '0.3';
      const callback = this.callbackV;
      const initialValues = this.initialValues;
      return () => {
        'worklet';

        return {
          animations: {
            transform: [{
              scale: delayFunction(delay, animation(0, config))
            }, {
              rotate: delayFunction(delay, animation(rotate, config))
            }]
          },
          initialValues: {
            transform: [{
              scale: 1
            }, {
              rotate: '0'
            }],
            ...initialValues
          },
          callback
        };
      };
    });
  }
  static createInstance() {
    return new ZoomOutRotate();
  }
}

/**
 * Scale to left animation. You can modify the behavior by chaining methods like `.springify()` or `.duration(500)`.
 *
 * You pass it to the `exiting` prop on [an Animated component](https://docs.swmansion.com/react-native-reanimated/docs/fundamentals/glossary#animated-component).
 *
 * @see https://docs.swmansion.com/react-native-reanimated/docs/layout-animations/entering-exiting-animations/#zoom
 */
_defineProperty(ZoomOutRotate, "presetName", 'ZoomOutRotate');
export class ZoomOutLeft extends ComplexAnimationBuilder {
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
              scale: delayFunction(delay, animation(0, config))
            }]
          },
          initialValues: {
            transform: [{
              translateX: 0
            }, {
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
    return new ZoomOutLeft();
  }
}

/**
 * Scale to right animation. You can modify the behavior by chaining methods like `.springify()` or `.duration(500)`.
 *
 * You pass it to the `exiting` prop on [an Animated component](https://docs.swmansion.com/react-native-reanimated/docs/fundamentals/glossary#animated-component).
 *
 * @see https://docs.swmansion.com/react-native-reanimated/docs/layout-animations/entering-exiting-animations/#zoom
 */
_defineProperty(ZoomOutLeft, "presetName", 'ZoomOutLeft');
export class ZoomOutRight extends ComplexAnimationBuilder {
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
              scale: delayFunction(delay, animation(0, config))
            }]
          },
          initialValues: {
            transform: [{
              translateX: 0
            }, {
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
    return new ZoomOutRight();
  }
}

/**
 * Scale to top animation. You can modify the behavior by chaining methods like `.springify()` or `.duration(500)`.
 *
 * You pass it to the `exiting` prop on [an Animated component](https://docs.swmansion.com/react-native-reanimated/docs/fundamentals/glossary#animated-component).
 *
 * @see https://docs.swmansion.com/react-native-reanimated/docs/layout-animations/entering-exiting-animations/#zoom
 */
_defineProperty(ZoomOutRight, "presetName", 'ZoomOutRight');
export class ZoomOutUp extends ComplexAnimationBuilder {
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
              translateY: delayFunction(delay, animation(-values.windowHeight, config))
            }, {
              scale: delayFunction(delay, animation(0, config))
            }]
          },
          initialValues: {
            transform: [{
              translateY: 0
            }, {
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
    return new ZoomOutUp();
  }
}

/**
 * Scale to bottom animation. You can modify the behavior by chaining methods like `.springify()` or `.duration(500)`.
 *
 * You pass it to the `exiting` prop on [an Animated component](https://docs.swmansion.com/react-native-reanimated/docs/fundamentals/glossary#animated-component).
 *
 * @see https://docs.swmansion.com/react-native-reanimated/docs/layout-animations/entering-exiting-animations/#zoom
 */
_defineProperty(ZoomOutUp, "presetName", 'ZoomOutUp');
export class ZoomOutDown extends ComplexAnimationBuilder {
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
              translateY: delayFunction(delay, animation(values.windowHeight, config))
            }, {
              scale: delayFunction(delay, animation(0, config))
            }]
          },
          initialValues: {
            transform: [{
              translateY: 0
            }, {
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
    return new ZoomOutDown();
  }
}

/**
 * Eased scale to top animation. You can modify the behavior by chaining methods like `.springify()` or `.duration(500)`.
 *
 * You pass it to the `exiting` prop on [an Animated component](https://docs.swmansion.com/react-native-reanimated/docs/fundamentals/glossary#animated-component).
 *
 * @see https://docs.swmansion.com/react-native-reanimated/docs/layout-animations/entering-exiting-animations/#zoom
 */
_defineProperty(ZoomOutDown, "presetName", 'ZoomOutDown');
export class ZoomOutEasyUp extends ComplexAnimationBuilder {
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
              translateY: delayFunction(delay, animation(-values.currentHeight, config))
            }, {
              scale: delayFunction(delay, animation(0, config))
            }]
          },
          initialValues: {
            transform: [{
              translateY: 0
            }, {
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
    return new ZoomOutEasyUp();
  }
}

/**
 * Eased scale to bottom animation. You can modify the behavior by chaining methods like `.springify()` or `.duration(500)`.
 *
 * You pass it to the `exiting` prop on [an Animated component](https://docs.swmansion.com/react-native-reanimated/docs/fundamentals/glossary#animated-component).
 *
 * @see https://docs.swmansion.com/react-native-reanimated/docs/layout-animations/entering-exiting-animations/#zoom
 */
_defineProperty(ZoomOutEasyUp, "presetName", 'ZoomOutEasyUp');
export class ZoomOutEasyDown extends ComplexAnimationBuilder {
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
              translateY: delayFunction(delay, animation(values.currentHeight, config))
            }, {
              scale: delayFunction(delay, animation(0, config))
            }]
          },
          initialValues: {
            transform: [{
              translateY: 0
            }, {
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
    return new ZoomOutEasyDown();
  }
}
_defineProperty(ZoomOutEasyDown, "presetName", 'ZoomOutEasyDown');
//# sourceMappingURL=Zoom.js.map