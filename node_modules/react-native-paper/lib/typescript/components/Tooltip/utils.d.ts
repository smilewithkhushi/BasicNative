import { LayoutRectangle, ViewStyle } from 'react-native';
declare type ChildrenMeasurement = {
    width: number;
    height: number;
    pageX: number;
    pageY: number;
};
declare type TooltipLayout = LayoutRectangle;
export declare type Measurement = {
    children: ChildrenMeasurement;
    tooltip: TooltipLayout;
    measured: boolean;
};
export declare const getTooltipPosition: ({ children, tooltip, measured }: Measurement, component: React.ReactElement<{
    style: ViewStyle | Array<ViewStyle> | undefined | null;
}>) => {} | {
    left: number;
    top: number;
};
export {};
//# sourceMappingURL=utils.d.ts.map