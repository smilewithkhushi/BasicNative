"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.alignEnum = void 0;
exports.default = extractViewBox;
exports.meetOrSliceTypes = void 0;
const meetOrSliceTypes = {
  meet: 0,
  slice: 1,
  none: 2
};
exports.meetOrSliceTypes = meetOrSliceTypes;
const alignEnum = ['xMinYMin', 'xMidYMin', 'xMaxYMin', 'xMinYMid', 'xMidYMid', 'xMaxYMid', 'xMinYMax', 'xMidYMax', 'xMaxYMax', 'none'].reduce((prev, name) => {
  prev[name] = name;
  return prev;
}, {});
exports.alignEnum = alignEnum;
const spacesRegExp = /\s+/;
function extractViewBox(props) {
  const {
    viewBox,
    preserveAspectRatio
  } = props;
  if (!viewBox) {
    return null;
  }
  const params = (Array.isArray(viewBox) ? viewBox : viewBox.trim().replace(/,/g, ' ').split(spacesRegExp)).map(Number);
  if (params.length !== 4 || params.some(isNaN)) {
    console.warn('Invalid `viewBox` prop:' + viewBox);
    return null;
  }
  const modes = preserveAspectRatio ? preserveAspectRatio.trim().split(spacesRegExp) : [];
  const align = modes[0];
  const meetOrSlice = modes[1];
  return {
    minX: params[0],
    minY: params[1],
    vbWidth: params[2],
    vbHeight: params[3],
    align: alignEnum[align] || 'xMidYMid',
    meetOrSlice: meetOrSliceTypes[meetOrSlice] || 0
  };
}
//# sourceMappingURL=extractViewBox.js.map