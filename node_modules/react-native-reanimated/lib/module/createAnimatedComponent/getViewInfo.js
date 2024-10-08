'use strict';

/* eslint-disable @typescript-eslint/no-explicit-any */

// This is a makeshift solution to handle both 0.73 and 0.74 versions of React Native.
export let getViewInfo = element => {
  if (element._nativeTag !== undefined && element.__nativeTag !== null) {
    getViewInfo = getViewInfo73;
    return getViewInfo73(element);
  } else if (element.__nativeTag !== undefined && element.__nativeTag !== null) {
    getViewInfo = getViewInfoLatest;
    return getViewInfoLatest(element);
  }
  return getViewInfo73(element);
};
function getViewInfo73(element) {
  var _element$viewConfig;
  return {
    // we can access view tag in the same way it's accessed here https://github.com/facebook/react/blob/e3f4eb7272d4ca0ee49f27577156b57eeb07cf73/packages/react-native-renderer/src/ReactFabric.js#L146
    viewName: element === null || element === void 0 || (_element$viewConfig = element.viewConfig) === null || _element$viewConfig === void 0 ? void 0 : _element$viewConfig.uiViewClassName,
    /**
     * RN uses viewConfig for components for storing different properties of the component(example: https://github.com/facebook/react-native/blob/main/packages/react-native/Libraries/Components/ScrollView/ScrollViewNativeComponent.js#L24).
     * The name we're looking for is in the field named uiViewClassName.
     */
    viewTag: element === null || element === void 0 ? void 0 : element._nativeTag,
    viewConfig: element === null || element === void 0 ? void 0 : element.viewConfig
  };
}
function getViewInfoLatest(element) {
  var _element$_viewConfig;
  return {
    viewName: element === null || element === void 0 || (_element$_viewConfig = element._viewConfig) === null || _element$_viewConfig === void 0 ? void 0 : _element$_viewConfig.uiViewClassName,
    viewTag: element === null || element === void 0 ? void 0 : element.__nativeTag,
    viewConfig: element === null || element === void 0 ? void 0 : element._viewConfig
  };
}
//# sourceMappingURL=getViewInfo.js.map