import { PlatformOSType } from 'react-native';
import type { Fonts, MD3Type, MD3Typescale, MD3TypescaleKey } from '../types';
export declare const fontConfig: {
    web: {
        regular: {
            fontFamily: string;
            fontWeight: "400";
        };
        medium: {
            fontFamily: string;
            fontWeight: "500";
        };
        light: {
            fontFamily: string;
            fontWeight: "300";
        };
        thin: {
            fontFamily: string;
            fontWeight: "100";
        };
    };
    ios: {
        regular: {
            fontFamily: string;
            fontWeight: "400";
        };
        medium: {
            fontFamily: string;
            fontWeight: "500";
        };
        light: {
            fontFamily: string;
            fontWeight: "300";
        };
        thin: {
            fontFamily: string;
            fontWeight: "100";
        };
    };
    default: {
        regular: {
            fontFamily: string;
            fontWeight: "normal";
        };
        medium: {
            fontFamily: string;
            fontWeight: "normal";
        };
        light: {
            fontFamily: string;
            fontWeight: "normal";
        };
        thin: {
            fontFamily: string;
            fontWeight: "normal";
        };
    };
};
declare type MD2FontsConfig = {
    [platform in PlatformOSType | 'default']?: Fonts;
};
export default function configureFonts(params: {
    isV3: false;
}): Fonts;
export default function configureFonts(params: {
    config?: MD2FontsConfig;
    isV3: false;
}): Fonts;
export default function configureFonts(params?: {
    config?: Partial<MD3Type>;
    isV3?: true;
}): MD3Typescale;
export default function configureFonts(params?: {
    config?: Partial<Record<MD3TypescaleKey, Partial<MD3Type>>>;
    isV3?: true;
}): MD3Typescale;
export default function configureFonts(params: {
    config: Record<string, MD3Type>;
    isV3?: true;
}): MD3Typescale & {
    [key: string]: MD3Type;
};
export {};
//# sourceMappingURL=fonts.d.ts.map