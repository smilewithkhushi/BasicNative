"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.RadioButtonAndroid = void 0;
var React = _interopRequireWildcard(require("react"));
var _reactNative = require("react-native");
var _RadioButtonGroup = require("./RadioButtonGroup");
var _utils = require("./utils");
var _theming = require("../../core/theming");
var _utils2 = require("../Checkbox/utils");
var _TouchableRipple = _interopRequireDefault(require("../TouchableRipple/TouchableRipple"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
const BORDER_WIDTH = 2;

/**
 * Radio buttons allow the selection a single option from a set.
 * This component follows platform guidelines for Android, but can be used
 * on any platform.
 *
 * @extends TouchableRipple props https://callstack.github.io/react-native-paper/docs/components/TouchableRipple
 */
const RadioButtonAndroid = _ref => {
  let {
    disabled,
    onPress,
    theme: themeOverrides,
    value,
    status,
    testID,
    ...rest
  } = _ref;
  const theme = (0, _theming.useInternalTheme)(themeOverrides);
  const {
    current: borderAnim
  } = React.useRef(new _reactNative.Animated.Value(BORDER_WIDTH));
  const {
    current: radioAnim
  } = React.useRef(new _reactNative.Animated.Value(1));
  const isFirstRendering = React.useRef(true);
  const {
    scale
  } = theme.animation;
  React.useEffect(() => {
    // Do not run animation on very first rendering
    if (isFirstRendering.current) {
      isFirstRendering.current = false;
      return;
    }
    if (status === 'checked') {
      radioAnim.setValue(1.2);
      _reactNative.Animated.timing(radioAnim, {
        toValue: 1,
        duration: 150 * scale,
        useNativeDriver: true
      }).start();
    } else {
      borderAnim.setValue(10);
      _reactNative.Animated.timing(borderAnim, {
        toValue: BORDER_WIDTH,
        duration: 150 * scale,
        useNativeDriver: false
      }).start();
    }
  }, [status, borderAnim, radioAnim, scale]);
  return /*#__PURE__*/React.createElement(_RadioButtonGroup.RadioButtonContext.Consumer, null, context => {
    const checked = (0, _utils.isChecked)({
      contextValue: context === null || context === void 0 ? void 0 : context.value,
      status,
      value
    }) === 'checked';
    const {
      rippleColor,
      selectionControlColor
    } = (0, _utils2.getAndroidSelectionControlColor)({
      theme,
      disabled,
      checked,
      customColor: rest.color,
      customUncheckedColor: rest.uncheckedColor
    });
    return /*#__PURE__*/React.createElement(_TouchableRipple.default, _extends({}, rest, {
      borderless: true,
      rippleColor: rippleColor,
      onPress: disabled ? undefined : event => {
        (0, _utils.handlePress)({
          onPress,
          onValueChange: context === null || context === void 0 ? void 0 : context.onValueChange,
          value,
          event
        });
      },
      accessibilityRole: "radio",
      accessibilityState: {
        disabled,
        checked
      },
      accessibilityLiveRegion: "polite",
      style: styles.container,
      testID: testID,
      theme: theme
    }), /*#__PURE__*/React.createElement(_reactNative.Animated.View, {
      style: [styles.radio, {
        borderColor: selectionControlColor,
        borderWidth: borderAnim
      }]
    }, checked ? /*#__PURE__*/React.createElement(_reactNative.View, {
      style: [_reactNative.StyleSheet.absoluteFill, styles.radioContainer]
    }, /*#__PURE__*/React.createElement(_reactNative.Animated.View, {
      style: [styles.dot, {
        backgroundColor: selectionControlColor,
        transform: [{
          scale: radioAnim
        }]
      }]
    })) : null));
  });
};
exports.RadioButtonAndroid = RadioButtonAndroid;
RadioButtonAndroid.displayName = 'RadioButton.Android';
const styles = _reactNative.StyleSheet.create({
  container: {
    borderRadius: 18
  },
  radioContainer: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  radio: {
    height: 20,
    width: 20,
    borderRadius: 10,
    margin: 8
  },
  dot: {
    height: 10,
    width: 10,
    borderRadius: 5
  }
});
var _default = RadioButtonAndroid; // @component-docs ignore-next-line
exports.default = _default;
//# sourceMappingURL=RadioButtonAndroid.js.map