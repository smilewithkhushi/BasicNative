import type { ComponentType } from 'react';
import { $DeepPartial } from '@callstack/react-theme-provider';
import type { InternalTheme, MD3Theme, MD3AndroidColors, NavigationTheme } from '../types';
export declare const DefaultTheme: MD3Theme;
export declare const ThemeProvider: ComponentType<{
    children: import("react").ReactNode;
    theme?: unknown;
}>, withTheme: <Props extends {
    theme: unknown;
}, C>(WrappedComponent: ComponentType<Props> & C) => ComponentType<import("@callstack/react-theme-provider").$Without<Props, "theme"> & {
    theme?: $DeepPartial<unknown> | undefined;
}> & import("@callstack/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<ComponentType<Props> & C, {}>, useAppTheme: <T = unknown>(overrides?: $DeepPartial<T> | undefined) => T;
export declare function useTheme<T = MD3Theme>(overrides?: $DeepPartial<T>): T;
export declare const useInternalTheme: (themeOverrides: $DeepPartial<InternalTheme> | undefined) => InternalTheme;
export declare const withInternalTheme: <Props extends {
    theme: InternalTheme;
}, C>(WrappedComponent: ComponentType<Props & {
    theme: InternalTheme;
}> & C) => ComponentType<import("@callstack/react-theme-provider").$Without<Props, "theme"> & {
    theme?: $DeepPartial<unknown> | undefined;
}> & import("@callstack/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<ComponentType<Props> & C, {}>;
export declare const defaultThemesByVersion: {
    2: {
        light: import("../types").MD2Theme;
        dark: import("../types").MD2Theme;
    };
    3: {
        light: MD3Theme;
        dark: MD3Theme;
    };
};
export declare const getTheme: <Scheme extends boolean = false, IsVersion3 extends boolean = true>(isDark?: Scheme, isV3?: IsVersion3) => {
    2: {
        light: import("../types").MD2Theme;
        dark: import("../types").MD2Theme;
    };
    3: {
        light: MD3Theme;
        dark: MD3Theme;
    };
}[IsVersion3 extends true ? 3 : 2][Scheme extends true ? "dark" : "light"];
export declare function adaptNavigationTheme(themes: {
    reactNavigationLight: NavigationTheme;
    materialLight?: MD3Theme;
}): {
    LightTheme: NavigationTheme;
};
export declare function adaptNavigationTheme(themes: {
    reactNavigationDark: NavigationTheme;
    materialDark?: MD3Theme;
}): {
    DarkTheme: NavigationTheme;
};
export declare function adaptNavigationTheme(themes: {
    reactNavigationLight: NavigationTheme;
    reactNavigationDark: NavigationTheme;
    materialLight?: MD3Theme;
    materialDark?: MD3Theme;
}): {
    LightTheme: NavigationTheme;
    DarkTheme: NavigationTheme;
};
export declare const getDynamicThemeElevations: (scheme: MD3AndroidColors) => {};
//# sourceMappingURL=theming.d.ts.map