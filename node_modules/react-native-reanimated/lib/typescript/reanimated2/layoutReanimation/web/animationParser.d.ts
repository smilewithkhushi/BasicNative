import type { TransformsStyle } from 'react-native';
export interface ReanimatedWebTransformProperties {
    translateX?: string;
    translateY?: string;
    rotate?: string;
    rotateX?: string;
    rotateY?: string;
    scale?: number | string;
    scaleX?: number;
    scaleY?: number;
    perspective?: string;
    skew?: string;
    skewX?: string;
}
interface AnimationStyle {
    opacity?: number;
    transform?: ReanimatedWebTransformProperties[];
}
export interface AnimationData {
    name: string;
    style: Record<number, AnimationStyle>;
    duration: number;
}
export interface TransitionData {
    translateX: number;
    translateY: number;
    scaleX: number;
    scaleY: number;
    reversed?: boolean;
}
export declare function convertAnimationObjectToKeyframes(animationObject: AnimationData): string;
export declare function convertTransformToString(transform: NonNullable<TransformsStyle['transform']> | undefined): string;
export {};
