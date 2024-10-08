import { Touchable } from 'react-native';
const PRESS_RETENTION_OFFSET = {
  top: 20,
  left: 20,
  right: 20,
  bottom: 30
};
// @ts-expect-error: Mixin is not typed
const {
  Mixin
} = Touchable;
const {
  touchableHandleStartShouldSetResponder,
  touchableHandleResponderTerminationRequest,
  touchableHandleResponderGrant,
  touchableHandleResponderMove,
  touchableHandleResponderRelease,
  touchableHandleResponderTerminate,
  touchableGetInitialState
} = Mixin;
const SvgTouchableMixin = {
  ...Mixin,
  touchableHandleStartShouldSetResponder(e) {
    const {
      onStartShouldSetResponder
    } = this.props;
    if (onStartShouldSetResponder) {
      return onStartShouldSetResponder(e);
    } else {
      return touchableHandleStartShouldSetResponder.call(this, e);
    }
  },
  touchableHandleResponderTerminationRequest(e) {
    const {
      onResponderTerminationRequest
    } = this.props;
    if (onResponderTerminationRequest) {
      return onResponderTerminationRequest(e);
    } else {
      return touchableHandleResponderTerminationRequest.call(this, e);
    }
  },
  touchableHandleResponderGrant(e) {
    const {
      onResponderGrant
    } = this.props;
    if (onResponderGrant) {
      return onResponderGrant(e);
    } else {
      return touchableHandleResponderGrant.call(this, e);
    }
  },
  touchableHandleResponderMove(e) {
    const {
      onResponderMove
    } = this.props;
    if (onResponderMove) {
      return onResponderMove(e);
    } else {
      return touchableHandleResponderMove.call(this, e);
    }
  },
  touchableHandleResponderRelease(e) {
    const {
      onResponderRelease
    } = this.props;
    if (onResponderRelease) {
      return onResponderRelease(e);
    } else {
      return touchableHandleResponderRelease.call(this, e);
    }
  },
  touchableHandleResponderTerminate(e) {
    const {
      onResponderTerminate
    } = this.props;
    if (onResponderTerminate) {
      return onResponderTerminate(e);
    } else {
      return touchableHandleResponderTerminate.call(this, e);
    }
  },
  touchableHandlePress(e) {
    const {
      onPress
    } = this.props;
    onPress && onPress(e);
  },
  touchableHandleActivePressIn(e) {
    const {
      onPressIn
    } = this.props;
    onPressIn && onPressIn(e);
  },
  touchableHandleActivePressOut(e) {
    const {
      onPressOut
    } = this.props;
    onPressOut && onPressOut(e);
  },
  touchableHandleLongPress(e) {
    const {
      onLongPress
    } = this.props;
    onLongPress && onLongPress(e);
  },
  touchableGetPressRectOffset() {
    const {
      pressRetentionOffset
    } = this.props;
    return pressRetentionOffset || PRESS_RETENTION_OFFSET;
  },
  touchableGetHitSlop() {
    const {
      hitSlop
    } = this.props;
    return hitSlop;
  },
  touchableGetHighlightDelayMS() {
    const {
      delayPressIn
    } = this.props;
    return delayPressIn || 0;
  },
  touchableGetLongPressDelayMS() {
    const {
      delayLongPress
    } = this.props;
    return delayLongPress === 0 ? 0 : delayLongPress || 500;
  },
  touchableGetPressOutDelayMS() {
    const {
      delayPressOut
    } = this.props;
    return delayPressOut || 0;
  }
};
const touchKeys = Object.keys(SvgTouchableMixin);
const touchVals = touchKeys.map(key => SvgTouchableMixin[key]);
const numTouchKeys = touchKeys.length;
export default (target => {
  for (let i = 0; i < numTouchKeys; i++) {
    const key = touchKeys[i];
    const val = touchVals[i];
    if (typeof val === 'function') {
      target[key] = val.bind(target);
    } else {
      target[key] = val;
    }
  }
  target.state = touchableGetInitialState();
});
//# sourceMappingURL=SvgTouchableMixin.js.map