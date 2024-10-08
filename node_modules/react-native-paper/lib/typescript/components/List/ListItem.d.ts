import * as React from 'react';
import { GestureResponderEvent, StyleProp, TextStyle, View, ViewStyle } from 'react-native';
import { Style } from './utils';
import type { $RemoveChildren, EllipsizeProp, ThemeProp } from '../../types';
import TouchableRipple from '../TouchableRipple/TouchableRipple';
declare type Title = React.ReactNode | ((props: {
    selectable: boolean;
    ellipsizeMode: EllipsizeProp | undefined;
    color: string;
    fontSize: number;
}) => React.ReactNode);
declare type Description = React.ReactNode | ((props: {
    selectable: boolean;
    ellipsizeMode: EllipsizeProp | undefined;
    color: string;
    fontSize: number;
}) => React.ReactNode);
export declare type Props = $RemoveChildren<typeof TouchableRipple> & {
    /**
     * Title text for the list item.
     */
    title: Title;
    /**
     * Description text for the list item or callback which returns a React element to display the description.
     */
    description?: Description;
    /**
     * Callback which returns a React element to display on the left side.
     */
    left?: (props: {
        color: string;
        style: Style;
    }) => React.ReactNode;
    /**
     * Callback which returns a React element to display on the right side.
     */
    right?: (props: {
        color: string;
        style?: Style;
    }) => React.ReactNode;
    /**
     * Function to execute on press.
     */
    onPress?: (e: GestureResponderEvent) => void;
    /**
     * @optional
     */
    theme?: ThemeProp;
    /**
     * Style that is passed to the wrapping TouchableRipple element.
     */
    style?: StyleProp<ViewStyle>;
    /**
     * Style that is passed to the container wrapping title and descripton.
     */
    contentStyle?: StyleProp<ViewStyle>;
    /**
     * Style that is passed to Title element.
     */
    titleStyle?: StyleProp<TextStyle>;
    /**
     * Style that is passed to Description element.
     */
    descriptionStyle?: StyleProp<TextStyle>;
    /**
     * Truncate Title text such that the total number of lines does not
     * exceed this number.
     */
    titleNumberOfLines?: number;
    /**
     * Truncate Description text such that the total number of lines does not
     * exceed this number.
     */
    descriptionNumberOfLines?: number;
    /**
     * Ellipsize Mode for the Title.  One of `'head'`, `'middle'`, `'tail'`, `'clip'`.
     *
     * See [`ellipsizeMode`](https://reactnative.dev/docs/text#ellipsizemode)
     */
    titleEllipsizeMode?: EllipsizeProp;
    /**
     * Ellipsize Mode for the Description.  One of `'head'`, `'middle'`, `'tail'`, `'clip'`.
     *
     * See [`ellipsizeMode`](https://reactnative.dev/docs/text#ellipsizemode)
     */
    descriptionEllipsizeMode?: EllipsizeProp;
    /**
     * Specifies the largest possible scale a title font can reach.
     */
    titleMaxFontSizeMultiplier?: number;
    /**
     * Specifies the largest possible scale a description font can reach.
     */
    descriptionMaxFontSizeMultiplier?: number;
    /**
     * TestID used for testing purposes
     */
    testID?: string;
};
declare const Component: import("../../utils/forwardRef").ForwardRefComponent<View, Props>;
export default Component;
//# sourceMappingURL=ListItem.d.ts.map