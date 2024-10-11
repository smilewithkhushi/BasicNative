import type { KeyframeProps } from './commonTypes';
import { ReduceMotion } from '../../commonTypes';
export declare class ReanimatedKeyframe {
    constructor(definitions: Record<string, KeyframeProps>);
    duration(durationMs: number): ReanimatedKeyframe;
    delay(delayMs: number): ReanimatedKeyframe;
    reduceMotion(reduceMotionV: ReduceMotion): ReanimatedKeyframe;
    withCallback(callback: (finished: boolean) => void): ReanimatedKeyframe;
}
export declare const Keyframe: typeof ReanimatedKeyframe;
