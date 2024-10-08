import * as React from 'react';
import { Animated, LayoutRectangle, ScrollViewProps, StyleProp, ViewStyle } from 'react-native';
import type { $Omit, InternalTheme, MD3Elevation } from '../../types';
import { ElevationLevels } from '../../types';
export declare type Props = {
    /**
     * Whether the Menu is currently visible.
     */
    visible: boolean;
    /**
     * The anchor to open the menu from. In most cases, it will be a button that opens the menu.
     */
    anchor: React.ReactNode | {
        x: number;
        y: number;
    };
    /**
     * Whether the menu should open at the top of the anchor or at its bottom.
     * Applied only when anchor is a node, not an x/y position.
     */
    anchorPosition?: 'top' | 'bottom';
    /**
     * Extra margin to add at the top of the menu to account for translucent status bar on Android.
     * If you are using Expo, we assume translucent status bar and set a height for status bar automatically.
     * Pass `0` or a custom value to and customize it.
     * This is automatically handled on iOS.
     */
    statusBarHeight?: number;
    /**
     * Callback called when Menu is dismissed. The `visible` prop needs to be updated when this is called.
     */
    onDismiss?: () => void;
    /**
     * Accessibility label for the overlay. This is read by the screen reader when the user taps outside the menu.
     */
    overlayAccessibilityLabel?: string;
    /**
     * Content of the `Menu`.
     */
    children: React.ReactNode;
    /**
     * Style of menu's inner content.
     */
    contentStyle?: Animated.WithAnimatedValue<StyleProp<ViewStyle>>;
    style?: StyleProp<ViewStyle>;
    /**
     * Elevation level of the menu's content. Shadow styles are calculated based on this value. Default `backgroundColor` is taken from the corresponding `theme.colors.elevation` property. By default equals `2`.
     * @supported Available in v5.x with theme version 3
     */
    elevation?: MD3Elevation;
    /**
     * @optional
     */
    theme: InternalTheme;
    /**
     * Inner ScrollView prop
     */
    keyboardShouldPersistTaps?: ScrollViewProps['keyboardShouldPersistTaps'];
    /**
     * testID to be used on tests.
     */
    testID?: string;
};
declare type Layout = $Omit<$Omit<LayoutRectangle, 'x'>, 'y'>;
declare type State = {
    rendered: boolean;
    top: number;
    left: number;
    menuLayout: Layout;
    anchorLayout: Layout;
    opacityAnimation: Animated.Value;
    scaleAnimation: Animated.ValueXY;
    windowLayout: Layout;
};
export declare const ELEVATION_LEVELS_MAP: ElevationLevels[];
/**
 * Menus display a list of choices on temporary elevated surfaces. Their placement varies based on the element that opens them.
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { View } from 'react-native';
 * import { Button, Menu, Divider, PaperProvider } from 'react-native-paper';
 *
 * const MyComponent = () => {
 *   const [visible, setVisible] = React.useState(false);
 *
 *   const openMenu = () => setVisible(true);
 *
 *   const closeMenu = () => setVisible(false);
 *
 *   return (
 *     <PaperProvider>
 *       <View
 *         style={{
 *           paddingTop: 50,
 *           flexDirection: 'row',
 *           justifyContent: 'center',
 *         }}>
 *         <Menu
 *           visible={visible}
 *           onDismiss={closeMenu}
 *           anchor={<Button onPress={openMenu}>Show menu</Button>}>
 *           <Menu.Item onPress={() => {}} title="Item 1" />
 *           <Menu.Item onPress={() => {}} title="Item 2" />
 *           <Divider />
 *           <Menu.Item onPress={() => {}} title="Item 3" />
 *         </Menu>
 *       </View>
 *     </PaperProvider>
 *   );
 * };
 *
 * export default MyComponent;
 * ```
 *
 * ### Note
 * When using `Menu` within a React Native's `Modal` component, you need to wrap all
 * `Modal` contents within a `PaperProvider` in order for the menu to show. This
 * wrapping is not necessary if you use Paper's `Modal` instead.
 */
declare class Menu extends React.Component<Props, State> {
    static Item: {
        ({ leadingIcon, trailingIcon, dense, title, disabled, background, onPress, style, contentStyle, titleStyle, rippleColor: customRippleColor, testID, accessibilityLabel, accessibilityState, theme: themeOverrides, titleMaxFontSizeMultiplier, }: import("./MenuItem").Props): React.JSX.Element;
        displayName: string;
    };
    static defaultProps: {
        statusBarHeight: any;
        overlayAccessibilityLabel: string;
        testID: string;
    };
    static getDerivedStateFromProps(nextProps: Props, prevState: State): {
        rendered: boolean;
    } | null;
    state: {
        rendered: boolean;
        top: number;
        left: number;
        menuLayout: {
            width: number;
            height: number;
        };
        anchorLayout: {
            width: number;
            height: number;
        };
        opacityAnimation: Animated.Value;
        scaleAnimation: Animated.ValueXY;
        windowLayout: {
            width: number;
            height: number;
        };
    };
    componentDidMount(): void;
    componentDidUpdate(prevProps: Props): void;
    componentWillUnmount(): void;
    private anchor?;
    private menu?;
    private backHandlerSubscription;
    private dimensionsSubscription;
    private keyboardDidShowListener;
    private keyboardDidHideListener;
    private keyboardHeight;
    private isCoordinate;
    private measureMenuLayout;
    private measureAnchorLayout;
    private updateVisibility;
    private isBrowser;
    private focusFirstDOMNode;
    private handleDismiss;
    private handleKeypress;
    private attachListeners;
    private removeListeners;
    private show;
    private hide;
    private keyboardDidShow;
    private keyboardDidHide;
    render(): React.JSX.Element;
}
declare const _default: React.ComponentType<Pick<Props, "style" | "children" | "anchor" | "visible" | "elevation" | "testID" | "contentStyle" | "keyboardShouldPersistTaps" | "anchorPosition" | "statusBarHeight" | "onDismiss" | "overlayAccessibilityLabel"> & {
    theme?: import("@callstack/react-theme-provider").$DeepPartial<unknown> | undefined;
}> & import("@callstack/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<React.ComponentType<Props> & typeof Menu, {}>;
export default _default;
//# sourceMappingURL=Menu.d.ts.map