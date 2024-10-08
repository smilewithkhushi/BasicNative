"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var React = _interopRequireWildcard(require("react"));
var _extractProps = _interopRequireWildcard(require("../lib/extract/extractProps"));
var _extractText = require("../lib/extract/extractText");
var _extractTransform = _interopRequireDefault(require("../lib/extract/extractTransform"));
var _Shape = _interopRequireDefault(require("./Shape"));
var _GroupNativeComponent = _interopRequireDefault(require("../fabric/GroupNativeComponent"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
class G extends _Shape.default {
  static displayName = 'G';
  setNativeProps = props => {
    var _this$root;
    const matrix = !props.matrix && (0, _extractTransform.default)(props);
    if (matrix) {
      props.matrix = matrix;
    }
    (_this$root = this.root) === null || _this$root === void 0 ? void 0 : _this$root.setNativeProps(props);
  };
  render() {
    const {
      props
    } = this;
    const prop = (0, _extractProps.propsAndStyles)(props);
    const extractedProps = (0, _extractProps.default)(prop, this);
    const font = (0, _extractText.extractFont)(prop);
    if (hasProps(font)) {
      extractedProps.font = font;
    }
    return /*#__PURE__*/React.createElement(_GroupNativeComponent.default, _extends({
      ref: ref => this.refMethod(ref)
    }, extractedProps), props.children);
  }
}
exports.default = G;
const hasProps = obj => {
  // eslint-disable-next-line no-unreachable-loop
  for (const _ in obj) {
    return true;
  }
  return false;
};
//# sourceMappingURL=G.js.map