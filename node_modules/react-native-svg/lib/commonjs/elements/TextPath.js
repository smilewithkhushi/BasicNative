"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var React = _interopRequireWildcard(require("react"));
var _extractTransform = _interopRequireDefault(require("../lib/extract/extractTransform"));
var _extractProps = require("../lib/extract/extractProps");
var _extractText = _interopRequireDefault(require("../lib/extract/extractText"));
var _util = require("../lib/util");
var _Shape = _interopRequireDefault(require("./Shape"));
var _TSpan = _interopRequireDefault(require("./TSpan"));
var _TextPathNativeComponent = _interopRequireDefault(require("../fabric/TextPathNativeComponent"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
class TextPath extends _Shape.default {
  static displayName = 'TextPath';
  setNativeProps = props => {
    const matrix = !props.matrix && (0, _extractTransform.default)(props);
    if (matrix) {
      props.matrix = matrix;
    }
    Object.assign(props, (0, _util.pickNotNil)((0, _extractText.default)(props, true)));
    this.root && this.root.setNativeProps(props);
  };
  render() {
    const {
      children,
      xlinkHref,
      href = xlinkHref,
      startOffset = 0,
      method,
      spacing,
      side,
      alignmentBaseline,
      midLine,
      ...prop
    } = this.props;
    const matched = href && href.match(_util.idPattern);
    const match = matched && matched[1];
    if (match) {
      const props = (0, _extractProps.withoutXY)(this, prop);
      Object.assign(props, (0, _extractText.default)({
        children
      }, true), {
        href: match,
        startOffset,
        method,
        spacing,
        side,
        alignmentBaseline,
        midLine
      });
      props.ref = this.refMethod;
      return /*#__PURE__*/React.createElement(_TextPathNativeComponent.default, props);
    }
    console.warn('Invalid `href` prop for `TextPath` element, expected a href like "#id", but got: "' + href + '"');
    return /*#__PURE__*/React.createElement(_TSpan.default, {
      ref: this.refMethod
    }, children);
  }
}
exports.default = TextPath;
//# sourceMappingURL=TextPath.js.map