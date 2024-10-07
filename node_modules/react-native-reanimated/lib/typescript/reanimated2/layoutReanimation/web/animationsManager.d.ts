import type { AnimatedComponentProps } from '../../../createAnimatedComponent/commonTypes';
import { LayoutAnimationType } from '../animationBuilder/commonTypes';
import type { TransitionData } from './animationParser';
export declare function startWebLayoutAnimation<ComponentProps extends Record<string, unknown>>(props: Readonly<AnimatedComponentProps<ComponentProps>>, element: HTMLElement, animationType: LayoutAnimationType, transitionData?: TransitionData): void;
export declare function tryActivateLayoutTransition<ComponentProps extends Record<string, unknown>>(props: Readonly<AnimatedComponentProps<ComponentProps>>, element: HTMLElement, snapshot: DOMRect): void;
