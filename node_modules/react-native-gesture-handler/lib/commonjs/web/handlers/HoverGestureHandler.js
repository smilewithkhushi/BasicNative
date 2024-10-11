"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _State = require("../../State");

var _GestureHandlerOrchestrator = _interopRequireDefault(require("../tools/GestureHandlerOrchestrator"));

var _GestureHandler = _interopRequireDefault(require("./GestureHandler"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class HoverGestureHandler extends _GestureHandler.default {
  init(ref, propsRef) {
    super.init(ref, propsRef);
  }

  updateGestureConfig({
    enabled = true,
    ...props
  }) {
    super.updateGestureConfig({
      enabled: enabled,
      ...props
    });
  }

  onPointerMoveOver(event) {
    _GestureHandlerOrchestrator.default.getInstance().recordHandlerIfNotPresent(this);

    this.tracker.addToTracker(event);
    super.onPointerMoveOver(event);

    if (this.getState() === _State.State.UNDETERMINED) {
      this.begin();
      this.activate();
    }
  }

  onPointerMoveOut(event) {
    this.tracker.addToTracker(event);
    super.onPointerMoveOut(event);
    this.end();
  }

  onPointerMove(event) {
    this.tracker.track(event);
    super.onPointerMove(event);
  }

  onPointerCancel(event) {
    super.onPointerCancel(event);
    this.reset();
  }

}

exports.default = HoverGestureHandler;
//# sourceMappingURL=HoverGestureHandler.js.map