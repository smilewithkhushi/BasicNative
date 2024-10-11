import RTCRtcpParameters, { RTCRtcpParametersInit } from './RTCRtcpParameters';
import RTCRtpCodecParameters, { RTCRtpCodecParametersInit } from './RTCRtpCodecParameters';
import RTCRtpHeaderExtension, { RTCRtpHeaderExtensionInit } from './RTCRtpHeaderExtension';
export interface RTCRtpParametersInit {
    codecs: RTCRtpCodecParametersInit[];
    headerExtensions: RTCRtpHeaderExtensionInit[];
    rtcp: RTCRtcpParametersInit;
}
export default class RTCRtpParameters {
    readonly codecs: RTCRtpCodecParameters[];
    readonly headerExtensions: RTCRtpHeaderExtension[];
    readonly rtcp: RTCRtcpParameters;
    constructor(init: RTCRtpParametersInit);
    toJSON(): RTCRtpParametersInit;
}
