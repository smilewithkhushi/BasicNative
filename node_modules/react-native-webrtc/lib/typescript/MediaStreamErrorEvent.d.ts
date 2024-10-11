import type MediaStreamError from './MediaStreamError';
export default class MediaStreamErrorEvent {
    type: string;
    error?: MediaStreamError;
    constructor(type: any, eventInitDict: any);
}
