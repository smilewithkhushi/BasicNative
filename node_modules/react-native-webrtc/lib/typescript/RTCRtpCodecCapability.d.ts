export default class RTCRtpCodecCapability {
    _mimeType: string;
    constructor(init: {
        mimeType: string;
    });
    get mimeType(): string;
}
