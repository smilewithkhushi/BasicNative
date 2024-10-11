/// <reference types="react-native/types/modules/codegen" />
import type { ColorValue } from 'react-native';
import type { Double, Float, Int32 } from 'react-native/Libraries/Types/CodegenTypes';
import type { ViewProps } from './utils';
import type { UnsafeMixed } from './codegenUtils';
import { NumberProp } from '../lib/extract/types';
type NativeBackgroundProp = Readonly<{
    type?: string;
    color?: Float;
    borderless?: boolean;
    rippleRadius?: Float;
}>;
type HitSlop = Readonly<{
    left?: Float;
    top?: Float;
    right?: Float;
    bottom?: Float;
}>;
interface NativeProps extends ViewProps {
    bbWidth?: UnsafeMixed<NumberProp>;
    bbHeight?: UnsafeMixed<NumberProp>;
    minX?: Float;
    minY?: Float;
    vbWidth?: Float;
    vbHeight?: Float;
    align?: string;
    meetOrSlice?: Int32;
    tintColor?: ColorValue;
    color?: ColorValue;
    pointerEvents?: string;
    hasTVPreferredFocus?: boolean;
    borderTopEndRadius?: Float;
    borderBottomStartRadius?: Float;
    borderBottomColor?: ColorValue;
    nextFocusDown?: Int32;
    borderRightColor?: ColorValue;
    nextFocusRight?: Int32;
    borderLeftColor?: ColorValue;
    borderColor?: ColorValue;
    removeClippedSubviews?: boolean;
    nextFocusForward?: Int32;
    nextFocusUp?: Int32;
    accessible?: boolean;
    borderStartColor?: ColorValue;
    borderBottomEndRadius?: Float;
    borderEndColor?: ColorValue;
    focusable?: boolean;
    nativeBackgroundAndroid?: NativeBackgroundProp;
    borderTopStartRadius?: Float;
    nativeForegroundAndroid?: NativeBackgroundProp;
    backfaceVisibility?: string;
    borderStyle?: string;
    needsOffscreenAlphaCompositing?: boolean;
    hitSlop?: HitSlop;
    borderTopColor?: ColorValue;
    nextFocusLeft?: Int32;
    borderTopRightRadius?: Double;
    borderBottomRightRadius?: Double;
    borderRadius?: Double;
    borderBottomLeftRadius?: Double;
    borderTopLeftRadius?: Double;
}
declare const _default: import("react-native/Libraries/Utilities/codegenNativeComponent").NativeComponentType<NativeProps>;
export default _default;
//# sourceMappingURL=AndroidSvgViewNativeComponent.d.ts.map