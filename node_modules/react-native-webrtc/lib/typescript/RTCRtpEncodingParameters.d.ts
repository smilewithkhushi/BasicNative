export interface RTCRtpEncodingParametersInit {
    active: boolean;
    rid?: string;
    maxFramerate?: number;
    maxBitrate?: number;
    scaleResolutionDownBy?: number;
}
export default class RTCRtpEncodingParameters {
    active: boolean;
    _rid: string | null;
    _maxFramerate: number | null;
    _maxBitrate: number | null;
    _scaleResolutionDownBy: number | null;
    constructor(init: RTCRtpEncodingParametersInit);
    get rid(): string | null;
    get maxFramerate(): number | null;
    set maxFramerate(framerate: number | null);
    get maxBitrate(): number | null;
    set maxBitrate(bitrate: number | null);
    get scaleResolutionDownBy(): number | null;
    set scaleResolutionDownBy(resolutionScale: number | null);
    toJSON(): RTCRtpEncodingParametersInit;
}
