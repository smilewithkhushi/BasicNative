function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from 'react';
import { extract } from '../lib/extract/extractProps';
import Shape from './Shape';
import RNSVGPath from '../fabric/PathNativeComponent';
export default class Path extends Shape {
  static displayName = 'Path';
  render() {
    const {
      props
    } = this;
    const {
      d
    } = props;
    const pathProps = {
      ...extract(this, props),
      d
    };
    return /*#__PURE__*/React.createElement(RNSVGPath, _extends({
      ref: ref => this.refMethod(ref)
    }, pathProps));
  }
}
//# sourceMappingURL=Path.js.map