'use strict';

function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
import { ComplexAnimationBuilder } from '../animationBuilder';

/**
 * Slide from right animation. You can modify the behavior by chaining methods like `.springify()` or `.duration(500)`.
 *
 * You pass it to the `entering` prop on [an Animated component](https://docs.swmansion.com/react-native-reanimated/docs/fundamentals/glossary#animated-component).
 *
 * @see https://docs.swmansion.com/react-native-reanimated/docs/layout-animations/entering-exiting-animations#slide
 */
export class SlideInRight extends ComplexAnimationBuilder {
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
            originX: delayFunction(delay, animation(values.targetOriginX, config))
          },
          initialValues: {
            originX: values.targetOriginX + values.windowWidth,
            ...initialValues
          },
          callback
        };
      };
    });
  }
  static createInstance() {
    return new SlideInRight();
  }
}

/**
 * Slide from left animation. You can modify the behavior by chaining methods like `.springify()` or `.duration(500)`.
 *
 * You pass it to the `entering` prop on [an Animated component](https://docs.swmansion.com/react-native-reanimated/docs/fundamentals/glossary#animated-component).
 *
 * @see https://docs.swmansion.com/react-native-reanimated/docs/layout-animations/entering-exiting-animations#slide
 */
_defineProperty(SlideInRight, "presetName", 'SlideInRight');
export class SlideInLeft extends ComplexAnimationBuilder {
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
            originX: delayFunction(delay, animation(values.targetOriginX, config))
          },
          initialValues: {
            originX: values.targetOriginX - values.windowWidth,
            ...initialValues
          },
          callback
        };
      };
    });
  }
  static createInstance() {
    return new SlideInLeft();
  }
}

/**
 * Slide to right animation. You can modify the behavior by chaining methods like `.springify()` or `.duration(500)`.
 *
 * You pass it to the `exiting` prop on [an Animated component](https://docs.swmansion.com/react-native-reanimated/docs/fundamentals/glossary#animated-component).
 *
 * @see https://docs.swmansion.com/react-native-reanimated/docs/layout-animations/entering-exiting-animations#slide
 */
_defineProperty(SlideInLeft, "presetName", 'SlideInLeft');
export class SlideOutRight extends ComplexAnimationBuilder {
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
            originX: delayFunction(delay, animation(Math.max(values.currentOriginX + values.windowWidth, values.windowWidth), config))
          },
          initialValues: {
            originX: values.currentOriginX,
            ...initialValues
          },
          callback
        };
      };
    });
  }
  static createInstance() {
    return new SlideOutRight();
  }
}

/**
 * Slide to left animation. You can modify the behavior by chaining methods like `.springify()` or `.duration(500)`.
 *
 * You pass it to the `exiting` prop on [an Animated component](https://docs.swmansion.com/react-native-reanimated/docs/fundamentals/glossary#animated-component).
 *
 * @see https://docs.swmansion.com/react-native-reanimated/docs/layout-animations/entering-exiting-animations#slide
 */
_defineProperty(SlideOutRight, "presetName", 'SlideOutRight');
export class SlideOutLeft extends ComplexAnimationBuilder {
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
            originX: delayFunction(delay, animation(Math.min(values.currentOriginX - values.windowWidth, -values.windowWidth), config))
          },
          initialValues: {
            originX: values.currentOriginX,
            ...initialValues
          },
          callback
        };
      };
    });
  }
  static createInstance() {
    return new SlideOutLeft();
  }
}

/**
 * Slide from top animation. You can modify the behavior by chaining methods like `.springify()` or `.duration(500)`.
 *
 * You pass it to the `entering` prop on [an Animated component](https://docs.swmansion.com/react-native-reanimated/docs/fundamentals/glossary#animated-component).
 *
 * @see https://docs.swmansion.com/react-native-reanimated/docs/layout-animations/entering-exiting-animations#slide
 */
_defineProperty(SlideOutLeft, "presetName", 'SlideOutLeft');
export class SlideInUp extends ComplexAnimationBuilder {
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
            originY: delayFunction(delay, animation(values.targetOriginY, config))
          },
          initialValues: {
            originY: -values.windowHeight,
            ...initialValues
          },
          callback
        };
      };
    });
  }
  static createInstance() {
    return new SlideInUp();
  }
}

/**
 * Slide from bottom animation. You can modify the behavior by chaining methods like `.springify()` or `.duration(500)`.
 *
 * You pass it to the `entering` prop on [an Animated component](https://docs.swmansion.com/react-native-reanimated/docs/fundamentals/glossary#animated-component).
 *
 * @see https://docs.swmansion.com/react-native-reanimated/docs/layout-animations/entering-exiting-animations#slide
 */
_defineProperty(SlideInUp, "presetName", 'SlideInUp');
export class SlideInDown extends ComplexAnimationBuilder {
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
            originY: delayFunction(delay, animation(values.targetOriginY, config))
          },
          initialValues: {
            originY: values.targetOriginY + values.windowHeight,
            ...initialValues
          },
          callback
        };
      };
    });
  }
  static createInstance() {
    return new SlideInDown();
  }
}

/**
 * Slide to top animation. You can modify the behavior by chaining methods like `.springify()` or `.duration(500)`.
 *
 * You pass it to the `exiting` prop on [an Animated component](https://docs.swmansion.com/react-native-reanimated/docs/fundamentals/glossary#animated-component).
 *
 * @see https://docs.swmansion.com/react-native-reanimated/docs/layout-animations/entering-exiting-animations#slide
 */
_defineProperty(SlideInDown, "presetName", 'SlideInDown');
export class SlideOutUp extends ComplexAnimationBuilder {
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
            originY: delayFunction(delay, animation(Math.min(values.currentOriginY - values.windowHeight, -values.windowHeight), config))
          },
          initialValues: {
            originY: values.currentOriginY,
            ...initialValues
          },
          callback
        };
      };
    });
  }
  static createInstance() {
    return new SlideOutUp();
  }
}

/**
 * Slide to bottom animation. You can modify the behavior by chaining methods like `.springify()` or `.duration(500)`.
 *
 * You pass it to the `exiting` prop on [an Animated component](https://docs.swmansion.com/react-native-reanimated/docs/fundamentals/glossary#animated-component).
 *
 * @see https://docs.swmansion.com/react-native-reanimated/docs/layout-animations/entering-exiting-animations#slide
 */
_defineProperty(SlideOutUp, "presetName", 'SlideOutUp');
export class SlideOutDown extends ComplexAnimationBuilder {
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
            originY: delayFunction(delay, animation(Math.max(values.currentOriginY + values.windowHeight, values.windowHeight), config))
          },
          initialValues: {
            originY: values.currentOriginY,
            ...initialValues
          },
          callback
        };
      };
    });
  }
  static createInstance() {
    return new SlideOutDown();
  }
}
_defineProperty(SlideOutDown, "presetName", 'SlideOutDown');
//# sourceMappingURL=Slide.js.map