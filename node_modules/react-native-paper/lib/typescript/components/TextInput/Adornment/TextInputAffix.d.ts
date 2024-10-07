import React from 'react';
import { Animated, GestureResponderEvent, LayoutChangeEvent, StyleProp, TextStyle } from 'react-native';
import { AdornmentSide } from './enums';
import type { ThemeProp } from '../../../types';
export declare type Props = {
    /**
     * Text to show.
     */
    text: string;
    onLayout?: (event: LayoutChangeEvent) => void;
    /**
     * Function to execute on press.
     */
    onPress?: (e: GestureResponderEvent) => void;
    /**
     * Accessibility label for the affix. This is read by the screen reader when the user taps the affix.
     */
    accessibilityLabel?: string;
    /**
     * Style that is passed to the Text element.
     */
    textStyle?: StyleProp<TextStyle>;
    /**
     * @optional
     */
    theme?: ThemeProp;
};
declare type ContextState = {
    topPosition: number | null;
    onLayout?: (event: LayoutChangeEvent) => void;
    visible?: Animated.Value;
    textStyle?: StyleProp<TextStyle>;
    side: AdornmentSide;
    paddingHorizontal?: number | string;
    maxFontSizeMultiplier?: number | undefined | null;
    testID?: string;
    disabled?: boolean;
};
declare const AffixAdornment: React.FunctionComponent<{
    affix: React.ReactNode;
    testID: string;
} & ContextState>;
/**
 * A component to render a leading / trailing text in the TextInput
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { TextInput } from 'react-native-paper';
 *
 * const MyComponent = () => {
 *   const [text, setText] = React.useState('');
 *
 *   return (
 *     <TextInput
 *       mode="outlined"
 *       label="Outlined input"
 *       placeholder="Type something"
 *       right={<TextInput.Affix text="/100" />}
 *     />
 *   );
 * };
 *
 * export default MyComponent;
 * ```
 */
declare const TextInputAffix: {
    ({ text, textStyle: labelStyle, theme: themeOverrides, onLayout: onTextLayout, onPress, accessibilityLabel, }: Props): React.JSX.Element;
    displayName: string;
};
export default TextInputAffix;
export { TextInputAffix, AffixAdornment };
//# sourceMappingURL=TextInputAffix.d.ts.map