import { PointerType } from '../PointerType';
export function isPointerInBounds(view, {
  x,
  y
}) {
  const rect = view.getBoundingClientRect();
  return x >= rect.left && x <= rect.right && y >= rect.top && y <= rect.bottom;
}
export const PointerTypeMapping = new Map([['mouse', PointerType.MOUSE], ['touch', PointerType.TOUCH], ['pen', PointerType.STYLUS], ['none', PointerType.OTHER]]);
export const degToRad = degrees => degrees * Math.PI / 180;
export const coneToDeviation = degrees => Math.cos(degToRad(degrees / 2));
//# sourceMappingURL=utils.js.map