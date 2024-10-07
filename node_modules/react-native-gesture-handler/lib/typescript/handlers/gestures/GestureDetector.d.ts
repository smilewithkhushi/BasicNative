import React from 'react';
import { GestureType, HandlerCallbacks } from './gesture';
import { SharedValue } from './reanimatedWrapper';
import { UserSelect, TouchAction } from '../gestureHandlerCommon';
import { ComposedGesture } from './gestureComposition';
export type GestureConfigReference = {
    config: GestureType[];
    animatedEventHandler: unknown;
    animatedHandlers: SharedValue<HandlerCallbacks<Record<string, unknown>>[] | null> | null;
    firstExecution: boolean;
    useReanimatedHook: boolean;
};
interface GestureDetectorProps {
    /**
     * A gesture object containing the configuration and callbacks.
     * Can be any of:
     * - base gestures (`Tap`, `Pan`, ...)
     * - `ComposedGesture` (`Race`, `Simultaneous`, `Exclusive`)
     */
    gesture: ComposedGesture | GestureType;
    children?: React.ReactNode;
    /**
     * #### Web only
     * This parameter allows to specify which `userSelect` property should be applied to underlying view.
     * Possible values are `"none" | "auto" | "text"`. Default value is set to `"none"`.
     */
    userSelect?: UserSelect;
    /**
     * #### Web only
     * Specifies whether context menu should be enabled after clicking on underlying view with right mouse button.
     * Default value is set to `false`.
     */
    enableContextMenu?: boolean;
    /**
     * #### Web only
     * This parameter allows to specify which `touchAction` property should be applied to underlying view.
     * Supports all CSS touch-action values (e.g. `"none"`, `"pan-y"`). Default value is set to `"none"`.
     */
    touchAction?: TouchAction;
}
/**
 * `GestureDetector` is responsible for creating and updating native gesture handlers based on the config of provided gesture.
 *
 * ### Props
 * - `gesture`
 * - `userSelect` (**Web only**)
 * - `enableContextMenu` (**Web only**)
 * - `touchAction` (**Web only**)
 *
 * ### Remarks
 * - Gesture Detector will use first native view in its subtree to recognize gestures, however if this view is used only to group its children it may get automatically collapsed.
 * - Using the same instance of a gesture across multiple Gesture Detectors is not possible.
 *
 * @see https://docs.swmansion.com/react-native-gesture-handler/docs/gestures/gesture-detector
 */
export declare const GestureDetector: (props: GestureDetectorProps) => React.JSX.Element;
export {};
