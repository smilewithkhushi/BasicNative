function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from 'react';
import { I18nManager, StyleSheet, View } from 'react-native';
import color from 'color';
import { useInternalTheme } from '../../core/theming';
import Button from '../Button/Button';
import IconButton from '../IconButton/IconButton';
import MaterialCommunityIcon from '../MaterialCommunityIcon';
import Menu from '../Menu/Menu';
import Text from '../Typography/Text';
const PaginationControls = _ref => {
  let {
    page,
    numberOfPages,
    onPageChange,
    showFastPaginationControls,
    theme: themeOverrides,
    paginationControlRippleColor
  } = _ref;
  const theme = useInternalTheme(themeOverrides);
  const textColor = theme.isV3 ? theme.colors.onSurface : theme.colors.text;
  return /*#__PURE__*/React.createElement(React.Fragment, null, showFastPaginationControls ? /*#__PURE__*/React.createElement(IconButton, {
    icon: _ref2 => {
      let {
        size,
        color
      } = _ref2;
      return /*#__PURE__*/React.createElement(MaterialCommunityIcon, {
        name: "page-first",
        color: color,
        size: size,
        direction: I18nManager.getConstants().isRTL ? 'rtl' : 'ltr'
      });
    },
    iconColor: textColor,
    rippleColor: paginationControlRippleColor,
    disabled: page === 0,
    onPress: () => onPageChange(0),
    accessibilityLabel: "page-first",
    theme: theme
  }) : null, /*#__PURE__*/React.createElement(IconButton, {
    icon: _ref3 => {
      let {
        size,
        color
      } = _ref3;
      return /*#__PURE__*/React.createElement(MaterialCommunityIcon, {
        name: "chevron-left",
        color: color,
        size: size,
        direction: I18nManager.getConstants().isRTL ? 'rtl' : 'ltr'
      });
    },
    iconColor: textColor,
    rippleColor: paginationControlRippleColor,
    disabled: page === 0,
    onPress: () => onPageChange(page - 1),
    accessibilityLabel: "chevron-left",
    theme: theme
  }), /*#__PURE__*/React.createElement(IconButton, {
    icon: _ref4 => {
      let {
        size,
        color
      } = _ref4;
      return /*#__PURE__*/React.createElement(MaterialCommunityIcon, {
        name: "chevron-right",
        color: color,
        size: size,
        direction: I18nManager.getConstants().isRTL ? 'rtl' : 'ltr'
      });
    },
    iconColor: textColor,
    rippleColor: paginationControlRippleColor,
    disabled: numberOfPages === 0 || page === numberOfPages - 1,
    onPress: () => onPageChange(page + 1),
    accessibilityLabel: "chevron-right",
    theme: theme
  }), showFastPaginationControls ? /*#__PURE__*/React.createElement(IconButton, {
    icon: _ref5 => {
      let {
        size,
        color
      } = _ref5;
      return /*#__PURE__*/React.createElement(MaterialCommunityIcon, {
        name: "page-last",
        color: color,
        size: size,
        direction: I18nManager.getConstants().isRTL ? 'rtl' : 'ltr'
      });
    },
    iconColor: textColor,
    rippleColor: paginationControlRippleColor,
    disabled: numberOfPages === 0 || page === numberOfPages - 1,
    onPress: () => onPageChange(numberOfPages - 1),
    accessibilityLabel: "page-last",
    theme: theme
  }) : null);
};
const PaginationDropdown = _ref6 => {
  let {
    numberOfItemsPerPageList,
    numberOfItemsPerPage,
    onItemsPerPageChange,
    theme: themeOverrides,
    selectPageDropdownRippleColor,
    dropdownItemRippleColor
  } = _ref6;
  const theme = useInternalTheme(themeOverrides);
  const {
    colors
  } = theme;
  const [showSelect, toggleSelect] = React.useState(false);
  return /*#__PURE__*/React.createElement(Menu, {
    visible: showSelect,
    onDismiss: () => toggleSelect(!showSelect),
    theme: theme,
    anchor: /*#__PURE__*/React.createElement(Button, {
      mode: "outlined",
      onPress: () => toggleSelect(true),
      style: styles.button,
      icon: "menu-down",
      contentStyle: styles.contentStyle,
      theme: theme,
      rippleColor: selectPageDropdownRippleColor
    }, `${numberOfItemsPerPage}`)
  }, numberOfItemsPerPageList === null || numberOfItemsPerPageList === void 0 ? void 0 : numberOfItemsPerPageList.map(option => /*#__PURE__*/React.createElement(Menu.Item, {
    key: option,
    titleStyle: option === numberOfItemsPerPage && {
      color: colors === null || colors === void 0 ? void 0 : colors.primary
    },
    onPress: () => {
      onItemsPerPageChange === null || onItemsPerPageChange === void 0 ? void 0 : onItemsPerPageChange(option);
      toggleSelect(false);
    },
    rippleColor: dropdownItemRippleColor,
    title: option,
    theme: theme
  })));
};

