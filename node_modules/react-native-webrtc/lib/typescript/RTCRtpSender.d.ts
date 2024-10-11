import MediaStreamTrack from './MediaStreamTrack';
import RTCRtpCapabilities from './RTCRtpCapabilities';
import RTCRtpSendParameters, { RTCRtpSendParametersInit } from './RTCRtpSendParameters';
export default class RTCRtpSender {
    _id: string;
    _track: MediaStreamTrack | null;
    _peerConnectionId: number;
    _rtpParameters: RTCRtpSendParameters;
    constructor(info: {
        peerConnectionId: number;
        id: string;
        track?: MediaStreamTrack;
        rtpParameters: RTCRtpSendParametersInit;
    });
    replaceTrack(track: MediaStreamTrack | null): Promise<void>;
    static getCapabilities(kind: 'audio' | 'video'): RTCRtpCapabilities;
    getParameters(): RTCRtpSendParameters;
    setParameters(parameters: RTCRtpSendParameters): Promise<void>;
    getStats(): any;
    get track(): MediaStreamTrack | null;
    get id(): string;
}
