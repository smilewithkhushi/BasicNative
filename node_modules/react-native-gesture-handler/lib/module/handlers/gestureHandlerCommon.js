// Previous types exported gesture handlers as classes which creates an interface and variable, both named the same as class.
// Without those types, we'd introduce breaking change, forcing users to prefix every handler type specification with typeof
// e.g. React.createRef<TapGestureHandler> -> React.createRef<typeof TapGestureHandler>.
// See https://www.typescriptlang.org/docs/handbook/classes.html#constructor-functions for reference.
import { Platform, findNodeHandle as findNodeHandleRN } from 'react-native';
import { handlerIDToTag } from './handlersRegistry';
import { toArray } from '../utils';
import RNGestureHandlerModule from '../RNGestureHandlerModule';
import { ghQueueMicrotask } from '../ghQueueMicrotask';
const commonProps = ['id', 'enabled', 'shouldCancelWhenOutside', 'hitSlop', 'cancelsTouchesInView', 'userSelect', 'activeCursor', 'mouseButton', 'enableContextMenu', 'touchAction'];
const componentInteractionProps = ['waitFor', 'simultaneousHandlers', 'blocksHandlers'];
export const baseGestureHandlerProps = [...commonProps, ...componentInteractionProps, 'onBegan', 'onFailed', 'onCancelled', 'onActivated', 'onEnded', 'onGestureEvent', 'onHandlerStateChange'];
export const baseGestureHandlerWithMonitorProps = [...commonProps, 'needsPointerData', 'manualActivation'];
export let MouseButton;

(function (MouseButton) {
  MouseButton[MouseButton["LEFT"] = 1] = "LEFT";
  MouseButton[MouseButton["RIGHT"] = 2] = "RIGHT";
  MouseButton[MouseButton["MIDDLE"] = 4] = "MIDDLE";
  MouseButton[MouseButton["BUTTON_4"] = 8] = "BUTTON_4";
  MouseButton[MouseButton["BUTTON_5"] = 16] = "BUTTON_5";
  MouseButton[MouseButton["ALL"] = 31] = "ALL";
})(MouseButton || (MouseButton = {}));

function isConfigParam(param, name) {
  // param !== Object(param) returns false if `param` is a function
  // or an object and returns true if `param` is null
  return param !== undefined && (param !== Object(param) || !('__isNative' in param)) && name !== 'onHandlerStateChange' && name !== 'onGestureEvent';
}

export function filterConfig(props, validProps, defaults = {}) {
  const filteredConfig = { ...defaults
  };

  for (const key of validProps) {
    let value = props[key];

    if (isConfigParam(value, key)) {
      if (key === 'simultaneousHandlers' || key === 'waitFor') {
        value = transformIntoHandlerTags(props[key]);
      } else if (key === 'hitSlop' && typeof value !== 'object') {
        value = {
          top: value,
          left: value,
          bottom: value,
          right: value
        };
      }

      filteredConfig[key] = value;
    }
  }

  return filteredConfig;
}

function transformIntoHandlerTags(handlerIDs) {
  handlerIDs = toArray(handlerIDs);

  if (Platform.OS === 'web') {
    return handlerIDs.map(({
      current
    }) => current).filter(handle => handle);
  } // converts handler string IDs into their numeric tags


  return handlerIDs.map(handlerID => {
    var _handlerID$current;

    return handlerIDToTag[handlerID] || ((_handlerID$current = handlerID.current) === null || _handlerID$current === void 0 ? void 0 : _handlerID$current.handlerTag) || -1;
  }).filter(handlerTag => handlerTag > 0);
}

export function findNodeHandle(node) {
  if (Platform.OS === 'web') {
    return node;
  }

  return findNodeHandleRN(node);
}
let flushOperationsScheduled = false;
export function scheduleFlushOperations() {
  if (!flushOperationsScheduled) {
    flushOperationsScheduled = true;
    ghQueueMicrotask(() => {
      RNGestureHandlerModule.flushOperations();
      flushOperationsScheduled = false;
    });
  }
}
//# sourceMappingURL=gestureHandlerCommon.js.map