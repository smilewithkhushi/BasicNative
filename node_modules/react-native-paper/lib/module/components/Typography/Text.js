function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from 'react';
import { I18nManager, StyleSheet, Text as NativeText } from 'react-native';
import AnimatedText from './AnimatedText';
import StyledText from './v2/StyledText';
import { useInternalTheme } from '../../core/theming';
import { forwardRef } from '../../utils/forwardRef';
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
  const theme = useInternalTheme(initialTheme);
  const writingDirection = I18nManager.getConstants().isRTL ? 'rtl' : 'ltr';
  React.useImperativeHandle(ref, () => ({
    setNativeProps: args => {
      var _root$current;
      return (_root$current = root.current) === null || _root$current === void 0 ? void 0 : _root$current.setNativeProps(args);
    }
  }));
  if (theme.isV3 && variant) {
    let font = theme.fonts[variant];
    let textStyle = [font, style];
    if ( /*#__PURE__*/React.isValidElement(rest.children) && (rest.children.type === Component || rest.children.type === AnimatedText || rest.children.type === StyledText)) {
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
    return /*#__PURE__*/React.createElement(NativeText, _extends({
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
    return /*#__PURE__*/React.createElement(NativeText, _extends({}, rest, {
      ref: root,
      style: [styles.text, textStyle, {
        writingDirection
      }, style]
    }));
  }
};
const styles = StyleSheet.create({
  text: {
    textAlign: 'left'
  }
});
const Component = forwardRef(Text);
export const customText = () => Component;
export default Component;
//# sourceMappingURL=Text.js.map