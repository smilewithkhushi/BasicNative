import type { SharedValue } from './commonTypes';
import type { Descriptor } from './hook/commonTypes';
export interface ViewRefSet<T> {
    items: Set<T>;
    add: (item: T) => void;
    remove: (item: T) => void;
}
export interface ViewDescriptorsSet {
    shareableViewDescriptors: SharedValue<Descriptor[]>;
    add: (item: Descriptor) => void;
    remove: (viewTag: number) => void;
}
export declare function makeViewDescriptorsSet(): ViewDescriptorsSet;
export declare const useViewRefSet: typeof useViewRefSetJS | typeof useViewRefSetNative;
declare function useViewRefSetNative(): undefined;
declare function useViewRefSetJS<T>(): ViewRefSet<T>;
export {};
