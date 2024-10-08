import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { useInternalTheme } from '../../core/theming';
import Icon from '../Icon';
const ICON_SIZE = 24;

/**
 * A component to show an icon in a list item.
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { List, MD3Colors } from 'react-native-paper';
 *
 * const MyComponent = () => (
 *   <>
 *     <List.Icon color={MD3Colors.tertiary70} icon="folder" />
 *     <List.Icon color={MD3Colors.tertiary70} icon="equal" />
 *     <List.Icon color={MD3Colors.tertiary70} icon="calendar" />
 *   </>
 * );
 *
 * export default MyComponent;
 * ```
 */
const ListIcon = _ref => {
  let {
    icon,
    color: iconColor,
    style,
    theme: themeOverrides
  } = _ref;
  const theme = useInternalTheme(themeOverrides);
  return /*#__PURE__*/React.createElement(View, {
    style: [theme.isV3 ? styles.itemV3 : styles.item, style],
    pointerEvents: "box-none"
  }, /*#__PURE__*/React.createElement(Icon, {
    source: icon,
    size: ICON_SIZE,
    color: iconColor,
    theme: theme
  }));
};
const styles = StyleSheet.create({
  item: {
    margin: 8,
    height: 40,
    width: 40,
    alignItems: 'center',
    justifyContent: 'center'
  },
  itemV3: {
    alignItems: 'center',
    justifyContent: 'center'
  }
});
ListIcon.displayName = 'List.Icon';
export default ListIcon;
//# sourceMappingURL=ListIcon.js.map