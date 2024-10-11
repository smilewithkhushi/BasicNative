'use strict';

function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
import { withSequence, withTiming } from '../../animation';
import { Easing } from '../../Easing';
import { BaseAnimationBuilder } from '../animationBuilder';

/**
 * Layout jumps - quite literally - from one position to another. You can modify the behavior by chaining methods like `.springify()` or `.duration(500)`.
 *
 * You pass it to the `layout` prop on [an Animated component](https://docs.swmansion.com/react-native-reanimated/docs/fundamentals/glossary#animated-component).
 *
 * @see https://docs.swmansion.com/react-native-reanimated/docs/layout-animations/layout-transitions#jumping-transition
 */
export class JumpingTransition extends BaseAnimationBuilder {
  constructor(...args) {
    super(...args);
    _defineProperty(this, "build", () => {
      const delayFunction = this.getDelayFunction();
      const callback = this.callbackV;
      const delay = this.getDelay();
      const duration = (this.durationV ?? 300) / 2;
      const config = {
        duration: duration * 2
      };
      return values => {
        'worklet';

        const d = Math.max(Math.abs(values.targetOriginX - values.currentOriginX), Math.abs(values.targetOriginY - values.currentOriginY));
        return {
          initialValues: {
            originX: values.currentOriginX,
            originY: values.currentOriginY,
            width: values.currentWidth,
            height: values.currentHeight
          },
          animations: {
            originX: delayFunction(delay, withTiming(values.targetOriginX, config)),
            originY: delayFunction(delay, withSequence(withTiming(Math.min(values.targetOriginY, values.currentOriginY) - d, {
              duration,
              easing: Easing.out(Easing.exp)
            }), withTiming(values.targetOriginY, {
              ...config,
              duration,
              easing: Easing.bounce
            }))),
            width: delayFunction(delay, withTiming(values.targetWidth, config)),
            height: delayFunction(delay, withTiming(values.targetHeight, config))
          },
          callback
        };
      };
    });
  }
  static createInstance() {
    return new JumpingTransition();
  }
}
//# sourceMappingURL=JumpingTransition.js.map