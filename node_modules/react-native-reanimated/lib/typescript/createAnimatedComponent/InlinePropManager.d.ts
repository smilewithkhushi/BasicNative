/// <reference types="react" />
import type { StyleProps } from '../reanimated2';
import type { IAnimatedComponentInternal, IInlinePropManager, ViewInfo } from './commonTypes';
import type { ViewDescriptorsSet } from '../reanimated2/ViewDescriptorsSet';
export declare function hasInlineStyles(style: StyleProps): boolean;
export declare function getInlineStyle(style: Record<string, unknown>, shouldGetInitialStyle: boolean): Record<string, unknown>;
export declare class InlinePropManager implements IInlinePropManager {
    _inlinePropsViewDescriptors: ViewDescriptorsSet | null;
    _inlinePropsMapperId: number | null;
    _inlineProps: StyleProps;
    attachInlineProps(animatedComponent: React.Component<unknown, unknown> & IAnimatedComponentInternal, viewInfo: ViewInfo): void;
    detachInlineProps(): void;
}
