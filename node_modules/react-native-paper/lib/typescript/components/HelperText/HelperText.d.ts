import * as React from 'react';
import { StyleProp, TextStyle } from 'react-native';
import type { $Omit, ThemeProp } from '../../types';
import AnimatedText from '../Typography/AnimatedText';
export declare type Props = $Omit<$Omit<React.ComponentPropsWithRef<typeof AnimatedText>, 'padding'>, 'type'> & {
    /**
     * Type of the helper text.
     */
    type: 'error' | 'info';
    /**
     * Text content of the HelperText.
     */
    children: React.ReactNode;
    /**
     * Whether to display the helper text.
     */
    visible?: boolean;
    /**
     * Whether to apply padding to the helper text.
     */
    padding?: 'none' | 'normal';
    /**
     * Whether the text input tied with helper text is disabled.
     */
    disabled?: boolean;
    style?: StyleProp<TextStyle>;
    /**
     * @optional
     */
    theme?: ThemeProp;
    /**
     * TestID used for testing purposes
     */
    testID?: string;
};
/**
 * Helper text is used in conjuction with input elements to provide additional hints for the user.
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { View } from 'react-native';
 * import { HelperText, TextInput } from 'react-native-paper';
 *
 * const MyComponent = () => {
 *   const [text, setText] = React.useState('');
 *
 *    const onChangeText = text => setText(text);
 *
 *   const hasErrors = () => {
 *     return !text.includes('@');
 *   };
 *
 *  return (
 *     <View>
 *       <TextInput label="Email" value={text} onChangeText={onChangeText} />
 *       <HelperText type="error" visible={hasErrors()}>
 *         Email address is invalid!
 *       </HelperText>
 *     </View>
 *   );
 * };
 *
 * export default MyComponent;
 * ```
 */
declare const HelperText: ({ style, type, visible, theme: themeOverrides, onLayout, padding, disabled, ...rest }: Props) => React.JSX.Element;
export default HelperText;
//# sourceMappingURL=HelperText.d.ts.map