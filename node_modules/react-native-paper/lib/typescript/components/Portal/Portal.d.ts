import * as React from 'react';
import type { InternalTheme } from 'src/types';
import PortalHost from './PortalHost';
export declare type Props = {
    /**
     * Content of the `Portal`.
     */
    children: React.ReactNode;
    /**
     * @optional
     */
    theme: InternalTheme;
};
/**
 * Portal allows rendering a component at a different place in the parent tree.
 * You can use it to render content which should appear above other elements, similar to `Modal`.
 * It requires a [`Portal.Host`](PortalHost) component to be rendered somewhere in the parent tree.
 * Note that if you're using the `Provider` component, this already includes a `Portal.Host`.
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { Portal, Text } from 'react-native-paper';
 *
 * const MyComponent = () => (
 *   <Portal>
 *     <Text>This is rendered at a different place</Text>
 *   </Portal>
 * );
 *
 * export default MyComponent;
 * ```
 */
declare class Portal extends React.Component<Props> {
    static Host: typeof PortalHost;
    render(): React.JSX.Element;
}
declare const _default: React.ComponentType<Pick<Props, "children"> & {
    theme?: import("@callstack/react-theme-provider").$DeepPartial<unknown> | undefined;
}> & import("@callstack/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<React.ComponentType<Props> & typeof Portal, {}>;
export default _default;
//# sourceMappingURL=Portal.d.ts.map