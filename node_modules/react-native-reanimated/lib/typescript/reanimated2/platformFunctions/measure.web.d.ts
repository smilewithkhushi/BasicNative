import type { MeasuredDimensions } from '../commonTypes';
import type { AnimatedRef } from '../hook/commonTypes';
import type { Component } from 'react';
export declare function measure<T extends Component>(animatedRef: AnimatedRef<T>): MeasuredDimensions | null;
