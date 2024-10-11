function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from 'react';
import { Animated, I18nManager, Pressable, StyleSheet } from 'react-native';
import color from 'color';
import { useInternalTheme } from '../../core/theming';
import MaterialCommunityIcon from '../MaterialCommunityIcon';
import Text from '../Typography/Text';
/**
 * A component to display title in table header.
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { DataTable } from 'react-native-paper';
 *
 * const MyComponent = () => (
 *       <DataTable>
 *         <DataTable.Header>
 *           <DataTable.Title
 *             sortDirection='descending'
 *           >
 *             Dessert
 *           </DataTable.Title>
 *           <DataTable.Title numeric>Calories</DataTable.Title>
 *           <DataTable.Title numeric>Fat (g)</DataTable.Title>
 *         </DataTable.Header>
 *       </DataTable>
 * );
 *
 * export default MyComponent;
 * ```
 */

const DataTableTitle = _ref => {
  var _theme$colors;
  let {
    numeric,
    children,
    onPress,
    sortDirection,
    textStyle,
    style,
    theme: themeOverrides,
    numberOfLines = 1,
    maxFontSizeMultiplier,
    ...rest
  } = _ref;
  const theme = useInternalTheme(themeOverrides);
  const {
    current: spinAnim
  } = React.useRef(new Animated.Value(sortDirection === 'ascending' ? 0 : 1));
  React.useEffect(() => {
    Animated.timing(spinAnim, {
      toValue: sortDirection === 'ascending' ? 0 : 1,
      duration: 150,
      useNativeDriver: true
    }).start();
  }, [sortDirection, spinAnim]);
  const textColor = theme.isV3 ? theme.colors.onSurface : theme === null || theme === void 0 || (_theme$colors = theme.colors) === null || _theme$colors === void 0 ? void 0 : _theme$colors.text;
  const alphaTextColor = color(textColor).alpha(0.6).rgb().string();
  const spin = spinAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '180deg']
  });
  const icon = sortDirection ? /*#__PURE__*/React.createElement(Animated.View, {
    style: [styles.icon, {
      transform: [{
        rotate: spin
      }]
    }]
  }, /*#__PURE__*/React.createElement(MaterialCommunityIcon, {
    name: "arrow-up",
    size: 16,
    color: textColor,
    direction: I18nManager.getConstants().isRTL ? 'rtl' : 'ltr'
  })) : null;
  return /*#__PURE__*/React.createElement(Pressable, _extends({
    disabled: !onPress,
    onPress: onPress
  }, rest, {
    style: [styles.container, numeric && styles.right, style]
  }), icon, /*#__PURE__*/React.createElement(Text, {
    style: [styles.cell,
    // height must scale with numberOfLines
    {
      maxHeight: 24 * numberOfLines
    },
    // if numberOfLines causes wrap, center is lost. Align directly, sensitive to numeric and RTL
    numberOfLines > 1 ? numeric ? I18nManager.getConstants().isRTL ? styles.leftText : styles.rightText : styles.centerText : {}, sortDirection ? styles.sorted : {
      color: alphaTextColor
    }, textStyle],
    numberOfLines: numberOfLines,
    maxFontSizeMultiplier: maxFontSizeMultiplier
  }, children));
};
DataTableTitle.displayName = 'DataTable.Title';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignContent: 'center',
    paddingVertical: 12
  },
  rightText: {
    textAlign: 'right'
  },
  leftText: {
    textAlign: 'left'
  },
  centerText: {
    textAlign: 'center'
  },
  right: {
    justifyContent: 'flex-end'
  },
  cell: {
    lineHeight: 24,
    fontSize: 12,
    fontWeight: '500',
    alignItems: 'center'
  },
  sorted: {
    marginLeft: 8
  },
  icon: {
    height: 24,
    justifyContent: 'center'
  }
});
export default DataTableTitle;

// @component-docs ignore-next-line
export { DataTableTitle };
//# sourceMappingURL=DataTableTitle.js.map