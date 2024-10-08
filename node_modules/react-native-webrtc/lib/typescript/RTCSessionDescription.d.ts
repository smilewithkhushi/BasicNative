export interface RTCSessionDescriptionInit {
    sdp: string;
    type: string | null;
}
export default class RTCSessionDescription {
    _sdp: string;
    _type: string | null;
    constructor(info?: RTCSessionDescriptionInit);
    get sdp(): string;
    get type(): string | null;
    toJSON(): RTCSessionDescriptionInit;
}
