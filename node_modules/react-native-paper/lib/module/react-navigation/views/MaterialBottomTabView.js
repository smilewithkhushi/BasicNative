function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from 'react';
import { I18nManager, Platform, StyleSheet } from 'react-native';
import { CommonActions, Link, useLinkBuilder } from '@react-navigation/native';
import BottomNavigation from '../../components/BottomNavigation/BottomNavigation';
import MaterialCommunityIcon from '../../components/MaterialCommunityIcon';
export default function MaterialBottomTabView(_ref) {
  let {
    state,
    navigation,
    descriptors,
    ...rest
  } = _ref;
  const buildLink = useLinkBuilder();
  return /*#__PURE__*/React.createElement(BottomNavigation, _extends({}, rest, {
    onIndexChange: noop,
    navigationState: state,
    renderScene: _ref2 => {
      let {
        route
      } = _ref2;
      return descriptors[route.key].render();
    },
    renderTouchable: Platform.OS === 'web' ? _ref3 => {
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
      return /*#__PURE__*/React.createElement(Link, _extends({}, rest, {
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
        return /*#__PURE__*/React.createElement(MaterialCommunityIcon, {
          direction: I18nManager.getConstants().isRTL ? 'rtl' : 'ltr',
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
          ...CommonActions.navigate(route.name, route.params),
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
const styles = StyleSheet.create({
  touchable: {
    display: 'flex',
    justifyContent: 'center'
  }
});
function noop() {}
//# sourceMappingURL=MaterialBottomTabView.js.map