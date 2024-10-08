import type { ReactNode } from 'react';
import * as React from 'react';
import type { CommonPathProps, NumberProp } from '../lib/extract/types';
import Shape from './Shape';
export type TMaskUnits = 'userSpaceOnUse' | 'objectBoundingBox';
export interface MaskProps extends CommonPathProps {
    children?: ReactNode;
    id?: string;
    x?: NumberProp;
    y?: NumberProp;
    width?: NumberProp;
    height?: NumberProp;
    maskUnits?: TMaskUnits;
    maskContentUnits?: TMaskUnits;
}
export default class Mask extends Shape<MaskProps> {
    static displayName: string;
    static defaultProps: {
        x: string;
        y: string;
        width: string;
        height: string;
    };
    render(): React.JSX.Element;
}
//# sourceMappingURL=Mask.d.ts.map