import { PointerType } from '../PointerType';
import { Point } from './interfaces';
export declare function isPointerInBounds(view: HTMLElement, { x, y }: Point): boolean;
export declare const PointerTypeMapping: Map<string, PointerType>;
export declare const degToRad: (degrees: number) => number;
export declare const coneToDeviation: (degrees: number) => number;
