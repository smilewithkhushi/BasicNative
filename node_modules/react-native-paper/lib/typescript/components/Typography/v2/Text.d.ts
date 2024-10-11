import * as React from 'react';
import { StyleProp, Text as NativeText, TextStyle } from 'react-native';
import type { MD2Theme } from 'src/types';
declare type Props = React.ComponentProps<typeof NativeText> & {
    style?: StyleProp<TextStyle>;
    /**
     * @optional
     */
    theme?: MD2Theme;
};
declare const _default: import("../../../utils/forwardRef").ForwardRefComponent<{}, Props>;
export default _default;
//# sourceMappingURL=Text.d.ts.map