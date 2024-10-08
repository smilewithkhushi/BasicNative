"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var React = _interopRequireWildcard(require("react"));
var _reactNative = require("react-native");
var _theming = require("../../../core/theming");
var _forwardRef = require("../../../utils/forwardRef");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
// @component-group Typography
/**
 * Text component which follows styles from the theme.
 *
 * @extends Text props https://reactnative.dev/docs/text#props
 */
const Text = (_ref, ref) => {
  var _theme$fonts, _theme$colors;
  let {
    style,
    theme: overrideTheme,
    ...rest
  } = _ref;
  const root = React.useRef(null);
  const theme = (0, _theming.useInternalTheme)(overrideTheme);
  React.useImperativeHandle(ref, () => ({
    setNativeProps: args => {
      var _root$current;
      return (_root$current = root.current) === null || _root$current === void 0 ? void 0 : _root$current.setNativeProps(args);
    }
  }));
  return /*#__PURE__*/React.createElement(_reactNative.Text, _extends({}, rest, {
    ref: root,
    style: [{
      ...(!theme.isV3 && ((_theme$fonts = theme.fonts) === null || _theme$fonts === void 0 ? void 0 : _theme$fonts.regular)),
      color: theme.isV3 ? (_theme$colors = theme.colors) === null || _theme$colors === void 0 ? void 0 : _theme$colors.onSurface : theme.colors.text
    }, styles.text, style]
  }));
};
const styles = _reactNative.StyleSheet.create({
  text: {
    textAlign: 'left'
  }
});
var _default = (0, _forwardRef.forwardRef)(Text);
exports.default = _default;
//# sourceMappingURL=Text.js.map