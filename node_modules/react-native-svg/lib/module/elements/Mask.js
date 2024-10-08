function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from 'react';
import { withoutXY } from '../lib/extract/extractProps';
import units from '../lib/units';
import Shape from './Shape';
import RNSVGMask from '../fabric/MaskNativeComponent';
export default class Mask extends Shape {
  static displayName = 'Mask';
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
      x,
      y,
      width,
      height,
      maskUnits,
      maskContentUnits,
      children
    } = props;
    const maskProps = {
      x,
      y,
      width,
      height,
      maskUnits: maskUnits !== undefined ? units[maskUnits] : 0,
      maskContentUnits: maskContentUnits !== undefined ? units[maskContentUnits] : 1
    };
    return /*#__PURE__*/React.createElement(RNSVGMask, _extends({
      ref: ref => this.refMethod(ref)
    }, withoutXY(this, props), maskProps), children);
  }
}
//# sourceMappingURL=Mask.js.map