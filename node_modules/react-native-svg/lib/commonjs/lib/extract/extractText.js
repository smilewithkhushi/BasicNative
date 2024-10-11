"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = extractText;
exports.extractFont = extractFont;
exports.setTSpan = setTSpan;
var React = _interopRequireWildcard(require("react"));
var _extractLengthList = _interopRequireDefault(require("./extractLengthList"));
var _util = require("../util");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
const fontRegExp = /^\s*((?:(?:normal|bold|italic)\s+)*)(?:(\d+(?:\.\d+)?(?:%|px|em|pt|pc|mm|cm|in]))*(?:\s*\/.*?)?\s+)?\s*"?([^"]*)/i;
const fontFamilyPrefix = /^[\s"']*/;
const fontFamilySuffix = /[\s"']*$/;
const commaReg = /\s*,\s*/g;
const cachedFontObjectsFromString = {};
function extractSingleFontFamily(fontFamilyString) {
  // SVG on the web allows for multiple font-families to be specified.
  // For compatibility, we extract the first font-family, hoping
  // we'll get a match.
  return fontFamilyString ? fontFamilyString.split(commaReg)[0].replace(fontFamilyPrefix, '').replace(fontFamilySuffix, '') : null;
}
function parseFontString(font) {
  if (Object.prototype.hasOwnProperty.call(cachedFontObjectsFromString, font)) {
    return cachedFontObjectsFromString[font];
  }
  const match = fontRegExp.exec(font);
  if (!match) {
    cachedFontObjectsFromString[font] = null;
    return null;
  }
  const isBold = /bold/.exec(match[1]);
  const isItalic = /italic/.exec(match[1]);
  cachedFontObjectsFromString[font] = {
    fontSize: match[2] || 12,
    fontWeight: isBold ? 'bold' : 'normal',
    fontStyle: isItalic ? 'italic' : 'normal',
    fontFamily: extractSingleFontFamily(match[3])
  };
  return cachedFontObjectsFromString[font];
}
function extractFont(props) {
  const {
    fontData,
    fontStyle,
    fontVariant,
    fontWeight,
    fontStretch,
    fontSize,
    fontFamily,
    textAnchor,
    textDecoration,
    letterSpacing,
    wordSpacing,
    kerning,
    fontFeatureSettings,
    fontVariantLigatures,
    fontVariationSettings,
    font
  } = props;
  const ownedFont = (0, _util.pickNotNil)({
    fontData,
    fontStyle,
    fontVariant,
    fontWeight,
    fontStretch,
    fontSize,
    fontFamily: extractSingleFontFamily(fontFamily),
    textAnchor,
    textDecoration,
    letterSpacing,
    wordSpacing,
    kerning,
    fontFeatureSettings,
    fontVariantLigatures,
    fontVariationSettings
  });
  const baseFont = typeof font === 'string' ? parseFontString(font) : font;
  return {
    ...baseFont,
    ...ownedFont
  };
}
let TSpan;
function setTSpan(TSpanImplementation) {
  TSpan = TSpanImplementation;
}
function getChild(child) {
  if (typeof child === 'string' || typeof child === 'number') {
    return /*#__PURE__*/React.createElement(TSpan, null, String(child));
  } else {
    return child;
  }
}
function extractText(props, container) {
  const {
    x,
    y,
    dx,
    dy,
    rotate,
    children,
    inlineSize,
    baselineShift,
    verticalAlign,
    alignmentBaseline
  } = props;
  const textChildren = typeof children === 'string' || typeof children === 'number' ? container ? /*#__PURE__*/React.createElement(TSpan, null, String(children)) : null : React.Children.count(children) > 1 || Array.isArray(children) ? React.Children.map(children, getChild) : children;
  return {
    content: textChildren === null ? String(children) : null,
    children: textChildren,
    inlineSize,
    baselineShift,
    verticalAlign,
    alignmentBaseline,
    font: extractFont(props),
    x: (0, _extractLengthList.default)(x),
    y: (0, _extractLengthList.default)(y),
    dx: (0, _extractLengthList.default)(dx),
    dy: (0, _extractLengthList.default)(dy),
    rotate: (0, _extractLengthList.default)(rotate)
  };
}
//# sourceMappingURL=extractText.js.map