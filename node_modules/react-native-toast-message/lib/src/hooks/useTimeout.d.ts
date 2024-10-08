declare function useTimeout<CbParams>(cb: (params?: CbParams) => void, delayMs?: number): {
    startTimer: () => void;
    clearTimer: () => void;
    isActive: boolean;
};
export { useTimeout };
