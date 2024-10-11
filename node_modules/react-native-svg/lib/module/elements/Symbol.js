function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from 'react';
import extractViewBox from '../lib/extract/extractViewBox';
import Shape from './Shape';
import RNSVGSymbol from '../fabric/SymbolNativeComponent';
export default class Symbol extends Shape {
  static displayName = 'Symbol';
  render() {
    const {
      props
    } = this;
    const {
      id,
      children
    } = props;
    const symbolProps = {
      name: id
    };
    return /*#__PURE__*/React.createElement(RNSVGSymbol, _extends({
      ref: ref => this.refMethod(ref)
    }, symbolProps, extractViewBox(props)), children);
  }
}
//# sourceMappingURL=Symbol.js.map