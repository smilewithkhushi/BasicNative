import type { MutableRefObject } from 'react';
import type { SharedValue, StyleProps } from './commonTypes';
import type { AnimatedStyle } from './helperTypes';
import type { Descriptor } from './hook/commonTypes';
import type { ViewRefSet } from './ViewDescriptorsSet';
declare let updateProps: (viewDescriptor: SharedValue<Descriptor[]>, updates: StyleProps | AnimatedStyle<any>, maybeViewRef: ViewRefSet<any> | undefined, isAnimatedProps?: boolean) => void;
export declare const updatePropsJestWrapper: (viewDescriptors: SharedValue<Descriptor[]>, updates: AnimatedStyle<any>, maybeViewRef: ViewRefSet<any> | undefined, animatedStyle: MutableRefObject<AnimatedStyle<any>>, adapters: ((updates: AnimatedStyle<any>) => void)[]) => void;
export default updateProps;
export interface UpdatePropsManager {
    update(viewDescriptors: SharedValue<Descriptor[]>, updates: StyleProps | AnimatedStyle<any>): void;
    flush(): void;
}
