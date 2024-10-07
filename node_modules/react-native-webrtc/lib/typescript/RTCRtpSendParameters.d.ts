import RTCRtpEncodingParameters, { RTCRtpEncodingParametersInit } from './RTCRtpEncodingParameters';
import RTCRtpParameters, { RTCRtpParametersInit } from './RTCRtpParameters';
declare type DegradationPreferenceType = 'maintain-framerate' | 'maintain-resolution' | 'balanced' | 'disabled';
export interface RTCRtpSendParametersInit extends RTCRtpParametersInit {
    transactionId: string;
    encodings: RTCRtpEncodingParametersInit[];
    degradationPreference?: string;
}
export default class RTCRtpSendParameters extends RTCRtpParameters {
    readonly transactionId: string;
    readonly encodings: RTCRtpEncodingParameters[];
    degradationPreference: DegradationPreferenceType | null;
    constructor(init: RTCRtpSendParametersInit);
    toJSON(): RTCRtpSendParametersInit;
}
export {};
