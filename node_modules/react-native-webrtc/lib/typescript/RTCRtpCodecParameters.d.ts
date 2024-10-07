export interface RTCRtpCodecParametersInit {
    payloadType: number;
    clockRate: number;
    mimeType: string;
    channels?: number;
    sdpFmtpLine?: string;
}
export default class RTCRtpCodecParameters {
    readonly payloadType: number;
    readonly clockRate: number;
    readonly mimeType: string;
    readonly channels: number | null;
    readonly sdpFmtpLine: string | null;
    constructor(init: RTCRtpCodecParametersInit);
    toJSON(): RTCRtpCodecParametersInit;
}
