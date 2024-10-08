'use strict';

/* eslint-disable */
let findHostInstance_DEPRECATED;
let getInternalInstanceHandleFromPublicInstance;
export function getShadowNodeWrapperFromRef(ref) {
  var _ref$getScrollRespond, _ref$getScrollRespond2, _ref$getNativeScrollR, _ref$__internalInstan;
  // load findHostInstance_DEPRECATED lazily because it may not be available before render
  if (findHostInstance_DEPRECATED === undefined) {
    try {
      findHostInstance_DEPRECATED = require('react-native/Libraries/Renderer/shims/ReactFabric').findHostInstance_DEPRECATED;
    } catch (e) {
      findHostInstance_DEPRECATED = _ref => null;
    }
  }
  if (getInternalInstanceHandleFromPublicInstance === undefined) {
    try {
      getInternalInstanceHandleFromPublicInstance = require('react-native/Libraries/ReactNative/ReactFabricPublicInstance/ReactFabricPublicInstance').getInternalInstanceHandleFromPublicInstance ?? (_ref => _ref._internalInstanceHandle);
    } catch (e) {
      getInternalInstanceHandleFromPublicInstance = _ref => _ref._internalInstanceHandle;
    }
  }

  // taken from https://github.com/facebook/react-native/commit/803bb16531697233686efd475f004c1643e03617#diff-d8172256c6d63b5d32db10e54d7b10f37a26b337d5280d89f5bfd7bcea778292R196
  // @ts-ignore some weird stuff on RN 0.74 - see examples with scrollView
  const scrollViewRef = ref === null || ref === void 0 || (_ref$getScrollRespond = ref.getScrollResponder) === null || _ref$getScrollRespond === void 0 || (_ref$getScrollRespond = _ref$getScrollRespond.call(ref)) === null || _ref$getScrollRespond === void 0 || (_ref$getScrollRespond2 = _ref$getScrollRespond.getNativeScrollRef) === null || _ref$getScrollRespond2 === void 0 ? void 0 : _ref$getScrollRespond2.call(_ref$getScrollRespond);
  // @ts-ignore some weird stuff on RN 0.74  - see examples with scrollView
  const otherScrollViewRef = ref === null || ref === void 0 || (_ref$getNativeScrollR = ref.getNativeScrollRef) === null || _ref$getNativeScrollR === void 0 ? void 0 : _ref$getNativeScrollR.call(ref);
  // @ts-ignore some weird stuff on RN 0.74 - see setNativeProps example
  const textInputRef = ref === null || ref === void 0 || (_ref$__internalInstan = ref.__internalInstanceHandle) === null || _ref$__internalInstan === void 0 || (_ref$__internalInstan = _ref$__internalInstan.stateNode) === null || _ref$__internalInstan === void 0 ? void 0 : _ref$__internalInstan.node;
  let resolvedRef;
  if (scrollViewRef) {
    resolvedRef = scrollViewRef.__internalInstanceHandle.stateNode.node;
  } else if (otherScrollViewRef) {
    resolvedRef = otherScrollViewRef.__internalInstanceHandle.stateNode.node;
  } else if (textInputRef) {
    resolvedRef = textInputRef;
  } else {
    resolvedRef = getInternalInstanceHandleFromPublicInstance(findHostInstance_DEPRECATED(ref)).stateNode.node;
  }
  return resolvedRef;
}
//# sourceMappingURL=fabricUtils.js.map