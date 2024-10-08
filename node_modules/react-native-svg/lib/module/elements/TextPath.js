import * as React from 'react';
import extractTransform from '../lib/extract/extractTransform';
import { withoutXY } from '../lib/extract/extractProps';
import extractText from '../lib/extract/extractText';
import { idPattern, pickNotNil } from '../lib/util';
import Shape from './Shape';
import TSpan from './TSpan';
import RNSVGTextPath from '../fabric/TextPathNativeComponent';
export default class TextPath extends Shape {
  static displayName = 'TextPath';
  setNativeProps = props => {
    const matrix = !props.matrix && extractTransform(props);
    if (matrix) {
      props.matrix = matrix;
    }
    Object.assign(props, pickNotNil(extractText(props, true)));
    this.root && this.root.setNativeProps(props);
  };
  render() {
    const {
      children,
      xlinkHref,
      href = xlinkHref,
      startOffset = 0,
      method,
      spacing,
      side,
      alignmentBaseline,
      midLine,
      ...prop
    } = this.props;
    const matched = href && href.match(idPattern);
    const match = matched && matched[1];
    if (match) {
      const props = withoutXY(this, prop);
      Object.assign(props, extractText({
        children
      }, true), {
        href: match,
        startOffset,
        method,
        spacing,
        side,
        alignmentBaseline,
        midLine
      });
      props.ref = this.refMethod;
      return /*#__PURE__*/React.createElement(RNSVGTextPath, props);
    }
    console.warn('Invalid `href` prop for `TextPath` element, expected a href like "#id", but got: "' + href + '"');
    return /*#__PURE__*/React.createElement(TSpan, {
      ref: this.refMethod
    }, children);
  }
}
//# sourceMappingURL=TextPath.js.map