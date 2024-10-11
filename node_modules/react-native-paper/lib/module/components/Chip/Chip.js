function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from 'react';
import { Animated, Platform, StyleSheet, Pressable, View } from 'react-native';
import useLatestCallback from 'use-latest-callback';
import { getChipColors } from './helpers';
import { useInternalTheme } from '../../core/theming';
import { white } from '../../styles/themes/v2/colors';
import hasTouchHandler from '../../utils/hasTouchHandler';
import Icon from '../Icon';
import MaterialCommunityIcon from '../MaterialCommunityIcon';
import Surface from '../Surface';
import TouchableRipple from '../TouchableRipple/TouchableRipple';
import Text from '../Typography/Text';
/**
 * Chips are compact elements that can represent inputs, attributes, or actions.
 * They can have an icon or avatar on the left, and a close button icon on the right.
 * They are typically used to:
 * <ul>
 *  <li>Present multiple options </li>
 *  <li>Represent attributes active or chosen </li>
 *  <li>Present filter options </li>
 *  <li>Trigger actions related to primary content </li>
 * </ul>
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { Chip } from 'react-native-paper';
 *
 * const MyComponent = () => (
 *   <Chip icon="information" onPress={() => console.log('Pressed')}>Example Chip</Chip>
 * );
 *
 * export default MyComponent;
 * ```
 */
