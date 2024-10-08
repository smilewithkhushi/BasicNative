function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from 'react';
import extractGradient from '../lib/extract/extractGradient';
import Shape from './Shape';
import RNSVGLinearGradient from '../fabric/LinearGradientNativeComponent';
export default class LinearGradient extends Shape {
  static displayName = 'LinearGradient';
  static defaultProps = {
    x1: '0%',
    y1: '0%',
    x2: '100%',
    y2: '0%'
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
    const linearGradientProps = {
      x1,
      y1,
      x2,
      y2
    };
    return /*#__PURE__*/React.createElement(RNSVGLinearGradient, _extends({
      ref: ref => this.refMethod(ref)
    }, linearGradientProps, extractGradient(props, this)));
  }
}
//# sourceMappingURL=LinearGradient.js.map