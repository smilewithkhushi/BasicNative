"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.WebShape = exports.Use = exports.TextPath = exports.Text = exports.TSpan = exports.Symbol = exports.Svg = exports.Stop = exports.Rect = exports.RadialGradient = exports.Polyline = exports.Polygon = exports.Pattern = exports.Path = exports.Mask = exports.Marker = exports.LinearGradient = exports.Line = exports.Image = exports.G = exports.ForeignObject = exports.Ellipse = exports.Defs = exports.ClipPath = exports.Circle = void 0;
var React = _interopRequireWildcard(require("react"));
var _reactNative = require("react-native");
var _SvgTouchableMixin = _interopRequireDefault(require("./lib/SvgTouchableMixin"));
var _resolve = require("./lib/resolve");
var _extractTransform = require("./lib/extract/extractTransform");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
const hasTouchableProperty = props => props.onPress || props.onPressIn || props.onPressOut || props.onLongPress;
const camelCaseToDashed = camelCase => {
  return camelCase.replace(/[A-Z]/g, m => '-' + m.toLowerCase());
};
function stringifyTransformProps(transformProps) {
  const transformArray = [];
  if (transformProps.translate != null) {
    transformArray.push(`translate(${transformProps.translate})`);
  }
  if (transformProps.translateX != null || transformProps.translateY != null) {
    transformArray.push(`translate(${transformProps.translateX || 0}, ${transformProps.translateY || 0})`);
  }
  if (transformProps.scale != null) {
    transformArray.push(`scale(${transformProps.scale})`);
  }
  if (transformProps.scaleX != null || transformProps.scaleY != null) {
    transformArray.push(`scale(${transformProps.scaleX || 1}, ${transformProps.scaleY || 1})`);
  }
  // rotation maps to rotate, not to collide with the text rotate attribute (which acts per glyph rather than block)
  if (transformProps.rotation != null) {
    transformArray.push(`rotate(${transformProps.rotation})`);
  }
  if (transformProps.skewX != null) {
    transformArray.push(`skewX(${transformProps.skewX})`);
  }
  if (transformProps.skewY != null) {
    transformArray.push(`skewY(${transformProps.skewY})`);
  }
  return transformArray;
}
function parseTransformProp(transform, props) {
  const transformArray = [];
  props && transformArray.push(...stringifyTransformProps(props));
  if (Array.isArray(transform)) {
    if (typeof transform[0] === 'number') {
      transformArray.push(`matrix(${transform.join(' ')})`);
    } else {
      const stringifiedProps = (0, _extractTransform.transformsArrayToProps)(transform);
      transformArray.push(...stringifyTransformProps(stringifiedProps));
    }
  } else if (typeof transform === 'string') {
    transformArray.push(transform);
  }
  return transformArray.length ? transformArray.join(' ') : undefined;
}

/**
 * `react-native-svg` supports additional props that aren't defined in the spec.
 * This function replaces them in a spec conforming manner.
 *
 * @param {WebShape} self Instance given to us.
 * @param {Object?} props Optional overridden props given to us.
 * @returns {Object} Cleaned props object.
 * @private
 */
