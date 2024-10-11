import { Event } from 'event-target-shim/index';
import MediaStream from './MediaStream';
import type MediaStreamTrack from './MediaStreamTrack';
import RTCRtpReceiver from './RTCRtpReceiver';
import RTCRtpTransceiver from './RTCRtpTransceiver';
declare type TRACK_EVENTS = 'track';
interface IRTCTrackEventInitDict extends Event.EventInit {
    streams: MediaStream[];
    transceiver: RTCRtpTransceiver;
}
/**
 * @eventClass
 * This event is fired whenever the Track is changed in PeerConnection.
 * @param {TRACK_EVENTS} type - The type of event.
 * @param {IRTCTrackEventInitDict} eventInitDict - The event init properties.
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/RTCPeerConnection/track_event MDN} for details.
 */
export default class RTCTrackEvent<TEventType extends TRACK_EVENTS> extends Event<TEventType> {
    /** @eventProperty */
    readonly streams: MediaStream[];
    /** @eventProperty */
    readonly transceiver: RTCRtpTransceiver;
    /** @eventProperty */
    readonly receiver: RTCRtpReceiver | null;
    /** @eventProperty */
    readonly track: MediaStreamTrack | null;
    constructor(type: TEventType, eventInitDict: IRTCTrackEventInitDict);
}
export {};
