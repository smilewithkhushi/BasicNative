function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from 'react';
import { Image } from 'react-native';
import { alignEnum, meetOrSliceTypes } from '../lib/extract/extractViewBox';
import { withoutXY } from '../lib/extract/extractProps';
import Shape from './Shape';
import RNSVGImage from '../fabric/ImageNativeComponent';
const spacesRegExp = /\s+/;
export default class SvgImage extends Shape {
  static displayName = 'Image';
  static defaultProps = {
    x: 0,
    y: 0,
    width: 0,
    height: 0,
    preserveAspectRatio: 'xMidYMid meet'
  };
  render() {
    const {
      props
    } = this;
    const {
      preserveAspectRatio,
      x,
      y,
      width,
      height,
      xlinkHref,
      href = xlinkHref
    } = props;
    const modes = preserveAspectRatio ? preserveAspectRatio.trim().split(spacesRegExp) : [];
    const align = modes[0];
    const meetOrSlice = modes[1];
    const imageProps = {
      x,
      y,
      width,
      height,
      meetOrSlice: meetOrSliceTypes[meetOrSlice] || 0,
      align: alignEnum[align] || 'xMidYMid',
      src: !href ? null : Image.resolveAssetSource(typeof href === 'string' ? {
        uri: href
      } : href)
    };
    return /*#__PURE__*/React.createElement(RNSVGImage, _extends({
      ref: ref => this.refMethod(ref)
    }, withoutXY(this, props), imageProps));
  }
}
//# sourceMappingURL=Image.js.map