import * as React from 'react';
import { StyleProp, TextStyle } from 'react-native';
import type { ThemeProp } from 'src/types';
import Text from './Text';
declare type Props = React.ComponentProps<typeof Text> & {
    alpha?: number;
    family: 'regular' | 'medium' | 'light' | 'thin';
    style?: StyleProp<TextStyle>;
    theme?: ThemeProp;
};
declare const StyledText: ({ alpha, family, style, theme: themeOverrides, ...rest }: Props) => React.JSX.Element;
export default StyledText;
//# sourceMappingURL=StyledText.d.ts.map