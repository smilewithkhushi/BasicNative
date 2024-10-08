"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _interfaces = require("../interfaces");

var _EventManager = _interopRequireDefault(require("./EventManager"));

var _utils = require("../utils");

var _PointerType = require("../../PointerType");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class TouchEventManager extends _EventManager.default {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "touchStartCallback", event => {
      for (let i = 0; i < event.changedTouches.length; ++i) {
        const adaptedEvent = this.mapEvent(event, _interfaces.EventTypes.DOWN, i, _interfaces.TouchEventType.DOWN); // Here we skip stylus, because in case of anything different than touch we want to handle it by using PointerEvents
        // If we leave stylus to send touch events, handlers will receive every action twice

        if (!(0, _utils.isPointerInBounds)(this.view, {
          x: adaptedEvent.x,
          y: adaptedEvent.y
        }) || //@ts-ignore touchType field does exist
        event.changedTouches[i].touchType === 'stylus') {
          continue;
        }

        this.markAsInBounds(adaptedEvent.pointerId);

        if (++this.activePointersCounter > 1) {
          adaptedEvent.eventType = _interfaces.EventTypes.ADDITIONAL_POINTER_DOWN;
          this.onPointerAdd(adaptedEvent);
        } else {
          this.onPointerDown(adaptedEvent);
        }
      }
    });

    _defineProperty(this, "touchMoveCallback", event => {
      for (let i = 0; i < event.changedTouches.length; ++i) {
        const adaptedEvent = this.mapEvent(event, _interfaces.EventTypes.MOVE, i, _interfaces.TouchEventType.MOVE); //@ts-ignore touchType field does exist

        if (event.changedTouches[i].touchType === 'stylus') {
          continue;
        }

        const inBounds = (0, _utils.isPointerInBounds)(this.view, {
          x: adaptedEvent.x,
          y: adaptedEvent.y
        });
        const pointerIndex = this.pointersInBounds.indexOf(adaptedEvent.pointerId);

        if (inBounds) {
          if (pointerIndex < 0) {
            adaptedEvent.eventType = _interfaces.EventTypes.ENTER;
            this.onPointerEnter(adaptedEvent);
            this.markAsInBounds(adaptedEvent.pointerId);
          } else {
            this.onPointerMove(adaptedEvent);
          }
        } else {
          if (pointerIndex >= 0) {
            adaptedEvent.eventType = _interfaces.EventTypes.LEAVE;
            this.onPointerLeave(adaptedEvent);
            this.markAsOutOfBounds(adaptedEvent.pointerId);
          } else {
            this.onPointerOutOfBounds(adaptedEvent);
          }
        }
      }
    });

    _defineProperty(this, "touchEndCallback", event => {
      for (let i = 0; i < event.changedTouches.length; ++i) {
        // When we call reset on gesture handlers, it also resets their event managers
        // In some handlers (like RotationGestureHandler) reset is called before all pointers leave view
        // This means, that activePointersCounter will be set to 0, while there are still remaining pointers on view
        // Removing them will end in activePointersCounter going below 0, therefore handlers won't behave properly
        if (this.activePointersCounter === 0) {
          break;
        } //@ts-ignore touchType field does exist


        if (event.changedTouches[i].touchType === 'stylus') {
          continue;
        }

        const adaptedEvent = this.mapEvent(event, _interfaces.EventTypes.UP, i, _interfaces.TouchEventType.UP);
        this.markAsOutOfBounds(adaptedEvent.pointerId);

        if (--this.activePointersCounter > 0) {
          adaptedEvent.eventType = _interfaces.EventTypes.ADDITIONAL_POINTER_UP;
          this.onPointerRemove(adaptedEvent);
        } else {
          this.onPointerUp(adaptedEvent);
        }
      }
    });

    _defineProperty(this, "touchCancelCallback", event => {
      for (let i = 0; i < event.changedTouches.length; ++i) {
        const adaptedEvent = this.mapEvent(event, _interfaces.EventTypes.CANCEL, i, _interfaces.TouchEventType.CANCELLED); //@ts-ignore touchType field does exist

        if (event.changedTouches[i].touchType === 'stylus') {
          continue;
        }

        this.onPointerCancel(adaptedEvent);
        this.markAsOutOfBounds(adaptedEvent.pointerId);
        this.activePointersCounter = 0;
      }
    });
  }

  registerListeners() {
    this.view.addEventListener('touchstart', this.touchStartCallback);
    this.view.addEventListener('touchmove', this.touchMoveCallback);
    this.view.addEventListener('touchend', this.touchEndCallback);
    this.view.addEventListener('touchcancel', this.touchCancelCallback);
  }

  unregisterListeners() {
    this.view.removeEventListener('touchstart', this.touchStartCallback);
    this.view.removeEventListener('touchmove', this.touchMoveCallback);
    this.view.removeEventListener('touchend', this.touchEndCallback);
    this.view.removeEventListener('touchcancel', this.touchCancelCallback);
  }

  mapEvent(event, eventType, index, touchEventType) {
    const rect = this.view.getBoundingClientRect();
    const clientX = event.changedTouches[index].clientX;
    const clientY = event.changedTouches[index].clientY;
    return {
      x: clientX,
      y: clientY,
      offsetX: clientX - rect.left,
      offsetY: clientY - rect.top,
      pointerId: event.changedTouches[index].identifier,
      eventType: eventType,
      pointerType: _PointerType.PointerType.TOUCH,
      time: event.timeStamp,
      allTouches: event.touches,
      changedTouches: event.changedTouches,
      touchEventType: touchEventType
    };
  }

}

exports.default = TouchEventManager;
//# sourceMappingURL=TouchEventManager.js.map