import { Platform } from 'react-native';
import setColor from 'color';
import { grey400, grey800, grey50, grey700, white, black } from '../../styles/themes/v2/colors';
const getCheckedColor = _ref => {
  let {
    theme,
    color
  } = _ref;
  if (color) {
    return color;
  }
  if (theme.isV3) {
    return theme.colors.primary;
  }
  return theme.colors.accent;
};
const getThumbTintColor = _ref2 => {
  let {
    theme,
    disabled,
    value,
    checkedColor
  } = _ref2;
  const isIOS = Platform.OS === 'ios';
  if (isIOS) {
    return undefined;
  }
  if (disabled) {
    if (theme.dark) {
      return grey800;
    }
    return grey400;
  }
  if (value) {
    return checkedColor;
  }
  if (theme.dark) {
    return grey400;
  }
  return grey50;
};
const getOnTintColor = _ref3 => {
  let {
    theme,
    disabled,
    value,
    checkedColor
  } = _ref3;
  const isIOS = Platform.OS === 'ios';
  if (isIOS) {
    return checkedColor;
  }
  if (disabled) {
    if (theme.dark) {
      if (theme.isV3) {
        return setColor(white).alpha(0.06).rgb().string();
      }
      return setColor(white).alpha(0.1).rgb().string();
    }
    return setColor(black).alpha(0.12).rgb().string();
  }
  if (value) {
    return setColor(checkedColor).alpha(0.5).rgb().string();
  }
  if (theme.dark) {
    return grey700;
  }
  return 'rgb(178, 175, 177)';
};
export const getSwitchColor = _ref4 => {
  let {
    theme,
    disabled,
    value,
    color
  } = _ref4;
  const checkedColor = getCheckedColor({
    theme,
    color
  });
  return {
    onTintColor: getOnTintColor({
      theme,
      disabled,
      value,
      checkedColor
    }),
    thumbTintColor: getThumbTintColor({
      theme,
      disabled,
      value,
      checkedColor
    }),
    checkedColor
  };
};
//# sourceMappingURL=utils.js.map