"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.SVGPoint = exports.SVGMatrix = void 0;
exports.invert = invert;
exports.matrixTransform = matrixTransform;
exports.multiplyMatrices = multiplyMatrices;
exports.ownerSVGElement = void 0;
var _react = require("react");
var _SvgTouchableMixin = _interopRequireDefault(require("../lib/SvgTouchableMixin"));
var _extractBrush = _interopRequireDefault(require("../lib/extract/extractBrush"));
var _reactNative = require("react-native");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/* eslint-disable @typescript-eslint/no-var-requires */

function multiplyMatrices(l, r) {
  const {
    a: al,
    b: bl,
    c: cl,
    d: dl,
    e: el,
    f: fl
  } = l;
  const {
    a: ar,
    b: br,
    c: cr,
    d: dr,
    e: er,
    f: fr
  } = r;
  const a = al * ar + cl * br;
  const c = al * cr + cl * dr;
  const e = al * er + cl * fr + el;
  const b = bl * ar + dl * br;
  const d = bl * cr + dl * dr;
  const f = bl * er + dl * fr + fl;
  return {
    a,
    c,
    e,
    b,
    d,
    f
  };
}
function invert(_ref) {
  let {
    a,
    b,
    c,
    d,
    e,
    f
  } = _ref;
  const n = a * d - b * c;
  return {
    a: d / n,
    b: -b / n,
    c: -c / n,
    d: a / n,
    e: (c * f - d * e) / n,
    f: -(a * f - b * e) / n
  };
}
const deg2rad = Math.PI / 180;
class SVGMatrix {
  constructor(matrix) {
    if (matrix) {
      const {
        a,
        b,
        c,
        d,
        e,
        f
      } = matrix;
      this.a = a;
      this.b = b;
      this.c = c;
      this.d = d;
      this.e = e;
      this.f = f;
    } else {
      this.a = 1;
      this.b = 0;
      this.c = 0;
      this.d = 1;
      this.e = 0;
      this.f = 0;
    }
  }
  multiply(secondMatrix) {
    return new SVGMatrix(multiplyMatrices(this, secondMatrix));
  }
  inverse() {
    return new SVGMatrix(invert(this));
  }
  translate(x, y) {
    return new SVGMatrix(multiplyMatrices(this, {
      a: 1,
      b: 0,
      c: 0,
      d: 1,
      e: x,
      f: y
    }));
  }
  scale(scaleFactor) {
    return new SVGMatrix(multiplyMatrices(this, {
      a: scaleFactor,
      b: 0,
      c: 0,
      d: scaleFactor,
      e: 0,
      f: 0
    }));
  }
  scaleNonUniform(scaleFactorX, scaleFactorY) {
    return new SVGMatrix(multiplyMatrices(this, {
      a: scaleFactorX,
      b: 0,
      c: 0,
      d: scaleFactorY,
      e: 0,
      f: 0
    }));
  }
  rotate(angle) {
    const cos = Math.cos(deg2rad * angle);
    const sin = Math.sin(deg2rad * angle);
    return new SVGMatrix(multiplyMatrices(this, {
      a: cos,
      b: sin,
      c: -sin,
      d: cos,
      e: 0,
      f: 0
    }));
  }
  rotateFromVector(x, y) {
    const angle = Math.atan2(y, x);
    const cos = Math.cos(deg2rad * angle);
    const sin = Math.sin(deg2rad * angle);
    return new SVGMatrix(multiplyMatrices(this, {
      a: cos,
      b: sin,
      c: -sin,
      d: cos,
      e: 0,
      f: 0
    }));
  }
  flipX() {
    return new SVGMatrix(multiplyMatrices(this, {
      a: -1,
      b: 0,
      c: 0,
      d: 1,
      e: 0,
      f: 0
    }));
  }
  flipY() {
    return new SVGMatrix(multiplyMatrices(this, {
      a: 1,
      b: 0,
      c: 0,
      d: -1,
      e: 0,
      f: 0
    }));
  }
  skewX(angle) {
    return new SVGMatrix(multiplyMatrices(this, {
      a: 1,
      b: 0,
      c: Math.tan(deg2rad * angle),
      d: 1,
      e: 0,
      f: 0
    }));
  }
  skewY(angle) {
    return new SVGMatrix(multiplyMatrices(this, {
      a: 1,
      b: Math.tan(deg2rad * angle),
      c: 0,
      d: 1,
      e: 0,
      f: 0
    }));
  }
}
exports.SVGMatrix = SVGMatrix;
function matrixTransform(matrix, point) {
  const {
    a,
    b,
    c,
    d,
    e,
    f
  } = matrix;
  const {
    x,
    y
  } = point;
  return {
    x: a * x + c * y + e,
    y: b * x + d * y + f
  };
}
class SVGPoint {
  constructor(point) {
    if (point) {
      const {
        x,
        y
      } = point;
      this.x = x;
      this.y = y;
    } else {
      this.x = 0;
      this.y = 0;
    }
  }
  matrixTransform(matrix) {
    return new SVGPoint(matrixTransform(matrix, this));
  }
}
exports.SVGPoint = SVGPoint;
const ownerSVGElement = {
  createSVGPoint() {
    return new SVGPoint();
  },
  createSVGMatrix() {
    return new SVGMatrix();
  }
};
exports.ownerSVGElement = ownerSVGElement;
class Shape extends _react.Component {
  root = null;
  constructor(props) {
    super(props);
    (0, _SvgTouchableMixin.default)(this);
  }
  refMethod = instance => {
    this.root = instance;
  };

