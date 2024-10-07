"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = extractProps;
exports.extract = extract;
exports.propsAndStyles = propsAndStyles;
exports.withoutXY = withoutXY;
var _extractFill = _interopRequireDefault(require("./extractFill"));
var _extractStroke = _interopRequireDefault(require("./extractStroke"));
var _extractTransform = _interopRequireDefault(require("./extractTransform"));
var _extractResponder = _interopRequireDefault(require("./extractResponder"));
var _extractOpacity = _interopRequireDefault(require("./extractOpacity"));
var _util = require("../util");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const clipRules = {
  evenodd: 0,
  nonzero: 1
};
function propsAndStyles(props) {
  const {
    style
  } = props;
  return !style ? props : {
    ...(Array.isArray(style) ? Object.assign({}, ...style) : style),
    ...props
  };
}
function getMarker(marker) {
  if (!marker) {
    return undefined;
  }
  const matched = marker.match(_util.idPattern);
  return matched ? matched[1] : undefined;
}
function extractProps(props, ref) {
  const {
    id,
    opacity,
    onLayout,
    clipPath,
    clipRule,
    display,
    mask,
    marker,
    markerStart = marker,
    markerMid = marker,
    markerEnd = marker
  } = props;
  const extracted = {};
  const inherited = [];
  (0, _extractResponder.default)(extracted, props, ref);
  (0, _extractFill.default)(extracted, props, inherited);
  (0, _extractStroke.default)(extracted, props, inherited);
  if (inherited.length) {
    extracted.propList = inherited;
  }
  const matrix = (0, _extractTransform.default)(props);
  if (matrix !== null) {
    extracted.matrix = matrix;
  }
  if (opacity != null) {
    extracted.opacity = (0, _extractOpacity.default)(opacity);
  }
  if (display != null) {
    extracted.display = display === 'none' ? 'none' : undefined;
  }
  if (onLayout) {
    extracted.onLayout = onLayout;
  }
  if (markerStart) {
    extracted.markerStart = getMarker(markerStart);
  }
  if (markerMid) {
    extracted.markerMid = getMarker(markerMid);
  }
  if (markerEnd) {
    extracted.markerEnd = getMarker(markerEnd);
  }
  if (id) {
    extracted.name = String(id);
  }
  if (clipRule) {
    extracted.clipRule = clipRules[clipRule] === 0 ? 0 : 1;
  }
  if (clipPath) {
    const matched = clipPath.match(_util.idPattern);
    if (matched) {
      extracted.clipPath = matched[1];
    } else {
      console.warn('Invalid `clipPath` prop, expected a clipPath like "#id", but got: "' + clipPath + '"');
    }
  }
  if (mask) {
    const matched = mask.match(_util.idPattern);
    if (matched) {
      extracted.mask = matched[1];
    } else {
      console.warn('Invalid `mask` prop, expected a mask like "#id", but got: "' + mask + '"');
    }
  }
  return extracted;
}
function extract(instance, props) {
  return extractProps(propsAndStyles(props), instance);
}
function withoutXY(instance, props) {
  return extractProps({
    ...propsAndStyles(props),
    x: null,
    y: null
  }, instance);
}
//# sourceMappingURL=extractProps.windows.js.map