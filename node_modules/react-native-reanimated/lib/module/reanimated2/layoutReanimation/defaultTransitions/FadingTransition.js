'use strict';

function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
import { withSequence, withTiming } from '../../animation';
import { BaseAnimationBuilder } from '../animationBuilder';

/**
 * Fades out components from one position and shows them in another. You can modify the behavior by chaining methods like `.duration(500)` or `.delay(500)`.
 *
 * You pass it to the `layout` prop on [an Animated component](https://docs.swmansion.com/react-native-reanimated/docs/fundamentals/glossary#animated-component).
 *
 * @see https://docs.swmansion.com/react-native-reanimated/docs/layout-animations/layout-transitions#fading-transition
 */
export class FadingTransition extends BaseAnimationBuilder {
  constructor(...args) {
    super(...args);
    _defineProperty(this, "build", () => {
      const delayFunction = this.getDelayFunction();
      const callback = this.callbackV;
      const delay = this.getDelay();
      const duration = this.durationV ?? 500;
      return values => {
        'worklet';

        return {
          initialValues: {
            opacity: 1,
            originX: values.currentOriginX,
            originY: values.currentOriginY,
            width: values.currentWidth,
            height: values.currentHeight
          },
          animations: {
            opacity: delayFunction(delay, withSequence(withTiming(0, {
              duration
            }), withTiming(1, {
              duration
            }))),
            originX: delayFunction(delay + duration, withTiming(values.targetOriginX, {
              duration: 50
            })),
            originY: delayFunction(delay + duration, withTiming(values.targetOriginY, {
              duration: 50
            })),
            width: delayFunction(delay + duration, withTiming(values.targetWidth, {
              duration: 50
            })),
            height: delayFunction(delay + duration, withTiming(values.targetHeight, {
              duration: 50
            }))
          },
          callback
        };
      };
    });
  }
  static createInstance() {
    return new FadingTransition();
  }
}
//# sourceMappingURL=FadingTransition.js.map