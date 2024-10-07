"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isPointerInBounds = isPointerInBounds;
exports.coneToDeviation = exports.degToRad = exports.PointerTypeMapping = void 0;

var _PointerType = require("../PointerType");

function isPointerInBounds(view, {
  x,
  y
}) {
  const rect = view.getBoundingClientRect();
  return x >= rect.left && x <= rect.right && y >= rect.top && y <= rect.bottom;
}

const PointerTypeMapping = new Map([['mouse', _PointerType.PointerType.MOUSE], ['touch', _PointerType.PointerType.TOUCH], ['pen', _PointerType.PointerType.STYLUS], ['none', _PointerType.PointerType.OTHER]]);
exports.PointerTypeMapping = PointerTypeMapping;

const degToRad = degrees => degrees * Math.PI / 180;

exports.degToRad = degToRad;

const coneToDeviation = degrees => Math.cos(degToRad(degrees / 2));

exports.coneToDeviation = coneToDeviation;
//# sourceMappingURL=utils.js.map