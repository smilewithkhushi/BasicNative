/// <reference types="react" />
declare const Checkbox: (({ theme: themeOverrides, ...props }: import("./Checkbox").Props) => import("react").JSX.Element) & {
    Item: {
        ({ style, status, label, onPress, onLongPress, labelStyle, theme: themeOverrides, testID, mode, position, accessibilityLabel, disabled, labelVariant, labelMaxFontSizeMultiplier, rippleColor, background, ...props }: import("./CheckboxItem").Props): import("react").JSX.Element;
        displayName: string;
    };
    Android: {
        ({ status, theme: themeOverrides, disabled, onPress, testID, ...rest }: import("./CheckboxAndroid").Props): import("react").JSX.Element;
        displayName: string;
    };
    IOS: {
        ({ status, disabled, onPress, theme: themeOverrides, testID, ...rest }: import("./CheckboxIOS").Props): import("react").JSX.Element;
        displayName: string;
    };
};
export default Checkbox;
//# sourceMappingURL=index.d.ts.map