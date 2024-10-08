function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from 'react';
import AppbarAction from './AppbarAction';
import AppbarBackIcon from './AppbarBackIcon';
import { forwardRef } from '../../utils/forwardRef';
/**
 * A component used to display a back button in the appbar.
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { Appbar } from 'react-native-paper';
 *
 * const MyComponent = () => (
 *     <Appbar.Header>
 *       <Appbar.BackAction onPress={() => {}} />
 *     </Appbar.Header>
 * );
 *
 * export default MyComponent;
 * ```
 */
const AppbarBackAction = forwardRef((_ref, ref) => {
  let {
    accessibilityLabel = 'Back',
    ...rest
  } = _ref;
  return /*#__PURE__*/React.createElement(AppbarAction, _extends({
    accessibilityLabel: accessibilityLabel
  }, rest, {
    icon: AppbarBackIcon,
    isLeading: true,
    ref: ref
  }));
});
AppbarBackAction.displayName = 'Appbar.BackAction';
export default AppbarBackAction;

// @component-docs ignore-next-line
export { AppbarBackAction };
//# sourceMappingURL=AppbarBackAction.js.map