"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = hasTouchHandler;
const touchableEvents = ['onPress', 'onLongPress', 'onPressIn', 'onPressOut'];
function hasTouchHandler(touchableEventObject) {
  return touchableEvents.some(event => {
    return Boolean(touchableEventObject[event]);
  });
}
//# sourceMappingURL=hasTouchHandler.js.map