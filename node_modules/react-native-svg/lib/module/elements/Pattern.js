function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from 'react';
import extractTransform from '../lib/extract/extractTransform';
import extractViewBox from '../lib/extract/extractViewBox';
import units from '../lib/units';
import Shape from './Shape';
import RNSVGPattern from '../fabric/PatternNativeComponent';
export default class Pattern extends Shape {
  static displayName = 'Pattern';
  static defaultProps = {
    x: '0%',
    y: '0%',
    width: '100%',
    height: '100%'
  };
  render() {
    const {
      props
    } = this;
    const {
      patternTransform,
      transform,
      id,
      x,
      y,
      width,
      height,
      patternUnits,
      patternContentUnits,
      children,
      viewBox,
      preserveAspectRatio
    } = props;
    const matrix = extractTransform(patternTransform || transform || props);
    const patternProps = {
      x,
      y,
      width,
      height,
      name: id,
      matrix,
      patternTransform: matrix,
      patternUnits: patternUnits && units[patternUnits] || 0,
      patternContentUnits: patternContentUnits ? units[patternContentUnits] : 1
    };
    return /*#__PURE__*/React.createElement(RNSVGPattern, _extends({
      ref: ref => this.refMethod(ref)
    }, patternProps, extractViewBox({
      viewBox,
      preserveAspectRatio
    })), children);
  }
}
//# sourceMappingURL=Pattern.js.map