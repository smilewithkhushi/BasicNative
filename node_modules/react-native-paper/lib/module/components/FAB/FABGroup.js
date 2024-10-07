import * as React from 'react';
import { Animated, Pressable, StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import FAB from './FAB';
import { getFABGroupColors } from './utils';
import { useInternalTheme } from '../../core/theming';
import Card from '../Card/Card';
import Text from '../Typography/Text';
const AnimatedPressable = Animated.createAnimatedComponent(Pressable);
/**
 * A component to display a stack of FABs with related actions in a speed dial.
 * To render the group above other components, you'll need to wrap it with the [`Portal`](../Portal) component.
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { FAB, Portal, PaperProvider } from 'react-native-paper';
 *
 * const MyComponent = () => {
 *   const [state, setState] = React.useState({ open: false });
 *
 *   const onStateChange = ({ open }) => setState({ open });
 *
 *   const { open } = state;
 *
 *   return (
 *     <PaperProvider>
 *       <Portal>
 *         <FAB.Group
 *           open={open}
 *           visible
 *           icon={open ? 'calendar-today' : 'plus'}
 *           actions={[
 *             { icon: 'plus', onPress: () => console.log('Pressed add') },
 *             {
 *               icon: 'star',
 *               label: 'Star',
 *               onPress: () => console.log('Pressed star'),
 *             },
 *             {
 *               icon: 'email',
 *               label: 'Email',
 *               onPress: () => console.log('Pressed email'),
 *             },
 *             {
 *               icon: 'bell',
 *               label: 'Remind',
 *               onPress: () => console.log('Pressed notifications'),
 *             },
 *           ]}
 *           onStateChange={onStateChange}
 *           onPress={() => {
 *             if (open) {
 *               // do something if the speed dial is open
 *             }
 *           }}
 *         />
 *       </Portal>
 *     </PaperProvider>
 *   );
 * };
 *
 * export default MyComponent;
 * ```
 */
const FABGroup = _ref => {
  let {
    actions,
    icon,
    open,
    onPress,
    onLongPress,
    toggleStackOnLongPress,
    accessibilityLabel,
    theme: themeOverrides,
    style,
    fabStyle,
    visible,
    label,
    testID,
    onStateChange,
    color: colorProp,
    delayLongPress = 200,
    variant = 'primary',
    enableLongPressWhenStackOpened = false,
    backdropColor: customBackdropColor,
    rippleColor
  } = _ref;
  const theme = useInternalTheme(themeOverrides);
  const {
    current: backdrop
  } = React.useRef(new Animated.Value(0));
  const animations = React.useRef(actions.map(() => new Animated.Value(open ? 1 : 0)));
  const [prevActions, setPrevActions] = React.useState(null);
  const {
    scale
  } = theme.animation;
  const {
    isV3
  } = theme;
  React.useEffect(() => {
    if (open) {
      Animated.parallel([Animated.timing(backdrop, {
        toValue: 1,
        duration: 250 * scale,
        useNativeDriver: true
      }), Animated.stagger(isV3 ? 15 : 50 * scale, animations.current.map(animation => Animated.timing(animation, {
        toValue: 1,
        duration: 150 * scale,
        useNativeDriver: true
      })).reverse())]).start();
    } else {
      Animated.parallel([Animated.timing(backdrop, {
        toValue: 0,
        duration: 200 * scale,
        useNativeDriver: true
      }), ...animations.current.map(animation => Animated.timing(animation, {
        toValue: 0,
        duration: 150 * scale,
        useNativeDriver: true
      }))]).start();
    }
  }, [open, actions, backdrop, scale, isV3]);
  const close = () => onStateChange({
    open: false
  });
  const toggle = () => onStateChange({
    open: !open
  });
  const {
    labelColor,
    backdropColor,
    stackedFABBackgroundColor
  } = getFABGroupColors({
    theme,
    customBackdropColor
  });
  const backdropOpacity = open ? backdrop.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: [0, 1, 1]
  }) : backdrop;
  const opacities = animations.current;
  const scales = opacities.map(opacity => open ? opacity.interpolate({
    inputRange: [0, 1],
    outputRange: [0.5, 1]
  }) : 1);
  const translations = opacities.map(opacity => open ? opacity.interpolate({
    inputRange: [0, 1],
    outputRange: [24, -8]
  }) : -8);
  const labelTranslations = opacities.map(opacity => open ? opacity.interpolate({
    inputRange: [0, 1],
    outputRange: [8, -8]
  }) : -8);
  const {
    top,
    bottom,
    right,
    left
  } = useSafeAreaInsets();
  const containerPaddings = {
    paddingBottom: bottom,
    paddingRight: right,
    paddingLeft: left,
    paddingTop: top
  };
  if (actions.length !== (prevActions === null || prevActions === void 0 ? void 0 : prevActions.length)) {
    animations.current = actions.map((_, i) => animations.current[i] || new Animated.Value(open ? 1 : 0));
    setPrevActions(actions);
  }
  return /*#__PURE__*/React.createElement(View, {
    pointerEvents: "box-none",
    style: [styles.container, containerPaddings, style]
  }, /*#__PURE__*/React.createElement(AnimatedPressable, {
    accessibilityRole: "button",
    onPress: close,
    pointerEvents: open ? 'auto' : 'none',
    style: [styles.backdrop, {
      opacity: backdropOpacity,
      backgroundColor: backdropColor
    }]
  }), /*#__PURE__*/React.createElement(View, {
    pointerEvents: "box-none",
    style: styles.safeArea
  }, /*#__PURE__*/React.createElement(View, {
    pointerEvents: open ? 'box-none' : 'none'
  }, actions.map((it, i) => {
    const labelTextStyle = {
      color: it.labelTextColor ?? labelColor,
      ...(isV3 ? theme.fonts.titleMedium : {})
    };
    const marginHorizontal = typeof it.size === 'undefined' || it.size === 'small' ? 24 : 16;
    const accessibilityLabel = typeof it.accessibilityLabel !== 'undefined' ? it.accessibilityLabel : it.label;
    const size = typeof it.size !== 'undefined' ? it.size : 'small';
    return /*#__PURE__*/React.createElement(View, {
      key: i // eslint-disable-line react/no-array-index-key
      ,
      style: [styles.item, {
        marginHorizontal
      }],
      pointerEvents: open ? 'box-none' : 'none',
      accessibilityRole: "button",
      importantForAccessibility: "yes",
      accessible: true,
      accessibilityLabel: accessibilityLabel
    }, it.label && /*#__PURE__*/React.createElement(View, null, /*#__PURE__*/React.createElement(Card, {
      mode: isV3 ? 'contained' : 'elevated',
      onPress: e => {
        it.onPress(e);
        close();
      },
      accessibilityHint: it.accessibilityHint,
      importantForAccessibility: "no-hide-descendants",
      accessibilityElementsHidden: true,
      style: [styles.containerStyle, {
        transform: [isV3 ? {
          translateY: labelTranslations[i]
        } : {
          scale: scales[i]
        }],
        opacity: opacities[i]
      }, isV3 && styles.v3ContainerStyle, it.containerStyle]
    }, /*#__PURE__*/React.createElement(Text, {
      variant: "titleMedium",
      importantForAccessibility: "no-hide-descendants",
      accessibilityElementsHidden: true,
      style: [labelTextStyle, it.labelStyle],
      maxFontSizeMultiplier: it.labelMaxFontSizeMultiplier
    }, it.label))), /*#__PURE__*/React.createElement(FAB, {
      size: size,
      icon: it.icon,
      color: it.color,
      style: [{
        transform: [{
          scale: scales[i]
        }],
        opacity: opacities[i],
        backgroundColor: stackedFABBackgroundColor
      }, isV3 && {
        transform: [{
          translateY: translations[i]
        }]
      }, it.style],
      accessibilityElementsHidden: true,
      theme: theme,
      onPress: e => {
        it.onPress(e);
        close();
      },
      importantForAccessibility: "no-hide-descendants",
      testID: it.testID,
      visible: open,
      rippleColor: it.rippleColor
    }));
  })), /*#__PURE__*/React.createElement(FAB, {
    onPress: e => {
      onPress === null || onPress === void 0 ? void 0 : onPress(e);
      if (!toggleStackOnLongPress || open) {
        toggle();
      }
    },
    onLongPress: e => {
      if (!open || enableLongPressWhenStackOpened) {
        onLongPress === null || onLongPress === void 0 ? void 0 : onLongPress(e);
        if (toggleStackOnLongPress) {
          toggle();
        }
      }
    },
    delayLongPress: delayLongPress,
    icon: icon,
    color: colorProp,
    accessibilityLabel: accessibilityLabel,
    accessibilityRole: "button",
    accessibilityState: {
      expanded: open
    },
    style: [styles.fab, fabStyle],
    theme: theme,
    visible: visible,
    label: label,
    testID: testID,
    variant: variant,
    rippleColor: rippleColor
  })));
};
FABGroup.displayName = 'FAB.Group';
export default FABGroup;

// @component-docs ignore-next-line
export { FABGroup };
const styles = StyleSheet.create({
  safeArea: {
    alignItems: 'flex-end'
  },
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-end'
  },
  fab: {
    marginHorizontal: 16,
    marginBottom: 16,
    marginTop: 0
  },
  backdrop: {
    ...StyleSheet.absoluteFillObject
  },
  containerStyle: {
    borderRadius: 5,
    paddingHorizontal: 12,
    paddingVertical: 6,
    marginVertical: 8,
    marginHorizontal: 16,
    elevation: 2
  },
  item: {
    marginBottom: 16,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  // eslint-disable-next-line react-native/no-color-literals
  v3ContainerStyle: {
    backgroundColor: 'transparent',
    elevation: 0
  }
});
//# sourceMappingURL=FABGroup.js.map