"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = DrawerItem;
var _elements = require("@react-navigation/elements");
var _native = require("@react-navigation/native");
var _color = _interopRequireDefault(require("color"));
var React = _interopRequireWildcard(require("react"));
var _reactNative = require("react-native");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
const LinkPressable = _ref => {
  let {
    children,
    style,
    onPress,
    onLongPress,
    onPressIn,
    onPressOut,
    to,
    accessibilityRole,
    ...rest
  } = _ref;
  if (_reactNative.Platform.OS === 'web' && to) {
    // React Native Web doesn't forward `onClick` if we use `TouchableWithoutFeedback`.
    // We need to use `onClick` to be able to prevent default browser handling of links.
    return /*#__PURE__*/React.createElement(_native.Link, _extends({}, rest, {
      to: to,
      style: [styles.button, style],
      onPress: e => {
        if (!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) && (
        // ignore clicks with modifier keys
        e.button == null || e.button === 0) // ignore everything but left clicks
        ) {
          e.preventDefault();
          onPress === null || onPress === void 0 ? void 0 : onPress(e);
        }
      }
      // types for PressableProps and TextProps are incompatible with each other by `null` so we
      // can't use {...rest} for these 3 props
      ,
      onLongPress: onLongPress ?? undefined,
      onPressIn: onPressIn ?? undefined,
      onPressOut: onPressOut ?? undefined
    }), children);
  } else {
    return /*#__PURE__*/React.createElement(_elements.PlatformPressable, _extends({}, rest, {
      accessibilityRole: accessibilityRole,
      onPress: onPress
    }), /*#__PURE__*/React.createElement(_reactNative.View, {
      style: style
    }, children));
  }
};

/**
 * A component used to show an action item with an icon and a label in a navigation drawer.
 */
function DrawerItem(props) {
  const {
    colors
  } = (0, _native.useTheme)();
  const {
    icon,
    label,
    labelStyle,
    to,
    focused = false,
    allowFontScaling,
    activeTintColor = colors.primary,
    inactiveTintColor = (0, _color.default)(colors.text).alpha(0.68).rgb().string(),
    activeBackgroundColor = (0, _color.default)(activeTintColor).alpha(0.12).rgb().string(),
    inactiveBackgroundColor = 'transparent',
    style,
    onPress,
    pressColor,
    pressOpacity,
    testID,
    accessibilityLabel,
    ...rest
  } = props;
  const {
    borderRadius = 4
  } = _reactNative.StyleSheet.flatten(style || {});
  const color = focused ? activeTintColor : inactiveTintColor;
  const backgroundColor = focused ? activeBackgroundColor : inactiveBackgroundColor;
  const iconNode = icon ? icon({
    size: 24,
    focused,
    color
  }) : null;
  return /*#__PURE__*/React.createElement(_reactNative.View, _extends({
    collapsable: false
  }, rest, {
    style: [styles.container, {
      borderRadius,
      backgroundColor
    }, style]
  }), /*#__PURE__*/React.createElement(LinkPressable, {
    testID: testID,
    onPress: onPress,
    style: [styles.wrapper, {
      borderRadius
    }],
    accessibilityLabel: accessibilityLabel,
    accessibilityRole: "button",
    accessibilityState: {
      selected: focused
    },
    pressColor: pressColor,
    pressOpacity: pressOpacity,
    to: to
  }, /*#__PURE__*/React.createElement(React.Fragment, null, iconNode, /*#__PURE__*/React.createElement(_reactNative.View, {
    style: [styles.label, {
      marginLeft: iconNode ? 32 : 0,
      marginVertical: 5
    }]
  }, typeof label === 'string' ? /*#__PURE__*/React.createElement(_reactNative.Text, {
    numberOfLines: 1,
    allowFontScaling: allowFontScaling,
    style: [{
      color,
      fontWeight: '500'
    }, labelStyle]
  }, label) : label({
    color,
    focused
  })))));
}
const styles = _reactNative.StyleSheet.create({
  container: {
    marginHorizontal: 10,
    marginVertical: 4,
    overflow: 'hidden'
  },
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8
  },
  label: {
    marginRight: 32,
    flex: 1
  },
  button: {
    display: 'flex'
  }
});
//# sourceMappingURL=DrawerItem.js.map