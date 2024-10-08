"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ThemeProvider = exports.DefaultTheme = void 0;
exports.adaptNavigationTheme = adaptNavigationTheme;
exports.useInternalTheme = exports.useAppTheme = exports.getTheme = exports.getDynamicThemeElevations = exports.defaultThemesByVersion = void 0;
exports.useTheme = useTheme;
exports.withTheme = exports.withInternalTheme = void 0;
var _reactThemeProvider = require("@callstack/react-theme-provider");
var _color = _interopRequireDefault(require("color"));
var _themes = require("../styles/themes");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const DefaultTheme = _themes.MD3LightTheme;
exports.DefaultTheme = DefaultTheme;
const {
  ThemeProvider,
  withTheme,
  useTheme: useAppTheme
} = (0, _reactThemeProvider.createTheming)(_themes.MD3LightTheme);
exports.useAppTheme = useAppTheme;
exports.withTheme = withTheme;
exports.ThemeProvider = ThemeProvider;
function useTheme(overrides) {
  return useAppTheme(overrides);
}
const useInternalTheme = themeOverrides => useAppTheme(themeOverrides);
exports.useInternalTheme = useInternalTheme;
const withInternalTheme = WrappedComponent => withTheme(WrappedComponent);
exports.withInternalTheme = withInternalTheme;
const defaultThemesByVersion = {
  2: {
    light: _themes.MD2LightTheme,
    dark: _themes.MD2DarkTheme
  },
  3: {
    light: _themes.MD3LightTheme,
    dark: _themes.MD3DarkTheme
  }
};
exports.defaultThemesByVersion = defaultThemesByVersion;
const getTheme = function () {
  let isDark = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  let isV3 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  const themeVersion = isV3 ? 3 : 2;
  const scheme = isDark ? 'dark' : 'light';
  return defaultThemesByVersion[themeVersion][scheme];
};

// eslint-disable-next-line no-redeclare

// eslint-disable-next-line no-redeclare

// eslint-disable-next-line no-redeclare
exports.getTheme = getTheme;
// eslint-disable-next-line no-redeclare
function adaptNavigationTheme(themes) {
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
    light: materialLight || _themes.MD3LightTheme,
    dark: materialDark || _themes.MD3DarkTheme
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
const getDynamicThemeElevations = scheme => {
  const elevationValues = ['transparent', 0.05, 0.08, 0.11, 0.12, 0.14];
  return elevationValues.reduce((elevations, elevationValue, index) => {
    return {
      ...elevations,
      [`level${index}`]: index === 0 ? elevationValue : (0, _color.default)(scheme.surface).mix((0, _color.default)(scheme.primary), elevationValue).rgb().string()
    };
  }, {});
};
exports.getDynamicThemeElevations = getDynamicThemeElevations;
//# sourceMappingURL=theming.js.map