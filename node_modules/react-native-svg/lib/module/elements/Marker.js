function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from 'react';
import extractViewBox from '../lib/extract/extractViewBox';
import Shape from './Shape';
import RNSVGMarker from '../fabric/MarkerNativeComponent';
export default class Marker extends Shape {
  static displayName = 'Marker';
  static defaultProps = {
    refX: 0,
    refY: 0,
    orient: '0',
    markerWidth: 3,
    markerHeight: 3,
    markerUnits: 'strokeWidth'
  };
  render() {
    const {
      props
    } = this;
    const {
      id,
      viewBox,
      preserveAspectRatio,
      refX,
      refY,
      markerUnits,
      orient,
      markerWidth,
      markerHeight,
      children
    } = props;
    const markerProps = {
      name: id,
      refX,
      refY,
      markerUnits,
      orient: String(orient),
      markerWidth,
      markerHeight
    };
    return /*#__PURE__*/React.createElement(RNSVGMarker, _extends({
      ref: ref => this.refMethod(ref)
    }, markerProps, extractViewBox({
      viewBox,
      preserveAspectRatio
    })), children);
  }
}
//# sourceMappingURL=Marker.js.map