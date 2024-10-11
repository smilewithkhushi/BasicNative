function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from 'react';
import Path from './Path';
import Shape from './Shape';
import extractPolyPoints from '../lib/extract/extractPolyPoints';
export default class Polyline extends Shape {
  static displayName = 'Polyline';
  static defaultProps = {
    points: ''
  };
  setNativeProps = props => {
    const {
      points
    } = props;
    if (points) {
      props.d = `M${extractPolyPoints(points)}`;
    }
    this.root && this.root.setNativeProps(props);
  };
  render() {
    const {
      props
    } = this;
    const {
      points
    } = props;
    return /*#__PURE__*/React.createElement(Path, _extends({
      ref: this.refMethod,
      d: points && `M${extractPolyPoints(points)}`
    }, props));
  }
}
//# sourceMappingURL=Polyline.js.map