'use strict';

function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
import { withTiming } from '../../animation';
import { LayoutAnimationType, SharedTransitionType } from '../animationBuilder/commonTypes';
import { ReduceMotion } from '../../commonTypes';
import { ProgressTransitionManager } from './ProgressTransitionManager';
import { updateLayoutAnimations } from '../../UpdateLayoutAnimations';
import { getReduceMotionFromConfig } from '../../animation/util';
const SUPPORTED_PROPS = ['width', 'height', 'originX', 'originY', 'transform', 'borderRadius'];
/**
 * A SharedTransition builder class.
 *
 * @see https://docs.swmansion.com/react-native-reanimated/docs/shared-element-transitions/overview
 * @experimental
 */
export class SharedTransition {
  constructor() {
    _defineProperty(this, "_customAnimationFactory", null);
    _defineProperty(this, "_animation", null);
    _defineProperty(this, "_transitionDuration", 500);
    _defineProperty(this, "_reduceMotion", ReduceMotion.System);
    _defineProperty(this, "_customProgressAnimation", undefined);
    _defineProperty(this, "_progressAnimation", undefined);
    _defineProperty(this, "_defaultTransitionType", undefined);
  }
  custom(customAnimationFactory) {
    this._customAnimationFactory = customAnimationFactory;
    return this;
  }
  progressAnimation(progressAnimationCallback) {
    this._customProgressAnimation = (viewTag, values, progress) => {
      'worklet';

      const newStyles = progressAnimationCallback(values, progress);
      global._notifyAboutProgress(viewTag, newStyles, true);
    };
    return this;
  }
  duration(duration) {
    this._transitionDuration = duration;
    return this;
  }
  reduceMotion(_reduceMotion) {
    this._reduceMotion = _reduceMotion;
    return this;
  }
  defaultTransitionType(transitionType) {
    this._defaultTransitionType = transitionType;
    return this;
  }
  registerTransition(viewTag, sharedTransitionTag, isUnmounting = false) {
    if (getReduceMotionFromConfig(this.getReduceMotion())) {
      return;
    }
    const transitionAnimation = this.getTransitionAnimation();
    const progressAnimation = this.getProgressAnimation();
    if (!this._defaultTransitionType) {
      if (this._customAnimationFactory && !this._customProgressAnimation) {
        this._defaultTransitionType = SharedTransitionType.ANIMATION;
      } else {
        this._defaultTransitionType = SharedTransitionType.PROGRESS_ANIMATION;
      }
    }
    const layoutAnimationType = this._defaultTransitionType === SharedTransitionType.ANIMATION ? LayoutAnimationType.SHARED_ELEMENT_TRANSITION : LayoutAnimationType.SHARED_ELEMENT_TRANSITION_PROGRESS;
    updateLayoutAnimations(viewTag, layoutAnimationType, transitionAnimation, sharedTransitionTag, isUnmounting);
    SharedTransition._progressTransitionManager.addProgressAnimation(viewTag, progressAnimation);
  }
  unregisterTransition(viewTag, isUnmounting = false) {
    const layoutAnimationType = this._defaultTransitionType === SharedTransitionType.ANIMATION ? LayoutAnimationType.SHARED_ELEMENT_TRANSITION : LayoutAnimationType.SHARED_ELEMENT_TRANSITION_PROGRESS;
    updateLayoutAnimations(viewTag, layoutAnimationType, undefined, undefined, isUnmounting);
    SharedTransition._progressTransitionManager.removeProgressAnimation(viewTag, isUnmounting);
  }
  getReduceMotion() {
    return this._reduceMotion;
  }
  getTransitionAnimation() {
    if (!this._animation) {
      this.buildAnimation();
    }
    return this._animation;
  }
  getProgressAnimation() {
    if (!this._progressAnimation) {
      this.buildProgressAnimation();
    }
    return this._progressAnimation;
  }
  buildAnimation() {
    const animationFactory = this._customAnimationFactory;
    const transitionDuration = this._transitionDuration;
    const reduceMotion = this._reduceMotion;
    this._animation = values => {
      'worklet';

      let animations = {};
      const initialValues = {};
      if (animationFactory) {
        animations = animationFactory(values);
        for (const key in animations) {
          if (!SUPPORTED_PROPS.includes(key)) {
            throw new Error(`[Reanimated] The prop '${key}' is not supported yet.`);
          }
        }
      } else {
        for (const propName of SUPPORTED_PROPS) {
          if (propName === 'transform') {
            const matrix = values.targetTransformMatrix;
            animations.transformMatrix = withTiming(matrix, {
              reduceMotion,
              duration: transitionDuration
            });
          } else {
            const capitalizedPropName = `${propName.charAt(0).toUpperCase()}${propName.slice(1)}`;
            const keyToTargetValue = `target${capitalizedPropName}`;
            animations[propName] = withTiming(values[keyToTargetValue], {
              reduceMotion,
              duration: transitionDuration
            });
          }
        }
      }
      for (const propName in animations) {
        if (propName === 'transform') {
          initialValues.transformMatrix = values.currentTransformMatrix;
        } else {
          const capitalizedPropName = propName.charAt(0).toUpperCase() + propName.slice(1);
          const keyToCurrentValue = `current${capitalizedPropName}`;
          initialValues[propName] = values[keyToCurrentValue];
        }
      }
      return {
        initialValues,
        animations
      };
    };
  }
  buildProgressAnimation() {
    if (this._customProgressAnimation) {
      this._progressAnimation = this._customProgressAnimation;
      return;
    }
    this._progressAnimation = (viewTag, values, progress) => {
      'worklet';

      const newStyles = {};
      for (const propertyName of SUPPORTED_PROPS) {
        if (propertyName === 'transform') {
          // this is not the perfect solution, but at this moment it just interpolates the whole
          // matrix instead of interpolating scale, translate, rotate, etc. separately
          const currentMatrix = values.currentTransformMatrix;
          const targetMatrix = values.targetTransformMatrix;
          const newMatrix = new Array(9);
          for (let i = 0; i < 9; i++) {
            newMatrix[i] = progress * (targetMatrix[i] - currentMatrix[i]) + currentMatrix[i];
          }
          newStyles.transformMatrix = newMatrix;
        } else {
          // PropertyName == propertyName with capitalized fist letter, (width -> Width)
          const PropertyName = propertyName.charAt(0).toUpperCase() + propertyName.slice(1);
          const currentPropertyName = `current${PropertyName}`;
          const targetPropertyName = `target${PropertyName}`;
          const currentValue = values[currentPropertyName];
          const targetValue = values[targetPropertyName];
          newStyles[propertyName] = progress * (targetValue - currentValue) + currentValue;
        }
      }
      global._notifyAboutProgress(viewTag, newStyles, true);
    };
  }

