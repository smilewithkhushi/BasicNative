import * as React from 'react';
import { AccessibilityInfo, Appearance } from 'react-native';
import SafeAreaProviderCompat from './SafeAreaProviderCompat';
import { Provider as SettingsProvider } from './settings';
import { defaultThemesByVersion, ThemeProvider } from './theming';
import MaterialCommunityIcon from '../components/MaterialCommunityIcon';
import PortalHost from '../components/Portal/PortalHost';
import { addEventListener } from '../utils/addEventListener';
const PaperProvider = props => {
  const isOnlyVersionInTheme = props.theme && Object.keys(props.theme).length === 1 && props.theme.version;
  const colorSchemeName = (!props.theme || isOnlyVersionInTheme) && (Appearance === null || Appearance === void 0 ? void 0 : Appearance.getColorScheme()) || 'light';
  const [reduceMotionEnabled, setReduceMotionEnabled] = React.useState(false);
  const [colorScheme, setColorScheme] = React.useState(colorSchemeName);
  const handleAppearanceChange = preferences => {
    const {
      colorScheme
    } = preferences;
    setColorScheme(colorScheme);
  };
  React.useEffect(() => {
    let subscription;
    if (!props.theme) {
      subscription = addEventListener(AccessibilityInfo, 'reduceMotionChanged', setReduceMotionEnabled);
    }
    return () => {
      if (!props.theme) {
        var _subscription;
        (_subscription = subscription) === null || _subscription === void 0 ? void 0 : _subscription.remove();
      }
    };
  }, [props.theme]);
  React.useEffect(() => {
    let appearanceSubscription;
    if (!props.theme || isOnlyVersionInTheme) {
      appearanceSubscription = Appearance === null || Appearance === void 0 ? void 0 : Appearance.addChangeListener(handleAppearanceChange);
    }
    return () => {
      if (!props.theme || isOnlyVersionInTheme) {
        if (appearanceSubscription) {
          appearanceSubscription.remove();
        } else {
          // @ts-expect-error: We keep deprecated listener remove method for backwards compat with old RN versions
          Appearance === null || Appearance === void 0 ? void 0 : Appearance.removeChangeListener(handleAppearanceChange);
        }
      }
    };
  }, [props.theme, isOnlyVersionInTheme]);
  const getTheme = () => {
    var _props$theme, _props$theme2;
    const themeVersion = ((_props$theme = props.theme) === null || _props$theme === void 0 ? void 0 : _props$theme.version) || 3;
    const scheme = colorScheme || 'light';
    const defaultThemeBase = defaultThemesByVersion[themeVersion][scheme];
    const extendedThemeBase = {
      ...defaultThemeBase,
      ...props.theme,
      version: themeVersion,
      animation: {
        ...((_props$theme2 = props.theme) === null || _props$theme2 === void 0 ? void 0 : _props$theme2.animation),
        scale: reduceMotionEnabled ? 0 : 1
      }
    };
    return {
      ...extendedThemeBase,
      isV3: extendedThemeBase.version === 3
    };
  };
  const {
    children,
    settings
  } = props;
  return /*#__PURE__*/React.createElement(SafeAreaProviderCompat, null, /*#__PURE__*/React.createElement(PortalHost, null, /*#__PURE__*/React.createElement(SettingsProvider, {
    value: {
      icon: MaterialCommunityIcon,
      rippleEffectEnabled: true,
      ...settings
    }
  }, /*#__PURE__*/React.createElement(ThemeProvider, {
    theme: getTheme()
  }, children))));
};
export default PaperProvider;
//# sourceMappingURL=PaperProvider.js.map