const prepare = function (self) {
  let props = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : self.props;
  const {
    transform,
    origin,
    originX,
    originY,
    fontFamily,
    fontSize,
    fontWeight,
    fontStyle,
    style,
    forwardedRef,
    gradientTransform,
    patternTransform,
    ...rest
  } = props;
  const clean = {
    ...(hasTouchableProperty(props) ? {
      onStartShouldSetResponder: self.touchableHandleStartShouldSetResponder,
      onResponderTerminationRequest: self.touchableHandleResponderTerminationRequest,
      onResponderGrant: self.touchableHandleResponderGrant,
      onResponderMove: self.touchableHandleResponderMove,
      onResponderRelease: self.touchableHandleResponderRelease,
      onResponderTerminate: self.touchableHandleResponderTerminate
    } : null),
    ...rest
  };
  if (origin != null) {
    clean['transform-origin'] = origin.toString().replace(',', ' ');
  } else if (originX != null || originY != null) {
    clean['transform-origin'] = `${originX || 0} ${originY || 0}`;
  }

  // we do it like this because setting transform as undefined causes error in web
  const parsedTransform = parseTransformProp(transform, props);
  if (parsedTransform) {
    clean.transform = parsedTransform;
  }
  const parsedGradientTransform = parseTransformProp(gradientTransform);
  if (parsedGradientTransform) {
    clean.gradientTransform = parsedGradientTransform;
  }
  const parsedPatternTransform = parseTransformProp(patternTransform);
  if (parsedPatternTransform) {
    clean.patternTransform = parsedPatternTransform;
  }
  clean.ref = el => {
    self.elementRef.current = el;
    if (typeof forwardedRef === 'function') {
      forwardedRef(el);
    } else if (forwardedRef) {
      forwardedRef.current = el;
    }
  };
  const styles = {};
  if (fontFamily != null) {
    styles.fontFamily = fontFamily;
  }
  if (fontSize != null) {
    styles.fontSize = fontSize;
  }
  if (fontWeight != null) {
    styles.fontWeight = fontWeight;
  }
  if (fontStyle != null) {
    styles.fontStyle = fontStyle;
  }
  clean.style = (0, _resolve.resolve)(style, styles);
  return clean;
};
const getBoundingClientRect = node => {
  if (node) {
    const isElement = node.nodeType === 1; /* Node.ELEMENT_NODE */
    if (isElement && typeof node.getBoundingClientRect === 'function') {
      return node.getBoundingClientRect();
    }
  }
  throw new Error('Can not get boundingClientRect of ' + node || 'undefined');
};
const measureLayout = (node, callback) => {
  const relativeNode = node === null || node === void 0 ? void 0 : node.parentNode;
  if (relativeNode) {
    setTimeout(() => {
      // @ts-expect-error TODO: handle it better
      const relativeRect = getBoundingClientRect(relativeNode);
      const {
        height,
        left,
        top,
        width
      } = getBoundingClientRect(node);
      const x = left - relativeRect.left;
      const y = top - relativeRect.top;
      callback(x, y, width, height, left, top);
    }, 0);
  }
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function remeasure() {
  const tag = this.state.touchable.responderID;
  if (tag === null) {
    return;
  }
  measureLayout(tag, this._handleQueryLayout);
}
class WebShape extends React.Component {
  prepareProps(props) {
    return props;
  }
  elementRef = /*#__PURE__*/React.createRef();
  lastMergedProps = {};

  /**
   * disclaimer: I am not sure why the props are wrapped in a `style` attribute here, but that's how reanimated calls it
   */
  setNativeProps(props) {
    const merged = Object.assign({}, this.props, this.lastMergedProps, props.style);
    this.lastMergedProps = merged;
    const clean = prepare(this, this.prepareProps(merged));
    const current = this.elementRef.current;
    if (current) {
      for (const cleanAttribute of Object.keys(clean)) {
        const cleanValue = clean[cleanAttribute];
        switch (cleanAttribute) {
          case 'ref':
          case 'children':
            break;
          case 'style':
            // style can be an object here or an array, so we convert it to an array and assign each element
            for (const partialStyle of [].concat(clean.style ?? [])) {
              Object.assign(current.style, partialStyle);
            }
            break;
          default:
            // apply all other incoming prop updates as attributes on the node
            // same logic as in https://github.com/software-mansion/react-native-reanimated/blob/d04720c82f5941532991b235787285d36d717247/src/reanimated2/js-reanimated/index.ts#L38-L39
            // @ts-expect-error TODO: fix this
            current.setAttribute(camelCaseToDashed(cleanAttribute), cleanValue);
            break;
        }
      }
    }
  }
  constructor(props) {
    super(props);

    // Do not attach touchable mixin handlers if SVG element doesn't have a touchable prop
    if (hasTouchableProperty(props)) {
      (0, _SvgTouchableMixin.default)(this);
    }
    this._remeasureMetricsOnActivation = remeasure.bind(this);
  }
  render() {
    if (!this.tag) {
      throw new Error('When extending `WebShape` you need to overwrite either `tag` or `render`!');
    }
    this.lastMergedProps = {};
    return (0, _reactNative.unstable_createElement)(this.tag, prepare(this, this.prepareProps(this.props)));
  }
}
exports.WebShape = WebShape;
class Circle extends WebShape {
  tag = 'circle';
}
exports.Circle = Circle;
class ClipPath extends WebShape {
  tag = 'clipPath';
}
exports.ClipPath = ClipPath;
class Defs extends WebShape {
  tag = 'defs';
}
exports.Defs = Defs;
class Ellipse extends WebShape {
  tag = 'ellipse';
}
exports.Ellipse = Ellipse;
class G extends WebShape {
  tag = 'g';
  prepareProps(props) {
    const {
      x,
      y,
      ...rest
    } = props;
    if ((x || y) && !rest.translate) {
      rest.translate = `${x || 0}, ${y || 0}`;
    }
    return rest;
  }
}
exports.G = G;
class Image extends WebShape {
  tag = 'image';
}
exports.Image = Image;
class Line extends WebShape {
  tag = 'line';
}
exports.Line = Line;
class LinearGradient extends WebShape {
  tag = 'linearGradient';
}
exports.LinearGradient = LinearGradient;
class Path extends WebShape {
  tag = 'path';
}
exports.Path = Path;
class Polygon extends WebShape {
  tag = 'polygon';
}
exports.Polygon = Polygon;
class Polyline extends WebShape {
  tag = 'polyline';
}
exports.Polyline = Polyline;
class RadialGradient extends WebShape {
  tag = 'radialGradient';
}
exports.RadialGradient = RadialGradient;
class Rect extends WebShape {
  tag = 'rect';
}
exports.Rect = Rect;
class Stop extends WebShape {
  tag = 'stop';
}

/* Taken from here: https://gist.github.com/jennyknuth/222825e315d45a738ed9d6e04c7a88d0 */
exports.Stop = Stop;
function encodeSvg(svgString) {
  return svgString.replace('<svg', ~svgString.indexOf('xmlns') ? '<svg' : '<svg xmlns="http://www.w3.org/2000/svg"').replace(/"/g, "'").replace(/%/g, '%25').replace(/#/g, '%23').replace(/{/g, '%7B').replace(/}/g, '%7D').replace(/</g, '%3C').replace(/>/g, '%3E').replace(/\s+/g, ' ');
}
class Svg extends WebShape {
  tag = 'svg';
  toDataURL(callback) {
    let options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    const ref = this.elementRef.current;
    if (ref === null) {
      return;
    }
    const rect = getBoundingClientRect(ref);
    const width = Number(options.width) || rect.width;
    const height = Number(options.height) || rect.height;
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('viewBox', `0 0 ${rect.width} ${rect.height}`);
    svg.setAttribute('width', String(width));
    svg.setAttribute('height', String(height));
    svg.appendChild(ref.cloneNode(true));
    const img = new window.Image();
    img.onload = () => {
      const canvas = document.createElement('canvas');
      canvas.width = width;
      canvas.height = height;
      const context = canvas.getContext('2d');
      context === null || context === void 0 ? void 0 : context.drawImage(img, 0, 0);
      callback(canvas.toDataURL().replace('data:image/png;base64,', ''));
    };
    img.src = `data:image/svg+xml;utf8,${encodeSvg(new window.XMLSerializer().serializeToString(svg))}`;
  }
}
exports.Svg = Svg;
class Symbol extends WebShape {
  tag = 'symbol';
}
exports.Symbol = Symbol;
class Text extends WebShape {
  tag = 'text';
}
exports.Text = Text;
class TSpan extends WebShape {
  tag = 'tspan';
}
exports.TSpan = TSpan;
class TextPath extends WebShape {
  tag = 'textPath';
}
exports.TextPath = TextPath;
class Use extends WebShape {
  tag = 'use';
}
exports.Use = Use;
class Mask extends WebShape {
  tag = 'mask';
}
exports.Mask = Mask;
class ForeignObject extends WebShape {
  tag = 'foreignObject';
}
exports.ForeignObject = ForeignObject;
class Marker extends WebShape {
  tag = 'marker';
}
exports.Marker = Marker;
class Pattern extends WebShape {
  tag = 'pattern';
}
exports.Pattern = Pattern;
var _default = Svg;
exports.default = _default;
//# sourceMappingURL=ReactNativeSVG.web.js.map