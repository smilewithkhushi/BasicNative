import color from 'color';
import { black, white } from '../../styles/themes/v2/colors';
export const MIN_WIDTH = 112;
export const MAX_WIDTH = 280;
const getDisabledColor = theme => {
  if (theme.isV3) {
    return theme.colors.onSurfaceDisabled;
  }
  return color(theme.dark ? white : black).alpha(0.32).rgb().string();
};
const getTitleColor = _ref => {
  let {
    theme,
    disabled
  } = _ref;
  if (disabled) {
    return getDisabledColor(theme);
  }
  if (theme.isV3) {
    return theme.colors.onSurface;
  }
  return color(theme.colors.text).alpha(0.87).rgb().string();
};
const getIconColor = _ref2 => {
  let {
    theme,
    disabled
  } = _ref2;
  if (disabled) {
    return getDisabledColor(theme);
  }
  if (theme.isV3) {
    return theme.colors.onSurfaceVariant;
  }
  return color(theme.colors.text).alpha(0.54).rgb().string();
};
const getRippleColor = _ref3 => {
  let {
    theme,
    customRippleColor
  } = _ref3;
  if (customRippleColor) {
    return customRippleColor;
  }
  if (theme.isV3) {
    return color(theme.colors.onSurfaceVariant).alpha(0.12).rgb().string();
  }
  return undefined;
};
export const getMenuItemColor = _ref4 => {
  let {
    theme,
    disabled,
    customRippleColor
  } = _ref4;
  return {
    titleColor: getTitleColor({
      theme,
      disabled
    }),
    iconColor: getIconColor({
      theme,
      disabled
    }),
    rippleColor: getRippleColor({
      theme,
      customRippleColor
    })
  };
};
export const getContentMaxWidth = _ref5 => {
  let {
    isV3,
    iconWidth,
    leadingIcon,
    trailingIcon
  } = _ref5;
  if (isV3) {
    if (leadingIcon && trailingIcon) {
      return MAX_WIDTH - (2 * iconWidth + 24);
    }
    if (leadingIcon || trailingIcon) {
      return MAX_WIDTH - (iconWidth + 24);
    }
    return MAX_WIDTH - 12;
  }
  if (leadingIcon) {
    return MAX_WIDTH - (iconWidth + 48);
  }
  return MAX_WIDTH - 16;
};
//# sourceMappingURL=utils.js.map