import MediaStream from './MediaStream';
interface Constraints {
    audio?: boolean | object;
    video?: boolean | object;
}
export default function getUserMedia(constraints?: Constraints): Promise<MediaStream>;
export {};
