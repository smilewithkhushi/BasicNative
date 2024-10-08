"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = extractFill;
var _extractBrush = _interopRequireDefault(require("./extractBrush"));
var _extractOpacity = _interopRequireDefault(require("./extractOpacity"));
var _reactNative = require("react-native");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const fillRules = {
  evenodd: 0,
  nonzero: 1
};
const defaultFill = {
  type: 0,
  payload: (0, _reactNative.processColor)('black')
};
function extractFill(o, props, inherited) {
  const {
    fill,
    fillRule,
    fillOpacity
  } = props;
  if (fill != null) {
    inherited.push('fill');
    o.fill = !fill && typeof fill !== 'number' ? defaultFill : (0, _extractBrush.default)(fill);
  } else {
    // we want the default value of fill to be black to match the spec
    o.fill = defaultFill;
  }
  if (fillOpacity != null) {
    inherited.push('fillOpacity');
    o.fillOpacity = (0, _extractOpacity.default)(fillOpacity);
  }
  if (fillRule != null) {
    inherited.push('fillRule');
    o.fillRule = fillRule && fillRules[fillRule] === 0 ? 0 : 1;
  }
}
//# sourceMappingURL=extractFill.js.map