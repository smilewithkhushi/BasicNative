interface RTCIceCandidateInfo {
    candidate?: string;
    sdpMLineIndex?: number | null;
    sdpMid?: string | null;
}
export default class RTCIceCandidate {
    candidate: string;
    sdpMLineIndex?: number | null;
    sdpMid?: string | null;
    constructor({ candidate, sdpMLineIndex, sdpMid }: RTCIceCandidateInfo);
    toJSON(): {
        candidate: string;
        sdpMLineIndex: number | null | undefined;
        sdpMid: string | null | undefined;
    };
}
export {};
