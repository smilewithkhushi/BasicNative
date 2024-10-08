function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from 'react';
import { extract } from '../lib/extract/extractProps';
import Shape from './Shape';
import RNSVGCircle from '../fabric/CircleNativeComponent';
export default class Circle extends Shape {
  static displayName = 'Circle';
  static defaultProps = {
    cx: 0,
    cy: 0,
    r: 0
  };
  render() {
    const {
      props
    } = this;
    const {
      cx,
      cy,
      r
    } = props;
    const circleProps = {
      ...extract(this, props),
      cx,
      cy,
      r
    };
    return /*#__PURE__*/React.createElement(RNSVGCircle, _extends({
      ref: ref => this.refMethod(ref)
    }, circleProps));
  }
}
//# sourceMappingURL=Circle.js.map