const Chip = _ref => {
  let {
    mode = 'flat',
    children,
    icon,
    avatar,
    selected = false,
    disabled = false,
    background,
    accessibilityLabel,
    closeIconAccessibilityLabel = 'Close',
    onPress,
    onLongPress,
    onPressOut,
    onPressIn,
    delayLongPress,
    onClose,
    closeIcon,
    textStyle,
    style,
    theme: themeOverrides,
    testID = 'chip',
    selectedColor,
    rippleColor: customRippleColor,
    showSelectedOverlay = false,
    showSelectedCheck = true,
    ellipsizeMode,
    compact,
    elevated = false,
    maxFontSizeMultiplier,
    ...rest
  } = _ref;
  const theme = useInternalTheme(themeOverrides);
  const {
    isV3,
    roundness
  } = theme;
  const {
    current: elevation
  } = React.useRef(new Animated.Value(isV3 && elevated ? 1 : 0));
  const hasPassedTouchHandler = hasTouchHandler({
    onPress,
    onLongPress,
    onPressIn,
    onPressOut
  });
  const isOutlined = mode === 'outlined';
  const handlePressIn = useLatestCallback(e => {
    const {
      scale
    } = theme.animation;
    onPressIn === null || onPressIn === void 0 ? void 0 : onPressIn(e);
    Animated.timing(elevation, {
      toValue: isV3 ? elevated ? 2 : 0 : 4,
      duration: 200 * scale,
      useNativeDriver: Platform.OS === 'web' || Platform.constants.reactNativeVersion.minor <= 72
    }).start();
  });
  const handlePressOut = useLatestCallback(e => {
    const {
      scale
    } = theme.animation;
    onPressOut === null || onPressOut === void 0 ? void 0 : onPressOut(e);
    Animated.timing(elevation, {
      toValue: isV3 && elevated ? 1 : 0,
      duration: 150 * scale,
      useNativeDriver: Platform.OS === 'web' || Platform.constants.reactNativeVersion.minor <= 72
    }).start();
  });
  const opacity = isV3 ? 0.38 : 0.26;
  const defaultBorderRadius = roundness * (isV3 ? 2 : 4);
  const iconSize = isV3 ? 18 : 16;
  const {
    backgroundColor: customBackgroundColor,
    borderRadius = defaultBorderRadius
  } = StyleSheet.flatten(style) || {};
  const {
    borderColor,
    textColor,
    iconColor,
    rippleColor,
    selectedBackgroundColor,
    backgroundColor
  } = getChipColors({
    isOutlined,
    theme,
    selectedColor,
    showSelectedOverlay,
    customBackgroundColor,
    disabled,
    customRippleColor
  });
  const accessibilityState = {
    selected,
    disabled
  };
  const elevationStyle = isV3 || Platform.OS === 'android' ? elevation : 0;
  const multiplier = isV3 ? compact ? 1.5 : 2 : 1;
  const labelSpacings = {
    marginRight: onClose ? 0 : 8 * multiplier,
    marginLeft: avatar || icon || selected && showSelectedCheck ? 4 * multiplier : 8 * multiplier
  };
  const contentSpacings = {
    paddingRight: isV3 ? onClose ? 34 : 0 : onClose ? 32 : 4
  };
  const labelTextStyle = {
    color: textColor,
    ...(isV3 ? theme.fonts.labelLarge : theme.fonts.regular)
  };
  return /*#__PURE__*/React.createElement(Surface, _extends({
    style: [styles.container, isV3 && (isOutlined ? styles.md3OutlineContainer : styles.md3FlatContainer), !theme.isV3 && {
      elevation: elevationStyle
    }, {
      backgroundColor: selected ? selectedBackgroundColor : backgroundColor,
      borderColor,
      borderRadius
    }, style]
  }, theme.isV3 && {
    elevation: elevationStyle
  }, rest, {
    testID: `${testID}-container`,
    theme: theme
  }), /*#__PURE__*/React.createElement(TouchableRipple, {
    borderless: true,
    background: background,
    style: [{
      borderRadius
    }, styles.touchable],
    onPress: onPress,
    onLongPress: onLongPress,
    onPressIn: hasPassedTouchHandler ? handlePressIn : undefined,
    onPressOut: hasPassedTouchHandler ? handlePressOut : undefined,
    delayLongPress: delayLongPress,
    rippleColor: rippleColor,
    disabled: disabled,
    accessibilityLabel: accessibilityLabel,
    accessibilityRole: "button",
    accessibilityState: accessibilityState,
    testID: testID,
    theme: theme
  }, /*#__PURE__*/React.createElement(View, {
    style: [styles.content, isV3 && styles.md3Content, contentSpacings]
  }, avatar && !icon ? /*#__PURE__*/React.createElement(View, {
    style: [styles.avatarWrapper, isV3 && styles.md3AvatarWrapper, disabled && {
      opacity
    }]
  }, /*#__PURE__*/React.isValidElement(avatar) ? /*#__PURE__*/React.cloneElement(avatar, {
    style: [styles.avatar, avatar.props.style]
  }) : avatar) : null, icon || selected && showSelectedCheck ? /*#__PURE__*/React.createElement(View, {
    style: [styles.icon, isV3 && styles.md3Icon, avatar ? [styles.avatar, styles.avatarSelected, isV3 && selected && styles.md3SelectedIcon] : null]
  }, icon ? /*#__PURE__*/React.createElement(Icon, {
    source: icon,
    color: avatar ? white : !disabled && theme.isV3 ? theme.colors.primary : iconColor,
    size: 18,
    theme: theme
  }) : /*#__PURE__*/React.createElement(MaterialCommunityIcon, {
    name: "check",
    color: avatar ? white : iconColor,
    size: 18,
    direction: "ltr"
  })) : null, /*#__PURE__*/React.createElement(Text, {
    variant: "labelLarge",
    selectable: false,
    numberOfLines: 1,
    style: [isV3 ? styles.md3LabelText : styles.labelText, labelTextStyle, labelSpacings, textStyle],
    ellipsizeMode: ellipsizeMode,
    maxFontSizeMultiplier: maxFontSizeMultiplier
  }, children))), onClose ? /*#__PURE__*/React.createElement(View, {
    style: styles.closeButtonStyle
  }, /*#__PURE__*/React.createElement(Pressable, {
    onPress: onClose,
    disabled: disabled,
    accessibilityRole: "button",
    accessibilityLabel: closeIconAccessibilityLabel
  }, /*#__PURE__*/React.createElement(View, {
    style: [styles.icon, styles.closeIcon, isV3 && styles.md3CloseIcon]
  }, closeIcon ? /*#__PURE__*/React.createElement(Icon, {
    source: closeIcon,
    color: iconColor,
    size: iconSize
  }) : /*#__PURE__*/React.createElement(MaterialCommunityIcon, {
    name: isV3 ? 'close' : 'close-circle',
    size: iconSize,
    color: iconColor,
    direction: "ltr"
  })))) : null);
};
const styles = StyleSheet.create({
  container: {
    borderWidth: StyleSheet.hairlineWidth,
    borderStyle: 'solid',
    flexDirection: Platform.select({
      default: 'column',
      web: 'row'
    })
  },
  md3OutlineContainer: {
    borderWidth: 1
  },
  md3FlatContainer: {
    borderWidth: 0
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 4,
    position: 'relative'
  },
  md3Content: {
    paddingLeft: 0
  },
  icon: {
    padding: 4,
    alignSelf: 'center'
  },
  md3Icon: {
    paddingLeft: 8,
    paddingRight: 0
  },
  closeIcon: {
    marginRight: 4
  },
  md3CloseIcon: {
    marginRight: 8,
    padding: 0
  },
  labelText: {
    minHeight: 24,
    lineHeight: 24,
    textAlignVertical: 'center',
    marginVertical: 4
  },
  md3LabelText: {
    textAlignVertical: 'center',
    marginVertical: 6
  },
  avatar: {
    width: 24,
    height: 24,
    borderRadius: 12
  },
  avatarWrapper: {
    marginRight: 4
  },
  md3AvatarWrapper: {
    marginLeft: 4,
    marginRight: 0
  },
  md3SelectedIcon: {
    paddingLeft: 4
  },
  // eslint-disable-next-line react-native/no-color-literals
  avatarSelected: {
    position: 'absolute',
    top: 4,
    left: 4,
    backgroundColor: 'rgba(0, 0, 0, .29)'
  },
  closeButtonStyle: {
    position: 'absolute',
    right: 0,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  touchable: {
    width: '100%'
  }
});
export default Chip;
//# sourceMappingURL=Chip.js.map