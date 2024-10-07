function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from 'react';
import extractGradient from '../lib/extract/extractGradient';
import Shape from './Shape';
import RNSVGRadialGradient from '../fabric/RadialGradientNativeComponent';
export default class RadialGradient extends Shape {
  static displayName = 'RadialGradient';
  static defaultProps = {
    cx: '50%',
    cy: '50%',
    r: '50%'
  };
  render() {
    const {
      props
    } = this;
    const {
      rx,
      ry,
      r,
      cx,
      cy,
      fx = cx,
      fy = cy
    } = props;
    const radialGradientProps = {
      fx,
      fy,
      rx: rx || r,
      ry: ry || r,
      cx,
      cy
    };
    return /*#__PURE__*/React.createElement(RNSVGRadialGradient, _extends({
      ref: ref => this.refMethod(ref)
    }, radialGradientProps, extractGradient(props, this)));
  }
}
//# sourceMappingURL=RadialGradient.js.map