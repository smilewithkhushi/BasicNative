function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from 'react';
import extractProps, { propsAndStyles } from '../lib/extract/extractProps';
import { extractFont } from '../lib/extract/extractText';
import extractTransform from '../lib/extract/extractTransform';
import Shape from './Shape';
import RNSVGGroup from '../fabric/GroupNativeComponent';
export default class G extends Shape {
  static displayName = 'G';
  setNativeProps = props => {
    var _this$root;
    const matrix = !props.matrix && extractTransform(props);
    if (matrix) {
      props.matrix = matrix;
    }
    (_this$root = this.root) === null || _this$root === void 0 ? void 0 : _this$root.setNativeProps(props);
  };
  render() {
    const {
      props
    } = this;
    const prop = propsAndStyles(props);
    const extractedProps = extractProps(prop, this);
    const font = extractFont(prop);
    if (hasProps(font)) {
      extractedProps.font = font;
    }
    return /*#__PURE__*/React.createElement(RNSVGGroup, _extends({
      ref: ref => this.refMethod(ref)
    }, extractedProps), props.children);
  }
}
const hasProps = obj => {
  // eslint-disable-next-line no-unreachable-loop
  for (const _ in obj) {
    return true;
  }
  return false;
};
//# sourceMappingURL=G.js.map