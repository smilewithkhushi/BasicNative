"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MD2LightTheme = void 0;
var _color = _interopRequireDefault(require("color"));
var _colors = require("./colors");
var _fonts = _interopRequireDefault(require("../../fonts"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const MD2LightTheme = {
  dark: false,
  roundness: 4,
  version: 2,
  isV3: false,
  colors: {
    primary: '#6200ee',
    accent: '#03dac4',
    background: '#f6f6f6',
    surface: _colors.white,
    error: '#B00020',
    text: _colors.black,
    onSurface: '#000000',
    disabled: (0, _color.default)(_colors.black).alpha(0.26).rgb().string(),
    placeholder: (0, _color.default)(_colors.black).alpha(0.54).rgb().string(),
    backdrop: (0, _color.default)(_colors.black).alpha(0.5).rgb().string(),
    notification: _colors.pinkA400,
    tooltip: 'rgba(28, 27, 31, 1)'
  },
  fonts: (0, _fonts.default)({
    isV3: false
  }),
  animation: {
    scale: 1.0
  }
};
exports.MD2LightTheme = MD2LightTheme;
//# sourceMappingURL=LightTheme.js.map