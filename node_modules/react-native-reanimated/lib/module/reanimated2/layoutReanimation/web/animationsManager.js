'use strict';

import { Animations } from './config';
import { LayoutAnimationType } from '../animationBuilder/commonTypes';
import { createAnimationWithExistingTransform } from './createAnimation';
import { extractTransformFromStyle, getProcessedConfig, handleExitingAnimation, handleLayoutTransition, setElementAnimation } from './componentUtils';
import { areDOMRectsEqual } from './domUtils';
import { makeElementVisible } from './componentStyle';
function chooseConfig(animationType, props) {
  const config = animationType === LayoutAnimationType.ENTERING ? props.entering : animationType === LayoutAnimationType.EXITING ? props.exiting : animationType === LayoutAnimationType.LAYOUT ? props.layout : null;
  return config;
}
function checkUndefinedAnimationFail(initialAnimationName, isLayoutTransition) {
  // This prevents crashes if we try to set animations that are not defined.
  // We don't care about layout transitions since they're created dynamically
  if (initialAnimationName in Animations || isLayoutTransition) {
    return false;
  }
  console.warn("[Reanimated] Couldn't load entering/exiting animation. Current version supports only predefined animations with modifiers: duration, delay, easing, randomizeDelay, withCallback, reducedMotion.");
  return true;
}
function chooseAction(animationType, animationConfig, element, transitionData, transform) {
  switch (animationType) {
    case LayoutAnimationType.ENTERING:
      setElementAnimation(element, animationConfig, transform);
      break;
    case LayoutAnimationType.LAYOUT:
      transitionData.reversed = animationConfig.reversed;
      handleLayoutTransition(element, animationConfig, transitionData, transform);
      break;
    case LayoutAnimationType.EXITING:
      handleExitingAnimation(element, animationConfig);
      break;
  }
}
function tryGetAnimationConfigWithTransform(props, animationType) {
  const config = chooseConfig(animationType, props);
  if (!config) {
    return null;
  }
  const isLayoutTransition = animationType === LayoutAnimationType.LAYOUT;
  const initialAnimationName = typeof config === 'function' ? config.presetName : config.constructor.presetName;
  const shouldFail = checkUndefinedAnimationFail(initialAnimationName, isLayoutTransition);
  if (shouldFail) {
    return null;
  }
  const transform = extractTransformFromStyle(props.style);
  const animationName = transform && animationType !== LayoutAnimationType.EXITING ? createAnimationWithExistingTransform(initialAnimationName, transform) : initialAnimationName;
  const animationConfig = getProcessedConfig(animationName, animationType, config, initialAnimationName);
  return {
    animationConfig,
    transform
  };
}
export function startWebLayoutAnimation(props, element, animationType, transitionData) {
  const maybeAnimationConfigWithTransform = tryGetAnimationConfigWithTransform(props, animationType);
  if (maybeAnimationConfigWithTransform) {
    const {
      animationConfig,
      transform
    } = maybeAnimationConfigWithTransform;
    chooseAction(animationType, animationConfig, element, transitionData, transform);
  } else {
    makeElementVisible(element, 0);
  }
}
export function tryActivateLayoutTransition(props, element, snapshot) {
  if (!props.layout) {
    return;
  }
  const rect = element.getBoundingClientRect();
  if (areDOMRectsEqual(rect, snapshot)) {
    return;
  }
  const transitionData = {
    translateX: snapshot.x - rect.x,
    translateY: snapshot.y - rect.y,
    scaleX: snapshot.width / rect.width,
    scaleY: snapshot.height / rect.height,
    reversed: false // This field is used only in `SequencedTransition`, so by default it will be false
  };
  startWebLayoutAnimation(props, element, LayoutAnimationType.LAYOUT, transitionData);
}
//# sourceMappingURL=animationsManager.js.map