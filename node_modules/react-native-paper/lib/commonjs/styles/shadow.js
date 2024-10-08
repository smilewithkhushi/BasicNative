"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = shadow;
var _reactNative = require("react-native");
var MD2Colors = _interopRequireWildcard(require("./themes/v2/colors"));
var _tokens = require("./themes/v3/tokens");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
const SHADOW_COLOR = MD2Colors.black;
const SHADOW_OPACITY = 0.24;
const MD3_SHADOW_OPACITY = 0.3;
const MD3_SHADOW_COLOR = _tokens.MD3Colors.primary0;
function shadow() {
  let elevation = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  let isV3 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  return isV3 ? v3Shadow(elevation) : v2Shadow(elevation);
}
function v2Shadow() {
  let elevation = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  if (elevation instanceof _reactNative.Animated.Value) {
    const inputRange = [0, 1, 2, 3, 8, 24];
    return {
      shadowColor: SHADOW_COLOR,
      shadowOffset: {
        width: new _reactNative.Animated.Value(0),
        height: elevation.interpolate({
          inputRange,
          outputRange: [0, 0.5, 0.75, 2, 7, 23]
        })
      },
      shadowOpacity: elevation.interpolate({
        inputRange: [0, 1],
        outputRange: [0, SHADOW_OPACITY],
        extrapolate: 'clamp'
      }),
      shadowRadius: elevation.interpolate({
        inputRange,
        outputRange: [0, 0.75, 1.5, 3, 8, 24]
      })
    };
  } else {
    if (elevation === 0) {
      return {};
    }
    let height, radius;
    switch (elevation) {
      case 1:
        height = 0.5;
        radius = 0.75;
        break;
      case 2:
        height = 0.75;
        radius = 1.5;
        break;
      default:
        height = elevation - 1;
        radius = elevation;
    }
    return {
      shadowColor: SHADOW_COLOR,
      shadowOffset: {
        width: 0,
        height
      },
      shadowOpacity: SHADOW_OPACITY,
      shadowRadius: radius
    };
  }
}
function v3Shadow() {
  let elevation = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  const inputRange = [0, 1, 2, 3, 4, 5];
  const shadowHeight = [0, 1, 2, 4, 6, 8];
  const shadowRadius = [0, 3, 6, 8, 10, 12];
  if (elevation instanceof _reactNative.Animated.Value) {
    return {
      shadowColor: MD3_SHADOW_COLOR,
      shadowOffset: {
        width: new _reactNative.Animated.Value(0),
        height: elevation.interpolate({
          inputRange,
          outputRange: shadowHeight
        })
      },
      shadowOpacity: elevation.interpolate({
        inputRange: [0, 1],
        outputRange: [0, MD3_SHADOW_OPACITY],
        extrapolate: 'clamp'
      }),
      shadowRadius: elevation.interpolate({
        inputRange,
        outputRange: shadowRadius
      })
    };
  } else {
    return {
      shadowColor: MD3_SHADOW_COLOR,
      shadowOpacity: elevation ? MD3_SHADOW_OPACITY : 0,
      shadowOffset: {
        width: 0,
        height: shadowHeight[elevation]
      },
      shadowRadius: shadowRadius[elevation]
    };
  }
}
//# sourceMappingURL=shadow.js.map