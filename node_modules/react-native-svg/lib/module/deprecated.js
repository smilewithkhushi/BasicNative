export function showErrorCSS(name, type) {
  throw Error(`[react-native-svg] You are trying to import a ${type} \`${name}\` that has been moved to a sub-package. Change your import from \`react-native-svg\` to \`react-native-svg/css\`.`);
}
export function SvgCss() {
  showErrorCSS('SvgCss', 'component');
}
export function SvgCssUri() {
  showErrorCSS('SvgCssUri', 'component');
}
export function SvgWithCss() {
  showErrorCSS('SvgWithCss', 'component');
}
export function SvgWithCssUri() {
  showErrorCSS('SvgWithCssUri', 'component');
}
export function inlineStyles() {
  showErrorCSS('inlineStyles', 'function');
}
export function LocalSvg() {
  showErrorCSS('LocalSvg', 'component');
}
export function WithLocalSvg() {
  showErrorCSS('WithLocalSvg', 'component');
}
export function loadLocalRawResource() {
  showErrorCSS('loadLocalRawResource', 'function');
}
//# sourceMappingURL=deprecated.js.map