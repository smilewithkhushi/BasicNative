"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MD2DarkTheme = void 0;
var _color = _interopRequireDefault(require("color"));
var _colors = require("./colors");
var _LightTheme = require("./LightTheme");
var _fonts = _interopRequireDefault(require("../../fonts"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const MD2DarkTheme = {
  ..._LightTheme.MD2LightTheme,
  dark: true,
  mode: 'adaptive',
  version: 2,
  isV3: false,
  colors: {
    ..._LightTheme.MD2LightTheme.colors,
    primary: '#BB86FC',
    accent: '#03dac6',
    background: '#121212',
    surface: '#121212',
    error: '#CF6679',
    onSurface: '#FFFFFF',
    text: _colors.white,
    disabled: (0, _color.default)(_colors.white).alpha(0.38).rgb().string(),
    placeholder: (0, _color.default)(_colors.white).alpha(0.54).rgb().string(),
    backdrop: (0, _color.default)(_colors.black).alpha(0.5).rgb().string(),
    notification: _colors.pinkA100,
    tooltip: 'rgba(230, 225, 229, 1)'
  },
  fonts: (0, _fonts.default)({
    isV3: false
  })
};
exports.MD2DarkTheme = MD2DarkTheme;
//# sourceMappingURL=DarkTheme.js.map