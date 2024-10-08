import * as React from 'react';
import { Role } from 'react-native';
export declare type IconProps = {
    name: string;
    color?: string;
    size: number;
    direction: 'rtl' | 'ltr';
    allowFontScaling?: boolean;
    testID?: string;
};
declare type AccessibilityProps = {
    role?: Role;
    focusable?: boolean;
} | {
    accessibilityElementsHidden?: boolean;
    importantForAccessibility?: 'auto' | 'yes' | 'no' | 'no-hide-descendants';
};
export declare const accessibilityProps: AccessibilityProps;
declare const defaultIcon: ({ name, color, size, direction, allowFontScaling, testID, }: IconProps) => React.JSX.Element;
export default defaultIcon;
//# sourceMappingURL=MaterialCommunityIcon.d.ts.map