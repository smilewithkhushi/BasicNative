import MediaStreamTrack from './MediaStreamTrack';
import RTCRtpCapabilities from './RTCRtpCapabilities';
import { RTCRtpParametersInit } from './RTCRtpParameters';
import RTCRtpReceiveParameters from './RTCRtpReceiveParameters';
export default class RTCRtpReceiver {
    _id: string;
    _peerConnectionId: number;
    _track: MediaStreamTrack | null;
    _rtpParameters: RTCRtpReceiveParameters;
    constructor(info: {
        peerConnectionId: number;
        id: string;
        track?: MediaStreamTrack;
        rtpParameters: RTCRtpParametersInit;
    });
    static getCapabilities(kind: 'audio' | 'video'): RTCRtpCapabilities;
    getStats(): any;
    getParameters(): RTCRtpReceiveParameters;
    get id(): string;
    get track(): MediaStreamTrack | null;
}
