/// <reference types="react" />
declare const Appbar: (({ children, dark, style, mode, elevated, safeAreaInsets, theme: themeOverrides, ...rest }: import("./Appbar").Props) => import("react").JSX.Element) & {
    Content: {
        ({ color: titleColor, subtitle, subtitleStyle, onPress, disabled, style, titleRef, titleStyle, title, titleMaxFontSizeMultiplier, mode, theme: themeOverrides, testID, ...rest }: import("./AppbarContent").Props): import("react").JSX.Element;
        displayName: string;
    };
    Action: import("../../utils/forwardRef").ForwardRefComponent<import("react-native").View, import("./AppbarAction").Props>;
    BackAction: import("../../utils/forwardRef").ForwardRefComponent<import("react-native").View, import("./AppbarBackAction").Props>;
    Header: {
        ({ statusBarHeight, style, dark, mode, elevated, theme: themeOverrides, testID, ...rest }: import("./AppbarHeader").Props): import("react").JSX.Element;
        displayName: string;
    };
};
export default Appbar;
//# sourceMappingURL=index.d.ts.map