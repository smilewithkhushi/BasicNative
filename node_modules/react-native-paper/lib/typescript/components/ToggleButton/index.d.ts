/// <reference types="react" />
declare const ToggleButton: import("../../utils/forwardRef").ForwardRefComponent<import("react-native").View, import("./ToggleButton").Props> & {
    Group: {
        <Value = string>({ value, onValueChange, children, }: import("./ToggleButtonGroup").Props<Value>): import("react").JSX.Element;
        displayName: string;
    };
    Row: {
        ({ value, onValueChange, children, style }: import("./ToggleButtonRow").Props): import("react").JSX.Element;
        displayName: string;
    };
};
export default ToggleButton;
//# sourceMappingURL=index.d.ts.map