import { AdaptedEvent, EventTypes, TouchEventType } from '../interfaces';
import EventManager from './EventManager';
export default class TouchEventManager extends EventManager<HTMLElement> {
    private touchStartCallback;
    private touchMoveCallback;
    private touchEndCallback;
    private touchCancelCallback;
    registerListeners(): void;
    unregisterListeners(): void;
    protected mapEvent(event: TouchEvent, eventType: EventTypes, index: number, touchEventType: TouchEventType): AdaptedEvent;
}
