export interface RTCRtcpParametersInit {
    cname: string;
    reducedSize: boolean;
}
export default class RTCRtcpParameters {
    readonly cname: string;
    readonly reducedSize: boolean;
    constructor(init: RTCRtcpParametersInit);
    toJSON(): RTCRtcpParametersInit;
}
