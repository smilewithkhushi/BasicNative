import { TransitionType } from './config';
import type { AnimationData, TransitionData } from './animationParser';
import type { TransformsStyle } from 'react-native';
/**
 *  Modifies default animation by preserving transformations that given element already contains.
 *
 * @param animationName - Name of the animation to be modified (e.g. `FadeIn`).
 * @param existingTransform - Transform values that element already contains.
 * @returns Animation parsed to keyframe string.
 */
export declare function createAnimationWithExistingTransform(animationName: string, existingTransform: NonNullable<TransformsStyle['transform']>, layoutTransition?: AnimationData): string;
/**
 * Creates transition of given type, appends it to stylesheet and returns keyframe name.
 *
 * @param transitionType - Type of transition (e.g. LINEAR).
 * @param transitionData - Object containing data for transforms (translateX, scaleX,...).
 * @returns Keyframe name that represents transition.
 */
export declare function TransitionGenerator(transitionType: TransitionType, transitionData: TransitionData, existingTransform: TransformsStyle['transform'] | undefined): string;
