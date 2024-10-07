"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addCancelListener = void 0;
var _reactNative = require("react-native");
const addCancelListener = callback => {
  const subscription = _reactNative.BackHandler.addEventListener('hardwareBackPress', callback);
  return () => {
    subscription.remove();
  };
};
exports.addCancelListener = addCancelListener;
//# sourceMappingURL=addCancelListener.native.js.map