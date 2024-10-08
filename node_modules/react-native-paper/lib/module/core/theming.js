import { createTheming } from '@callstack/react-theme-provider';
import color from 'color';
import { MD2DarkTheme, MD2LightTheme, MD3DarkTheme, MD3LightTheme } from '../styles/themes';
export const DefaultTheme = MD3LightTheme;
export const {
  ThemeProvider,
  withTheme,
  useTheme: useAppTheme
} = createTheming(MD3LightTheme);
export function useTheme(overrides) {
  return useAppTheme(overrides);
}
export const useInternalTheme = themeOverrides => useAppTheme(themeOverrides);
export const withInternalTheme = WrappedComponent => withTheme(WrappedComponent);
export const defaultThemesByVersion = {
  2: {
    light: MD2LightTheme,
    dark: MD2DarkTheme
  },
  3: {
    light: MD3LightTheme,
    dark: MD3DarkTheme
  }
};
export const getTheme = function () {
  let isDark = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  let isV3 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  const themeVersion = isV3 ? 3 : 2;
  const scheme = isDark ? 'dark' : 'light';
  return defaultThemesByVersion[themeVersion][scheme];
};

// eslint-disable-next-line no-redeclare

// eslint-disable-next-line no-redeclare

// eslint-disable-next-line no-redeclare

// eslint-disable-next-line no-redeclare
export function adaptNavigationTheme(themes) {
  const {
    reactNavigationLight,
    reactNavigationDark,
    materialLight,
    materialDark
  } = themes;
  const getAdaptedTheme = (navigationTheme, MD3Theme) => {
    return {
      ...navigationTheme,
      colors: {
        ...navigationTheme.colors,
        primary: MD3Theme.colors.primary,
        background: MD3Theme.colors.background,
        card: MD3Theme.colors.elevation.level2,
        text: MD3Theme.colors.onSurface,
        border: MD3Theme.colors.outline,
        notification: MD3Theme.colors.error
      }
    };
  };
  const MD3Themes = {
    light: materialLight || MD3LightTheme,
    dark: materialDark || MD3DarkTheme
  };
  if (reactNavigationLight && reactNavigationDark) {
    const modes = ['light', 'dark'];
    const NavigationThemes = {
      light: reactNavigationLight,
      dark: reactNavigationDark
    };
    const {
      light: adaptedLight,
      dark: adaptedDark
    } = modes.reduce((prev, curr) => {
      return {
        ...prev,
        [curr]: getAdaptedTheme(NavigationThemes[curr], MD3Themes[curr])
      };
    }, {
      light: reactNavigationLight,
      dark: reactNavigationDark
    });
    return {
      LightTheme: adaptedLight,
      DarkTheme: adaptedDark
    };
  }
  if (reactNavigationDark) {
    return {
      DarkTheme: getAdaptedTheme(reactNavigationDark, MD3Themes.dark)
    };
  }
  return {
    LightTheme: getAdaptedTheme(reactNavigationLight, MD3Themes.light)
  };
}
export const getDynamicThemeElevations = scheme => {
  const elevationValues = ['transparent', 0.05, 0.08, 0.11, 0.12, 0.14];
  return elevationValues.reduce((elevations, elevationValue, index) => {
    return {
      ...elevations,
      [`level${index}`]: index === 0 ? elevationValue : color(scheme.surface).mix(color(scheme.primary), elevationValue).rgb().string()
    };
  }, {});
};
//# sourceMappingURL=theming.js.map