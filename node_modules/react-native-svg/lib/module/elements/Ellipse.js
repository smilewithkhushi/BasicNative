function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from 'react';
import { extract } from '../lib/extract/extractProps';
import Shape from './Shape';
import RNSVGEllipse from '../fabric/EllipseNativeComponent';
export default class Ellipse extends Shape {
  static displayName = 'Ellipse';
  static defaultProps = {
    cx: 0,
    cy: 0,
    rx: 0,
    ry: 0
  };
  render() {
    const {
      props
    } = this;
    const {
      cx,
      cy,
      rx,
      ry
    } = props;
    const ellipseProps = {
      ...extract(this, props),
      cx,
      cy,
      rx,
      ry
    };
    return /*#__PURE__*/React.createElement(RNSVGEllipse, _extends({
      ref: ref => this.refMethod(ref)
    }, ellipseProps));
  }
}
//# sourceMappingURL=Ellipse.js.map