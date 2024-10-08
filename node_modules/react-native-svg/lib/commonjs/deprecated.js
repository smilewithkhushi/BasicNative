"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LocalSvg = LocalSvg;
exports.SvgCss = SvgCss;
exports.SvgCssUri = SvgCssUri;
exports.SvgWithCss = SvgWithCss;
exports.SvgWithCssUri = SvgWithCssUri;
exports.WithLocalSvg = WithLocalSvg;
exports.inlineStyles = inlineStyles;
exports.loadLocalRawResource = loadLocalRawResource;
exports.showErrorCSS = showErrorCSS;
function showErrorCSS(name, type) {
  throw Error(`[react-native-svg] You are trying to import a ${type} \`${name}\` that has been moved to a sub-package. Change your import from \`react-native-svg\` to \`react-native-svg/css\`.`);
}
function SvgCss() {
  showErrorCSS('SvgCss', 'component');
}
function SvgCssUri() {
  showErrorCSS('SvgCssUri', 'component');
}
function SvgWithCss() {
  showErrorCSS('SvgWithCss', 'component');
}
function SvgWithCssUri() {
  showErrorCSS('SvgWithCssUri', 'component');
}
function inlineStyles() {
  showErrorCSS('inlineStyles', 'function');
}
function LocalSvg() {
  showErrorCSS('LocalSvg', 'component');
}
function WithLocalSvg() {
  showErrorCSS('WithLocalSvg', 'component');
}
function loadLocalRawResource() {
  showErrorCSS('loadLocalRawResource', 'function');
}
//# sourceMappingURL=deprecated.js.map