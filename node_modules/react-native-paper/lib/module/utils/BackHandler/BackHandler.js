function emptyFunction() {}
export const BackHandler = {
  exitApp: emptyFunction,
  addEventListener() {
    return {
      remove: emptyFunction
    };
  },
  removeEventListener: emptyFunction
};
//# sourceMappingURL=BackHandler.js.map