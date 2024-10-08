import { Permission } from 'react-native';
/**
 * Type declaration for a permissions descriptor.
 */
declare type PermissionDescriptor = {
    name: string;
};
/**
 * Class implementing a subset of W3C's Permissions API as defined by:
 * https://www.w3.org/TR/permissions/
 */
declare class Permissions {
    /**
     * Possible result values for {@link query}, in accordance with:
     * https://www.w3.org/TR/permissions/#status-of-a-permission
     */
    RESULT: {
        DENIED: string;
        GRANTED: string;
        PROMPT: string;
    };
    /**
     * This implementation only supports requesting these permissions, a subset
     * of: https://www.w3.org/TR/permissions/#permission-registry
     */
    VALID_PERMISSIONS: string[];
    _lastReq: Promise<unknown>;
    /**
     * Helper for requesting Android permissions. On Android only one permission
     * can be requested at a time (unless the multi-permission API is used,
     * but we are not using that for symmetry with the W3C API for querying)
     * so we'll queue them up.
     *
     * @param perm - The requested permission from
     * {@link PermissionsAndroid.PERMISSIONS}
     * https://facebook.github.io/react-native/docs/permissionsandroid#permissions-that-require-prompting-the-user
     */
    _requestPermissionAndroid(perm: Permission): Promise<unknown>;
    /**
     * Validates the given permission descriptor.
     */
    _validatePermissionDescriptior(permissionDesc: any): void;
    /**
     * Method for querying the status of a permission, according to:
     * https://www.w3.org/TR/permissions/#permissions-interface
     */
    query(permissionDesc: PermissionDescriptor): any;
    /**
     * Custom method NOT defined by W3C's permissions API, which allows the
     * caller to request a permission.
     */
    request(permissionDesc: PermissionDescriptor): any;
}
declare const _default: Permissions;
export default _default;
