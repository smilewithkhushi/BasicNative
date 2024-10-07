export default class Logger {
    static ROOT_PREFIX: string;
    private _debug;
    private _info;
    private _warn;
    private _error;
    static enable(ns: string): void;
    constructor(prefix: string);
    debug(msg: string): void;
    info(msg: string): void;
    warn(msg: string): void;
    error(msg: string, err?: Error): void;
}
