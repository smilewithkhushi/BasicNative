import type { AnimationCallback, AnimatableValue } from '../commonTypes';
import type { SpringConfig } from './springUtils';
type withSpringType = <T extends AnimatableValue>(toValue: T, userConfig?: SpringConfig, callback?: AnimationCallback) => T;
/**
 * Lets you create spring-based animations.
 *
 * @param toValue - the value at which the animation will come to rest - {@link AnimatableValue}
 * @param config - the spring animation configuration - {@link SpringConfig}
 * @param callback - a function called on animation complete - {@link AnimationCallback}
 * @returns an [animation object](https://docs.swmansion.com/react-native-reanimated/docs/fundamentals/glossary#animation-object) which holds the current state of the animation
 * @see https://docs.swmansion.com/react-native-reanimated/docs/animations/withSpring
 */
export declare const withSpring: withSpringType;
export {};
