import type { GestureResponderEvent } from 'react-native';
export declare const handlePress: ({ onPress, value, onValueChange, event, }: {
    onPress?: ((e: GestureResponderEvent) => void) | undefined;
    value: string;
    onValueChange?: ((value: string) => void) | undefined;
    event: GestureResponderEvent;
}) => void;
export declare const isChecked: ({ value, status, contextValue, }: {
    value: string;
    status?: "checked" | "unchecked" | undefined;
    contextValue?: string | undefined;
}) => "checked" | "unchecked" | undefined;
//# sourceMappingURL=utils.d.ts.map