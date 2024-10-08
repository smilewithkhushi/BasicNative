import { LayoutAnimationType } from './animationBuilder';
import type { SharedTransitionAnimationsValues, LayoutAnimation } from './animationBuilder/commonTypes';
declare function createLayoutAnimationManager(): {
    start(tag: number, type: LayoutAnimationType, yogaValues: Partial<SharedTransitionAnimationsValues>, config: (arg: Partial<SharedTransitionAnimationsValues>) => LayoutAnimation): void;
    stop(tag: number): void;
};
export type LayoutAnimationsManager = ReturnType<typeof createLayoutAnimationManager>;
export {};
