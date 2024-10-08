import { State } from '../../State';
import GestureHandlerOrchestrator from '../tools/GestureHandlerOrchestrator';
import GestureHandler from './GestureHandler';
export default class HoverGestureHandler extends GestureHandler {
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
    GestureHandlerOrchestrator.getInstance().recordHandlerIfNotPresent(this);
    this.tracker.addToTracker(event);
    super.onPointerMoveOver(event);

    if (this.getState() === State.UNDETERMINED) {
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
//# sourceMappingURL=HoverGestureHandler.js.map