import color from 'color';
import { black, white } from '../../styles/themes/v2/colors';
export const getCardCoverStyle = _ref => {
  let {
    theme,
    index,
    total,
    borderRadiusStyles
  } = _ref;
  const {
    isV3,
    roundness
  } = theme;
  if (Object.keys(borderRadiusStyles).length > 0) {
    return {
      borderRadius: 3 * roundness,
      ...borderRadiusStyles
    };
  }
  if (isV3) {
    return {
      borderRadius: 3 * roundness
    };
  }
  if (index === 0) {
    if (total === 1) {
      return {
        borderRadius: roundness
      };
    }
    return {
      borderTopLeftRadius: roundness,
      borderTopRightRadius: roundness
    };
  }
  if (typeof total === 'number' && index === total - 1) {
    return {
      borderBottomLeftRadius: roundness
    };
  }
  return undefined;
};
const getBorderColor = _ref2 => {
  let {
    theme
  } = _ref2;
  if (theme.isV3) {
    return theme.colors.outline;
  }
  if (theme.dark) {
    return color(white).alpha(0.12).rgb().string();
  }
  return color(black).alpha(0.12).rgb().string();
};
const getBackgroundColor = _ref3 => {
  let {
    theme,
    isMode
  } = _ref3;
  if (theme.isV3) {
    if (isMode('contained')) {
      return theme.colors.surfaceVariant;
    }
    if (isMode('outlined')) {
      return theme.colors.surface;
    }
  }
  return undefined;
};
export const getCardColors = _ref4 => {
  let {
    theme,
    mode
  } = _ref4;
  const isMode = modeToCompare => {
    return mode === modeToCompare;
  };
  return {
    backgroundColor: getBackgroundColor({
      theme,
      isMode
    }),
    borderColor: getBorderColor({
      theme
    })
  };
};
//# sourceMappingURL=utils.js.map