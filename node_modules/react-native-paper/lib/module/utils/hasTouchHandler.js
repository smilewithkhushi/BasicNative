const touchableEvents = ['onPress', 'onLongPress', 'onPressIn', 'onPressOut'];
export default function hasTouchHandler(touchableEventObject) {
  return touchableEvents.some(event => {
    return Boolean(touchableEventObject[event]);
  });
}
//# sourceMappingURL=hasTouchHandler.js.map