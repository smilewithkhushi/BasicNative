import React from 'react';
import { StyleSheet } from 'react-native';
import overlay from '../../styles/overlay';
import { black, white } from '../../styles/themes/v2/colors';
const borderStyleProperties = ['borderRadius', 'borderTopLeftRadius', 'borderTopRightRadius', 'borderBottomRightRadius', 'borderBottomLeftRadius'];
export const getAppbarBackgroundColor = (theme, elevation, customBackground, elevated) => {
  const {
    isV3,
    dark: isDarkTheme,
    mode,
    colors
  } = theme;
  const isAdaptiveMode = mode === 'adaptive';
  if (customBackground) {
    return customBackground;
  }
  if (!isV3) {
    if (isDarkTheme && isAdaptiveMode) {
      return overlay(elevation, colors === null || colors === void 0 ? void 0 : colors.surface);
    }
    return colors.primary;
  }
  if (elevated) {
    return theme.colors.elevation.level2;
  }
  return colors.surface;
};
export const getAppbarColor = _ref => {
  let {
    color,
    isDark,
    isV3
  } = _ref;
  if (typeof color !== 'undefined') {
    return color;
  }
  if (isDark) {
    return white;
  }
  if (isV3) {
    return undefined;
  }
  return black;
};
export const getAppbarBorders = style => {
  const borders = {};
  for (const property of borderStyleProperties) {
    const value = style[property];
    if (value) {
      borders[property] = value;
    }
  }
  return borders;
};
export const DEFAULT_APPBAR_HEIGHT = 56;
const MD3_DEFAULT_APPBAR_HEIGHT = 64;
export const modeAppbarHeight = {
  small: MD3_DEFAULT_APPBAR_HEIGHT,
  medium: 112,
  large: 152,
  'center-aligned': MD3_DEFAULT_APPBAR_HEIGHT
};
export const modeTextVariant = {
  small: 'titleLarge',
  medium: 'headlineSmall',
  large: 'headlineMedium',
  'center-aligned': 'titleLarge'
};
export const renderAppbarContent = _ref2 => {
  let {
    children,
    isDark,
    shouldCenterContent = false,
    isV3,
    renderOnly,
    renderExcept,
    mode = 'small',
    theme
  } = _ref2;
  return React.Children.toArray(children).filter(child => child != null && typeof child !== 'boolean').filter(child =>
  // @ts-expect-error: TypeScript complains about the type of type but it doesn't matter
  renderExcept ? !renderExcept.includes(child.type.displayName) : child).filter(child =>
  // @ts-expect-error: TypeScript complains about the type of type but it doesn't matter
  renderOnly ? renderOnly.includes(child.type.displayName) : child).map((child, i) => {
    if (! /*#__PURE__*/React.isValidElement(child) || !['Appbar.Content', 'Appbar.Action', 'Appbar.BackAction', 'Tooltip'].includes(
    // @ts-expect-error: TypeScript complains about the type of type but it doesn't matter
    child.type.displayName)) {
      return child;
    }
    const props = {
      theme,
      color: getAppbarColor({
        color: child.props.color,
        isDark,
        isV3
      })
    };

    // @ts-expect-error: TypeScript complains about the type of type but it doesn't matter
    if (child.type.displayName === 'Appbar.Content') {
      props.mode = mode;
      props.style = [isV3 ? i === 0 && !shouldCenterContent && styles.v3Spacing : i !== 0 && styles.v2Spacing, shouldCenterContent && styles.centerAlignedContent, child.props.style];
      props.color;
    }
    return /*#__PURE__*/React.cloneElement(child, props);
  });
};
const styles = StyleSheet.create({
  centerAlignedContent: {
    alignItems: 'center'
  },
  v2Spacing: {
    marginLeft: 8
  },
  v3Spacing: {
    marginLeft: 12
  }
});
//# sourceMappingURL=utils.js.map