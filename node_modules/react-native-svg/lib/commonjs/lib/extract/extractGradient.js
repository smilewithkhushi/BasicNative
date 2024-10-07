"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = extractGradient;
var React = _interopRequireWildcard(require("react"));
var _reactNative = require("react-native");
var _extractOpacity = _interopRequireDefault(require("./extractOpacity"));
var _extractTransform = _interopRequireDefault(require("./extractTransform"));
var _units = _interopRequireDefault(require("../units"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
const percentReg = /^([+-]?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?)(%?)$/;
function percentToFloat(percent) {
  if (typeof percent === 'number') {
    return percent;
  }
  if (typeof percent === 'object' && typeof percent.__getAnimatedValue === 'function') {
    return percent.__getAnimatedValue();
  }
  const matched = typeof percent === 'string' && percent.match(percentReg);
  if (!matched) {
    console.warn(`"${percent}" is not a valid number or percentage string.`);
    return 0;
  }
  return matched[2] ? +matched[1] / 100 : +matched[1];
}
const offsetComparator = (object, other) => object[0] - other[0];
function extractGradient(props, parent) {
  const {
    id,
    children,
    gradientTransform,
    transform,
    gradientUnits
  } = props;
  if (!id) {
    return null;
  }
  const stops = [];
  const childArray = children ? React.Children.map(children, child => /*#__PURE__*/React.cloneElement(child, {
    parent
  })) : [];
  const l = childArray.length;
  for (let i = 0; i < l; i++) {
    const {
      props: {
        style,
        offset = style && style.offset,
        stopColor = style && style.stopColor || '#000',
        stopOpacity = style && style.stopOpacity
      }
    } = childArray[i];
    const offsetNumber = percentToFloat(offset || 0);
    const color = stopColor && (0, _reactNative.processColor)(stopColor);
    if (typeof color !== 'number' || isNaN(offsetNumber)) {
      console.warn(`"${stopColor}" is not a valid color or "${offset}" is not a valid offset`);
      continue;
    }
    const alpha = Math.round((0, _extractOpacity.default)(stopOpacity) * 255);
    stops.push([offsetNumber, color & 0x00ffffff | alpha << 24]);
  }
  stops.sort(offsetComparator);
  const gradient = [];
  const k = stops.length;
  for (let j = 0; j < k; j++) {
    const s = stops[j];
    gradient.push(s[0], s[1]);
  }
  return {
    name: id,
    gradient,
    children: childArray,
    gradientUnits: gradientUnits && _units.default[gradientUnits] || 0,
    gradientTransform: (0, _extractTransform.default)(gradientTransform || transform || props)
  };
}
//# sourceMappingURL=extractGradient.js.map