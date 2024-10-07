function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from 'react';
import { withoutXY } from '../lib/extract/extractProps';
import { idPattern } from '../lib/util';
import Shape from './Shape';
import RNSVGUse from '../fabric/UseNativeComponent';
export default class Use extends Shape {
  static displayName = 'Use';
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
      children,
      x,
      y,
      width,
      height,
      xlinkHref,
      href = xlinkHref
    } = props;
    const matched = href && href.match(idPattern);
    const match = matched && matched[1];
    if (!match) {
      console.warn('Invalid `href` prop for `Use` element, expected a href like "#id", but got: "' + href + '"');
    }
    const useProps = {
      href: match ?? undefined,
      x,
      y,
      width,
      height
    };
    return /*#__PURE__*/React.createElement(RNSVGUse, _extends({
      ref: ref => this.refMethod(ref)
    }, withoutXY(this, props), useProps), children);
  }
}
//# sourceMappingURL=Use.js.map