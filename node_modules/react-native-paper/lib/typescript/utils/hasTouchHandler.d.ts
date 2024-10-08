import type { GestureResponderEvent } from 'react-native';
declare const touchableEvents: readonly ["onPress", "onLongPress", "onPressIn", "onPressOut"];
declare type TouchableEventObject = Partial<Record<(typeof touchableEvents)[number], (event: GestureResponderEvent) => void>>;
export default function hasTouchHandler(touchableEventObject: TouchableEventObject): boolean;
export {};
//# sourceMappingURL=hasTouchHandler.d.ts.map