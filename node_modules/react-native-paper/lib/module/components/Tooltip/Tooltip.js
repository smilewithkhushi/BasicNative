function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from 'react';
import { Dimensions, View, StyleSheet, Platform, Pressable } from 'react-native';
import { getTooltipPosition } from './utils';
import { useInternalTheme } from '../../core/theming';
import { addEventListener } from '../../utils/addEventListener';
import Portal from '../Portal/Portal';
import Text from '../Typography/Text';
/**
 * Tooltips display informative text when users hover over, focus on, or tap an element.
 *
 * Plain tooltips, when activated, display a text label identifying an element, such as a description of its function. Tooltips should include only short, descriptive text and avoid restating visible UI text.
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { IconButton, Tooltip } from 'react-native-paper';
 *
 * const MyComponent = () => (
 *   <Tooltip title="Selected Camera">
 *     <IconButton icon="camera" selected size={24} onPress={() => {}} />
 *   </Tooltip>
 * );
 *
 * export default MyComponent;
 * ```
 */
const Tooltip = _ref => {
  let {
    children,
    enterTouchDelay = 500,
    leaveTouchDelay = 1500,
    title,
    theme: themeOverrides,
    titleMaxFontSizeMultiplier,
    ...rest
  } = _ref;
  const isWeb = Platform.OS === 'web';
  const theme = useInternalTheme(themeOverrides);
  const [visible, setVisible] = React.useState(false);
  const [measurement, setMeasurement] = React.useState({
    children: {},
    tooltip: {},
    measured: false
  });
  const showTooltipTimer = React.useRef([]);
  const hideTooltipTimer = React.useRef([]);
  const childrenWrapperRef = React.useRef();
  const touched = React.useRef(false);
  React.useEffect(() => {
    return () => {
      if (showTooltipTimer.current.length) {
        showTooltipTimer.current.forEach(t => clearTimeout(t));
        showTooltipTimer.current = [];
      }
      if (hideTooltipTimer.current.length) {
        hideTooltipTimer.current.forEach(t => clearTimeout(t));
        hideTooltipTimer.current = [];
      }
    };
  }, []);
  React.useEffect(() => {
    const subscription = addEventListener(Dimensions, 'change', () => setVisible(false));
    return () => subscription.remove();
  }, []);
  const handleOnLayout = _ref2 => {
    let {
      nativeEvent: {
        layout
      }
    } = _ref2;
    childrenWrapperRef.current.measure((_x, _y, width, height, pageX, pageY) => {
      setMeasurement({
        children: {
          pageX,
          pageY,
          height,
          width
        },
        tooltip: {
          ...layout
        },
        measured: true
      });
    });
  };
  const handleTouchStart = () => {
    if (hideTooltipTimer.current.length) {
      hideTooltipTimer.current.forEach(t => clearTimeout(t));
      hideTooltipTimer.current = [];
    }
    if (isWeb) {
      let id = setTimeout(() => {
        touched.current = true;
        setVisible(true);
      }, enterTouchDelay);
      showTooltipTimer.current.push(id);
    } else {
      touched.current = true;
      setVisible(true);
    }
  };
  const handleTouchEnd = () => {
    touched.current = false;
    if (showTooltipTimer.current.length) {
      showTooltipTimer.current.forEach(t => clearTimeout(t));
      showTooltipTimer.current = [];
    }
    let id = setTimeout(() => {
      setVisible(false);
      setMeasurement({
        children: {},
        tooltip: {},
        measured: false
      });
    }, leaveTouchDelay);
    hideTooltipTimer.current.push(id);
  };
  const mobilePressProps = {
    onPress: React.useCallback(() => {
      if (touched.current) {
        return null;
      } else {
        var _children$props$onPre, _children$props;
        if (children.props.disabled) return null;
        return (_children$props$onPre = (_children$props = children.props).onPress) === null || _children$props$onPre === void 0 ? void 0 : _children$props$onPre.call(_children$props);
      }
    }, [children.props]),
    onLongPress: () => handleTouchStart(),
    onPressOut: () => handleTouchEnd(),
    delayLongPress: enterTouchDelay
  };
  const webPressProps = {
    onHoverIn: () => {
      var _children$props$onHov, _children$props2;
      handleTouchStart();
      (_children$props$onHov = (_children$props2 = children.props).onHoverIn) === null || _children$props$onHov === void 0 ? void 0 : _children$props$onHov.call(_children$props2);
    },
    onHoverOut: () => {
      var _children$props$onHov2, _children$props3;
      handleTouchEnd();
      (_children$props$onHov2 = (_children$props3 = children.props).onHoverOut) === null || _children$props$onHov2 === void 0 ? void 0 : _children$props$onHov2.call(_children$props3);
    }
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, visible && /*#__PURE__*/React.createElement(Portal, null, /*#__PURE__*/React.createElement(View, {
    onLayout: handleOnLayout,
    style: [styles.tooltip, {
      backgroundColor: theme.isV3 ? theme.colors.onSurface : theme.colors.tooltip,
      ...getTooltipPosition(measurement, children),
      borderRadius: theme.roundness,
      ...(measurement.measured ? styles.visible : styles.hidden)
    }],
    testID: "tooltip-container"
  }, /*#__PURE__*/React.createElement(Text, {
    accessibilityLiveRegion: "polite",
    numberOfLines: 1,
    selectable: false,
    variant: "labelLarge",
    style: {
      color: theme.colors.surface
    },
    maxFontSizeMultiplier: titleMaxFontSizeMultiplier
  }, title))), /*#__PURE__*/React.createElement(Pressable, _extends({
    ref: childrenWrapperRef,
    style: styles.pressContainer
  }, isWeb ? webPressProps : mobilePressProps), /*#__PURE__*/React.cloneElement(children, {
    ...rest,
    ...(isWeb ? webPressProps : mobilePressProps)
  })));
};
Tooltip.displayName = 'Tooltip';
const styles = StyleSheet.create({
  tooltip: {
    alignSelf: 'flex-start',
    justifyContent: 'center',
    paddingHorizontal: 16,
    height: 32,
    maxHeight: 32
  },
  visible: {
    opacity: 1
  },
  hidden: {
    opacity: 0
  },
  pressContainer: {
    ...(Platform.OS === 'web' && {
      cursor: 'default'
    })
  }
});
export default Tooltip;
//# sourceMappingURL=Tooltip.js.map