  // Hack to make Animated work with Shape components.
  getNativeScrollRef() {
    return this.root;
  }
  setNativeProps = props => {
    var _this$root;
    if (props.fill) {
      // @ts-ignore TODO: native `fill` prop differs from the one passed in props
      props.fill = (0, _extractBrush.default)(props.fill);
    }
    (_this$root = this.root) === null || _this$root === void 0 ? void 0 : _this$root.setNativeProps(props);
  };

  /*
   * The following native methods are experimental and likely broken in some
   * ways. If you have a use case for these, please open an issue with a
   * representative example / reproduction.
   * */
  getBBox = options => {
    const {
      fill = true,
      stroke = true,
      markers = true,
      clipped = true
    } = options || {};
    const handle = (0, _reactNative.findNodeHandle)(this.root);
    const RNSVGRenderableModule = require('../fabric/NativeSvgRenderableModule').default;
    return RNSVGRenderableModule.getBBox(handle, {
      fill,
      stroke,
      markers,
      clipped
    });
  };
  getCTM = () => {
    const handle = (0, _reactNative.findNodeHandle)(this.root);
    const RNSVGRenderableModule = require('../fabric/NativeSvgRenderableModule').default;
    return new SVGMatrix(RNSVGRenderableModule.getCTM(handle));
  };
  getScreenCTM = () => {
    const handle = (0, _reactNative.findNodeHandle)(this.root);
    const RNSVGRenderableModule = require('../fabric/NativeSvgRenderableModule').default;
    return new SVGMatrix(RNSVGRenderableModule.getScreenCTM(handle));
  };
  isPointInFill = options => {
    const handle = (0, _reactNative.findNodeHandle)(this.root);
    const RNSVGRenderableModule = require('../fabric/NativeSvgRenderableModule').default;
    return RNSVGRenderableModule.isPointInFill(handle, options);
  };
  isPointInStroke = options => {
    const handle = (0, _reactNative.findNodeHandle)(this.root);
    const RNSVGRenderableModule = require('../fabric/NativeSvgRenderableModule').default;
    return RNSVGRenderableModule.isPointInStroke(handle, options);
  };
  getTotalLength = () => {
    const handle = (0, _reactNative.findNodeHandle)(this.root);
    const RNSVGRenderableModule = require('../fabric/NativeSvgRenderableModule').default;
    return RNSVGRenderableModule.getTotalLength(handle);
  };
  getPointAtLength = length => {
    const handle = (0, _reactNative.findNodeHandle)(this.root);
    const RNSVGRenderableModule = require('../fabric/NativeSvgRenderableModule').default;
    return new SVGPoint(RNSVGRenderableModule.getPointAtLength(handle, {
      length
    }));
  };
}
exports.default = Shape;
Shape.prototype.ownerSVGElement = ownerSVGElement;
//# sourceMappingURL=Shape.js.map