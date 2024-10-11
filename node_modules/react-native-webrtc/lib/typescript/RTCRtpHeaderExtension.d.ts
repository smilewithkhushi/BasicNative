export interface RTCRtpHeaderExtensionInit {
    id: number;
    uri: string;
    encrypted: boolean;
}
export default class RTCRtpHeaderExtension {
    readonly id: number;
    readonly uri: string;
    readonly encrypted: boolean;
    constructor(init: RTCRtpHeaderExtensionInit);
    toJSON(): RTCRtpHeaderExtensionInit;
}
