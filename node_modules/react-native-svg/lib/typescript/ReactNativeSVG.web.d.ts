import * as React from 'react';
import type { CircleProps } from './elements/Circle';
import type { ClipPathProps } from './elements/ClipPath';
import type { EllipseProps } from './elements/Ellipse';
import type { ForeignObjectProps } from './elements/ForeignObject';
import type { GProps } from './elements/G';
import type { ImageProps } from './elements/Image';
import type { LineProps } from './elements/Line';
import type { LinearGradientProps } from './elements/LinearGradient';
import type { MarkerProps } from './elements/Marker';
import type { MaskProps } from './elements/Mask';
import type { PathProps } from './elements/Path';
import type { PatternProps } from './elements/Pattern';
import type { PolygonProps } from './elements/Polygon';
import type { PolylineProps } from './elements/Polyline';
import type { RadialGradientProps } from './elements/RadialGradient';
import type { RectProps } from './elements/Rect';
import type { StopProps } from './elements/Stop';
import type { SvgProps } from './elements/Svg';
import type { SymbolProps } from './elements/Symbol';
import type { TextProps } from './elements/Text';
import type { TextPathProps } from './elements/TextPath';
import type { TSpanProps } from './elements/TSpan';
import type { UseProps } from './elements/Use';
import type { GestureResponderEvent } from 'react-native';
import type { NumberArray, NumberProp, TransformProps } from './lib/extract/types';
type BlurEvent = object;
type FocusEvent = object;
type PressEvent = object;
type LayoutEvent = object;
type EdgeInsetsProp = object;
interface BaseProps {
    accessible?: boolean;
    accessibilityLabel?: string;
    accessibilityHint?: string;
    accessibilityIgnoresInvertColors?: boolean;
    accessibilityRole?: string;
    accessibilityState?: object;
    delayLongPress?: number;
    delayPressIn?: number;
    delayPressOut?: number;
    disabled?: boolean;
    hitSlop?: EdgeInsetsProp;
    nativeID?: string;
    touchSoundDisabled?: boolean;
    onBlur?: (e: BlurEvent) => void;
    onFocus?: (e: FocusEvent) => void;
    onLayout?: (event: LayoutEvent) => object;
    onLongPress?: (event: PressEvent) => object;
    onClick?: (event: PressEvent) => object;
    onPress?: (event: PressEvent) => object;
    onPressIn?: (event: PressEvent) => object;
    onPressOut?: (event: PressEvent) => object;
    pressRetentionOffset?: EdgeInsetsProp;
    rejectResponderTermination?: boolean;
    transform?: TransformProps['transform'];
    translate?: NumberArray;
    translateX?: NumberProp;
    translateY?: NumberProp;
    scale?: NumberArray;
    scaleX?: NumberProp;
    scaleY?: NumberProp;
    rotation?: NumberProp;
    skewX?: NumberProp;
    skewY?: NumberProp;
    origin?: NumberArray;
    originX?: NumberProp;
    originY?: NumberProp;
    fontStyle?: string;
    fontWeight?: NumberProp;
    fontSize?: NumberProp;
    fontFamily?: string;
    forwardedRef?: React.RefCallback<SVGElement> | React.MutableRefObject<SVGElement | null>;
    style?: Iterable<unknown>;
    gradientTransform?: TransformProps['transform'];
    patternTransform?: TransformProps['transform'];
}
export declare class WebShape<P extends BaseProps = BaseProps> extends React.Component<P> {
    [x: string]: unknown;
    protected tag?: React.ElementType;
    protected prepareProps(props: P): P;
    elementRef: React.MutableRefObject<SVGElement | null>;
    lastMergedProps: Partial<P>;
    /**
     * disclaimer: I am not sure why the props are wrapped in a `style` attribute here, but that's how reanimated calls it
     */
    setNativeProps(props: {
        style: P;
    }): void;
    _remeasureMetricsOnActivation: () => void;
    touchableHandleStartShouldSetResponder?: (e: GestureResponderEvent) => boolean;
    touchableHandleResponderMove?: (e: GestureResponderEvent) => void;
    touchableHandleResponderGrant?: (e: GestureResponderEvent) => void;
    touchableHandleResponderRelease?: (e: GestureResponderEvent) => void;
    touchableHandleResponderTerminate?: (e: GestureResponderEvent) => void;
    touchableHandleResponderTerminationRequest?: (e: GestureResponderEvent) => boolean;
    constructor(props: P);
    render(): JSX.Element;
}
export declare class Circle extends WebShape<BaseProps & CircleProps> {
    tag: "circle";
}
export declare class ClipPath extends WebShape<BaseProps & ClipPathProps> {
    tag: "clipPath";
}
export declare class Defs extends WebShape {
    tag: "defs";
}
export declare class Ellipse extends WebShape<BaseProps & EllipseProps> {
    tag: "ellipse";
}
export declare class G extends WebShape<BaseProps & GProps> {
    tag: "g";
    prepareProps(props: BaseProps & GProps): {
        accessible?: boolean | undefined;
        accessibilityLabel?: string | undefined;
        accessibilityHint?: string | undefined;
        accessibilityIgnoresInvertColors?: boolean | undefined;
        accessibilityRole?: string | undefined;
        accessibilityState?: object | undefined;
        delayLongPress?: number | undefined;
        delayPressIn?: number | undefined;
        delayPressOut?: number | undefined;
        disabled?: boolean | undefined;
        hitSlop?: object | undefined;
        nativeID?: string | undefined;
        touchSoundDisabled?: boolean | undefined;
        onBlur?: ((e: object) => void) | undefined;
        onFocus?: ((e: object) => void) | undefined;
        onLayout?: (((event: object) => object) & ((event: import("react-native").LayoutChangeEvent) => void)) | undefined;
        onLongPress?: (((event: object) => object) & ((event: GestureResponderEvent) => void)) | undefined;
        onClick?: ((event: object) => object) | undefined;
        onPress?: (((event: object) => object) & ((event: GestureResponderEvent) => void)) | undefined;
        onPressIn?: (((event: object) => object) & ((event: GestureResponderEvent) => void)) | undefined;
        onPressOut?: (((event: object) => object) & ((event: GestureResponderEvent) => void)) | undefined;
        pressRetentionOffset?: object | undefined;
        rejectResponderTermination?: boolean | undefined;
        transform?: string | import("./lib/extract/types").ColumnMajorTransformMatrix | (import("react-native").PerpectiveTransform | import("react-native").RotateTransform | import("react-native").RotateXTransform | import("react-native").RotateYTransform | import("react-native").RotateZTransform | import("react-native").ScaleTransform | import("react-native").ScaleXTransform | import("react-native").ScaleYTransform | import("react-native").TranslateXTransform | import("react-native").TranslateYTransform | import("react-native").SkewXTransform | import("react-native").SkewYTransform | import("react-native").MatrixTransform)[] | undefined;
        translate?: NumberArray | undefined;
        translateX?: NumberProp | undefined;
        translateY?: NumberProp | undefined;
        scale?: NumberArray | undefined;
        scaleX?: NumberProp | undefined;
        scaleY?: NumberProp | undefined;
        rotation?: NumberProp | undefined;
        skewX?: NumberProp | undefined;
        skewY?: NumberProp | undefined;
        origin?: NumberArray | undefined;
        originX?: NumberProp | undefined;
        originY?: NumberProp | undefined;
        fontStyle?: "normal" | "italic" | "oblique" | undefined;
        fontWeight?: string | number | undefined;
        fontSize?: NumberProp | undefined;
        fontFamily?: string | undefined;
        forwardedRef?: ((instance: SVGElement | null) => void) | React.MutableRefObject<SVGElement | null> | undefined;
        style?: Iterable<unknown> | undefined;
        gradientTransform?: string | import("./lib/extract/types").ColumnMajorTransformMatrix | (import("react-native").PerpectiveTransform | import("react-native").RotateTransform | import("react-native").RotateXTransform | import("react-native").RotateYTransform | import("react-native").RotateZTransform | import("react-native").ScaleTransform | import("react-native").ScaleXTransform | import("react-native").ScaleYTransform | import("react-native").TranslateXTransform | import("react-native").TranslateYTransform | import("react-native").SkewXTransform | import("react-native").SkewYTransform | import("react-native").MatrixTransform)[] | undefined;
        patternTransform?: string | import("./lib/extract/types").ColumnMajorTransformMatrix | (import("react-native").PerpectiveTransform | import("react-native").RotateTransform | import("react-native").RotateXTransform | import("react-native").RotateYTransform | import("react-native").RotateZTransform | import("react-native").ScaleTransform | import("react-native").ScaleXTransform | import("react-native").ScaleYTransform | import("react-native").TranslateXTransform | import("react-native").TranslateYTransform | import("react-native").SkewXTransform | import("react-native").SkewYTransform | import("react-native").MatrixTransform)[] | undefined;
        children?: React.ReactNode;
        opacity?: NumberProp | undefined;
        fill?: import("react-native").ColorValue | undefined;
        fillOpacity?: NumberProp | undefined;
        fillRule?: import("./lib/extract/types").FillRule | undefined;
        stroke?: import("react-native").ColorValue | undefined;
        strokeWidth?: NumberProp | undefined;
        strokeOpacity?: NumberProp | undefined;
        strokeDasharray?: NumberProp | readonly NumberProp[] | undefined;
        strokeDashoffset?: NumberProp | undefined;
        strokeLinecap?: import("./lib/extract/types").Linecap | undefined;
        strokeLinejoin?: import("./lib/extract/types").Linejoin | undefined;
        strokeMiterlimit?: NumberProp | undefined;
        vectorEffect?: import("./lib/extract/types").VectorEffect | undefined;
        clipRule?: import("./lib/extract/types").FillRule | undefined;
        clipPath?: string | undefined;
        skew?: NumberArray | undefined;
        pointerEvents?: "none" | "auto" | "box-none" | "box-only" | undefined;
        onStartShouldSetResponder?: ((event: GestureResponderEvent) => boolean) | undefined;
        onMoveShouldSetResponder?: ((event: GestureResponderEvent) => boolean) | undefined;
        onResponderEnd?: ((event: GestureResponderEvent) => void) | undefined;
        onResponderGrant?: ((event: GestureResponderEvent) => void) | undefined;
        onResponderReject?: ((event: GestureResponderEvent) => void) | undefined;
        onResponderMove?: ((event: GestureResponderEvent) => void) | undefined;
        onResponderRelease?: ((event: GestureResponderEvent) => void) | undefined;
        onResponderStart?: ((event: GestureResponderEvent) => void) | undefined;
        onResponderTerminationRequest?: ((event: GestureResponderEvent) => boolean) | undefined;
        onResponderTerminate?: ((event: GestureResponderEvent) => void) | undefined;
        onStartShouldSetResponderCapture?: ((event: GestureResponderEvent) => boolean) | undefined;
        onMoveShouldSetResponderCapture?: ((event: GestureResponderEvent) => boolean) | undefined;
        id?: string | undefined;
        marker?: string | undefined;
        markerStart?: string | undefined;
        markerMid?: string | undefined;
        markerEnd?: string | undefined;
        mask?: string | undefined;
        testID?: string | undefined;
        font?: import("./lib/extract/types").FontObject | undefined;
        fontVariant?: import("./lib/extract/types").FontVariant | undefined;
        fontStretch?: import("./lib/extract/types").FontStretch | undefined;
        textAnchor?: import("./lib/extract/types").TextAnchor | undefined;
        textDecoration?: import("./lib/extract/types").TextDecoration | undefined;
        letterSpacing?: NumberProp | undefined;
        wordSpacing?: NumberProp | undefined;
        kerning?: NumberProp | undefined;
        fontFeatureSettings?: string | undefined;
        fontVariantLigatures?: import("./lib/extract/types").FontVariantLigatures | undefined;
        fontVariationSettings?: string | undefined;
    };
}
export declare class Image extends WebShape<BaseProps & ImageProps> {
    tag: "image";
}
export declare class Line extends WebShape<BaseProps & LineProps> {
    tag: "line";
}
export declare class LinearGradient extends WebShape<BaseProps & LinearGradientProps> {
    tag: "linearGradient";
}
export declare class Path extends WebShape<BaseProps & PathProps> {
    tag: "path";
}
export declare class Polygon extends WebShape<BaseProps & PolygonProps> {
    tag: "polygon";
}
export declare class Polyline extends WebShape<BaseProps & PolylineProps> {
    tag: "polyline";
}
export declare class RadialGradient extends WebShape<BaseProps & RadialGradientProps> {
    tag: "radialGradient";
}
export declare class Rect extends WebShape<BaseProps & RectProps> {
    tag: "rect";
}
export declare class Stop extends WebShape<BaseProps & StopProps> {
    tag: "stop";
}
export declare class Svg extends WebShape<BaseProps & SvgProps> {
    tag: "svg";
    toDataURL(callback: (data: string) => void, options?: {
        width?: number;
        height?: number;
    }): void;
}
export declare class Symbol extends WebShape<BaseProps & SymbolProps> {
    tag: "symbol";
}
export declare class Text extends WebShape<BaseProps & TextProps> {
    tag: "text";
}
export declare class TSpan extends WebShape<BaseProps & TSpanProps> {
    tag: "tspan";
}
export declare class TextPath extends WebShape<BaseProps & TextPathProps> {
    tag: "textPath";
}
export declare class Use extends WebShape<BaseProps & UseProps> {
    tag: "use";
}
export declare class Mask extends WebShape<BaseProps & MaskProps> {
    tag: "mask";
}
export declare class ForeignObject extends WebShape<BaseProps & ForeignObjectProps> {
    tag: "foreignObject";
}
export declare class Marker extends WebShape<BaseProps & MarkerProps> {
    tag: "marker";
}
export declare class Pattern extends WebShape<BaseProps & PatternProps> {
    tag: "pattern";
}
export default Svg;
//# sourceMappingURL=ReactNativeSVG.web.d.ts.map