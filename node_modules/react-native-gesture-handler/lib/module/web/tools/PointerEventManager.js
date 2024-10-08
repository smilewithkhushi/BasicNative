function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import EventManager from './EventManager';
import { MouseButton } from '../../handlers/gestureHandlerCommon';
import { EventTypes } from '../interfaces';
import { PointerTypeMapping, isPointerInBounds } from '../utils';
import { PointerType } from '../../PointerType';
const POINTER_CAPTURE_EXCLUDE_LIST = new Set(['SELECT', 'INPUT']);
const PointerTypes = {
  Touch: 'touch',
  Stylus: 'pen'
};
export default class PointerEventManager extends EventManager {
  constructor(view) {
    super(view);

    _defineProperty(this, "trackedPointers", new Set());

    _defineProperty(this, "mouseButtonsMapper", new Map());

    _defineProperty(this, "lastPosition", void 0);

    _defineProperty(this, "pointerDownCallback", event => {
      if (event.pointerType === PointerTypes.Touch) {
        return;
      }

      if (!isPointerInBounds(this.view, {
        x: event.clientX,
        y: event.clientY
      })) {
        return;
      }

      const adaptedEvent = this.mapEvent(event, EventTypes.DOWN);
      const target = event.target;

      if (!POINTER_CAPTURE_EXCLUDE_LIST.has(target.tagName)) {
        target.setPointerCapture(adaptedEvent.pointerId);
      }

      this.markAsInBounds(adaptedEvent.pointerId);
      this.trackedPointers.add(adaptedEvent.pointerId);

      if (++this.activePointersCounter > 1) {
        adaptedEvent.eventType = EventTypes.ADDITIONAL_POINTER_DOWN;
        this.onPointerAdd(adaptedEvent);
      } else {
        this.onPointerDown(adaptedEvent);
      }
    });

    _defineProperty(this, "pointerUpCallback", event => {
      if (event.pointerType === PointerTypes.Touch) {
        return;
      } // When we call reset on gesture handlers, it also resets their event managers
      // In some handlers (like RotationGestureHandler) reset is called before all pointers leave view
      // This means, that activePointersCounter will be set to 0, while there are still remaining pointers on view
      // Removing them will end in activePointersCounter going below 0, therefore handlers won't behave properly


      if (this.activePointersCounter === 0) {
        return;
      }

      const adaptedEvent = this.mapEvent(event, EventTypes.UP);
      const target = event.target;

      if (!POINTER_CAPTURE_EXCLUDE_LIST.has(target.tagName)) {
        target.releasePointerCapture(adaptedEvent.pointerId);
      }

      this.markAsOutOfBounds(adaptedEvent.pointerId);
      this.trackedPointers.delete(adaptedEvent.pointerId);

      if (--this.activePointersCounter > 0) {
        adaptedEvent.eventType = EventTypes.ADDITIONAL_POINTER_UP;
        this.onPointerRemove(adaptedEvent);
      } else {
        this.onPointerUp(adaptedEvent);
      }
    });

    _defineProperty(this, "pointerMoveCallback", event => {
      if (event.pointerType === PointerTypes.Touch) {
        return;
      } // Stylus triggers `pointermove` event when it detects changes in pressure. Since it is very sensitive to those changes,
      // it constantly sends events, even though there was no change in position. To fix that we check whether
      // pointer has actually moved and if not, we do not send event.


      if (event.pointerType === PointerTypes.Stylus && event.x === this.lastPosition.x && event.y === this.lastPosition.y) {
        return;
      }

      const adaptedEvent = this.mapEvent(event, EventTypes.MOVE);
      const target = event.target; // You may be wondering why are we setting pointer capture here, when we
      // already set it in `pointerdown` handler. Well, that's a great question,
      // for which I don't have an answer. Specification (https://www.w3.org/TR/pointerevents2/#dom-element-setpointercapture)
      // says that the requirement for `setPointerCapture` to work is that pointer
      // must be in 'active buttons state`, otherwise it will fail silently, which
      // is lovely. Obviously, when `pointerdown` is fired, one of the buttons
      // (when using mouse) is pressed, but that doesn't mean that `setPointerCapture`
      // will succeed, for some reason. Since it fails silently, we don't actually know
      // if it worked or not (there's `gotpointercapture` event, but the complexity of
      // incorporating it here seems stupid), so we just call it again here, every time
      // pointer moves until it succeeds.
      // God, I do love web development.

      if (!target.hasPointerCapture(event.pointerId) && !POINTER_CAPTURE_EXCLUDE_LIST.has(target.tagName)) {
        target.setPointerCapture(event.pointerId);
      }

      const inBounds = isPointerInBounds(this.view, {
        x: adaptedEvent.x,
        y: adaptedEvent.y
      });
      const pointerIndex = this.pointersInBounds.indexOf(adaptedEvent.pointerId);

      if (inBounds) {
        if (pointerIndex < 0) {
          adaptedEvent.eventType = EventTypes.ENTER;
          this.onPointerEnter(adaptedEvent);
          this.markAsInBounds(adaptedEvent.pointerId);
        } else {
          this.onPointerMove(adaptedEvent);
        }
      } else {
        if (pointerIndex >= 0) {
          adaptedEvent.eventType = EventTypes.LEAVE;
          this.onPointerLeave(adaptedEvent);
          this.markAsOutOfBounds(adaptedEvent.pointerId);
        } else {
          this.onPointerOutOfBounds(adaptedEvent);
        }
      }

      this.lastPosition.x = event.x;
      this.lastPosition.y = event.y;
    });

    _defineProperty(this, "pointerCancelCallback", event => {
      if (event.pointerType === PointerTypes.Touch) {
        return;
      }

      const adaptedEvent = this.mapEvent(event, EventTypes.CANCEL);
      this.onPointerCancel(adaptedEvent);
      this.markAsOutOfBounds(adaptedEvent.pointerId);
      this.activePointersCounter = 0;
      this.trackedPointers.clear();
    });

    _defineProperty(this, "pointerEnterCallback", event => {
      if (event.pointerType === PointerTypes.Touch) {
        return;
      }

      const adaptedEvent = this.mapEvent(event, EventTypes.ENTER);
      this.onPointerMoveOver(adaptedEvent);
    });

    _defineProperty(this, "pointerLeaveCallback", event => {
      if (event.pointerType === PointerTypes.Touch) {
        return;
      }

      const adaptedEvent = this.mapEvent(event, EventTypes.LEAVE);
      this.onPointerMoveOut(adaptedEvent);
    });

    _defineProperty(this, "lostPointerCaptureCallback", event => {
      const adaptedEvent = this.mapEvent(event, EventTypes.CANCEL);

      if (this.trackedPointers.has(adaptedEvent.pointerId)) {
        // in some cases the `pointerup` event is not fired, but `lostpointercapture` is
        // we simulate the `pointercancel` event here to make sure the gesture handler stops tracking it
        this.onPointerCancel(adaptedEvent);
        this.activePointersCounter = 0;
        this.trackedPointers.clear();
      }
    });

    this.mouseButtonsMapper.set(0, MouseButton.LEFT);
    this.mouseButtonsMapper.set(1, MouseButton.MIDDLE);
    this.mouseButtonsMapper.set(2, MouseButton.RIGHT);
    this.mouseButtonsMapper.set(3, MouseButton.BUTTON_4);
    this.mouseButtonsMapper.set(4, MouseButton.BUTTON_5);
    this.lastPosition = {
      x: -Infinity,
      y: -Infinity
    };
  }

