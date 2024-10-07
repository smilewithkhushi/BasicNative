import { ToastData, ToastOptions, ToastProps, ToastShowParams } from './types';
export declare const DEFAULT_DATA: ToastData;
export declare const DEFAULT_OPTIONS: Required<ToastOptions>;
export declare type UseToastParams = {
    defaultOptions: Omit<ToastProps, 'config'>;
};
export declare function useToast({ defaultOptions }: UseToastParams): {
    isVisible: boolean;
    data: ToastData;
    options: Required<ToastOptions>;
    show: (params: ToastShowParams) => void;
    hide: () => void;
};
