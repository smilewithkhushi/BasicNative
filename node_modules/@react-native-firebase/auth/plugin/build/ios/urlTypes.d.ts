import { ConfigPlugin, IOSConfig, ExportedConfigWithProps } from '@expo/config-plugins';
export declare const withIosCaptchaUrlTypes: ConfigPlugin;
export declare function setUrlTypesForCaptcha({ config, }: {
    config: ExportedConfigWithProps<IOSConfig.InfoPlist>;
}): ExportedConfigWithProps<IOSConfig.InfoPlist>;
