function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from 'react';
import { withoutXY } from '../lib/extract/extractProps';
import Shape from './Shape';
import RNSVGRect from '../fabric/RectNativeComponent';
export default class Rect extends Shape {
  static displayName = 'Rect';
  static defaultProps = {
    x: 0,
    y: 0,
    width: 0,
    height: 0
  };
  render() {
    const {
      props
    } = this;
    const {
      x,
      y,
      width,
      height,
      rx,
      ry
    } = props;
    const rectProps = {
      x,
      y,
      width,
      height,
      rx,
      ry
    };
    return /*#__PURE__*/React.createElement(RNSVGRect, _extends({
      ref: ref => this.refMethod(ref)
    }, withoutXY(this, props), rectProps));
  }
}
//# sourceMappingURL=Rect.js.map