/**
 * A component to show pagination for data table.
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { DataTable } from 'react-native-paper';
 *
 * const numberOfItemsPerPageList = [2, 3, 4];
 *
 * const items = [
 *   {
 *     key: 1,
 *     name: 'Page 1',
 *   },
 *   {
 *     key: 2,
 *     name: 'Page 2',
 *   },
 *   {
 *     key: 3,
 *     name: 'Page 3',
 *   },
 * ];
 *
 * const MyComponent = () => {
 *   const [page, setPage] = React.useState(0);
 *   const [numberOfItemsPerPage, onItemsPerPageChange] = React.useState(numberOfItemsPerPageList[0]);
 *   const from = page * numberOfItemsPerPage;
 *   const to = Math.min((page + 1) * numberOfItemsPerPage, items.length);
 *
 *   React.useEffect(() => {
 *      setPage(0);
 *   }, [numberOfItemsPerPage]);
 *
 *   return (
 *     <DataTable>
 *       <DataTable.Pagination
 *         page={page}
 *         numberOfPages={Math.ceil(items.length / numberOfItemsPerPage)}
 *         onPageChange={page => setPage(page)}
 *         label={`${from + 1}-${to} of ${items.length}`}
 *         showFastPaginationControls
 *         numberOfItemsPerPageList={numberOfItemsPerPageList}
 *         numberOfItemsPerPage={numberOfItemsPerPage}
 *         onItemsPerPageChange={onItemsPerPageChange}
 *         selectPageDropdownLabel={'Rows per page'}
 *       />
 *     </DataTable>
 *   );
 * };
 *
 * export default MyComponent;
 * ```
 */
const DataTablePagination = _ref7 => {
  let {
    label,
    accessibilityLabel,
    page,
    numberOfPages,
    onPageChange,
    style,
    showFastPaginationControls = false,
    numberOfItemsPerPageList,
    numberOfItemsPerPage,
    onItemsPerPageChange,
    selectPageDropdownLabel,
    selectPageDropdownAccessibilityLabel,
    selectPageDropdownRippleColor,
    dropdownItemRippleColor,
    theme: themeOverrides,
    ...rest
  } = _ref7;
  const theme = useInternalTheme(themeOverrides);
  const labelColor = color(theme.isV3 ? theme.colors.onSurface : theme === null || theme === void 0 ? void 0 : theme.colors.text).alpha(0.6).rgb().string();
  return /*#__PURE__*/React.createElement(View, _extends({}, rest, {
    style: [styles.container, style],
    accessibilityLabel: "pagination-container"
  }), numberOfItemsPerPageList && numberOfItemsPerPage && onItemsPerPageChange && /*#__PURE__*/React.createElement(View, {
    accessibilityLabel: "Options Select",
    style: styles.optionsContainer
  }, /*#__PURE__*/React.createElement(Text, {
    style: [styles.label, {
      color: labelColor
    }],
    numberOfLines: 3,
    accessibilityLabel: selectPageDropdownAccessibilityLabel || 'selectPageDropdownLabel'
  }, selectPageDropdownLabel), /*#__PURE__*/React.createElement(PaginationDropdown, {
    numberOfItemsPerPageList: numberOfItemsPerPageList,
    numberOfItemsPerPage: numberOfItemsPerPage,
    onItemsPerPageChange: onItemsPerPageChange,
    selectPageDropdownRippleColor: selectPageDropdownRippleColor,
    dropdownItemRippleColor: dropdownItemRippleColor,
    theme: theme
  })), /*#__PURE__*/React.createElement(Text, {
    style: [styles.label, {
      color: labelColor
    }],
    numberOfLines: 3,
    accessibilityLabel: accessibilityLabel || 'label'
  }, label), /*#__PURE__*/React.createElement(View, {
    style: styles.iconsContainer
  }, /*#__PURE__*/React.createElement(PaginationControls, {
    showFastPaginationControls: showFastPaginationControls,
    onPageChange: onPageChange,
    page: page,
    numberOfPages: numberOfPages,
    theme: theme
  })));
};
DataTablePagination.displayName = 'DataTable.Pagination';
const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-end',
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 16,
    flexWrap: 'wrap'
  },
  optionsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 6
  },
  label: {
    fontSize: 12,
    marginRight: 16
  },
  button: {
    textAlign: 'center',
    marginRight: 16
  },
  iconsContainer: {
    flexDirection: 'row'
  },
  contentStyle: {
    flexDirection: 'row-reverse'
  }
});
export default DataTablePagination;

// @component-docs ignore-next-line
export { DataTablePagination };
//# sourceMappingURL=DataTablePagination.js.map