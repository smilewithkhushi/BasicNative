function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from 'react';
import { withoutXY } from '../lib/extract/extractProps';
import G from './G';
import RNSVGForeignObject from '../fabric/ForeignObjectNativeComponent';
export default class ForeignObject extends G {
  static displayName = 'ForeignObject';
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
      children
    } = props;
    const foreignObjectProps = {
      x,
      y,
      width,
      height
    };
    return /*#__PURE__*/React.createElement(RNSVGForeignObject, _extends({
      ref: ref => this.refMethod(ref)
    }, withoutXY(this, props), foreignObjectProps), children);
  }
}
//# sourceMappingURL=ForeignObject.js.map