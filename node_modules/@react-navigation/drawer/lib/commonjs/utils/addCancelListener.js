"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addCancelListener = void 0;
const addCancelListener = callback => {
  var _document, _document$body, _document$body$addEve;
  const handleEscape = e => {
    if (e.key === 'Escape') {
      callback();
    }
  };
  (_document = document) === null || _document === void 0 ? void 0 : (_document$body = _document.body) === null || _document$body === void 0 ? void 0 : (_document$body$addEve = _document$body.addEventListener) === null || _document$body$addEve === void 0 ? void 0 : _document$body$addEve.call(_document$body, 'keyup', handleEscape);
  return () => {
    var _document2, _document2$body, _document2$body$remov;
    (_document2 = document) === null || _document2 === void 0 ? void 0 : (_document2$body = _document2.body) === null || _document2$body === void 0 ? void 0 : (_document2$body$remov = _document2$body.removeEventListener) === null || _document2$body$remov === void 0 ? void 0 : _document2$body$remov.call(_document2$body, 'keyup', handleEscape);
  };
};
exports.addCancelListener = addCancelListener;
//# sourceMappingURL=addCancelListener.js.map