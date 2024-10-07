import type { ILayoutAnimationBuilder, LayoutAnimationFunction } from '../animationBuilder/commonTypes';
import { BaseAnimationBuilder } from '../animationBuilder';
export declare class EntryExitTransition extends BaseAnimationBuilder implements ILayoutAnimationBuilder {
    enteringV: BaseAnimationBuilder | typeof BaseAnimationBuilder;
    exitingV: BaseAnimationBuilder | typeof BaseAnimationBuilder;
    static createInstance<T extends typeof BaseAnimationBuilder>(this: T): InstanceType<T>;
    static entering(animation: BaseAnimationBuilder | typeof BaseAnimationBuilder): EntryExitTransition;
    entering(animation: BaseAnimationBuilder | typeof BaseAnimationBuilder): EntryExitTransition;
    static exiting(animation: BaseAnimationBuilder | typeof BaseAnimationBuilder): EntryExitTransition;
    exiting(animation: BaseAnimationBuilder | typeof BaseAnimationBuilder): EntryExitTransition;
    build: () => LayoutAnimationFunction;
}
/**
 * Lets you combine two layout animations into a layout transition. You can modify the behavior by chaining methods like `.delay(500)`.
 *
 * @param exiting - Layout animation used when components are removed from layout (eg. `FadeOut`).
 * @param entering - Layout animation used when components are added to layout (eg. `FadeIn`).
 * @returns A custom layout transition. You pass it to the `layout` prop on [an Animated component](https://docs.swmansion.com/react-native-reanimated/docs/fundamentals/glossary#animated-component).
 * @see https://docs.swmansion.com/react-native-reanimated/docs/layout-animations/layout-transitions#combine-transition
 */
export declare function combineTransition(exiting: BaseAnimationBuilder | typeof BaseAnimationBuilder, entering: BaseAnimationBuilder | typeof BaseAnimationBuilder): EntryExitTransition;