  // static builder methods i.e. shared transition modifiers

  /**
   * Lets you create a custom shared transition animation. Other shared transition modifiers can be chained alongside this modifier.
   *
   * @param customAnimationFactory - Callback function that have to return an object with styles for the custom shared transition.
   * @returns A {@link SharedTransition} object. Styles returned from this function need to be to the `sharedTransitionStyle` prop.
   * @see https://docs.swmansion.com/react-native-reanimated/docs/shared-element-transitions/overview
   * @experimental
   */
  static custom(customAnimationFactory) {
    return new SharedTransition().custom(customAnimationFactory);
  }

  /**
   * Lets you change the duration of the shared transition. Other shared transition modifiers can be chained alongside this modifier.
   *
   * @param duration - The duration of the shared transition animation in milliseconds.
   * @see https://docs.swmansion.com/react-native-reanimated/docs/shared-element-transitions/overview
   * @experimental
   */
  static duration(duration) {
    return new SharedTransition().duration(duration);
  }

  /**
   * Lets you create a shared transition animation bound to the progress between navigation screens. Other shared transition modifiers can be chained alongside this modifier.
   *
   * @param progressAnimationCallback - A callback called with the current progress value on every animation frame. It should return an object with styles for the shared transition.
   * @see https://docs.swmansion.com/react-native-reanimated/docs/shared-element-transitions/overview
   * @experimental
   */
  static progressAnimation(progressAnimationCallback) {
    return new SharedTransition().progressAnimation(progressAnimationCallback);
  }

  /**
   * Whether the transition is progress-bound or not. Other shared transition modifiers can be chained alongside this modifier.
   *
   * @param transitionType - Type of the transition. Configured with {@link SharedTransitionType} enum.
   * @see https://docs.swmansion.com/react-native-reanimated/docs/shared-element-transitions/overview
   * @experimental
   */
  static defaultTransitionType(transitionType) {
    return new SharedTransition().defaultTransitionType(transitionType);
  }

  /**
   * Lets you adjust the behavior when the device's reduced motion accessibility setting is turned on. Other shared transition modifiers can be chained alongside this modifier.
   *
   * @param reduceMotion - Determines how the animation responds to the device's reduced motion accessibility setting. Default to `ReduceMotion.System` - {@link ReduceMotion}.
   * @see https://docs.swmansion.com/react-native-reanimated/docs/shared-element-transitions/overview
   * @experimental
   */
  static reduceMotion(reduceMotion) {
    return new SharedTransition().reduceMotion(reduceMotion);
  }
}
_defineProperty(SharedTransition, "_progressTransitionManager", new ProgressTransitionManager());
//# sourceMappingURL=SharedTransition.js.map