function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from 'react';
import { extract } from '../lib/extract/extractProps';
import Shape from './Shape';
import RNSVGClipPath from '../fabric/ClipPathNativeComponent';
export default class ClipPath extends Shape {
  static displayName = 'ClipPath';
  render() {
    const {
      props
    } = this;
    return /*#__PURE__*/React.createElement(RNSVGClipPath, _extends({
      ref: this.refMethod
    }, extract(this, props)), props.children);
  }
}
//# sourceMappingURL=ClipPath.js.map