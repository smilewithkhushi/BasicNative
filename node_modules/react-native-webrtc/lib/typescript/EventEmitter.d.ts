export declare function setupNativeEvents(): void;
declare type EventHandler = (event: unknown) => void;
declare type Listener = unknown;
export declare function addListener(listener: Listener, eventName: string, eventHandler: EventHandler): void;
export declare function removeListener(listener: Listener): void;
export {};
