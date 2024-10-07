import { EventTarget } from 'event-target-shim/index';
import MediaStreamTrack, { MediaStreamTrackInfo } from './MediaStreamTrack';
import MediaStreamTrackEvent from './MediaStreamTrackEvent';
declare type MediaStreamEventMap = {
    addtrack: MediaStreamTrackEvent<'addtrack'>;
    removetrack: MediaStreamTrackEvent<'removetrack'>;
};
export default class MediaStream extends EventTarget<MediaStreamEventMap> {
    _tracks: MediaStreamTrack[];
    _id: string;
    /**
     * The identifier of this MediaStream unique within the associated
     * WebRTCModule instance. As the id of a remote MediaStream instance is unique
     * only within the associated RTCPeerConnection, it is not sufficiently unique
     * to identify this MediaStream across multiple RTCPeerConnections and to
     * unambiguously differentiate it from a local MediaStream instance not added
     * to an RTCPeerConnection.
     */
    _reactTag: string;
    /**
     * A MediaStream can be constructed in several ways, depending on the parameters
     * that are passed here.
     *
     * - undefined: just a new stream, with no tracks.
     * - MediaStream instance: a new stream, with a copy of the tracks of the passed stream.
     * - Array of MediaStreamTrack: a new stream with a copy of the tracks in the array.
     * - object: a new stream instance, represented by the passed info object, this is always
     *   done internally, when the stream is first created in native and the JS wrapper is
     *   built afterwards.
     */
    constructor(arg?: MediaStream | MediaStreamTrack[] | {
        streamId: string;
        streamReactTag: string;
        tracks: MediaStreamTrackInfo[];
    });
    get id(): string;
    get active(): boolean;
    addTrack(track: MediaStreamTrack): void;
    removeTrack(track: MediaStreamTrack): void;
    getTracks(): MediaStreamTrack[];
    getTrackById(trackId: any): MediaStreamTrack | undefined;
    getAudioTracks(): MediaStreamTrack[];
    getVideoTracks(): MediaStreamTrack[];
    clone(): never;
    toURL(): string;
    release(releaseTracks?: boolean): void;
}
export {};
