/// <reference types="react" />
import { ReactChildren } from '../types';
export declare type LoggerContextType = {
    log: (...args: unknown[]) => void;
};
export declare type LoggerProviderProps = {
    children: ReactChildren;
    enableLogs?: boolean;
};
declare function LoggerProvider({ children, enableLogs }: LoggerProviderProps): JSX.Element;
declare function useLogger(): LoggerContextType;
export { LoggerProvider, useLogger };
