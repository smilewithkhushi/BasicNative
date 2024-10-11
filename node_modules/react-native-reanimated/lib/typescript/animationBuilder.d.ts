import type { ILayoutAnimationBuilder, LayoutAnimationFunction } from './reanimated2/layoutReanimation';
import type { StyleProps } from './reanimated2/commonTypes';
import type { NestedArray } from './createAnimatedComponent/commonTypes';
export declare function maybeBuild(layoutAnimationOrBuilder: ILayoutAnimationBuilder | LayoutAnimationFunction | Keyframe, style: NestedArray<StyleProps> | undefined, displayName: string): LayoutAnimationFunction | Keyframe;
