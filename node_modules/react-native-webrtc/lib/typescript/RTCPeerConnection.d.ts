import { EventTarget, Event } from 'event-target-shim/index';
import MediaStream from './MediaStream';
import MediaStreamTrack from './MediaStreamTrack';
import RTCDataChannel from './RTCDataChannel';
import RTCDataChannelEvent from './RTCDataChannelEvent';
import RTCIceCandidateEvent from './RTCIceCandidateEvent';
import RTCRtpReceiver from './RTCRtpReceiver';
import RTCRtpSender from './RTCRtpSender';
import RTCRtpTransceiver from './RTCRtpTransceiver';
import RTCSessionDescription, { RTCSessionDescriptionInit } from './RTCSessionDescription';
import RTCTrackEvent from './RTCTrackEvent';
declare type RTCSignalingState = 'stable' | 'have-local-offer' | 'have-remote-offer' | 'have-local-pranswer' | 'have-remote-pranswer' | 'closed';
declare type RTCIceGatheringState = 'new' | 'gathering' | 'complete';
declare type RTCPeerConnectionState = 'new' | 'connecting' | 'connected' | 'disconnected' | 'failed' | 'closed';
declare type RTCIceConnectionState = 'new' | 'checking' | 'connected' | 'completed' | 'failed' | 'disconnected' | 'closed';
declare type RTCDataChannelInit = {
    ordered?: boolean;
    maxPacketLifeTime?: number;
    maxRetransmits?: number;
    protocol?: string;
    negotiated?: boolean;
    id?: number;
};
declare type RTCIceServer = {
    credential?: string;
    url?: string;
    urls?: string | string[];
    username?: string;
};
declare type RTCConfiguration = {
    bundlePolicy?: 'balanced' | 'max-compat' | 'max-bundle';
    iceCandidatePoolSize?: number;
    iceServers?: RTCIceServer[];
    iceTransportPolicy?: 'all' | 'relay';
    rtcpMuxPolicy?: 'negotiate' | 'require';
};
declare type RTCPeerConnectionEventMap = {
    connectionstatechange: Event<'connectionstatechange'>;
    icecandidate: RTCIceCandidateEvent<'icecandidate'>;
    icecandidateerror: RTCIceCandidateEvent<'icecandidateerror'>;
    iceconnectionstatechange: Event<'iceconnectionstatechange'>;
    icegatheringstatechange: Event<'icegatheringstatechange'>;
    negotiationneeded: Event<'negotiationneeded'>;
    signalingstatechange: Event<'signalingstatechange'>;
    datachannel: RTCDataChannelEvent<'datachannel'>;
    track: RTCTrackEvent<'track'>;
    error: Event<'error'>;
};
export default class RTCPeerConnection extends EventTarget<RTCPeerConnectionEventMap> {
    localDescription: RTCSessionDescription | null;
    remoteDescription: RTCSessionDescription | null;
    signalingState: RTCSignalingState;
    iceGatheringState: RTCIceGatheringState;
    connectionState: RTCPeerConnectionState;
    iceConnectionState: RTCIceConnectionState;
    _pcId: number;
    _transceivers: {
        order: number;
        transceiver: RTCRtpTransceiver;
    }[];
    _remoteStreams: Map<string, MediaStream>;
    _pendingTrackEvents: any[];
    constructor(configuration?: RTCConfiguration);
    createOffer(options: any): Promise<any>;
    createAnswer(): Promise<any>;
    setConfiguration(configuration: any): void;
    setLocalDescription(sessionDescription?: RTCSessionDescription | RTCSessionDescriptionInit): Promise<void>;
    setRemoteDescription(sessionDescription: RTCSessionDescription | RTCSessionDescriptionInit): Promise<void>;
    addIceCandidate(candidate: any): Promise<void>;
    /**
     * @brief Adds a new track to the {@link RTCPeerConnection},
     * and indicates that it is contained in the specified {@link MediaStream}s.
     * This method has to be synchronous as the W3C API expects a track to be returned
     * @param {MediaStreamTrack} track The track to be added
     * @param {...MediaStream} streams One or more {@link MediaStream}s the track needs to be added to
     * https://w3c.github.io/webrtc-pc/#dom-rtcpeerconnection-addtrack
     */
    addTrack(track: MediaStreamTrack, ...streams: MediaStream[]): RTCRtpSender;
    addTransceiver(source: 'audio' | 'video' | MediaStreamTrack, init: any): RTCRtpTransceiver;
    removeTrack(sender: RTCRtpSender): void;
    getStats(selector?: MediaStreamTrack): Promise<any>;
    getTransceivers(): RTCRtpTransceiver[];
    getSenders(): RTCRtpSender[];
    getReceivers(): RTCRtpReceiver[];
    close(): void;
    restartIce(): void;
    _registerEvents(): void;
    /**
     * Creates a new RTCDataChannel object with the given label. The
     * RTCDataChannelInit dictionary can be used to configure properties of the
     * underlying channel such as data reliability.
     *
     * @param {string} label - the value with which the label attribute of the new
     * instance is to be initialized
     * @param {RTCDataChannelInit} dataChannelDict - an optional dictionary of
     * values with which to initialize corresponding attributes of the new
     * instance such as id
     */
    createDataChannel(label: string, dataChannelDict?: RTCDataChannelInit): RTCDataChannel;
    /**
     * Check whether a media stream track exists already in a sender.
     * See https://w3c.github.io/webrtc-pc/#dom-rtcpeerconnection-addtrack for more information
     */
    _trackExists(track: MediaStreamTrack): boolean;
    /**
     * Updates transceivers after offer/answer updates if necessary.
     */
    _updateTransceivers(transceiverUpdates: any, removeStopped?: boolean): void;
    /**
     * Inserts transceiver into the transceiver array in the order they are created (timestamp).
     * @param order an index that refers to when it it was created relatively.
     * @param transceiver the transceiver object to be inserted.
     */
    _insertTransceiverSorted(order: number, transceiver: RTCRtpTransceiver): void;
}
export {};
