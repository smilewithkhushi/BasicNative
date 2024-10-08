import RTCRtpCodecCapability from './RTCRtpCodecCapability';
/**
 * @brief represents codec capabilities for senders and receivers.
 */
export default class RTCRtpCapabilities {
    _codecs: RTCRtpCodecCapability[];
    constructor(codecs: RTCRtpCodecCapability[]);
    get codecs(): RTCRtpCodecCapability[];
}
