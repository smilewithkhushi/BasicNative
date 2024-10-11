"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "GestureHandlerRootView", {
  enumerable: true,
  get: function () {
    return _reactNativeGestureHandler.GestureHandlerRootView;
  }
});
Object.defineProperty(exports, "GestureState", {
  enumerable: true,
  get: function () {
    return _reactNativeGestureHandler.State;
  }
});
exports.PanGestureHandler = PanGestureHandler;
Object.defineProperty(exports, "TapGestureHandler", {
  enumerable: true,
  get: function () {
    return _reactNativeGestureHandler.TapGestureHandler;
  }
});
var React = _interopRequireWildcard(require("react"));
var _reactNativeGestureHandler = require("react-native-gesture-handler");
var _DrawerGestureContext = _interopRequireDefault(require("../utils/DrawerGestureContext"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function PanGestureHandler(props) {
  const gestureRef = React.useRef(null);
  return /*#__PURE__*/React.createElement(_DrawerGestureContext.default.Provider, {
    value: gestureRef
  }, /*#__PURE__*/React.createElement(_reactNativeGestureHandler.PanGestureHandler, props));
}
//# sourceMappingURL=GestureHandlerNative.js.map