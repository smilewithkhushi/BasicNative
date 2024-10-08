function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from 'react';
import { Platform, StyleSheet } from 'react-native';
import color from 'color';
import { Pressable } from './Pressable';
import { getTouchableRippleColors } from './utils';
import { SettingsContext } from '../../core/settings';
import { useInternalTheme } from '../../core/theming';
import { forwardRef } from '../../utils/forwardRef';
import hasTouchHandler from '../../utils/hasTouchHandler';
/**
 * A wrapper for views that should respond to touches.
 * Provides a material "ink ripple" interaction effect for supported platforms (>= Android Lollipop).
 * On unsupported platforms, it falls back to a highlight effect.
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { View } from 'react-native';
 * import { Text, TouchableRipple } from 'react-native-paper';
 *
 * const MyComponent = () => (
 *   <TouchableRipple
 *     onPress={() => console.log('Pressed')}
 *     rippleColor="rgba(0, 0, 0, .32)"
 *   >
 *     <Text>Press anywhere</Text>
 *   </TouchableRipple>
 * );
 *
 * export default MyComponent;
 * ```
 *
 * @extends Pressable props https://reactnative.dev/docs/Pressable#props
 */
const TouchableRipple = (_ref, ref) => {
  let {
    style,
    background: _background,
    borderless = false,
    disabled: disabledProp,
    rippleColor,
    underlayColor: _underlayColor,
    children,
    theme: themeOverrides,
    ...rest
  } = _ref;
  const theme = useInternalTheme(themeOverrides);
  const {
    calculatedRippleColor
  } = getTouchableRippleColors({
    theme,
    rippleColor
  });
  const hoverColor = color(calculatedRippleColor).fade(0.5).rgb().string();
  const {
    rippleEffectEnabled
  } = React.useContext(SettingsContext);
  const {
    onPress,
    onLongPress,
    onPressIn,
    onPressOut
  } = rest;
  const handlePressIn = React.useCallback(e => {
    onPressIn === null || onPressIn === void 0 ? void 0 : onPressIn(e);
    if (rippleEffectEnabled) {
      const {
        centered
      } = rest;
      const button = e.currentTarget;
      const style = window.getComputedStyle(button);
      const dimensions = button.getBoundingClientRect();
      let touchX;
      let touchY;
      const {
        changedTouches,
        touches
      } = e.nativeEvent;
      const touch = (touches === null || touches === void 0 ? void 0 : touches[0]) ?? (changedTouches === null || changedTouches === void 0 ? void 0 : changedTouches[0]);

      // If centered or it was pressed using keyboard - enter or space
      if (centered || !touch) {
        touchX = dimensions.width / 2;
        touchY = dimensions.height / 2;
      } else {
        touchX = touch.locationX ?? e.pageX;
        touchY = touch.locationY ?? e.pageY;
      }

      // Get the size of the button to determine how big the ripple should be
      const size = centered ?
      // If ripple is always centered, we don't need to make it too big
      Math.min(dimensions.width, dimensions.height) * 1.25 :
      // Otherwise make it twice as big so clicking on one end spreads ripple to other
      Math.max(dimensions.width, dimensions.height) * 2;

      // Create a container for our ripple effect so we don't need to change the parent's style
      const container = document.createElement('span');
      container.setAttribute('data-paper-ripple', '');
      Object.assign(container.style, {
        position: 'absolute',
        pointerEvents: 'none',
        top: '0',
        left: '0',
        right: '0',
        bottom: '0',
        borderTopLeftRadius: style.borderTopLeftRadius,
        borderTopRightRadius: style.borderTopRightRadius,
        borderBottomRightRadius: style.borderBottomRightRadius,
        borderBottomLeftRadius: style.borderBottomLeftRadius,
        overflow: centered ? 'visible' : 'hidden'
      });

      // Create span to show the ripple effect
      const ripple = document.createElement('span');
      Object.assign(ripple.style, {
        position: 'absolute',
        pointerEvents: 'none',
        backgroundColor: calculatedRippleColor,
        borderRadius: '50%',
        /* Transition configuration */
        transitionProperty: 'transform opacity',
        transitionDuration: `${Math.min(size * 1.5, 350)}ms`,
        transitionTimingFunction: 'linear',
        transformOrigin: 'center',
        /* We'll animate these properties */
        transform: 'translate3d(-50%, -50%, 0) scale3d(0.1, 0.1, 0.1)',
        opacity: '0.5',
        // Position the ripple where cursor was
        left: `${touchX}px`,
        top: `${touchY}px`,
        width: `${size}px`,
        height: `${size}px`
      });

      // Finally, append it to DOM
      container.appendChild(ripple);
      button.appendChild(container);

      // rAF runs in the same frame as the event handler
      // Use double rAF to ensure the transition class is added in next frame
      // This will make sure that the transition animation is triggered
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          Object.assign(ripple.style, {
            transform: 'translate3d(-50%, -50%, 0) scale3d(1, 1, 1)',
            opacity: '1'
          });
        });
      });
    }
  }, [onPressIn, rest, rippleEffectEnabled, calculatedRippleColor]);
  const handlePressOut = React.useCallback(e => {
    onPressOut === null || onPressOut === void 0 ? void 0 : onPressOut(e);
    if (rippleEffectEnabled) {
      const containers = e.currentTarget.querySelectorAll('[data-paper-ripple]');
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          containers.forEach(container => {
            const ripple = container.firstChild;
            Object.assign(ripple.style, {
              transitionDuration: '250ms',
              opacity: 0
            });

            // Finally remove the span after the transition
            setTimeout(() => {
              const {
                parentNode
              } = container;
              if (parentNode) {
                parentNode.removeChild(container);
              }
            }, 500);
          });
        });
      });
    }
  }, [onPressOut, rippleEffectEnabled]);
  const hasPassedTouchHandler = hasTouchHandler({
    onPress,
    onLongPress,
    onPressIn,
    onPressOut
  });
  const disabled = disabledProp || !hasPassedTouchHandler;
  return /*#__PURE__*/React.createElement(Pressable, _extends({}, rest, {
    ref: ref,
    onPressIn: handlePressIn,
    onPressOut: handlePressOut,
    disabled: disabled,
    style: state => [styles.touchable, borderless && styles.borderless,
    // focused state is not ready yet: https://github.com/necolas/react-native-web/issues/1849
    // state.focused && { backgroundColor: ___ },
    state.hovered && {
      backgroundColor: hoverColor
    }, typeof style === 'function' ? style(state) : style]
  }), state => React.Children.only(typeof children === 'function' ? children(state) : children));
};

/**
 * Whether ripple effect is supported.
 */
TouchableRipple.supported = true;
const styles = StyleSheet.create({
  touchable: {
    position: 'relative',
    ...(Platform.OS === 'web' && {
      cursor: 'pointer',
      transition: '150ms background-color'
    })
  },
  borderless: {
    overflow: 'hidden'
  }
});
const Component = forwardRef(TouchableRipple);
export default Component;
//# sourceMappingURL=TouchableRipple.js.map