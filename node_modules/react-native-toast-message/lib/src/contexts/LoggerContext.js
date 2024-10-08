import React from 'react';
import { noop } from '../utils/func';
const LoggerContext = React.createContext({
    log: noop
});
function LoggerProvider({ children, enableLogs = false }) {
    const log = React.useCallback((...args) => {
        if (enableLogs) {
            // eslint-disable-next-line no-console
            console.log('Toast:', ...args);
        }
    }, [enableLogs]);
    const value = {
        log
    };
    return (<LoggerContext.Provider value={value}>{children}</LoggerContext.Provider>);
}
function useLogger() {
    const ctx = React.useContext(LoggerContext);
    return ctx;
}
export { LoggerProvider, useLogger };
