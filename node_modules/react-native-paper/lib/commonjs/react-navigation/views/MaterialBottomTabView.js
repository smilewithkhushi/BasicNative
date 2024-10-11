"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = MaterialBottomTabView;
var React = _interopRequireWildcard(require("react"));
var _reactNative = require("react-native");
var _native = require("@react-navigation/native");
var _BottomNavigation = _interopRequireDefault(require("../../components/BottomNavigation/BottomNavigation"));
var _MaterialCommunityIcon = _interopRequireDefault(require("../../components/MaterialCommunityIcon"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function MaterialBottomTabView(_ref) {
  let {
    state,
    navigation,
    descriptors,
    ...rest
  } = _ref;
  const buildLink = (0, _native.useLinkBuilder)();
  return /*#__PURE__*/React.createElement(_BottomNavigation.default, _extends({}, rest, {
    onIndexChange: noop,
    navigationState: state,
    renderScene: _ref2 => {
      let {
        route
      } = _ref2;
      return descriptors[route.key].render();
    },
    renderTouchable: _reactNative.Platform.OS === 'web' ? _ref3 => {
      let {
        onPress,
        route,
        accessibilityRole: _0,
        borderless: _1,
        centered: _2,
        rippleColor: _3,
        style,
        ...rest
      } = _ref3;
      return /*#__PURE__*/React.createElement(_native.Link, _extends({}, rest, {
        // @ts-expect-error: to could be undefined, but it doesn't affect functionality
        to: buildLink(route.name, route.params),
        accessibilityRole: "link",
        onPress: e => {
          if (!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) && (
          // ignore clicks with modifier keys
          e.button == null || e.button === 0) // ignore everything but left clicks
          ) {
            e.preventDefault();
            onPress === null || onPress === void 0 ? void 0 : onPress(e);
          }
        },
        style: [styles.touchable, style]
      }));
    } : undefined,
    renderIcon: _ref4 => {
      let {
        route,
        focused,
        color
      } = _ref4;
      const {
        options
      } = descriptors[route.key];
      if (typeof options.tabBarIcon === 'string') {
        return /*#__PURE__*/React.createElement(_MaterialCommunityIcon.default, {
          direction: _reactNative.I18nManager.getConstants().isRTL ? 'rtl' : 'ltr',
          name: options.tabBarIcon,
          color: color,
          size: 24
        });
      }
      if (typeof options.tabBarIcon === 'function') {
        return options.tabBarIcon({
          focused,
          color
        });
      }
      return null;
    },
    getLabelText: _ref5 => {
      let {
        route
      } = _ref5;
      const {
        options
      } = descriptors[route.key];
      return options.tabBarLabel !== undefined ? options.tabBarLabel : options.title !== undefined ? options.title : route.name;
    },
    getColor: _ref6 => {
      let {
        route
      } = _ref6;
      return descriptors[route.key].options.tabBarColor;
    },
    getBadge: _ref7 => {
      let {
        route
      } = _ref7;
      return descriptors[route.key].options.tabBarBadge;
    },
    getAccessibilityLabel: _ref8 => {
      let {
        route
      } = _ref8;
      return descriptors[route.key].options.tabBarAccessibilityLabel;
    },
    getTestID: _ref9 => {
      let {
        route
      } = _ref9;
      return descriptors[route.key].options.tabBarButtonTestID;
    },
    onTabPress: _ref10 => {
      let {
        route,
        preventDefault
      } = _ref10;
      const event = navigation.emit({
        type: 'tabPress',
        target: route.key,
        canPreventDefault: true
      });
      if (event.defaultPrevented) {
        preventDefault();
      } else {
        navigation.dispatch({
          ..._native.CommonActions.navigate(route.name, route.params),
          target: state.key
        });
      }
    },
    onTabLongPress: _ref11 => {
      let {
        route
      } = _ref11;
      return navigation.emit({
        type: 'tabLongPress',
        target: route.key
      });
    }
  }));
}
const styles = _reactNative.StyleSheet.create({
  touchable: {
    display: 'flex',
    justifyContent: 'center'
  }
});
function noop() {}
//# sourceMappingURL=MaterialBottomTabView.js.map