import * as React from 'react';
import { PanGestureHandler as PanGestureHandlerNative } from 'react-native-gesture-handler';
import DrawerGestureContext from '../utils/DrawerGestureContext';
export function PanGestureHandler(props) {
  const gestureRef = React.useRef(null);
  return /*#__PURE__*/React.createElement(DrawerGestureContext.Provider, {
    value: gestureRef
  }, /*#__PURE__*/React.createElement(PanGestureHandlerNative, props));
}
export { GestureHandlerRootView, State as GestureState, TapGestureHandler } from 'react-native-gesture-handler';
//# sourceMappingURL=GestureHandlerNative.js.map