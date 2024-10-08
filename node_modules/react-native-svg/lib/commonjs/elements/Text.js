"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var React = _interopRequireWildcard(require("react"));
var _extractText = _interopRequireDefault(require("../lib/extract/extractText"));
var _extractProps = _interopRequireWildcard(require("../lib/extract/extractProps"));
var _extractTransform = _interopRequireDefault(require("../lib/extract/extractTransform"));
var _util = require("../lib/util");
var _Shape = _interopRequireDefault(require("./Shape"));
require("./TSpan");
var _TextNativeComponent = _interopRequireDefault(require("../fabric/TextNativeComponent"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
class Text extends _Shape.default {
  static displayName = 'Text';
  setNativeProps = props => {
    const matrix = props && !props.matrix && (0, _extractTransform.default)(props);
    if (matrix) {
      props.matrix = matrix;
    }
    const prop = (0, _extractProps.propsAndStyles)(props);
    Object.assign(prop, (0, _util.pickNotNil)((0, _extractText.default)(prop, true)));
    this.root && this.root.setNativeProps(prop);
  };
  render() {
    const prop = (0, _extractProps.propsAndStyles)(this.props);
    const props = (0, _extractProps.default)({
      ...prop,
      x: null,
      y: null
    }, this);
    Object.assign(props, (0, _extractText.default)(prop, true));
    props.ref = this.refMethod;
    return /*#__PURE__*/React.createElement(_TextNativeComponent.default, props);
  }
}
exports.default = Text;
//# sourceMappingURL=Text.js.map