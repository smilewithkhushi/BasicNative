"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var React = _interopRequireWildcard(require("react"));
var _reactNative = require("react-native");
var _extractResponder = _interopRequireDefault(require("../lib/extract/extractResponder"));
var _extractViewBox = _interopRequireDefault(require("../lib/extract/extractViewBox"));
var _Shape = _interopRequireDefault(require("./Shape"));
var _G = _interopRequireDefault(require("./G"));
var _AndroidSvgViewNativeComponent = _interopRequireDefault(require("../fabric/AndroidSvgViewNativeComponent"));
var _IOSSvgViewNativeComponent = _interopRequireDefault(require("../fabric/IOSSvgViewNativeComponent"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
const styles = _reactNative.StyleSheet.create({
  svg: {
    backgroundColor: 'transparent',
    borderWidth: 0
  }
});
const defaultStyle = styles.svg;
class Svg extends _Shape.default {
  static displayName = 'Svg';
  static defaultProps = {
    preserveAspectRatio: 'xMidYMid meet'
  };
  measureInWindow = callback => {
    const {
      root
    } = this;
    root && root.measureInWindow(callback);
  };
  measure = callback => {
    const {
      root
    } = this;
    root && root.measure(callback);
  };
  measureLayout = (relativeToNativeNode, onSuccess, onFail) => {
    const {
      root
    } = this;
    root && root.measureLayout(relativeToNativeNode, onSuccess, onFail);
  };
  setNativeProps = props => {
    const {
      root
    } = this;
    root && root.setNativeProps(props);
  };
  toDataURL = (callback, options) => {
    if (!callback) {
      return;
    }
    const handle = (0, _reactNative.findNodeHandle)(this.root);
    const RNSVGSvgViewModule =
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    require('../fabric/NativeSvgViewModule').default;
    RNSVGSvgViewModule.toDataURL(handle, options, callback);
  };
  render() {
    const {
      style,
      opacity,
      viewBox,
      children,
      onLayout,
      preserveAspectRatio,
      ...extracted
    } = this.props;
    const stylesAndProps = {
      ...(Array.isArray(style) ? Object.assign({}, ...style) : style),
      ...extracted
    };
    let {
      color,
      width,
      height,
      focusable,
      transform,
      // Inherited G properties
      font,
      fill,
      fillOpacity,
      fillRule,
      stroke,
      strokeWidth,
      strokeOpacity,
      strokeDasharray,
      strokeDashoffset,
      strokeLinecap,
      strokeLinejoin,
      strokeMiterlimit
    } = stylesAndProps;
    if (width === undefined && height === undefined) {
      width = height = '100%';
    }
    const props = extracted;
    props.focusable = Boolean(focusable) && focusable !== 'false';
    const rootStyles = [defaultStyle];
    if (style) {
      rootStyles.push(style);
    }
    let override = false;
    const overrideStyles = {};
    const o = opacity != null ? +opacity : NaN;
    if (!isNaN(o)) {
      override = true;
      overrideStyles.opacity = o;
    }
    if (width && height) {
      override = true;
      const w = parseInt(width, 10);
      const h = parseInt(height, 10);
      const doNotParseWidth = isNaN(w) || width[width.length - 1] === '%';
      const doNotParseHeight = isNaN(h) || height[height.length - 1] === '%';
      overrideStyles.width = doNotParseWidth ? width : w;
      overrideStyles.height = doNotParseHeight ? height : h;
      overrideStyles.flex = 0;
    }
    if (override) {
      rootStyles.push(overrideStyles);
    }
    props.style = rootStyles.length > 1 ? rootStyles : defaultStyle;
    if (width != null) {
      props.bbWidth = width;
    }
    if (height != null) {
      props.bbHeight = height;
    }
    (0, _extractResponder.default)(props, props, this);
    props.tintColor = color;
    if (onLayout != null) {
      props.onLayout = onLayout;
    }
    const gStyle = Object.assign({}, style);
    // if transform prop is of RN style's kind, we want `SvgView` to handle it
    // since it can be done here. Otherwise, if transform is of `svg` kind, e.g. string,
    // we want G element to parse it since `Svg` does not include parsing of those custom transforms.
    // It is problematic due to fact that we either move the `Svg` or just its `G` child, and in the
    // second case, when the `G` leaves the area of `Svg`, it will just disappear.
    if (Array.isArray(transform) && typeof transform[0] === 'object') {
      gStyle.transform = undefined;
    } else {
      props.transform = undefined;
      gStyle.transform = transform;
    }
    const RNSVGSvg = _reactNative.Platform.OS === 'android' ? _AndroidSvgViewNativeComponent.default : _IOSSvgViewNativeComponent.default;
    return /*#__PURE__*/React.createElement(RNSVGSvg, _extends({}, props, {
      ref: ref => this.refMethod(ref)
    }, (0, _extractViewBox.default)({
      viewBox,
      preserveAspectRatio
    })), /*#__PURE__*/React.createElement(_G.default, {
      children,
      style: gStyle,
      font,
      fill,
      fillOpacity,
      fillRule,
      stroke,
      strokeWidth,
      strokeOpacity,
      strokeDasharray,
      strokeDashoffset,
      strokeLinecap,
      strokeLinejoin,
      strokeMiterlimit
    }));
  }
}
exports.default = Svg;
//# sourceMappingURL=Svg.js.map