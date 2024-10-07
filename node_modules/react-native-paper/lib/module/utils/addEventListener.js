export function addEventListener(Module) {
  for (var _len = arguments.length, rest = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    rest[_key - 1] = arguments[_key];
  }
  const [eventName, handler] = rest;
  let removed = false;
  const subscription = Module.addEventListener(eventName, handler) ?? {
    remove: () => {
      var _Module$removeEventLi, _Module$remove;
      if (removed) {
        return;
      }
      (_Module$removeEventLi = Module.removeEventListener) === null || _Module$removeEventLi === void 0 ? void 0 : _Module$removeEventLi.call(Module, eventName, handler);
      (_Module$remove = Module.remove) === null || _Module$remove === void 0 ? void 0 : _Module$remove.call(Module, eventName, handler);
      removed = true;
    }
  };
  return subscription;
}
export function addListener(Module) {
  for (var _len2 = arguments.length, rest = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
    rest[_key2 - 1] = arguments[_key2];
  }
  const [eventName, handler] = rest;
  let removed = false;
  const subscription = Module.addListener(eventName, handler) ?? {
    remove: () => {
      if (removed) {
        return;
      }
      Module.removeEventListener(eventName, handler);
      removed = true;
    }
  };
  return subscription;
}
//# sourceMappingURL=addEventListener.js.map