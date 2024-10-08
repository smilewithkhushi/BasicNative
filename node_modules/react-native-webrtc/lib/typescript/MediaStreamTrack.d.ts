import { EventTarget, Event } from 'event-target-shim/index';
declare type MediaStreamTrackState = 'live' | 'ended';
export declare type MediaStreamTrackInfo = {
    id: string;
    kind: string;
    remote: boolean;
    constraints: object;
    enabled: boolean;
    settings: object;
    peerConnectionId: number;
    readyState: MediaStreamTrackState;
};
declare type MediaStreamTrackEventMap = {
    ended: Event<'ended'>;
    mute: Event<'mute'>;
    unmute: Event<'unmute'>;
};
export default class MediaStreamTrack extends EventTarget<MediaStreamTrackEventMap> {
    _constraints: object;
    _enabled: boolean;
    _settings: object;
    _muted: boolean;
    _peerConnectionId: number;
    _readyState: MediaStreamTrackState;
    readonly id: string;
    readonly kind: string;
    readonly label: string;
    readonly remote: boolean;
    constructor(info: MediaStreamTrackInfo);
    get enabled(): boolean;
    set enabled(enabled: boolean);
    get muted(): boolean;
    get readyState(): string;
    stop(): void;
    /**
     * Private / custom API for switching the cameras on the fly, without the
     * need for adding / removing tracks or doing any SDP renegotiation.
     *
     * This is how the reference application (AppRTCMobile) implements camera
     * switching.
     */
    _switchCamera(): void;
    _setVideoEffect(name: string): void;
    /**
     * Internal function which is used to set the muted state on remote tracks and
     * emit the mute / unmute event.
     *
     * @param muted Whether the track should be marked as muted / unmuted.
     */
    _setMutedInternal(muted: boolean): void;
    /**
     * Custom API for setting the volume on an individual audio track.
     *
     * @param volume a gain value in the range of 0-10. defaults to 1.0
     */
    _setVolume(volume: number): void;
    applyConstraints(): never;
    clone(): never;
    getCapabilities(): never;
    getConstraints(): object;
    getSettings(): object;
    _registerEvents(): void;
    release(): void;
}
export {};
