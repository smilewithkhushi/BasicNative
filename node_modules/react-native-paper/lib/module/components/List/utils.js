import { StyleSheet } from 'react-native';
import color from 'color';
export const getLeftStyles = (alignToTop, description, isV3) => {
  const stylesV3 = {
    marginRight: 0,
    marginLeft: 16,
    alignSelf: alignToTop ? 'flex-start' : 'center'
  };
  if (!description) {
    return {
      ...styles.iconMarginLeft,
      ...styles.marginVerticalNone,
      ...(isV3 && {
        ...stylesV3
      })
    };
  }
  if (!isV3) {
    return styles.iconMarginLeft;
  }
  return {
    ...styles.iconMarginLeft,
    ...stylesV3
  };
};
export const getRightStyles = (alignToTop, description, isV3) => {
  const stylesV3 = {
    marginLeft: 16,
    alignSelf: alignToTop ? 'flex-start' : 'center'
  };
  if (!description) {
    return {
      ...styles.iconMarginRight,
      ...styles.marginVerticalNone,
      ...(isV3 && {
        ...stylesV3
      })
    };
  }
  if (!isV3) {
    return styles.iconMarginRight;
  }
  return {
    ...styles.iconMarginRight,
    ...stylesV3
  };
};
const styles = StyleSheet.create({
  marginVerticalNone: {
    marginVertical: 0
  },
  iconMarginLeft: {
    marginLeft: 0,
    marginRight: 16
  },
  iconMarginRight: {
    marginRight: 0
  }
});
export const getAccordionColors = _ref => {
  var _theme$colors;
  let {
    theme,
    isExpanded,
    customRippleColor
  } = _ref;
  const titleColor = theme.isV3 ? theme.colors.onSurface : color(theme.colors.text).alpha(0.87).rgb().string();
  const descriptionColor = theme.isV3 ? theme.colors.onSurfaceVariant : color(theme.colors.text).alpha(0.54).rgb().string();
  const titleTextColor = isExpanded ? (_theme$colors = theme.colors) === null || _theme$colors === void 0 ? void 0 : _theme$colors.primary : titleColor;
  const rippleColor = customRippleColor || color(titleTextColor).alpha(0.12).rgb().string();
  return {
    titleColor,
    descriptionColor,
    titleTextColor,
    rippleColor
  };
};
//# sourceMappingURL=utils.js.map