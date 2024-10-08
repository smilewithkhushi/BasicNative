function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { useInternalTheme } from '../../core/theming';
/**
 * A component to show a list of actions inside a Card.
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { Card, Button } from 'react-native-paper';
 *
 * const MyComponent = () => (
 *   <Card>
 *     <Card.Actions>
 *       <Button>Cancel</Button>
 *       <Button>Ok</Button>
 *     </Card.Actions>
 *   </Card>
 * );
 *
 * export default MyComponent;
 * ```
 */
const CardActions = props => {
  const {
    isV3
  } = useInternalTheme(props.theme);
  const justifyContent = isV3 ? 'flex-end' : 'flex-start';
  return /*#__PURE__*/React.createElement(View, _extends({}, props, {
    style: [styles.container, props.style, {
      justifyContent
    }]
  }), React.Children.map(props.children, (child, i) => {
    return /*#__PURE__*/React.isValidElement(child) ? /*#__PURE__*/React.cloneElement(child, {
      compact: !isV3 && child.props.compact !== false,
      mode: child.props.mode || isV3 && (i === 0 ? 'outlined' : 'contained'),
      style: [isV3 && styles.button, child.props.style]
    }) : child;
  }));
};
CardActions.displayName = 'Card.Actions';
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8
  },
  button: {
    marginLeft: 8
  }
});
export default CardActions;
//# sourceMappingURL=CardActions.js.map