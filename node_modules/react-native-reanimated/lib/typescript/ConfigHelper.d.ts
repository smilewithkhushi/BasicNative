export declare function configureProps(): void;
export declare function addWhitelistedNativeProps(props: Record<string, boolean>): void;
export declare function addWhitelistedUIProps(props: Record<string, boolean>): void;
export interface ViewConfig {
    uiViewClassName: string;
    validAttributes: Record<string, unknown>;
}
/**
 * updates UI props whitelist for given view host instance
 * this will work just once for every view name
 */
export declare function adaptViewConfig(viewConfig: ViewConfig): void;