  registerListeners() {
    this.view.addEventListener('pointerdown', this.pointerDownCallback);
    this.view.addEventListener('pointerup', this.pointerUpCallback);
    this.view.addEventListener('pointermove', this.pointerMoveCallback);
    this.view.addEventListener('pointercancel', this.pointerCancelCallback); // onPointerEnter and onPointerLeave are triggered by a custom logic responsible for
    // handling shouldCancelWhenOutside flag, and are unreliable unless the pointer is down.
    // We therefore use pointerenter and pointerleave events to handle the hover gesture,
    // mapping them to onPointerMoveOver and onPointerMoveOut respectively.

    this.view.addEventListener('pointerenter', this.pointerEnterCallback);
    this.view.addEventListener('pointerleave', this.pointerLeaveCallback);
    this.view.addEventListener('lostpointercapture', this.lostPointerCaptureCallback);
  }

  unregisterListeners() {
    this.view.removeEventListener('pointerdown', this.pointerDownCallback);
    this.view.removeEventListener('pointerup', this.pointerUpCallback);
    this.view.removeEventListener('pointermove', this.pointerMoveCallback);
    this.view.removeEventListener('pointercancel', this.pointerCancelCallback);
    this.view.removeEventListener('pointerenter', this.pointerEnterCallback);
    this.view.removeEventListener('pointerleave', this.pointerLeaveCallback);
    this.view.removeEventListener('lostpointercapture', this.lostPointerCaptureCallback);
  }

  mapEvent(event, eventType) {
    var _PointerTypeMapping$g;

    return {
      x: event.clientX,
      y: event.clientY,
      offsetX: event.offsetX,
      offsetY: event.offsetY,
      pointerId: event.pointerId,
      eventType: eventType,
      pointerType: (_PointerTypeMapping$g = PointerTypeMapping.get(event.pointerType)) !== null && _PointerTypeMapping$g !== void 0 ? _PointerTypeMapping$g : PointerType.OTHER,
      button: this.mouseButtonsMapper.get(event.button),
      time: event.timeStamp
    };
  }

  resetManager() {
    super.resetManager();
    this.trackedPointers.clear();
  }

}
//# sourceMappingURL=PointerEventManager.js.map