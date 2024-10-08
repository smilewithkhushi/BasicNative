"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.customText = void 0;
var React = _interopRequireWildcard(require("react"));
var _reactNative = require("react-native");
var _AnimatedText = _interopRequireDefault(require("./AnimatedText"));
var _StyledText = _interopRequireDefault(require("./v2/StyledText"));
var _theming = require("../../core/theming");
var _forwardRef = require("../../utils/forwardRef");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
// @component-group Typography
/**
 * Typography component showing styles complied with passed `variant` prop and supported by the type system.
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { Text } from 'react-native-paper';
 *
 * const MyComponent = () => (
 *   <>
 *     <Text variant="displayLarge">Display Large</Text>
 *     <Text variant="displayMedium">Display Medium</Text>
 *     <Text variant="displaySmall">Display small</Text>
 *
 *     <Text variant="headlineLarge">Headline Large</Text>
 *     <Text variant="headlineMedium">Headline Medium</Text>
 *     <Text variant="headlineSmall">Headline Small</Text>
 *
 *     <Text variant="titleLarge">Title Large</Text>
 *     <Text variant="titleMedium">Title Medium</Text>
 *     <Text variant="titleSmall">Title Small</Text>
 *
 *     <Text variant="bodyLarge">Body Large</Text>
 *     <Text variant="bodyMedium">Body Medium</Text>
 *     <Text variant="bodySmall">Body Small</Text>
 *
 *     <Text variant="labelLarge">Label Large</Text>
 *     <Text variant="labelMedium">Label Medium</Text>
 *     <Text variant="labelSmall">Label Small</Text>
 *  </>
 * );
 *
 * export default MyComponent;
 * ```
 *
 * @extends Text props https://reactnative.dev/docs/text#props
 */
const Text = (_ref, ref) => {
  let {
    style,
    variant,
    theme: initialTheme,
    ...rest
  } = _ref;
  const root = React.useRef(null);
  // FIXME: destructure it in TS 4.6+
  const theme = (0, _theming.useInternalTheme)(initialTheme);
  const writingDirection = _reactNative.I18nManager.getConstants().isRTL ? 'rtl' : 'ltr';
  React.useImperativeHandle(ref, () => ({
    setNativeProps: args => {
      var _root$current;
      return (_root$current = root.current) === null || _root$current === void 0 ? void 0 : _root$current.setNativeProps(args);
    }
  }));
  if (theme.isV3 && variant) {
    let font = theme.fonts[variant];
    let textStyle = [font, style];
    if ( /*#__PURE__*/React.isValidElement(rest.children) && (rest.children.type === Component || rest.children.type === _AnimatedText.default || rest.children.type === _StyledText.default)) {
      const {
        props
      } = rest.children;

      // Context:   Some components have the built-in `Text` component with a predefined variant,
      //            that also accepts `children` as a `React.Node`. This can result in a situation,
      //            where another `Text` component is rendered within the built-in `Text` component.
      //            By doing that, we assume that user doesn't want to consume pre-defined font properties.
      // Case one:  Nested `Text` has different `variant` that specified in parent. For example:
      //              <Chip>
      //                <Text variant="displayMedium">Nested</Text>
      //              </Chip>
      // Solution:  To address the following scenario, the code below overrides the `variant`
      //            specified in a parent in favor of children's variant:
      if (props.variant) {
        font = theme.fonts[props.variant];
        textStyle = [style, font];
      }

      // Case two:  Nested `Text` has specified `styles` which intefere
      //            with font properties, from the parent's `variant`. For example:
      //              <Chip>
      //                <Text style={{fontSize: 30}}>Nested</Text>
      //              </Chip>
      // Solution:  To address the following scenario, the code below overrides the
      //            parent's style with children's style:
      if (!props.variant) {
        textStyle = [style, props.style];
      }
    }
    if (typeof font !== 'object') {
      throw new Error(`Variant ${variant} was not provided properly. Valid variants are ${Object.keys(theme.fonts).join(', ')}.`);
    }
    return /*#__PURE__*/React.createElement(_reactNative.Text, _extends({
      ref: root,
      style: [styles.text, {
        writingDirection,
        color: theme.colors.onSurface
      }, textStyle]
    }, rest));
  } else {
    var _theme$fonts, _theme$colors;
    const font = theme.isV3 ? theme.fonts.default : (_theme$fonts = theme.fonts) === null || _theme$fonts === void 0 ? void 0 : _theme$fonts.regular;
    const textStyle = {
      ...font,
      color: theme.isV3 ? (_theme$colors = theme.colors) === null || _theme$colors === void 0 ? void 0 : _theme$colors.onSurface : theme.colors.text
    };
    return /*#__PURE__*/React.createElement(_reactNative.Text, _extends({}, rest, {
      ref: root,
      style: [styles.text, textStyle, {
        writingDirection
      }, style]
    }));
  }
};
const styles = _reactNative.StyleSheet.create({
  text: {
    textAlign: 'left'
  }
});
const Component = (0, _forwardRef.forwardRef)(Text);
const customText = () => Component;
exports.customText = customText;
var _default = Component;
exports.default = _default;
//# sourceMappingURL=Text.js.map