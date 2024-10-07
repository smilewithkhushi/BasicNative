function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from 'react';
import { extract } from '../lib/extract/extractProps';
import Shape from './Shape';
import RNSVGLine from '../fabric/LineNativeComponent';
export default class Line extends Shape {
  static displayName = 'Line';
  static defaultProps = {
    x1: 0,
    y1: 0,
    x2: 0,
    y2: 0
  };
  render() {
    const {
      props
    } = this;
    const {
      x1,
      y1,
      x2,
      y2
    } = props;
    const lineProps = {
      ...extract(this, props),
      x1,
      y1,
      x2,
      y2
    };
    return /*#__PURE__*/React.createElement(RNSVGLine, _extends({
      ref: ref => this.refMethod(ref)
    }, lineProps));
  }
}
//# sourceMappingURL=Line.js.map